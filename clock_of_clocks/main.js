let w = 50
let screens = []

var myFont
function preload() {
//  myFont = loadFont('Kodchasan-Medium.ttf')
}


function setup() {
  angleMode(DEGREES)
  createCanvas(w*34, w*6)

  for (let i = 0; i < 6; i++) {
    let screen = new Screen(i*4, 0)
    screens.push(screen)
    screen.init()
  }
}


function draw() {
  background("#e0e0e0")


  for (let i = 0; i < screens.length; i++) {
    screens[i].display()
  }

  //Hour
  let h = hour()
  let hr = ""
  // if (h > 12) h -= 12
  if (h.toString().length == 1) hr = "0" + h.toString(); else hr = h.toString()

  //Minutes
  let m = minute()
  let mn = ""
  if (m.toString().length == 1) mn = "0" + m.toString(); else mn = m.toString()

  //Seconds
  let s = second()
  let sec = ""
  if (s.toString().length < 2) sec = "0" + s.toString(); else sec = s.toString()

  screens[0].displayed = hr.toString().charAt(0)
  screens[1].displayed = hr.toString().charAt(1)

  screens[2].displayed = mn.toString().charAt(0)
  screens[3].displayed = mn.toString().charAt(1)

  screens[4].displayed = sec.toString().charAt(0)
  screens[5].displayed = sec.toString().charAt(1)
}


function Screen (i, j) {
  this.i = i
  this.j = j
  this.x = this.i * w
  this.y = this.j * w

  this.clocks = []
  this.displayed = ":"
  this.Handspeed = 5

  this.init = function() {
    for(let i = 0; i < 4; i++) {
      let clocksTempHolder = []
      for(let j = 0; j < 6; j++) {
        let c = new Clock(this.i + i, this.j + j)
        c.speed = this.Handspeed
        clocksTempHolder.push(c)
      }
      this.clocks.push(clocksTempHolder)
    }
  }

  this.display = function() {
    let targetAngles = this.engine()
    let targetAnglesCounter = 0

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {

        this.clocks[i][j].Hand1TargetTheta = targetAngles[targetAnglesCounter].h1
        this.clocks[i][j].Hand2TargetTheta = targetAngles[targetAnglesCounter].h2

        this.clocks[i][j].display()
        targetAnglesCounter++
      }
    }
  }


  this.engine = function() {
    let selectedShape = []

    switch (this.displayed) {
      case "0": selectedShape = ["tl", "v", "v", "v", "v", "bl", "h", "tl", "v", "v", "bl", "h", "h", "tr", "v", "v", "br", "h", "tr", "v", "v", "v", "v", "br"]; break
      case "1": selectedShape = ["tl", "v", "v", "v", "v", "bl", "tr", "v", "v", "v", "v", "br", "", "", "", "", "", "", "", "", "", "", "", ""]; break
      case "2": selectedShape = ["tl", "bl", "tl", "v", "v", "bl", "h", "h", "h", "tl", "bl", "h", "h", "tr", "br", "h", "h", "h", "tr", "v", "v", "br", "tr", "br"]; break
      case "3": selectedShape = ["tl", "bl", "tl", "bl", "tl", "bl", "h", "h", "h", "h", "h", "h", "h", "tr", "br", "tr", "br", "h", "tr", "v", "v", "v", "v", "br"]; break
      case "4": selectedShape = ["tl", "v", "v", "bl", "", "", "tr", "v", "bl", "h", "", "", "tl", "v", "br", "tr", "v", "bl", "tr", "v", "v", "v", "v", "br"]; break
      case "5": selectedShape = ["tl", "v", "v", "bl", "tl", "bl", "h", "tl", "bl", "h", "h", "h", "h", "h", "h", "tr", "br", "h", "tr", "br", "tr", "v", "v", "br"]; break
      case "6": selectedShape = ["tl", "v", "v", "v", "v", "bl", "h", "tl", "bl", "tl", "bl", "h", "h", "h", "h", "tr", "br", "h", "tr", "br", "tr", "v", "v", "br"]; break
      case "7": selectedShape = ["tl", "bl", "", "", "", "", "h", "h", "", "", "", "", "h", "tr", "v", "v", "v", "bl", "tr", "v", "v", "v", "v", "br"]; break
      case "8": selectedShape = ["tl", "v", "v", "v", "v", "bl", "h", "tl", "bl", "tl", "bl", "h", "h", "tr", "br", "tr", "br", "h", "tr", "v", "v", "v", "v", "br"]; break
      case "9": selectedShape = ["tl", "v", "v", "bl", "tl", "bl", "h", "tl", "bl", "h", "h", "h", "h", "tr", "br", "tr", "br", "h", "tr", "v", "v", "v", "v", "br"]; break
      case ":": selectedShape = ["", "", "", "", "", "", "", "tl", "bl", "tl", "bl", "", "", "tr", "br", "tr", "br", "", "", "", "", "", "", ""]; break
    }

    let selectedAngles = []
    for (let i = 0; i < 24; i++) {
      switch (selectedShape[i]) {
        case "br": selectedAngles.push({h1: 0, h2: 270}); break
        case "bl": selectedAngles.push({h1: 0, h2: 90}); break
        case "tr": selectedAngles.push({h1: 180, h2: 270}); break
        case "tl": selectedAngles.push({h1: 90, h2: 180}); break
        case "v": selectedAngles.push({h1: 0, h2: 180}); break
        case "h": selectedAngles.push({h1: 90, h2: 270}); break
        case "": selectedAngles.push({h1: 0, h2: 0}); break
      }
    }
    
    return selectedAngles
  }

}




function Clock(i, j) {
  this.i = i
  this.j = j
  this.x = this.i * w
  this.y = this.j * w
  this.speed = 1
  this.blinkCounter = 60;

  this.Hand1Theta = [0, 90, 180, 270][floor(random(0, 3))]
  this.Hand2Theta = [0, 90, 180, 270][floor(random(0, 3))]

  this.Hand1TargetTheta = 0
  this.Hand2TargetTheta = 0

  this.visible = true


  this.display = function() {
    if (this.Hand1Theta < this.Hand1TargetTheta) this.Hand1Theta += this.speed
    if (this.Hand1Theta > this.Hand1TargetTheta) this.Hand1Theta -= this.speed

    if (this.Hand2Theta < this.Hand2TargetTheta) this.Hand2Theta += this.speed
    if (this.Hand2Theta > this.Hand2TargetTheta) this.Hand2Theta -= this.speed

    //clock frame
    noFill()
    stroke("#eee")
    strokeWeight(1)
    ellipse(this.x + w/2, this.y + w/2, w)

    //pivot poit
    stroke("#000")
    strokeWeight(4)
    point(this.x + w/2, this.y + w/2)
    
    //uncomment for invisible 12 o'clock hands
    // if (this.Hand1Theta == 0 && this.Hand2Theta == 0) return
    
    strokeWeight(2)
    stroke("#000")

    push()
      translate(this.x + w/2, this.y + w/2)
      rotate(this.Hand1Theta)
      line(0, 0, 0, -w/5*1.5)
    pop()

    push()
      translate(this.x + w/2, this.y + w/2)
      rotate(this.Hand2Theta)
      line(0, 0, 0, -w/5*1.5)
    pop()




    // if (this.displayed == ":") {
    //   if (this.blinkCounter <= 0) {
    //     this.blink();
    //     this.blinkCounter = 60;
    //   } else {
    //     this.blinkCounter--
    //   }
    // }
  }

  this.blink = function() {
    // this.visible = -this.visible
  }

}



