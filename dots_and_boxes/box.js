class Box {

    constructor(t, r, b, l) {
        this.t = t
        this.r = r
        this.b = b
        this.l = l

        this.x = t.x
        this.y = r.y
        this.w = b.w
        this.h = l.h

        this.col = "grey"
        this.active = false
    }

    render() {
        noStroke()
        noFill()
        if (this.active) fill(this.col)
        rect(this.x, this.y, this.w, this.h)
    }

    update() {
        if (this.active) return
        if (this.t.active && this.r.active && this.b.active && this.l.active) {            
            if (!claimedABox) prevTurn()
            this.col = players[currentPlayer].col
            players[currentPlayer].score++
            this.active = true
            claimedABox = true
        }
    }

}