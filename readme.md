[Fork from angular2 electron repo](https://github.com/auth0/angular2-electron)

# Angular 2 + Electron Sample

## Installation

To get started, clone the repo to your target directory. This app uses Webpack, and a few commands have been provided as scripts in `package.json`.

```bash
npm install

# To build only
npm run build

# To watch for changes
npm run watch

# Start the Electron app
npm run electron
```

## Important Snippets

Electron can be used with any framework, so once all of the code needed to make Electron work is in place, we simply create the Angular 2 app as we would for the web.

The Electron configuration is contained in `app/main.js`.

```js
// app/main.js

var app = require('app');

// browser-window creates a native window
var BrowserWindow = require('browser-window');
var mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  mainWindow = new BrowserWindow({ width: 1200, height: 900 });

  // Tell Electron where to load the entry point from
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Clear out the main window when the app is closed
  mainWindow.on('closed', function () {

    mainWindow = null;
  });

});
```

The entry point for the app is the `index.html` file within the `app` directory.

```html
  <!-- app/index.html -->
  <body>
    <div class="container">
      <app></app>
    </div>

    <script src="../build/common.js"></script>
    <script src="../build/angular2.js"></script>
    <script src="../build/app.js"></script>
  </body>
```

The Angular 2 app uses TypeScript and the Webpack configuration is set up to place the transpiled JavaScipt in the `build` directory.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
