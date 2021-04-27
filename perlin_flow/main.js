let inc = 0.1
let speed = 0.01
let w = 35
let noise_x = 0
let noise_y = 0

function setup() {
  createCanvas(innerWidth, innerHeight)
  angleMode(DEGREES)
  smooth()

  start_x = random(10)
  start_y = random(10)
}

function draw() {
  background(0)
  stroke(255)
  
  noise_y = start_y
  
  for (let y = 0; y < height; y+=w) {
    noise_x = start_x
    noise_y += inc
    
    for (let x = 0; x < width; x+=w) {
      noise_x += inc
      hair(x, y, noise(noise_x, noise_y))
    }
  }

  start_x += speed
  start_y += speed
}

function hair(x, y, f) {
  push()
    translate(x, y)
    rotate(r2d(cart2polar(mouseX-x, mouseY-y)) + 110)
    rotate(f * 180)
    strokeWeight(2)
    strokeCap(SQUARE)
    line(0, 0, w, 0)
  pop()
}

// function polar2cart(R, theta) {
//   this.x = R * Math.cos(theta);
//   this.y = R * Math.sin(theta);
// }

function cart2polar(x, y) {
  //theta = Math.atan2(y, x)
  theta = Math.PI + Math.atan2(y, x)
  return theta + 240
}

function r2d(radians) {
  var pi = Math.PI;
  return radians * (180/pi);
}