This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `yarn start`

Launch development mode

### `yarn build`

### `yarn pack`

### `yarn dist`

Build and package distributible


### Limitations
 to build on mac, add --mac to the 'dist' script in package.json
    --> `"dist": "electron-builder --x64  --win --mac -c.extraMetadata.main=build/electron.js"`

I cannot personally build and release this because I have a Windows computer and cannot sign the application, 
but it should be functional

### TODO
    Look into : Delta updates to seemlessly patch app without needing to replace installation
                using AWS s3 to host releases, github is pretty limited on a normal account



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
