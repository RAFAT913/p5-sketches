
let arr = []


function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 10; i++) {
    arr.push(new circle(random(width), random(height), random(10, 50)))
  }
}


function draw() {
  
  background(50, 50, 50);
  noStroke();
  
  for (let i = 0; i < 10; i++) {
      arr[0].render()
  }
}



class circle {
  constructor(x, y, w) {
    this.x = x
    this.y = y
    this.w = w
  }

  render() {
    fill(255)
    ellipse(this.x, this.y, this.w)
  }

}

