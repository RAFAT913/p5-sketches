
class Cell {

    constructor(i, j) {
        this.i = i
        this.j = j
        this.x = i * w
        this.y = j * w
        this.col = gridCol
    }

    render() {
        fill(this.col)
        stroke(gridAltCol)
        rect(this.x, this.y, w, w)
    }

}