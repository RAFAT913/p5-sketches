let w = 80

let grid = [
  [3, 3, 3, 0, 0, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 1, 3],
  [3, 3, 3, 3, 0, 3, 1, 3],
  [3, 1, 1, 3, 1, 3, 3, 3],
  [3, 3, 3, 3, 1, 3, 3, 3],
  [1, 3, 3, 3, 3, 3, 0, 3],
  [3, 3, 3, 3, 0, 3, 3, 3],
  [3, 0, 3, 3, 3, 3, 3, 3],
]

let cols = grid.length
let rows = grid[0].length

class Cell {
  constructor(i, j, t) {
    this.i = i
    this.j = j

    this.x = this.i * w
    this.y = this.j * w

    this.type = t
  }

  render() {
    switch (this.type) {
      case 0:
        fill('black')
        break
      case 1:
        fill('white')
        break
      default:
        fill('grey')
        break
    }
    rect(this.x, this.y, w, w)
  }

  click() {
    switch (this.type) {
      case 0:
        this.type = 1
        break
      case 1:
        this.type = 0
        break
      default:
        this.type = 0
        break
    }
  }
}

function setup() {
  createCanvas(w * cols + 1, w * rows + 1)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, grid[i][j])
    }
  }
}

function draw() {
  background(0)
  noStroke()

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].render()
    }
  }
}

function mousePressed() {
  // console.log(floor(mouseX / w))
  grid[floor(mouseX / w)][floor(mouseY / w)].click()
}
