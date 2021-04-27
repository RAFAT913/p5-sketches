let resistorVal;
let resistorTol;

let colors = ["black", "#603000", "red", "orange", "yellow", "green", "blue", "purple", "grey", "white", "gold", "silver"]
let tols = [-1, 1, 2, -1, -1, 0.5, 0.25, 0.1, -1, -1, 5, 10]

let canSelect = true;

let selectedStrip = -1;
let selectedColor = "none";

let strips = []
let colorPickers = []

function setup() {
  createCanvas(600, 500)

  strips.push(new Strip(200, 50, 0));
  strips.push(new Strip(250, 50, 1));
  strips.push(new Strip(300, 50, 2));
  strips.push(new Strip(400, 50, 3));

  for (i = 0; i < colors.length; i++) {
    colorPickers.push(new ColorPicker(30*i + 130, 400, colors[i]));
  }
}


function draw() {
  background("#222")
  noStroke()

  fill("#e0be91")
  rect(170, 50, 280, 150)
  fill("black")
  rect(70, 125, 100, 10)
  rect(450, 125, 100, 10)

  for(let i = 0; i < 4; i++) {
    strips[i].display()
    strips[i].update()
  }

  for(let i = 0; i < colorPickers.length; i++) {
    colorPickers[i].display()
    colorPickers[i].update()
  }

  selecting();
  calculate();

}

function calculate() {
  let firstDigit = colors.indexOf(strips[0].color)
  let secondDigit = colors.indexOf(strips[1].color)
  let thirdDigit = colors.indexOf(strips[2].color)
  let fourDigit = colors.indexOf(strips[3].color)

  resistorVal = DigitsToVal(Number(String(firstDigit) + String(secondDigit)) * Math.pow(10, thirdDigit)) + " Ω"
  resistorTol = (tols[fourDigit] == -1 ? "" : " ± " + tols[fourDigit] + "%")

  fill(255)
  textSize(36)
  text(resistorVal + resistorTol, 200, 300)
}

function selecting() {
  if (selectedColor != "none" && selectedStrip != -1) {

    strips[selectedStrip].color = selectedColor

    for(let i = 0; i < 4; i++) {
      strips[i].selected = false
    }
  
    for(let i = 0; i < colorPickers.length; i++) {
      colorPickers[i].selected = false
    }

    selectedStrip = -1
    selectedColor = "none"
  }
}

function DigitsToVal(n) {
  let v = String(n)
  let zeros = 0;
  for(i = v.length-1; i >= 0; i--) {
    if (v.charAt(i) == "0") zeros++;
  }
  if (zeros >= 6) return n/1000000 + "M"
  if (zeros >= 3) return n/1000 + "K"
  return n
}

function Strip(x, y, i) {
  this.i = i
  this.x = x
  this.y = y
  this.w = 20
  this.h = 150
  this.color = "yellow"
  this.selected = false

  this.display = () => {
    noStroke()

    if (this.selected) {
      stroke("black")
      strokeWeight(2)
    }

    fill(this.color)
    rect(this.x, this.y, this.w, this.h)
  }

  this.update = () => {
    if (mouseX > this.x && mouseX < this.x + this.w) {
      if (mouseY > this.y && mouseY < this.y + this.h) {
        if (mouseIsPressed && canSelect) {
          if (selectedStrip != -1) strips[selectedStrip].selected = false;
          this.selected = !this.selected
          canSelect = false
          selectedStrip = this.i
        }
      }
    }

    if (!mouseIsPressed) canSelect = true
  }
}

function ColorPicker(x, y, col) {
  this.x = x
  this.y = y
  this.w = 30
  this.h = 30
  this.color = col
  this.selected = false

  this.display = () => {
    noStroke()
    fill(this.color)
    rect(this.x, this.y, this.w, this.h)
  }

  this.update = () => {
    if (mouseX > this.x && mouseX < this.x + this.w) {
      if (mouseY > this.y && mouseY < this.y + this.h) {
        if (mouseIsPressed && canSelect && selectedStrip != -1) {
          this.selected = !this.selected
          canSelect = false
          selectedColor = this.color
        }
      }
    }

    if (!mouseIsPressed) canSelect = true
  }
}
