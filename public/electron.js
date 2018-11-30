const electron = require('electron');
const { autoUpdater } = require("electron-updater")
const log = require('electron-log');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

 //-------------------------------------------------------------------
  // Logging
  // makes debugging easier 
  //-------------------------------------------------------------------
  autoUpdater.logger = log;
  autoUpdater.logger.transports.file.level = 'info';
  log.info('App starting...');

//set environment to production to remove dev tools
//process.env.NODE_ENV = 'production';

function createWindow() {
  
  mainWindow = new BrowserWindow({width: 900, height: 680});

  createDefaultWindow();
 
  mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if(isDev) 
    mainWindow.toggleDevTools();


  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // add developer tools item if not in production

  // Insert menu
  Menu.setApplicationMenu(mainMenu);

  autoUpdater.checkForUpdatesAndNotify()

  //autoUpdater.checkForUpdates();
  //autoUpdater.checkForUpdatesAndNotify()

  //Quit app when main window closed
  mainWindow.on('closed', function(){
    mainWindow = null;
    app.quit();
  })
  
//   if (isDev) {
//     autoUpdater.updateConfigPath = path.join(__dirname, '/dist/win-unpacked/resources/app-update.yml');
// }

// if (isDev) {
//   autoUpdater.updateConfigPath = path.join(__dirname, 'app-update.yml');
// }


}

app.on('ready',  createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

let win;

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('message', text);
}

function createDefaultWindow() {
  win = new BrowserWindow();
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
  win.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);
  return win;
}

app.on('activate', () => {
  if (mainWindow === null) {
       createWindow();
       }
       

  //-------------------------------------------------------------------
// Auto updates
//
// For details about these events, see the Wiki:
// https://github.com/electron-userland/electron-builder/wiki/Auto-Update#events
//
//-------------------------------------------------------------------

});

autoUpdater.on('checking-for-update', () => {
  console.log('checking for updates');
  sendStatusToWindow('Checking for update...');
})

autoUpdater.on('update-available', (info) => {
  console.log('Update available');
  console.log('Version : ', info.version);
  console.log('Release Date: ', info.releaseDate);
  sendStatusToWindow('Update available.');
})

autoUpdater.on('update-not-available', (info) => {
  console.log('current version is up to date...');
  sendStatusToWindow('Update not available.');
})

autoUpdater.on('error', (err) => {
  console.log('ERROR UPDATING...', err);
  sendStatusToWindow('Error in auto-updater. ' + err);
})

autoUpdater.on('download-progress', (progressObj) => {
  console.log('Progress: ${Math.floor(progressObj.percent)}');
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  sendStatusToWindow(log_message);
})

autoUpdater.on('update-downloaded', (info) => {
  console.log('updated downloaded...')
  sendStatusToWindow('Update downloaded');
 // autoUpdater.quitAndInstall();  
})

//  create menu template
const mainMenuTemplate = [
  {
      label: 'File',
      submenu:[
          {
              label : 'Add Item',
              click(){
                  createAddWindow();
              }
          },
          {
              label : 'Clear Items',
              click(){
                  mainWindow.webContents.send('item:clear');
              }
          },
          {
              label : 'Quit',
              accelerator: process.platform == 'darwin' ? 'Command+Q'  :
              'Ctrl+Q', //  mac | windows
              click(){
                  app.quit();
              }
          }
      ]
  }
];

//if mac, add empty object to menu
if(process.platform == 'darwin') {
  mainMenuTemplate.unshift({});
}
