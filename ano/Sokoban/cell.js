class Cell {
    constructor(i, j, t) {
      this.i = i
      this.j = j
      this.x = this.i * w
			this.y = this.j * w
			this.t = t

			this.boxed = false
    }
  
    render() {
			switch (this.t) {
				case "player": fill("#FD7272"); break;
				case "box": fill("#EAB543"); break;
				case "wall": fill("#1C2A37"); break;
				case "goal": fill("#55E6C1"); break;
				case "empty": fill("#3C4A57"); break;
			}

			if (this.t == "goal") {
				strokeWeight(6)
				fill("#3C4A57")
				rect(this.x, this.y, w, w)
				strokeWeight(0)
				fill("#55E6C1")
				ellipse(this.x+w/2, this.y+w/2, w/2)
			} else {
				if (this.boxed && this.t == "box") fill("#fAe573")
				stroke("#2C3A47")
				strokeWeight(6)
				rect(this.x, this.y, w, w)
			}
		}
		
		move(i, j) {
			let targetPos = {i:this.i + i, j:this.j + j}

			if (targetPos.i < 0 || targetPos.i >= cols) return 1
			if (targetPos.j < 0 || targetPos.j >= rows) return 1

			let curr = grid[this.i][this.j]
			let target = grid[targetPos.i][targetPos.j]

			if (target.t == "wall") return 1
			if (this.t == "goal") return 1

			if (this.t == "player" && target.t == "box") {
				let status = grid[targetPos.i][targetPos.j].move(i, j)
				if (status) return
			}
			
			if (this.t == "player") {
				player.i = targetPos.i
				player.j = targetPos.j
			}
			
			if (this.t == "box") {
				if (target.t == "box") return 1
				for(let i = 0; i < boxes.length; i++) {
					if (curr.i == boxes[i].i && curr.j == boxes[i].j) {
						boxes[i].i = targetPos.i
						boxes[i].j = targetPos.j
					}
				}
			}

			let type = this.t
			curr.t = "empty"
			target.t = type
			
			if (this.t == "box") return 0

			for(let i = 0; i < goals.length; i++) {
				if (target.t == "box" && goals[i].i == target.i && goals[i].j == target.j) {
					target.boxed = true
				}

				if (goals[i].i == this.i && goals[i].j == this.j) {
					this.t = "goal"
				}

				// let boxed_boxes = 0
				// for(let j = 0; j < boxes.length; j++) {
				// 	if (target.t == "goal" && goals[i].i == boxes[j].i && goals[i].j == boxes[j].j) {
				// 		boxed_boxes++
				// 		console.log("boxed")
				// 	}
				// }

				// if (boxed_boxes == boxes.length) alert("you won gtfo")

			}

		}

  }
