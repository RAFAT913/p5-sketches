let timer = 0
let piece_drop_interval = 30
let w = 30
let cols = 10
let rows = 20
let grid = []
let piece_curr

function setup() {
  createCanvas(600, 600)
  for (let i = 0; i < cols; i++) {
    grid[i] = []
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j)
    }
  }

  piece_curr = new Piece(3, 3, 'L')
}


function draw() {
  background(255)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].render()
    }
  }

  piece_curr.render()

  timer += 1
  if (timer >= piece_drop_interval) {
    timer -= piece_drop_interval
    // piece_curr.move( 0, 1)
  }

  // background(0)
  // noStroke()
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:  piece_curr.move(-1, 0); break;
    case RIGHT_ARROW: piece_curr.move( 1, 0); break;
    case DOWN_ARROW:  piece_curr.move( 0, 1); break;

    case UP_ARROW:    piece_curr.rotate(); break;
  }
}