//var myFont;
//function preload() {  myFont = loadFont('04B_03__.TTF');}

function setup(){
  createCanvas(500, 500);
  angleMode(DEGREES);
}
  
function draw(){
  var sc = second();
  var mn = minute();
  var hr = hour();

  background("#333");
  translate(width/2, height/2);
  noStroke();
  textAlign(CENTER);
  fill(255);
  textSize(60);
  textAlign(CENTER);

  text("12", 0, -170);
  text("3", 190, 20);
  text("6", 0, 200);
  text("9", -190, 20);

  push();
    rotate(map(sc, 0, 60, 0 ,360));
    stroke("red");
    strokeWeight(1.5);
    line(0, 0, 0, -200);
  pop();
  
  push();
    rotate(map(mn, 0, 60, 0 ,360));
    stroke(255);
    strokeWeight(3);
    line(0, 0, 0, -140);
  pop();

  push();
    rotate(map(hr % 12, 0, 60, 0 ,360));
    stroke(255);
    strokeWeight(5);
    line(0, 0, 0, -70);
  pop();

  stroke(0, 102, 153);
  strokeWeight(15);
  point(0, 0);
  noFill();
  stroke(0, 102, 153);
  strokeWeight(2);
  ellipse(0, 0, 440, 440); 

}