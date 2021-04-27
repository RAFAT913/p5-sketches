let d1, d2
let player
let ground = 100
let pipes = []

function preload() {
  d1 = loadImage('img/d1.png')
  d2 = loadImage('img/d2.png')
}

function setup() {
  createCanvas(900, 900)
  player = new Player()
  angleMode(DEGREES);
  imageMode(CENTER);
  pipes.push(new Pipe());
}

function draw() {
  background("#2980b9")
  noStroke()

  
  player.render()
  player.update()
  
  for (let i = pipes.length-1; i >= 0; i--) {
    
    pipes[i].render()
    pipes[i].update()
    
    if (pipes[i].hits(player)) {
      console.log('HIT')
    }
    
    if (pipes[i].offscreen()) {
      // pipes.splice(i, 1)
      pipes[i] = new Pipe()
    }
    
  }

  fill("#27ae60")
  rect(0, height-ground, width, ground)
  
}

function keyPressed() {
  if (keyIsDown(ENTER)) player.jump()
}

