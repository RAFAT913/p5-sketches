class ClipRound {
  constructor(is_bullet) {
    this.theta = theta
    this.is_bullet = this.is_bullet
    clip_size++

    this.is_bullet = is_bullet
    this.i = 0
    this.x = 0
    this.y = 0
  }

  render() {
    this.x = cos(theta*this.i+offset) * r
    this.y = sin(theta*this.i+offset) * r

    fill("black")
    if (this.is_bullet) fill("#e74c3c")
    ellipse(this.x, this.y, w)
  }
}


let clip_size = 0
let clip = []
let offset = 0
let w = 100
let r = 120
let theta
let theta_loading = 0

function setup() {
  angleMode(DEGREES)
  createCanvas(innerWidth, innerHeight)

  clip.push(new ClipRound(true))
  clip.push(new ClipRound(false))
  clip.push(new ClipRound(false))
  clip.push(new ClipRound(false))
  clip.push(new ClipRound(false))
  clip.push(new ClipRound(false))

  spin()

  theta = 360/clip_size
}


function draw() {
  background(0)
  noStroke()
  translate(width/2, height/2)

  fill("white")
  ellipse(0, 0, 400)
  fill("black")
  ellipse(0, 0, 50)

  for (let i = 0; i < clip_size; i++) {
    clip[i].i = i
    clip[i].render()
  }

  offset++


  fill("blue")
  ellipse(cos(theta_loading)*r, sin(theta_loading)*r, 10)

  for (let i = 0; i < clip; i++) {
    
  }

}



function spin() {
  let j, x;
  for (let i = clip.length - 1; i > 0; i--) {
      j = floor(random() * (i + 1));
      x = clip[i];
      clip[i] = clip[j];
      clip[j] = x;
  }
}

function dist(x1, y1, x2, y2) {
  var deltaX = diff(x1, x2)
  var deltaY = diff(y1, y2)
  var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
  return (dist)
}