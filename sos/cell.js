const CELL_TYPES = {
  EMPTY: '',
  S: 'S',
  O: 'O',
}

class Cell {
  constructor(i, j) {
    this.i = i
    this.j = j

    this.x = this.i * w
    this.y = this.j * w
    this.type = CELL_TYPES.EMPTY
  }

  render() {
    stroke('white')
    fill('black')
    rect(this.x, this.y, w, w)

    stroke('black')
    fill('white')
    textAlign(CENTER, CENTER)
    text(this.type, this.x + w / 2, this.y + w / 2)
  }

  explore() {}
}
