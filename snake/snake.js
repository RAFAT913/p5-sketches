class Snake {

    constructor(i, j, col) {
        this.i = i
        this.j = j
        this.x = i * w
        this.y = j * w

        this.vel = 1
        this.dir = {x:1, y:0}

        this.body = [{x:9, y:10}, {x:8, y:10}]
        this.col = col
    }

    render() {
        grid[this.i][this.j].col = this.col

        for (let i = 0; i < this.body.length; i++) {
            grid[this.body[i].x][this.body[i].y].col = this.col
        }
    }

    update() {
        let prevHead = {x:this.i, y:this.j}
        let newHead = {x:this.i+this.dir.x*this.vel, y:this.j+this.dir.y*this.vel}

        if (newHead.x < 0) newHead.x = cols-1
        if (newHead.x >= cols) newHead.x = 0
        if (newHead.y < 0) newHead.y = rows-1
        if (newHead.y >= rows) newHead.y = 0

        let newCell = grid[newHead.x][newHead.y]

        if (newCell.col == foodCol) {
            for (let i = 0; i < food.length; i++) {
                if (food[i].i == newCell.i && food[i].j == newCell.j) {
                    food[i].reposition()
                }
                fr++
            }
        } else {
            this.body.pop()
        }

        if (newCell.col == snakeCol) {
            for (let i = 0; i < this.body.length; i++) {
                if (this.body[i].x == newHead.x && this.body[i].y == newHead.y) {
                    this.body.splice(i, this.body.length-i+1)
                }
            }
        }
        
        this.i = newHead.x
        this.j = newHead.y

        this.body.unshift(prevHead)
    }

    move(x, y) {

		if (x == -this.dir.x || y == -this.dir.y) return

        this.dir = {x:x, y:y}
    }

}