document.oncontextmenu = function() {
  return false;
}

let grids = []
let gridInd = 0;
let isPaused = false;
let isBuilding = false;
let isStepping = false;
let isRotating = false;
let isFlipping = false;

//"test", "demo", "scale", "big"
let mode = "demo"

let w;
let cols;
let rows;

if (mode == "demo") {
  w = 4
  cols = 341
  rows = 191
} else if (mode == "test") {
  w = 8
  cols = 170
  rows = 70
} else if (mode == "scale") {
  w = 2
  cols = 683
  rows = 383//316
} else if (mode == "big") {
  w = 12
  cols = 113
  rows = 52//316
}

let glider = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1]
]

let eater = [
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 1, 1],
]

let lwsp = [
  [0, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0],
]

let replicator = [
  [0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 0, 0],
]



let structureSelector = 0;
let structures = [glider, lwsp, replicator, eater]

function setup() {
  createCanvas(cols*w, rows*w)

  grids.push(createGrid(cols, rows))
  grids.push(createGrid(cols, rows))

  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      grids[gridInd][i][j] = round(random(0, 1));
      // grids[gridInd][i][j] = 0;
    }
  }
}

function draw() {
  frameRate(20)
  background(0);
  noStroke();

  let currentGrid = grids[(gridInd)%2]
  let newGrid = grids[(gridInd+1)%2]
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (currentGrid[i][j] == 0) continue
      fill(255);
      rect(i*w, j*w, w-1, w-1);
    }
  }

  if (!isPaused || isStepping) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = currentGrid[i][j]
        let aliveNeighbors = countAliveNeighbors(currentGrid, i, j)

        //survive, born
        // rules = "23/3"
        // rules.split("/").forEach(element => {
          
        // });

        //death
        if (state && aliveNeighbors <= 1) newGrid[i][j] = 0;
        //birth
        else if (!state && (aliveNeighbors == 3 || aliveNeighbors == 6)) newGrid[i][j] = 1;
        //survival
        else if (state && (aliveNeighbors == 3 || aliveNeighbors == 2)) newGrid[i][j] = 1;
        //more death
        else if (state && aliveNeighbors >= 4) newGrid[i][j] = 0;

        else newGrid[i][j] = currentGrid[i][j]
      }
    }
    gridInd++
    isStepping = false
  }

  //Pause Mode
  if (isPaused) {

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (mouseX > i*w && mouseX < i*w+w) {
          if (mouseY > j*w && mouseY < j*w+w) {
            
            if (!isBuilding) {
              if (mouseIsPressed) {
                //Adding And removing cells
                if (mouseButton == LEFT) currentGrid[i][j] = 1;
                if (mouseButton == RIGHT) currentGrid[i][j] = 0;
              }
              
            } else if (isBuilding) {
              //Adding And removing structures
              let structure = structures[structureSelector];
              for (let ii = 0; ii < structure.length; ii++) {
                for (let jj = 0; jj < structure[ii].length; jj++) {

                  let bi = (i + ii + cols) % cols;
                  let bj = (j + jj + rows) % rows;

                  if (isBuilding && isRotating) {
                    rotateMatrix(structure)
                    isRotating = false
                  }

                  if (isBuilding && isFlipping) {
                    flipMatrix(structure)
                    isFlipping = false
                  }

                  if (structure[ii][jj] == 1) {
                    fill(255, 0, 0);
                    rect(bi*w, bj*w, w-1, w-1);
                  }

                  if (mouseIsPressed) {
                    if (structure[ii][jj] == 1) currentGrid[bi][bj] = 1;
                  }

                }
              }
            }

          }
        }
      }
    }
    
  }

}




function keyPressed() {
  if (keyCode == SHIFT) isPaused = !isPaused
  if (key == 'B') isBuilding = !isBuilding
  if (keyCode == RIGHT_ARROW && isPaused) isStepping = true
  if (key == 'R' && isBuilding) isRotating = true
  if (key == 'F' && isBuilding) isFlipping = true

  if (keyCode == UP_ARROW && isPaused) {
    if (structureSelector + 1 == structures.length) structureSelector = 0; else structureSelector++;
  }

  if (keyCode == DOWN_ARROW && isPaused) {
    if (structureSelector - 1 == -1) structureSelector = structures.length-1; else structureSelector--;
  }

  if (keyCode == BACKSPACE) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grids[(gridInd)%2][i][j] = 0;
      }
    }
  }
  
}


function createGrid(cols, rows) {
  let grid = new Array(cols)
  for (i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows)
  }
  return grid;
}

function countAliveNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function isOutOfBounds(i, j) {
  switch (true) {
    case i < 0:
    case j < 0:
    case i > cols:
    case j > rows: return true;
    default: return false;
  }
}

function flipMatrix(matrix) {
  matrix = matrix.reverse()
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
}

function rotateMatrix(matrix) {
   matrix = matrix.reverse();
   for (var i = 0; i < matrix.length; i++) {
     for (var j = 0; j < i; j++) {
       var temp = matrix[i][j];
       matrix[i][j] = matrix[j][i];
       matrix[j][i] = temp;
     }
   }
}
