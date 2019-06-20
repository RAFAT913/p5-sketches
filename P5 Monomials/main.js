// let a = "x^2"
// let b = "3"
// let w = 100

let mono = new Monomial(1, 'z', 0)

function setup() {
  createCanvas(800, 800)
}

// mono.Power(2)
// mono.Multiply(3)

function draw() {
  background(50)
  noStroke()
  fill(255)

  let factored = mono.Get()

  // rect(0*w, 0*w, sqrt(sq1)*w, sqrt(sq1)*w)
  // rect(sqrt(sq1)*w, sqrt(sq1)*w, sqrt(sq2)*w, sqrt(sq2)*w)

  textSize(72)
  text(factored, 20, 72)
}


function Monomial(coefficient = 1, variable = '', power = 1) {
  this.coefficient = coefficient
  this.variable = variable
  this.power = power

  this.Get = () => {
    
    if (this.power == 0) {
      this.coefficient = 1
      this.variable = ''
    }

    if (this.power == 0) {
      this.coefficient = 1
      this.variable = ''
    }

    if (this.coefficient == 0) {
      this.variable = ''
      this.power = 1
    }

    return (this.coefficient == 1 ? '': this.coefficient) + this.variable + (this.power == 1 ? '': "^" + this.power)
  }

  this.Multiply = (mul) => {
    this.coefficient *= mul
  }

  this.Power = (pow) => {
    this.power *= pow
  }

}

