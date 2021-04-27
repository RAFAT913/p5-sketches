class Box {

	constructor(x, y, w, h) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h

		this.clicked = true
	}

	set_color(col) {
		this.color = col
	}

	set_text(txt, col) {
		this.text = txt
		this.text_color = col
	}

	render() {
		noStroke()
		stroke(this.text_color)
		text(this.text)
		rect(this.x, this.y, this.w, this.h)
	}

	update() {
		if (this.x > mouseX && this.x + this.w < mouseX && this.y > mouseY && this.y + this.h < mouseY) {
			this.clicked = true
		} else {
			this.clicked = false
		}
	}
	
}