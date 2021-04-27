class Cell {

	constructor(i, j) {
		this.i = i
		this.j = j
		this.x = this.i * w
		this.y = this.j * w
		this.col = "white"
		this.border_col = ["black", "black", "black", "black"]
	}

	render() {
		noStroke()

		//cell
		fill(this.col)
		rect(this.x, this.y, w, w)

		//left
		fill(this.border_col[0])
		rect(this.x, this.y, border_w, w)

		//top
		fill(this.border_col[1])
		rect(this.x, this.y, w, border_w)

		//right
		fill(this.border_col[2])
		rect(this.x + w - border_w, this.y, border_w, w)

		//bottom
		fill(this.border_col[3])
		rect(this.x, this.y + w - border_w, w, border_w)
	}

	click() {
		this.col = selected_color
		this.border_col = selected_color
	}
	
}