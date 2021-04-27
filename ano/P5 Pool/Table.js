class Table {
	constructor(x, y, w, h) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		
		this.bounds = {
			top: 0,
			bottom: this.h,
			left: 0,
			right: this.w,
		}

		this.edges = []
		this.edges.push(new Edge(0, 0, w, 0))
		this.edges.push(new Edge(0, h, w, h))
		this.edges.push(new Edge(0, 0, 0, h))
		this.edges.push(new Edge(w, 0, w, h))

		this.balls = []
		let start = createVector((this.w/4)*3, this.h/2)
		let offset = createVector(21, 12)

		this.balls.push(new Ball(this.w/4, this.h/2, "#fff"))
		
		for (let i = 1; i <= 5; i++) {
			let mult,sign = 1
			i%2==0?mult=1:mult=0
			for (let j = 0; j < i; j++) {
				this.balls.push(new Ball(start.x+offset.x*(i-1), start.y+(offset.y*mult*sign), "#ff0"))
				mult==0?(i%2==1)?mult=2:mult=1:mult*=-1
				j!=0?(i%2==0&&j%2==1||i%2==1&&j%2==0)?mult+=2:null:null
			}
		}



		this.pockets = []
		this.pockets.push(new Pocket(0, 0))
		this.pockets.push(new Pocket(this.w/2, 0))
		this.pockets.push(new Pocket(this.w, 0))
		this.pockets.push(new Pocket(0, this.h))
		this.pockets.push(new Pocket(this.w/2, this.h))
		this.pockets.push(new Pocket(this.w, this.h))
	}


	render() {
		push()
		translate(this.x, this.y)
		noStroke()
		fill("#006266")
		rect(0, 0, this.w, this.h)

		for (let i = 0; i < this.edges.length; i++) {
				this.edges[i].render()
		}

		for (let i = 0; i < this.balls.length; i++) {
			this.balls[i].render()
			if (this.balls[i].dead) this.balls.splice(i, 1)
		}

		for (let i = 0; i < this.pockets.length; i++) {
			this.pockets[i].render()
		}
		pop()
	}

	update() {
		for (let i = 0; i < this.balls.length; i++) {
			this.balls[i].edgeCollide(this.bounds)
			this.balls[i].ballCollide(this.balls.filter((ball, index) => index != i))
			this.balls[i].pocketCollide(this.pockets)
			this.balls[i].update()
		}
	}

}