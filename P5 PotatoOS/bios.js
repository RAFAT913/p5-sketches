//resources
let pixel_noir, mage_8bit

function preload() {
    pixel_noir = loadFont('pixel_noir.ttf')
    mage_8bit = loadFont('mage_8bit.otf')
}


class BIOS {
    constructor() {
        //Screen
        this.screenWidth = width
        this.screenHeight = height

        //Mouse
        this.mousePos = new Vec2(0, 0)
        this.isMouseShown = true
        this.isMouseLeftClicked = false
        this.isMouseRightClicked = false
        this.isMouseMiddleClicked = false

        //Keyboard
        this.pressedKey = null
        this.pressedKeyCode = null
    }

    //must be called in draw
    run() {
        if (!this.isMouseShown) noCursor()
        this.mousePos.x = mouseX
        this.mousePos.y = mouseY
    }

    //mouse
    hideMouse() {
        this.isMouseShown = false
    }

    showMouse() {
        this.isMouseShown = true
    }

    //keyboard
    isTherePressedKey() {
        if (this.pressedKey == null) return false; else return true
    }

    getPressedKey() {
        if (this.pressedKey != null) {
            let keyInfo = {
                key: this.pressedKey,
                code: this.pressedKeyCode
            }
            return keyInfo
        }
        return null
    }

    clearPressedKey() {
        this.pressedKey = null
        this.pressedKeyCode = null
    }

}



function windowResized() {
    resizeCanvas(innerWidth, innerHeight)
    bios.screenWidth = width
    bios.screenHeight = height
}


function keyPressed() {
    bios.pressedKey = key
    bios.pressedKeyCode = keyCode
    return false; // prevent any default behaviour
}

function mousePressed() {
    if (mouseButton === LEFT) {
        bios.isMouseLeftClicked = true
    }

    if (mouseButton === RIGHT) {
        bios.isMouseRightClicked = true
    }

    if (mouseButton === CENTER) {
        bios.isMouseMiddleClicked = true
    }
    
}
  
function mouseReleased() {

    if (mouseButton === LEFT) {
        bios.isMouseLeftClicked = false
    }

    if (mouseButton === RIGHT) {
        bios.isMouseRightClicked = false
    }

    if (mouseButton === CENTER) {
        bios.isMouseMiddleClicked = false
    }

}

function mouseClicked() {

}

function doubleClicked() {

}

//if (this.isMouseOnTitleBar() && bios.isMouseLeftClicked) this.hook()
//if (!bios.isMouseLeftClicked) this.unHook()