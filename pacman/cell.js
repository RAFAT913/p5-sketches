class Cell {

    constructor(i, j, type) {
        this.i = i
        this.j = j
        this.x = i*w
        this.y = j*w
        this.type = type

        this.dir = {x:-1, y:0}
        this.mouthAngle = 40
        this.mouthAngleDelta = -1
    }

    render() {
        noStroke()

        switch (this.type) {
            case "#": 
                fill(wallsCol)
                rect(this.x, this.y, w, w)
            break;

            case "@": 
                fill(backgroundCol)
                rect(this.x, this.y, w, w)
                fill(pacmanCol)
                arc(this.x + w/2, this.y + w/2, 20, 20, 180+(this.mouthAngle/2), 180-(this.mouthAngle/2), PIE)
            break;

            case "*": 
                fill(backgroundCol)
                rect(this.x, this.y, w, w)
                fill(foodCol)
                ellipse(this.x + w/2, this.y + w/2, 12)
            break;

            case "&":
                fill(backgroundCol)
                rect(this.x, this.y, w, w)
                fill(ghostsCol)
                rect(this.x+1, this.y+1, w-2, w-2)
                fill(foodCol)
                ellipse(this.x + w/2, this.y + w/3, 10)
                fill(backgroundCol)
                ellipse(this.x + w/2, this.y + w/3, 5)
            break;

            case ".":
                fill(backgroundCol)
                rect(this.x, this.y, w, w)
            break;

            default:
                fill(backgroundCol)
                rect(this.x, this.y, w, w)
                fill(foodCol)
                ellipse(this.x + w/2, this.y + w/2, 5)
            break;
        }
    }


    update() {
        switch (this.type) {
            case "#":
            break;

            case "@":
                if (this.mouthAngle >= 40 || this.mouthAngle < 0) this.mouthAngleDelta *= -1
                this.mouthAngle += this.mouthAngleDelta
            break;

            case "*":
            break;

            case "&":
            break;

            case ".":
            break;

            default:
            break;
        }
    }

}