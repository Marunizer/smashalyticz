const electron = require('electron');
const { autoUpdater } = require("electron-updater")
const log = require('electron-log');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

//set environment to production to remove dev tools
process.env.NODE_ENV = 'production';

//-------------------------------------------------------------------
// Logging
// makes debugging easier 
//-------------------------------------------------------------------
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

function createWindow() {
  autoUpdater.checkForUpdates();
  
  mainWindow = new BrowserWindow({width: 900, height: 680});
 
  mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`,
	);
  mainWindow.toggleDevTools();
 // Build menu from template
 const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // add developer tools item if not in production

 // Insert menu
 Menu.setApplicationMenu(mainMenu);

  //Quit app when main window closed
  mainWindow.on('closed', function(){
    app.quit();
  })

}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

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

autoUpdater.on('checking-for-update', () => {
  console.log('checking for updates');
})

autoUpdater.on('update-available', (info) => {
  console.log('Update available');
  console.log('Version : ', info.version);
  console.log('Release Date: ', info.releaseDate);
})

autoUpdater.on('update-not-available', (info) => {
  console.log('current version is up to date...')
})

autoUpdater.on('error', (err) => {
  console.log('ERROR UPDATING...', err)
})

autoUpdater.on('download-progress', (progressObj) => {
  console.log('Progress: ${Math.floor(progressObj.percent)}');
})

autoUpdater.on('update-downloaded', (info) => {
  console.log('updated downloaded...')
  autoUpdater.quitAndInstall();  
})

});

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
