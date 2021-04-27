let w = 80
let cols = 10
let rows = 10
let offsetX = 80
let offsetY = 140

let currentPlayer = 0
let claimedABox = false

let nodes = []
let lines = []
let boxes = []
let players = []

function setup() {
  createCanvas(900, 900)

  players.push(new player("#e74c3c", (2*w) + offsetX, 50))
  players.push(new player("#3498db", (7*w) + offsetX, 50))
  // players.push(new player("#2ecc71", (8*w) + offsetX, 50))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      nodes.push(new Node(i, j))
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      if (i+1 < rows) {
        lines.push(new Line(i, j, i+1, j))
      }

      if (j+1 < cols) {
        lines.push(new Line(i, j, i, j+1))
      }
    }
  }
  
  for (let i = 0; i < (cols-1) * (rows-1); i++) {
    let t = 0  + (i*2) + floor(i/(cols-1))
    let r = ((rows-1)*2)+2 + (i*2) + floor(i/(cols-1))
    let b = 2  + (i*2) + floor(i/(cols-1))
    let l = 1  + (i*2) + floor(i/(cols-1))
    if (i >= ((cols-1) * (rows-1)) - (rows-1)) r -= (i%(cols-1))+1
    boxes.push(new Box(lines[t], lines[r], lines[b], lines[l]))
  }
}


function draw() {
  background("#fff");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].render()
    boxes[i].update()
  }

  for (let i = 0; i < lines.length; i++) {
    lines[i].render()
  }

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].render()
  }

  for (let i = 0; i < players.length; i++) {
    players[i].render()
  }

}


function mouseClicked() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].click()
  }
}


function nextTurn() {
  currentPlayer++
  if (currentPlayer >= players.length) currentPlayer = 0
  claimedABox = false
}

function prevTurn() {
  currentPlayer--
  if (currentPlayer < 0) currentPlayer = players.length-1
}
