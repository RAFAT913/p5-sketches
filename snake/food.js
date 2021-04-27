class Food {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.col = foodCol
    }

    render() {
        grid[this.i][this.j].col = this.col
    }

    reposition() {
        this.i = floor(random(0, cols))
        this.j = floor(random(0, rows))
    }
}