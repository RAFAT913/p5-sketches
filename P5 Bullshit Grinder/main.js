let r = 700
let step = 1  

let offset_x = 0

function setup() {
  createCanvas(800, 800)
  angleMode(DEGREES)
}

function draw() {
  translate(width/2, height/2)
  background(50)
  noStroke()
  fill(255)
  ellipse(0, 0, r)

  stroke(0)
  strokeWeight(3)
  smooth();

  frameRate(20)
  
  beginShape()
  for(let i = 0; i < 360; i+=step) {
    let mapped_noise = map(noise(offset_x)*r/4, 0, r/4, r/5, r/6)

    vertex(0, 0)
    vertex(cos(i)*(mapped_noise), sin(i)*(mapped_noise))
    offset_x += 0.05;
  }
  endShape(CLOSE)


}
