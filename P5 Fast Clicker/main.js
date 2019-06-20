let score = 0;
let isCounting = false;
let timer = 300;

let usernameInput;
let submitBtn;

function setup() {
  createCanvas(500, 500);
  usernameInput = createInput();
  submitBtn = createButton("Submit");

  submitBtn.mousePressed(post);
}


function draw() {
  background(50, 50, 50);
  noStroke();
  textSize(182);
  textAlign(CENTER);
  fill(255);
  text(score, width/2, height/2);

  textSize(32);
  textAlign(LEFT);
  text(timer, 10, 42);

  if(isCounting && timer > 0) timer--
}


function mousePressed() {
  if (!isCounting) {
    isCounting = true
    score++;
  }

  if (isCounting && timer > 0) {
    score++;
  }
}


function post() {

}
