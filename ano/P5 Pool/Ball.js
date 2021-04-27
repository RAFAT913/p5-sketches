class Ball {
	constructor(x, y, col) {
		this.pos = createVector(x, y)
		this.vel = createVector(0, 0)
		this.acc = createVector(0, 0)

		this.friction = 0.98
		this.solidity = 0.85
		
		this.col = col
		this.d = 24
		this.r = this.d/2
		this.dead = false

		this.handHeld = false
		this.debug = false
	}

	render() {
		noStroke()
		fill(this.col)
		ellipse(this.pos.x, this.pos.y, this.d)
	}

	update() {
		if (this.handHeld) {
			this.pos.x = mouse.x
			this.pos.y = mouse.y
		}

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		
		// friction
		if (this.vel.mag() > 0.01) {
				this.vel.mult(this.friction)
				// this.vel.x -= this.friction
				// this.vel.y -= this.friction
		} else {
				this.vel.mult(0)
		}
		
		this.acc.mult(0);
	}

	edgeCollide(bounds) {
		if (this.pos.x+this.r > bounds.right || this.pos.x-this.r < bounds.left) {
				this.vel.x *= -1
				this.acc.x *= -1
		}

		if (this.pos.y+this.r > bounds.bottom || this.pos.y-this.r < bounds.top) {
				this.vel.y *= -1
				this.acc.y *= -1
		}

		this.pos.x = constrain(this.pos.x, bounds.left+this.r, bounds.right-this.r)
		this.pos.y = constrain(this.pos.y, bounds.top+this.r, bounds.bottom-this.r)
	}

	ballCollide(balls) {
		for (let i = 0; i < balls.length; i++) {
			let dist = p5.Vector.sub(balls[i].pos, this.pos)

			// if (this.debug) drawVec(this.pos, dist, "white")
			
			if (dist.mag() <= balls[i].r + this.r){
				
				dist = dist.normalize()
				
				this.pos.sub(dist.mult(0.5))
				
				let negative_dist = dist.mult(-1).normalize()
				let nV = createVector(-negative_dist.y, negative_dist.x).normalize()
				let other_vel = balls[i].vel.mag()
				
				this.vel.mult(0.75)
				balls[i].vel.mult(0.75)
				
				this.acc.add(negative_dist.mult(this.solidity*other_vel))
				balls[i].acc.add(-nV.mult(this.solidity*other_vel))
				
				playSound("ball_hit", 1)
			}
		}
		
	}

	pocketCollide(pockets) {
		for (let i = 0; i < pockets.length; i++) {
			let dist = p5.Vector.sub(pockets[i].pos, this.pos).mag()
			dist -= pockets[i].r

			if (dist <= 1 && dist >= 0) {
				this.dead = true
			}

			// fill(255)
			// text(dist, 200, 500+(20*i))
		}
	}

	shoot(force) {
		this.acc.x = force.x
		this.acc.y = force.y
	}
}

