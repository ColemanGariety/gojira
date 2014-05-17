var app = require('app')
  , BrowserWindow = require('browser-window')
  , crashReporter = require('crash-reporter')

crashReporter.start()

with (app) on('window-all-closed', quit.bind(app))

var window

app.on('ready', function() {
  window = new BrowserWindow({
    width: 800
  , height: 600
  , show: false
  , frame: false
  , resizeable: false
  })

  window.loadUrl('file://' + __dirname + '/lobby/index.html');

  window.webContents.on('did-finish-load', function () {
    window.show()
  })
});
