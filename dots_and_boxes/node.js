

class Node {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.x = i * w + offsetX;
        this.y = j * w + offsetY;
        this.col = "black"
    }

    render() {
        strokeWeight(40)
        stroke(this.col)
        point(this.x, this.y)

        // noStroke()
        // fill(this.col)
        // rect(this.x-14, this.y-14, 28, 28)
    }
}