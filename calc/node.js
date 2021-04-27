class Node {
  constructor(x, y, w, h, i, o) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.i = i
    this.o = o

    this.inputs = []
    this.outputs = []

    this.io_knob_sizes = 12
    this.inc_i = this.h / (this.i + 1)
    this.inc_o = this.h / (this.o + 1)

    for (let i = 0; i < this.i; i++) {
      this.inputs.push(new Knob(this.x, this.y + (i * this.inc_i) + this.inc_i, this.io_knob_sizes, "red"))
    }

    for (let i = 0; i < this.o; i++) {
      this.outputs.push(new Knob(this.x + this.w, this.y + (i * this.inc_o) + this.inc_o, this.io_knob_sizes, "blue"))
    }

  }

  render() {
    fill(255)
    rect(this.x, this.y, this.w, this.h)

    let inc_i = this.h / (this.i + 1)
    for (let i = 0; i < this.i; i++) {
      this.inputs[i].x = this.x
      this.inputs[i].y = this.y + (i * this.inc_i) + this.inc_i, this.io_knob_sizes
    }

    this.inputs.forEach((e, i) => e.render())
    this.outputs.forEach((e, i) => e.render())
  }

  isPointInside(x, y) {
    let t = this.y
    let b = this.y + this.h
    let l = this.x
    let r = this.x + this.w
    if (x < r && x > l && y < b && y > t) return true; else return false
  }
}