const { app, BrowserWindow } = require('electron')

// function to create a new window of specified width & height
createWindow = () => {
    let win = new BrowserWindow({width: 1000, height: 600})

    win.loadFile('index.html') //load the html file to be rendered on the window.

    win.webContents.openDevTools() //opens the developer tools.

    // close window
    win.on('close', () => {
        win = null
    })


}

app.on('ready', createWindow) // creates a window and handles all system events that the app might encounter.

// quit when all windows are closed.
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
        app.quit()
})

//macOS re-creates a window in the app when dock icon is clicked and no other windows are open.
app.on('activate', () => {
    if(win === null)
        createWindow()
})