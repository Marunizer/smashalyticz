This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `yarn start`

Launch development mode

### `yarn build`

### `yarn pack`

### `yarn dist`

Build and package distributible


### Limitations
 to build on mac, add --mac to the 'dist' script in package.json
    --> `"dist": "electron-builder --x64  --mac -c.extraMetadata.main=build/electron.js"`

I cannot personally build and release this because I have a Windows computer and cannot sign the application, 
but it should be functional

 to build on linux, 
    --> `"dist": "electron-builder --x64  --linux -c.extraMetadata.main=build/electron.js"`

This works fine, but due to internet/remote building, this takes ages so I try to skip this

### TODO
    Look into : Delta updates to seemlessly patch app without needing to replace installation
                using AWS s3 to host releases, github is pretty limited on a normal account

## Currently

building using nsis-web in electron-updater allows for differential updates(delta), un-sure of its full effectiveness atm

closing app with a downloaded update leads to silent install, works great

hitting button to update, quit and install() seems to be downloading the dang 7zip anyway and installing :| 


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
