let grid = {
  cols: 10,
  rows: 10,
  w: 60,
  cells: [],
}

function setup() {
  createCanvas(grid.w*grid.cols+1, grid.w*grid.rows+1)

  for (let i = 0; i < grid.cols; i++) {
    grid.cells.push(new Array(grid.rows))
    for (let j = 0; j < grid.rows; j++) {
      grid.cells[i][j] = new Cell(i, j)
    }
  }
}


function draw() {
  background(50, 50, 50)
  for (let i = 0; i < grid.cols; i++) {
    for (let j = 0; j < grid.rows; j++) {
      grid.cells[i][j].render()
    }
  }
}
