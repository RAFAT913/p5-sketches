let mic
let bars = []
let levels = []
let barsAmount = 100

function setup() {
createCanvas(800, 800)
  mic = new p5.AudioIn()
	mic.start()
	
	for (let i = 0; i < barsAmount; i++) {
		bars.push(new Bar((i*8), height, 1))
	}
}

function draw() {
	background("#2f3542")
	levels.push(mic.getLevel())

	if (levels.length > barsAmount) {
		levels.shift()
	}

	for (let i = 0; i < bars.length; i++) {
		bars[i].val = levels[i]
		bars[i].render()
	}
}

// ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);

class Bar {
    constructor(x, y, val) {
        this.x = x
        this.y = y
				this.val = val
				this.w = 5
    }

    render() {
				this.h = -this.val*1000
				this.col = "255"

				switch (true) {
					case -this.h >= height: this.col = "#ff6b81"; break;
					case -this.h >= (height/4)*3: this.col = "#eccc68"; break;
					case -this.h >= height/2: this.col = "#7bed9f"; break;
					case -this.h >= height/4: this.col = "#70a1ff"; break;
					default: this.col = "#5352ed"; break;
				}

				fill(this.col)
				noStroke()
        rect(this.x, this.y, this.w, this.h)
    }
}