import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Post from './components/Post'
var electron = null; 
var ipcRenderer = null;

var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
   // Electron-specific code
   electron = window.require("electron") 
  ipcRenderer = electron.ipcRenderer

  // wait for an updateReady message
  ipcRenderer.on('updateReady', function(event, text) {
      // change text and visibility of containers
      var container = document.getElementById('ready');
      container.style.display = "block";

      var container2 = document.getElementById('ready2');
      container2.innerHTML = "Update ready ! Will install automatically upon exiting smashalyticz";
  })

  ipcRenderer.on('updateAvailable', function(event, text) {

      var container2 = document.getElementById('ready2');
      container2.innerHTML = "new update available... downloading...";
  })
}

if(window.ipcRenderer){
      
}

class App extends Component {

  render() {

    const setup = (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )

    const isElectron = (userAgent.indexOf(' electron/') > -1) ? (
      <div>
        electron+react  
        <div>
          <p id="ready2">Version is up to date</p>
          <button className="btn grey" id="ready"  onClick={()=>ipcRenderer.send('quitAndInstall')}>or Update now!</button>
        </div>
        
      </div>
      ) : (
          <div>
        react only
        </div>
      )

    return (
      <div>
      {setup}
      {isElectron}
      </div>
    );
    
  }
}

export default App;
