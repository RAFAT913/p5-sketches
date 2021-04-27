class WireComp {
	constructor(x, y) {
		this.red = false
		this.blue = false
		this.star = false
		this.led = false
		this.state = ""

		this.x = x
		this.y = y

		this.w = 50
	}

	set_state() {
		if (this.red) this.state += 'R'
		if (this.blue) this.state += 'B'
		if (this.star) this.state += 'S'
		if (this.led) this.state += 'L'
	}

	update() {
	//   this.display = () => {
	//     noStroke()
	//     fill(this.color)
	//     rect(this.x, this.y, this.w, this.h)
	//   }
	
	//   this.update = () => {
	//     if (mouseX > this.x && mouseX < this.x + this.w) {
	//       if (mouseY > this.y && mouseY < this.y + this.h) {
	//         if (mouseIsPressed && canSelect && selectedStrip != -1) {
	//           this.selected = !this.selected
	//           canSelect = false
	//           selectedColor = this.color
	//         }
	//       }
	//     }
	
	//     if (!mouseIsPressed) canSelect = true
	//   }
	// }
	}

	render() {
	}


	solve() {
		this.set_state()

		let actions = {
			C: ["", "S", "RS"],
			D: ["L", "RBSL", "BS"],
			S: ["R", "B", "RB", "RBL"],
			P: ["RBS", "BSL", "BL"],
			B: ["RL", "RSL", "SL"]
		}

		let action_names = {
			C: "Cut",
			D: "Don't Cut",
			S: "Cut if Even",
			P: "Cut if Parallel",
			B: "Cut if more than one Battery"
		}

		for (const key in actions) {
			if (actions[key].includes(this.state)) {
				return action_names[key]
			}
		}

	}
}