class Pocket {
	constructor(x, y) {
		this.pos = createVector(x, y)
		this.d = 50
        this.r = this.d/2
        this.col = "#000"

		this.debug = false
	}

	render() {
		noStroke()
		fill(this.col)
		ellipse(this.pos.x, this.pos.y, this.d)
	}

	update() {
	}
}

