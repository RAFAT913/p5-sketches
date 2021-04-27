class Pipe {

    constructor() {
      this.x = 450;//width
      this.w = 100
      this.speed = 4
      this.highlight = false
      this.spacing = 200

      this.gap = random(this.spacing/2, height-this.spacing/2)
      this.top = this.gap - this.spacing/2
      this.bot = this.gap + this.spacing/2
    }

    render() {
        fill(255)
        if (this.highlight) {
          fill(255, 0, 0)
        }
        rect(this.x,  0,        this.w, this.top)
        rect(this.x,  this.bot, this.w, height)
    }

    update() {
        this.x -= this.speed
    }

    hits(player) {

      let p = {
        x: player.x - player.w/2,
        y: player.y - player.h/2,
        w: player.w,
        h: player.h
      }

      let r1 = {
        x: this.x,
        y: 0,
        w: this.w,
        h: this.top
      }

      let r2 = {
        x: this.x,
        y: this.bot,
        w: this.w,
        h: height - this.bot
      }

      if (p.x > r1.x && p.x < r1.x + r1.w) {
        if (p.y > r1.y && p.y < r1.y + r1.h) {
          this.highlight = true
          return true          
        }
      }

      if (p.x > r2.x && p.x < r2.x + r2.w) {
        if (p.y > r2.y && p.y < r2.y + r2.h) {
          this.highlight = true
          return true          
        }
      }

      this.highlight = false
      return false
    }

    offscreen() {
      if (this.x < -this.w) {
        return true
      } else {
        return false
      }
    }
    
}