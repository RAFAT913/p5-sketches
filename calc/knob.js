class Knob {
  constructor(x, y, w, col) {
    this.x = x
    this.y = y
    this.w = w
    this.col = col
  }

  render() {
    rectMode(CENTER)
    fill(this.col)
    rect(this.x, this.y, this.w, this.w)
    rectMode(CORNER)
  }

  isPointInside(x, y) {
    let t = this.y
    let b = this.y + this.w
    let l = this.x
    let r = this.x + this.w
    if (x < r && x > l && y < b && y > t) return true; else return false
  }
}