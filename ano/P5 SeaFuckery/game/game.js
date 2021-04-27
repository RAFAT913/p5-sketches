let grid = {
  width: 10,
  height: 10,
  w: 90,
  cells: []
}

function setup() {
  createCanvas(grid.width * grid.w, grid.height * grid.w)

  for (let i = 0; i < grid.width; i++) {
    grid.cells.push(new Array(grid.height))
    for (let j = 0; j < grid.height; j++) {
      grid.cells[i][j] = new Cell(i, j)
    }
  }

}

function draw() {
  background(50, 50, 50)

  for (let i = 0; i < grid.width; i++) {
    for (let j = 0; j < grid.height; j++) {
      grid.cells[i][j].render()
    }
  }

}

