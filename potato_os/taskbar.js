class Taskbar {
    constructor() {
        this.trays = []
        this.taskbarHeight = 40
        this.taskbarColor = "black"

        this.trayWidth = 90
        this.trayHeight = 30
        this.trayPadding = 5
    }

    render() {
        //taskbar
        fill(this.taskbarColor)
        rect(0, bios.screenHeight - this.taskbarHeight, bios.screenWidth, this.taskbarHeight)

        //trays
        for (let i = 0; i < this.trays.length; i++) {
            let tray = this.trays[i]
            tray.x = this.trayPadding + (i * (this.trayWidth + this.trayPadding ))
            tray.y = bios.screenHeight - this.taskbarHeight + this.trayPadding
            tray.w = this.trayWidth
            tray.h = this.trayHeight
            
            tray.render()
        }
    }
    
    addTray(process) {
        this.trays.push(process.tray)
    }

    removeProcess() {

    }

    isMouseOnTaskbar() {

    }

}