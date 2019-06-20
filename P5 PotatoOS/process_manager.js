class ProcessManager {
    constructor() {
        this.processStack = []
        this.focusedProcess = null
    }

    createProcess(name, initials) {
        let process = new Process(name, initials)
        this.processStack.push(process)
        taskbar.addTray(process)
    }

    terminateProcess() {

    }

    runStack() {
        for(let i = 0; i < this.processStack.length; i++) {
            this.processStack[i].run()
        }

        // if (bios.isMouseMoved) {
        //     this.lookupHoveredWindow()
        // }

        if (bios.isMouseLeftClicked) {
            this.lookForPressedWindow()
        } else {
            this.unHookAllWindows()
        }
    }


    lookForPressedWindow() {
        for(let i = this.processStack.length-1; i >= 0; i--) {
            let process = this.processStack[i]

            if (process.window.isMouseOnWindow()  && this.focusedProcess == null) {
                if (process.window.isMouseOnTitleBar() && this.focusedProcess == null) {
                    process.window.mousePressed()
                    this.focuseOnProcess(process, i)
                    break
                }
                break
            }
        }
    }


    unHookAllWindows() {
        for(let i = 0; i < this.processStack.length; i++) {
            let process = this.processStack[i]
            process.window.mouseReleased()
            this.unfocusedProcess()
        }
    }



    focuseOnProcess(process, i) {
        this.moveProcessToTopOfStack(i)
        this.focusedProcess = process
    }

    unfocusedProcess() {
        this.focusedProcess = null
    }


    moveProcessToTopOfStack(n) { //NEEDS FIXING (moves process to the end of the array)
        if (n == 1) return

        let p = this.processStack[1]
        this.processStack[1] = this.processStack[n]
        this.processStack[0] = p

        // if (n > this.processStack.length-1 || n < 0) console.error("Unable to move undefined process up the stack")

        // let newProcessStack = []
        // for(let i = 0; i < this.processStack.length; i++) {
        //     if (i == n) {
        //         newProcessStack[0] = this.processStack[i]
        //     } else {
        //         newProcessStack[i+1] = this.processStack[i]
        //     }
        // }
    }


}