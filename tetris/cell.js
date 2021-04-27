class Cell {
    constructor(i, j) {
        this.x = i * w
        this.y = j * w
        this.col = "white"
    }

    render() {
        fill(this.col)
        rect(this.x, this.y, w, w)
    }
}