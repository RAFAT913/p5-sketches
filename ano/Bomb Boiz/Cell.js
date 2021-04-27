class Cell {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.x = this.i * grid.w
        this.y = this.j * grid.w
    }

    render() {
        // noStroke()
        strokeWeight(1)
        fill("white")
        rect(this.x, this.y, grid.w, grid.w)
    }
}