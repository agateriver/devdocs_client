const { app, BrowserWindow } = require('electron')

function createWindow() {

    var webpref = {
    }
    win = new BrowserWindow({ width: 1200, height: 800, webPreferences: webpref })
    win.setTitle("DevDocs 开发文档大全")
    win.setMenuBarVisibility(false)
    win.loadURL('https://devdocs.io/')
    win.show()

}

app.whenReady().then(createWindow)


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

