class Button {
    constructor(x, y, w, h, color) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.color = color
		this.colorClick = "white"
		this.colorHover = "grey"

		this.colorSelected = color

		this.isHovered = false
		this.isClicked = false
		this.canClick = true
    }
  
	render() {
		fill(this.colorSelected)
		rect(this.x, this.y, this.w, this.h)
	}

	update() {

		if (this.isMouseOn()) {
			
		}
		
	}
	
	clicked() {
		this.isClicked = true
		this.colorSelected = this.colorClick
	}
	
	hovered() {		
		this.isHovered = true
		this.colorSelected = this.colorHover
	}
	
	clear() {		
		this.isClicked = false
		this.isHovered = false
		this.colorSelected = this.color
	}

	isMouseOn() {
		return (bios.mousePos.x > this.x && bios.mousePos.x < this.x + this.w && bios.mousePos.y > this.y && bios.mousePos.y < this.y + this.h)
	}

}



class Tray {
	constructor(initials, color) {
		this.x
		this.y
		this.w
		this.h
		this.initials = initials
		this.trayColor = color

		this.initialsColor = "white"

		this.isHovered = false
		this.isClicked = false
	}
  
	render() {
		//tray border
		noFill()
		stroke(this.trayColor)
		strokeWeight(1)
		rect(this.x, this.y, this.w, this.h)

		//Initials
		noStroke()
		fill(this.initialsColor)
		textFont(mage_8bit)
		textAlign(CENTER, CENTER)
		textSize(this.h);
		text(this.initials, this.x + this.w/2, this.y + this.h /2)
	}

	update() {
		
	}
	
	clicked() {

	}

	isMouseOn() {
		
	}

}