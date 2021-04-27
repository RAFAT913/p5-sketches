class Snake {
    constructor(i, j, col) {
        this.i = i
        this.j = j
        this.col = col
        this.body = [{i:2, j:5}, {i:3, j:5}, {i:4, j:5}]
        this.dir = {i:1, j:0}
    }

    render() {
        grid.cells[this.i][this.j].t = "snake"
        grid.cells[this.i][this.j].col = this.col

        for (let i = 0; i < this.body.length; i++) {
            grid.cells[this.body[i].i][this.body[i].j].t = "snake"
            grid.cells[this.body[i].i][this.body[i].j].col = this.col
        }
    }

    update() {
        this.body.shift()
        this.body.push({i:this.i, j:this.j})

        this.i += this.dir.i
        this.j += this.dir.j

        switch(true) {
            case this.i < 0: this.i = grid.width-1; break;
            case this.i >= grid.width: this.i = 0; break;
            case this.j < 0: this.j = grid.height-1; break;
            case this.j >= grid.height: this.j = 0; break;
        }
    }

    changeDir(i, j) {
        console.log(i, j);
        if (this.dir.i == -i || this.dir.j == -j) {
            return
        }
        this.dir = {i:i, j:j}
    }

}