class Vec2 {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.update()
	}
	
	//should be called within class right after x, y manipulation
	update() {
		this.i = this.x
		this.j = this.y
		this.w = this.x
		this.h = this.y
	}

	//Manipulatore
	addVec(vec2) {
		this.x += vec2.x
		this.y += vec2.y
		this.update()
	}
	subVec(vec2) {
		this.x -= vec2.x
		this.y -= vec2.y
		this.update()
	}
	multVec(vec2) {
		this.x *= vec2.x
		this.y *= vec2.y
		this.update()
	}
	divVec(vec2) {
		this.x /= vec2.x
		this.y /= vec2.y
		this.update()
	}

	//Getters
	add(vec2) {
		return new Vec2(
			this.x + vec2.x,
			this.y + vec2.y
		)
	}
	sub(vec2) {
		return new Vec2(
			this.x - vec2.x,
			this.y - vec2.y
		)
	}
	mult(vec2) {
		return new Vec2(
			this.x * vec2.x,
			this.y * vec2.y
		)
	}
	div(vec2) {
		return new Vec2(
			this.x / vec2.x,
			this.y / vec2.y
		)
	}
}