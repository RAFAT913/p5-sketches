let w = 30
let cols = 30
let rows = 30
let grid = new Array(cols)
let food = []
let maxFood = 3
let fr = 8

let snake1

let snakeCol = "#e74c3c"
let foodCol = "#f1c40f"
let gridCol = "#34495e"
let gridAltCol = "#2c3e50"

function setup() {
  createCanvas(rows*w+1, cols*w+1)

  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows)
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j)
    }
  }

  for (let i = 0; i < maxFood; i++) {
    food.push(new Food(floor(random(0, cols)), floor(random(0, rows))))
  }

  snake1 = new Snake(10, 10, snakeCol)
}

function draw() {
  frameRate(fr)
  background(51)
  noStroke()
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].render()
    } 
  }
  wipe()

  for (let i = 0; i < maxFood; i++) {
    food[i].render()
  }
  

  snake1.render()
  snake1.update()
}


function keyPressed() {
  if (keyCode == UP_ARROW)     snake1.move(0, -1)
  if (keyCode == RIGHT_ARROW)  snake1.move(1, 0)
  if (keyCode == DOWN_ARROW)   snake1.move(0, 1)
  if (keyCode == LEFT_ARROW)   snake1.move(-1, 0)
}

function wipe() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].col = gridCol
    } 
  }
}