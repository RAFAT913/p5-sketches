class player {
    constructor(col, x, y) {
        this.x = x
        this.y = y
        this.col = col
        this.score = 0
        this.isPlaying = false
    }

    render() {
        noStroke()
        fill(this.col)
        textSize(80)
        textAlign(CENTER, CENTER)
        text(this.score, this.x, this.y)
    }
}