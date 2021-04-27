class Process {
    constructor(name, initials) {
        this.initials = initials
        this.window = new Window(random(250) + 100, random(250) + 100, 250, 200, name)
        this.tray = new Tray(this.initials, "white")
        
	    //States
        // this.isClosed = false
        this.isMinimized = false
        // this.isFocused = false
        // this.isClicked = false
    }

    run() {
        if (!this.isMinimized) {
            this.window.render()
            this.window.update()
        }
    }

    minimize() {
        this.isMinimized = true
    }

    maximize() {
        this.isMinimized = false
    }
}