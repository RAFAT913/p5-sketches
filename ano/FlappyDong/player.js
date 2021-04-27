
class Player {

    constructor() {
      this.x = 64
      this.y = height/2
      this.gravity = 0.7
      this.lift = -15
      this.vel = 0
			
			this.w = 35
			this.h = 70

      this.img = d1
      this.scale = 100
      this.img.resizeNN(this.scale, this.scale)
    }
  
    render() {
			fill(255)
    	image(this.img, this.x, this.y)
    }
  
    jump() {
      this.vel += this.lift;
    }
  
    update() {
      this.vel += this.gravity
      // this.vel *= 0.9
      this.y += this.vel
  
      if (this.y > height - this.scale - ground + 20) {
        this.y = height - this.scale - ground + 20
        this.vel = 0
      }
  
      if (this.y < -20) {
        this.y = 0
        this.vel = 0
      }
    }
  
  }
  
  