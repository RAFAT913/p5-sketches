let r = 700
let step = 1
let speed = 1
let delta = speed

function setup() {
  createCanvas(800, 800)
  angleMode(DEGREES)
}

function draw() {
  translate(width/2, height/2)
  background(51)
  noStroke()
  fill(255)
  ellipse(0, 0, r)

  stroke(0)
  strokeWeight(5)
  smooth();

  beginShape()
  for(let i = 0; i < 360; i+=step) {
    vertex(cos(i)*(r/4), sin(i)*(r/4))
  }
  endShape(CLOSE)

  
  step+=delta
  // step = map(mouseX, 0, width, 1, 180)

  if (step < 1) { step = 1; delta = speed}
  if (step > 180) { step = 180; delta = -speed}
}
