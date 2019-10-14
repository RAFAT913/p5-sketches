
let c;

function setup() {
  createCanvas(innerWidth, innerHeight)
  angleMode(DEGREES)

  c = new Card(100, 200, 'red', 1, true)
}

function draw() {
  background("#333")
  noStroke()

  c.render()
}

function windowResized() {
  createCanvas(innerWidth, innerHeight)
}

