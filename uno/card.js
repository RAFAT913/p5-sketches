class Card {

    constructor(x, y, col, type, hidden) {
        this.col = col
        this.type = type
        this.x = x
        this.y = y
        this.hidden = hidden

        this.w = 60
        this.h = 100

        this.white = 'white'
        this.shadow = 'black'

        this.shadowX = 5
        this.shadowY = 5
        this.border = 5
        this.ellipseX = 45
        this.ellipseY = 80
        this.ellipseTheta = 25
    }

    render() {
        if (this.hidden) {
            this.renderHidden()
        } else {
            this.renderShowen()
        }
    }


    renderShowen() {
        noStroke()

        //Shadow
        fill(this.shadow)
        rect(this.x + this.shadowX, this.y + this.shadowY, this.w, this.h)

        //Border
        fill(this.white)
        rect(this.x, this.y, this.w, this.h)

        //Color
        fill(this.col)
        rect(this.x + this.border, this.y + this.border, this.w - (2*this.border), this.h - (2*this.border))

        //Ellipse
        fill(this.white)
        push()
        translate(this.x + (this.w/2), this.y + (this.h/2))
        rotate(this.ellipseTheta)
        ellipse(0, 0, this.ellipseX, this.ellipseY)
        rotate(-this.ellipseTheta)

        //Type
        fill(this.col)
        textSize(32)
        textAlign(CENTER, CENTER)
        text(this.type, 0, 0)

        pop()
    }

    renderHidden() {
        noStroke()

        //Shadow
        fill(this.shadow)
        rect(this.x + this.shadowX, this.y + this.shadowY, this.w, this.h)

        //Border
        fill(this.white)
        rect(this.x, this.y, this.w, this.h)

        //Color
        fill(this.col)
        rect(this.x + this.border, this.y + this.border, this.w - (2*this.border), this.h - (2*this.border))

        //Ellipse
        fill(this.white)
        push()
        translate(this.x + (this.w/2), this.y + (this.h/2))
        rotate(this.ellipseTheta)
        ellipse(0, 0, this.ellipseX, this.ellipseY)
        rotate(-this.ellipseTheta)

        //Type
        fill(this.col)
        textSize(32)
        textAlign(CENTER, CENTER)
        text(this.type, 0, 0)

        pop()
    }

}