class Window {
    constructor(x, y, w, h, name) {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.endX
	    this.endY
      this.name = name
	  
	  //Hooking
      this.isHooked = false
      this.HookOffsetX = 0
	    this.HookOffsetY = 0

	  //Looks
      this.widnowColor = "white"
      this.titleBarColor = "black"
      this.titleBarHeight = 40
	  
	  //Buttons
	    this.btns = []
      this.btnsWidth = 18

      this.btns.push(new Button(0, 0, this.btnsWidth, this.btnsWidth, "red"))
      this.btns.push(new Button(0, 0, this.btnsWidth, this.btnsWidth, "white"))
    }
  
    isMouseOnWindow() {
		if (bios.mousePos.x > this.x && bios.mousePos.x < this.x + this.w && bios.mousePos.y > this.y && bios.mousePos.y < this.y + this.h) return true
		return false
    }
  
    isMouseOnTitleBar() {
      if (bios.mousePos.x > this.x && bios.mousePos.x < this.x + this.w && bios.mousePos.y > this.y && bios.mousePos.y < this.y + this.titleBarHeight) return true
      return false
    }
  
    hook() {
      this.isHooked = true
      this.HookOffsetX = this.x - bios.mousePos.x
      this.HookOffsetY = this.y - bios.mousePos.y
    }
  
    unHook() {
      this.isHooked = false
    }
  
    mousePressed() {
      if (this.isMouseOnTitleBar()) {
        //check for window title bar buttons
        this.hook()
      }
    }
  
    mouseReleased() {
      this.unHook()
    }
  
  
    render() {
      this.endX = this.x + this.w
      this.endY = this.y + this.h
      stroke(this.titleBarColor)
      strokeWeight(3)
      //title bar
      fill(this.titleBarColor)
      rect(this.x, this.y, this.w, this.titleBarHeight)
      //window and frame
      fill(this.widnowColor)
      rect(this.x, this.y + this.titleBarHeight, this.w, this.h)
      
      //btns
      noStroke()
      for (let i = 0; i < this.btns.length; i++) {
        this.btns[i].x = this.endX - this.btnsWidth * (i+1) - this.btnsWidth/2 * (i+1)
        this.btns[i].y = this.y + (this.btnsWidth/2)
        this.btns[i].render()
      }
      //title
      fill(this.widnowColor)
      textFont(mage_8bit)
      textAlign(LEFT, TOP)
      textSize(this.btnsWidth);
      text(this.name, this.x + this.btnsWidth/2, this.y + this.btnsWidth/2)
    }
  
  
    update() {
      if (this.isHooked) {
        this.x = bios.mousePos.x + this.HookOffsetX
        this.y = bios.mousePos.y + this.HookOffsetY
      }

      if (this.isMouseOnTitleBar()) {
        for (let i = 0; i < this.btns.length; i++) {
          this.btns[i].update()

          if (this.btns[0].isClicked) {
            console.log("asda")
          }

          if (this.btns[1].isClicked) {
            console.log("asd")
          }

        }
      }

    }
  
  }