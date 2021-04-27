let theta1 = 0;
let speed1 = 4;

let theta2 = 0;
let speed2 = 1;

let offX = 170;
let offY = 0;

let r = 700;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
}

function draw() {
  translate(width/2, height/2);
  background(51);
  noStroke();
  
  fill(255);
  ellipse(0, 0, r);
  
  push();
  rotate(theta1)
  theta1 += speed1;

  
  fill(50)
  for(let i = 0; i < 360; i+=1) {
    push()
      translate(cos(i)*(r/4), sin(i)*(r/4));
      rotate(theta2);
      if (i % 360 == 0) ellipse(offX, offY, 20);
    pop();
  }
  
  theta2 += speed2;
  pop();
}
