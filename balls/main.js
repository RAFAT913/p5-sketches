
let balls = [];

function setup() {
  createCanvas(500, 600);

  for(i = 0; i < 13; i++) {
    balls.push(new Ball())
  }

}



function draw() {

  background(30);
  noStroke()


  for(i = 0; i < 13; i++) {
    balls[i].display()
    balls[i].update()
  }

}



function Ball() {
  this.x = random(width);
  this.y = random(height);
  this.s = random(10, 30);
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  this.xdir = (random()*2)-1;
  this.ydir = (random()*2)-1;
  this.speed = random(3, 6);


  this.display = function() {
    fill(this.r, this.g, this.b)
    ellipse(this.x, this.y, this.s);
  }

  this.update = function() {
    this.x += this.xdir * this.speed;
    this.y += this.ydir * this.speed;


    if (this.x < 0) {
      this.xdir = -this.xdir
      this.changeColor()
    }

    if (this.x > width) {
      this.xdir = -this.xdir
      this.changeColor()
    }

    if (this.y < 0) {
      this.ydir = -this.ydir
      this.changeColor()
    }

    if (this.y > height) {
      this.ydir = -this.ydir
      this.changeColor()
    }
  }

  this.changeColor = function() {
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }

}