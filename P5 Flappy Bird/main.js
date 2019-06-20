let bird;
let gravity = 0.1;
let jump = 3;

function setup() {
  createCanvas(500, 500);

  b = {
    x: width/4,
    y: height/4,
    x_vel: 0,
    y_vel: 0,
    x_acc: 0,
    y_acc: 0
  }

}

function draw() {
  background(50, 50, 50);
  noStroke();

  fill("white")
  ellipse(b.x, b.y, 30)

  b.x_vel += b.x_acc;
  b.y_vel += b.y_acc;
  b.x += b.x_vel;
  b.y += b.y_vel;

  b.y_acc += gravity
}


function mousePressed() {
  b.y_acc = -jump;
}