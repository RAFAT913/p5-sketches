//214

let w

function setup() {
  createCanvas(600, 600);

  w = new WireComp(100, 100)
  console.log(w.solve())
}

function draw() {
  background(0);
  noStroke();

  w.render()
}