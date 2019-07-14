const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Disable GPU blacklist; see https://github.com/electron/electron/issues/8217
app.commandLine.appendSwitch("ignore-gpu-blacklist");
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const fs = require('fs');
const url = require('url');

const { URL } = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// For the case of a deployed bindist
// (if the electron binary is in this dir)
if (fs.existsSync('electron') || fs.existsSync('electron.exe')) {
  process.chdir('resources/app');
}

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.setMenu(null);

  const PROTOCOL = 'https';
  const BUNDLE_DIR = 'bundle';

  electron.protocol.interceptFileProtocol(PROTOCOL, (request, callback) => {
    console.log('\x1b[36m%s\x1b[0m', request.url);

    const parsedUrl = new URL(request.url);
    const loadPath = path.normalize(path.join(__dirname, BUNDLE_DIR, parsedUrl.pathname));

    if (fs.existsSync(loadPath)) {
      console.log('\x1b[32m  found: %s\x1b[0m', loadPath);
    } else {
      console.log('\x1b[31m  not found %s\x1b[0m', loadPath);
    }

    callback({path: loadPath});
  })

  let scans = fs.readdirSync(BUNDLE_DIR);
  // we're only interested in directories -- this is convenient because it makes the app
  // not fail if we leave the .zip file there after unzipping
  scans = scans.filter(path => {
    return fs.lstatSync(`${BUNDLE_DIR}/${path}`).isDirectory();
  });

  if (scans.length == 0) {
    throw 'Could not find any scans in `bundle` directory! Have you unpacked the offline bundle?';
  } else if (scans.length > 1) {
    throw `Found multiple scans: ${scans}. Please pick one.`;
  }
  const scan = scans[0];

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    host: 'localhost',
    pathname: `${scan}/index.html`,
    protocol: 'https:',
    slashes: true
  }));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
