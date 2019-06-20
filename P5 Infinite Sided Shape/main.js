let total_angle = 180
let sides = (total_angle+360)/180
let single_angle = total_angle/sides

let single_angle_old = 0
let single_angle_delta = 0

let r = 200
let points = []

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(50, 50, 50)
  noStroke()

  push()
  translate(width/2, height/2)

  noFill()
  stroke(255)
  strokeWeight(1)
  beginShape()
  
  push()
  points = [];
  for(let i = 0; i < sides; i++) {
    vertex(cos(i*(180 - single_angle)) * r, sin(i*(180 - single_angle)) * r);
  }
  pop()
  
  endShape(CLOSE)
  pop()

  fill(255);
  text("total " + total_angle, 10, 20)
  text("sides " + sides, 10, 40)
  text("single " + single_angle, 10, 60)
  text("single inc " + single_angle_delta, 10, 80)

  // while (single_angle < 144) {
  //   next();
  // }
}

function next() {
  total_angle += 180
  sides = (total_angle+360)/180
  single_angle_old = single_angle
  single_angle = total_angle/sides
  single_angle_delta = single_angle - single_angle_old
}

function prev() {
  total_angle -= 180
  sides = (total_angle+360)/180
  single_angle_old = single_angle
  single_angle = total_angle/sides
  single_angle_delta = single_angle - single_angle_old
}