let grid = {
  width: 50,
  height: 50,
  w: 18,
  cells: []
}

let snakes = []

function setup() {
  createCanvas(grid.width * grid.w, grid.height * grid.w)

  for (let i = 0; i < grid.width; i++) {
    grid.cells.push(new Array(grid.height))
    for (let j = 0; j < grid.height; j++) {
      grid.cells[i][j] = new Cell(i, j)
    }
  }

  snakes.push(new Snake(5, 5, "#fdcb6e"))
  spawnFood()
}


function draw() {
  frameRate(10)
  
  for (let i = 0; i < grid.width; i++) {
    for (let j = 0; j < grid.height; j++) {
      grid.cells[i][j].render()
    }
  }

  resetGrid()
  
  for (let i = 0; i < snakes.length; i++) {
    snakes[i].update()
    snakes[i].render()
  }
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) moveSnake(0, -1)
  if (keyIsDown(DOWN_ARROW)) moveSnake(0, 1)
  if (keyIsDown(LEFT_ARROW)) moveSnake(-1, 0)
  if (keyIsDown(RIGHT_ARROW)) moveSnake(1, 0)
}

function moveSnake(i, j) {
  snakes[0].changeDir(i, j)
}



function resetGrid() {
  for (let i = 0; i < grid.width; i++) {
    for (let j = 0; j < grid.height; j++) {
      grid.cells[i][j].t = "empty"
      grid.cells[i][j].col = "#3d4A57"
    }
  }
}

function spawnFood() {
  // while(true) {
    let randi = floor(random(0, grid.width))
    let randj = floor(random(0, grid.height))
    if (grid.cells[randi][randj].t == "empty") {
      grid.cells[randi.i][randj.j].t = "apple"
      grid.cells[randi.i][randj.j].col = "#d63031"
      return
    }
  // }
}