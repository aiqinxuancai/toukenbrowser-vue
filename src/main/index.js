import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}


app.commandLine.appendSwitch('proxy-server', 'http://127.0.0.1:1080');
app.commandLine.appendSwitch('proxy-bypass-list', '<local>;')
//app.commandLine.appendSwitch('proxy-pac-url', '*.dmm.com;')
try {
  const path = app.getPath('pepperFlashSystemPlugin')
  app.commandLine.appendSwitch('ppapi-flash-path', path)
} catch (e) {

}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  // var ses = mainWindow.webContents.session;
  // var mySocks = "socks5://127.0.0.1:1080";
  // ses.setProxy({ proxyRules: mySocks }, function () { return true; });
  //mainWindow.loadURL(winURL)

  // console.log("6666");

  // var socksUrl = "file://" + __dirname + "/main/pacfile.js";

  // console.log(socksUrl);
  // var mySocks = "http://127.0.0.1:1080";
  // mainWindow.webContents.session.setProxy({ proxyRules: mySocks }, function () {

  // });
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
