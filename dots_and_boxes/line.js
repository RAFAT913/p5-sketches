class Line {

    constructor(i1, j1, i2, j2) {
        this.i1 = i1;
        this.j1 = j1;
        this.i2 = i2;
        this.j2 = j2;

        this.x1 = i1 * w + offsetX
        this.y1 = j1 * w + offsetY
        this.x2 = i2 * w + offsetX
        this.y2 = j2 * w + offsetY

        this.thicc = 26

        this.x = this.x1-this.thicc/2
        this.y = this.y1-this.thicc/2
        this.w = this.x2-this.x1+this.thicc
        this.h = this.y2-this.y1+this.thicc

        this.col = "white"

        this.active = false

        //hor
        if (this.w > this.h) {
            this.x += this.thicc
            this.w -= this.thicc * 2
        }

        //ver
        if (this.h > this.w) {
            this.y += this.thicc
            this.h -= this.thicc * 2
        }
    }

    render() {
        noStroke(0)
        fill(this.col)
        rect(this.x, this.y, this.w, this.h)
    }

    click() {
        if (this.active) return

        if (mouseX > this.x && mouseY > this.y && mouseX < this.x+this.w && mouseY < this.y+this.h) {
            this.col = players[currentPlayer].col
            this.active = true
            nextTurn()
        }
    }

}