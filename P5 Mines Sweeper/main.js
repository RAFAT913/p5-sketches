//disabling right click menu
document.oncontextmenu = () => {return false}

//game
let mines_left_label = document.querySelector("#mines-left");
let timer_label = document.querySelector("#timer");


let flags = 0;
let timer = -1;

let isGameOver = false;
let isGameWon = false;

setInterval(() => { timerCounter() }, 1000)

const w = 40
const txtSize = w/2
const cols = 20
const rows = 20
const bombs = 40
const numberColors = ["white", "blue", "green", "red", "purple", "black", "maroon", "grey", "turquoise"]
let grid = make2Dgrid(cols, rows)

function setup() {
  createCanvas(cols*w+1, rows*w+1);

  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j)
    }
  }

  plantBombs();
  timerCounter();
  flagsCounter(0);

  countAllBombs();
}

function draw() {
  smooth();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(txtSize);
  background(100, 0, 0);

  let areAllNoneBombsRevealed = true;

  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      grid[i][j].display()
      grid[i][j].update()
      if (!grid[i][j].hasBomb && !grid[i][j].revealed && !isGameWon) areAllNoneBombsRevealed = false;
    }
  }
  
  if (areAllNoneBombsRevealed && !isGameOver) gameWon();
}


class Cell {  
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.clicked = false;
    this.rightClicked = false;
    this.revealed = false;
    this.hovered = false;
    this.hasBomb = false;
    this.flagged = false;
    this.exploded = false;
    this.bombsCount = 0;
  }
  
  display() {
      //colors
      switch(true) {
        case this.flagged: fill(255, 150, 0); break;
        case (this.hasBomb && this.revealed): fill(160, 20, 20); break;
        case this.revealed: fill(255); break;
        case this.hovered:  fill(150); break;
        default: fill(200);
      }
      stroke(0)
      rect(this.i*w, this.j*w, w, w);

      //numbers
      if (this.revealed && !this.hasBomb && this.bombsCount > 0) {
        noStroke()
        fill(numberColors[this.bombsCount]);
        text(this.bombsCount, this.i*w+(w/2), this.j*w+(w/2))
        this.flagged = false;
      }

      //exploded
      if (this.exploded) {
        noStroke()
        text("🔥", this.i*w+(w/2), this.j*w+(w/2))
      }

      //bombs
      if (this.revealed && this.hasBomb && !this.exploded) {
        noStroke()
        text("💣", this.i*w+(w/2), this.j*w+(w/2))
      }

      //flag
      if (!this.revealed && this.flagged) {
        noStroke()
        text("🚩", this.i*w+(w/2), this.j*w+(w/2))
      }
  }

  update() {
    if (!this.revealed && this.clicked && !this.flagged) {
      if (this.hasBomb && !isGameOver) { gameOver(this.i, this.j); }
      if (this.bombsCount == 0) floodFill(this.i, this.j)
      this.revealed = true;
      this.clicked = false;
    }
    if (!this.revealed && this.rightClicked) {
      if (this.flagged) flagsCounter(-1); else flagsCounter(1);
      this.flagged = !this.flagged;
      this.rightClicked = false;
    }
  }
}



function gameWon() {
  isGameWon = true;
  console.log("You Win")
  revealAllCells("flag_bombs")
}

function gameOver(cellI, cellJ) {
  grid[cellI][cellJ].exploded = true;
  isGameOver = true;
  console.log("You Lost")
  revealAllCells("no_flag_bombs")
}

function countAllBombs() {
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      grid[i][j].bombsCount = countBombs(i, j);
    }
  }
}

function revealAllCells(info) {
  //"no_flag_bombs" or "flag_bombs"
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      if (info == "flag_bombs" && grid[i][j].hasBomb) grid[i][j].flagged = true;
      grid[i][j].revealed = true;
    }
  }
}

function floodFill(cellI, cellJ) {  
  if (grid[cellI][cellJ].revealed || grid[cellI][cellJ].hasBomb || grid[cellI][cellJ].bombsCount > 0) return;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let searchI = cellI + i;
      let searchJ = cellJ + j;

      switch (true) {
        case searchI  < 0: continue;
        case searchI == cols: continue;
        case searchJ  < 0: continue;
        case searchJ == rows: continue;
      }

      grid[searchI][searchJ].clicked = true;
    }
  }
}

function plantBombs() {
  let bombs_to_plant = bombs;
  while (bombs_to_plant != 0) {
    let randI = floor(random(cols));
    let randJ = floor(random(rows));
    let selectedCell = grid[randI][randJ];
    if (!selectedCell.hasBomb) {
      selectedCell.hasBomb = true;
      bombs_to_plant--
    }
  }
}

function flagsCounter(n) {
  flags += n;
  let bombs_left = bombs - flags;
  mines_left_label.innerHTML = bombs_left + " bombs left";
}

function timerCounter() {
  if (isGameOver || isGameWon) return
  timer++;
  timer_label.innerHTML = timer + " seconds elapsed";
}

function countBombs(cellI, cellJ) {
  let adjacentBombs = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (i == 0 && j == 0) continue;

      let searchI = cellI + i;
      let searchJ = cellJ + j;

      switch (true) {
        case searchI  < 0: continue;
        case searchI == cols: continue;
        case searchJ  < 0: continue;
        case searchJ == rows: continue;
      }

      if (grid[searchI][searchJ].hasBomb) adjacentBombs++;
    }
  }
  return adjacentBombs;
}

function mouseMoved() {
  //Hovering
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      if (mouseX > grid[i][j].i*w && mouseX < grid[i][j].i*w+w && mouseY > grid[i][j].j*w && mouseY < grid[i][j].j*w+w) {
        grid[i][j].hovered = true;
      } else {
        grid[i][j].hovered = false;
      }
    }
  }
}

function mouseClicked() {
  //Revealing
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      if (mouseX > grid[i][j].i*w && mouseX < grid[i][j].i*w+w && mouseY > grid[i][j].j*w && mouseY < grid[i][j].j*w+w) {


        if (mouseButton === LEFT) {
          grid[i][j].clicked = true;
        }
        if (mouseButton === RIGHT) {
          grid[i][j].rightClicked = true;
        }

      }
    }
  }
}

function make2Dgrid(c, r) {
  let arr = new Array(c)

  for (let i = 0; i < c; i++) {
    arr[i] = new Array(r)
    for (let j = 0; j < r; j++) {
      arr[i][j] = ""
    }
  }
  return arr;
}
