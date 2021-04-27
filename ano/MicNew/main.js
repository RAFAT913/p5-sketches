let mic
let bars = []
let levels = []

function setup() {
createCanvas(innerWidth, innerHeight)
  mic = new p5.AudioIn()
	mic.start()
	angleMode(DEGREES)
}

function draw() {
	background("#000")
	levels.push(mic.getLevel())

	if (levels.length > 360) {
		levels.shift()
	}

	stroke(255)
	strokeWeight(1)

	noFill()
	beginShape()
	if (levels.length != 360) vertex(width/2, height/2)
	for (let i = 0; i < levels.length; i++) {
		let r = 200 + levels[i] * 500
		let x = cos(i) * r
		let y = sin(i) * r
		vertex(x+width/2, y+height/2)
	}
	endShape(CLOSE)
}

