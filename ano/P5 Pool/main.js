// p5.disableFriendlyErrors = true;

let table
let mouse = {x:0, y:0}

function setup() {
  // angleMode(DEGREES)
  createCanvas(700, 700)
  table = new Table(50, 50, 600, 300)
  
  
  // table.balls[0].shoot(createVector(20, 0))

  // table.balls[0].handHeld= true
  // table.balls[0].debug = true
  // table.balls[1].shoot(createVector(0, 0))
}

function draw() {
  background("#130f40")
  // noStroke()
  table.update()
  table.render()

  mouse.x = mouseX - 50
  mouse.y = mouseY - 50
}
