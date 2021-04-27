let nodes = []
let totalNodes = 10;

function setup() {
    createCanvas(1000, 600)

    for (i = 0; i < totalNodes; i++) {
        nodes.push(new Node())
    }
}

function draw() {
    background('#0d0d1b')

    for (i = 0; i < totalNodes; i++) {
        nodes[i].show()
        nodes[i].update()
        nodes[i].link()
    }
}


class Node {

    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.r = 10
        this.spd_max = random(5, 5)
        this.spd_x = random(-this.spd_max, this.spd_max)
        this.spd_y = random(-this.spd_max, this.spd_max)
    }

    show() {
        ellipse(this.x, this.y, this.r)
    }

    update() {
        this.x += this.spd_x
        this.y += this.spd_y
        
        switch (true) {
            case this.x - this.r/2 < 0: this.spd_x = -this.spd_x; break;
            case this.y - this.r/2 < 0: this.spd_y = -this.spd_y; break;

            case this.x + this.r/2 > width: this.spd_x = -this.spd_x; break;
            case this.y + this.r/2 > height: this.spd_y = -this.spd_y; break;
        }
    }

    link() {
        stroke(255)
        strokeWeight(1)

        for (let i = 0; i < totalNodes; i++) {
            line(this.x, this.y, nodes[i].x, nodes[i].y)
        }
    }
}

