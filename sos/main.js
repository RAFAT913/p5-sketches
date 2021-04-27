let w = 30
let cols = 20
let rows = 20
let panel_i = 10
let panel_j = 20

let panel
let grid = []

function setup() {
  createCanvas(w * cols + panel_i * w, w * rows)

  panel = new Panel(panel_i, panel_j, 2)

  for (let i = 0; i < cols; i++) {
    grid.push(new Array(rows))
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j)
    }
  }
}

function draw() {
  background(0)
  noStroke()

  panel.render()

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].render()
    }
  }
}

function mousePressed() {
  let mouse_i = floor(mouseX / w)
  let mouse_j = floor(mouseY / w)
  let clicked_cell = grid[mouse_i][mouse_j]

  switch (mouseButton) {
    case LEFT:
      clicked_cell.type = CELL_TYPES.S
      break
    case CENTER:
      clicked_cell.type = CELL_TYPES.O
      break
  }

  print(clicked_cell)
}
