let paddle_left, paddle_right, ball

function setup() {
  createCanvas(innerWidth, innerHeight)
  let paddle_size = new Vec2(20, 120)
  let ball_size = new Vec2(20, 20)

  paddle_left = new Paddle(100, 10, paddle_size.x, paddle_size.y)
  paddle_right = new Paddle(width - paddle_size.x - 100, 10, paddle_size.x, paddle_size.y)
  ball = new Ball(width/2, height/2, ball_size.x)
}

function draw() {
  windowResized()
  background(0)
  noStroke()

  paddle_left.render()
  paddle_left.update()
  
  paddle_right.render()
  paddle_right.update()

  ball.render()
  ball.update()


  if (keyIsDown(UP_ARROW))    paddle_right.move(new Vec2( 0,-1))
  if (keyIsDown(DOWN_ARROW))  paddle_right.move(new Vec2( 0, 1))
  if (keyIsDown(87))          paddle_left.move( new Vec2( 0,-1))
  if (keyIsDown(83))          paddle_left.move( new Vec2( 0, 1))
  
  // text(paddle_left.score + " " + paddle_right.score, width/2, 20)
}


class Paddle {
  constructor(x, y, w, h) {
    this.pos = new Vec2(x, y)
    this.w = w
    this.h = h
    this.speed = 20
    this.score = 0
    this.isColliding = false
    this.isCollided = false
  }

  render() {
    fill(255)
    rect(this.pos.x, this.pos.y, this.w, this.h)
  }
  
  update() {
    if (this.isBallColliding()) {
      ball.bounceX()
      ball.bounceY()
    }

    //if (ball.pos.x - ball.w < this.pos.x && ball.pos.y > this.pos.y && ball.pos.y < this.pos.y + this.h) ball.dir_x = -ball.dir_x
    //if (ball.pos.x + ball.w > this.pos.x && ball.pos.y > this.pos.y && ball.pos.y < this.pos.y + this.h) ball.dir_x = -ball.dir_x
  }

  isBallColliding() {
      if (this.pos.x < ball.pos.x + ball.w
      &&  this.pos.x + this.w > ball.pos.x
      &&  this.pos.y < ball.pos.y + ball.h
      &&  this.pos.y + this.h > ball.pos.y) {
        return true
      }
      return false
  }

  move(dir) {
    let offset = dir.mult(this.speed)
    this.pos = this.pos.add(offset.x, offset.y)
  }

  addScore(score) {
    this.score += score
  }

}


class Ball {
  constructor(x, y, w) {
    this.pos = new Vec2(x, y)
    this.w = w
    this.h = w
    this.speed = 15
    this.dir = new Vec2(randSign(), randSign())
    this.isCo
  }

  render() {
    fill(255)
    rect(this.pos.x, this.pos.y, this.w, this.h)
  }

  update() {
    if (this.pos.x < 0) {
      paddle_right.addScore(1)
    }

    if (this.pos.x > width) {
      paddle_left.addScore(1)
    }

    if (this.pos.y < 0)               this.dir.y = -this.dir.y
    if (this.pos.y + this.h > height) this.dir.y = -this.dir.y

    this.pos = this.pos.add(this.dir.x * this.speed, this.dir.y * this.speed)

  }

  bounceX() {
    this.dir.x = -this.dir.x
  }

  bounceY() {
    this.dir.y = -this.dir.y
  }

}


class Vec2 {
  constructor(x, y) {
    this.x = x
    this.i = x
    this.y = y
    this.j = y
  }

  add(x, y) {
    return new Vec2(this.x + x, this.y + y)
  }

  mult(scaler) {
    return new Vec2(this.x * scaler, this.y * scaler)
  }
}


function windowResized() {
  if (width != innerWidth || height != innerHeight) {
    resizeCanvas(innerWidth, innerHeight)
  }
}


function randSign() {
  return (floor((random() * 2)) *2) - 1;
}