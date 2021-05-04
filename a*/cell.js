class Cell {
  constructor(i, j, t) {
    this.i = i
    this.j = j
    this.t = t
    this.gcost
    this.hcost
    this.fcost
    this.parent = null
    this.visited = false
    this.evaluated = false
    this.is_path = false
    this.col
  }
  
  render() {
    let fill_col = this.col
    if (this.visited && this.t == 'N') fill_col = lerpColor(fill_col, color("white"), 0.75)
    if (this.is_path && this.t == 'N') fill_col = lerpColor(fill_col, color("red"), 0.75)
    fill(fill_col)
    strokeWeight(1)
    stroke('black')
    rect(this.i * w, this.j * w, w, w)


    noStroke()
    fill('black')
    textAlign(CENTER, CENTER)

    if (this.t == 'N' && this.evaluated) {
      textSize(10)
      text(this.gcost, this.i*w + (w/4), this.j*w + (w/4))
      text(this.hcost, this.i*w + w-(w/4), this.j*w + (w/4))
      textSize(15)
      text(this.fcost, this.i*w + w/2, this.j*w + w-(w/3))
    } else if (this.t != 'N' && this.t != 'O') {
      textSize(20)
      text(this.t, this.i*w + (w/2), this.j*w + (w/2))
    }
    
    if (this.parent) {
      let dx = (this.i*w) + ((this.parent.i - this.i) * w/2.5) + w/2
      let dy = (this.j*w) + ((this.parent.j - this.j) * w/2.5) + w/2
      strokeWeight(10)
      stroke("black")
      point(dx, dy)
    }
  }
  
  evaluate() {
    this.evaluated = true
    
    // getting neighbor coords
    neighbors_coords = adjacent_coords.map(co => { return { i: co[0]+this.i, j: co[1]+this.j }})
    neighbors_coords = neighbors_coords.filter(co => co.i < 0 || co.i == cols || co.j < 0 || co.j == rows ? false : true)
    
    // getting neighbor cells
    let neighbors = neighbors_coords.map(co => getCell(co.i, co.j))
    
    // filtering neighbor cells
    neighbors = neighbors.filter(c => {
      if (c.t == 'O') return false
      if (!c.evaluated) return false
      return true
    })
    
    // getting neighboring lowest gcost
    let clgc = neighbors[0]
    neighbors.forEach(c => { if (c.gcost < clgc.gcost) clgc = c })
    
    // setting properties
    this.parent = clgc
    // this.gcost = clgc.gcost + 1
    // this.hcost = (end.i - this.i) + (end.j - this.j)
    this.gcost = clgc.gcost + ((clgc.i-this.i == 0 || clgc.j-this.j == 0) ? 10 : 14)
    this.hcost = ((end.i - this.i) + (end.j - this.j)) * 10
    this.fcost = this.gcost + this.hcost
    
    // re-evaluating neighbors with higher than this.gcost+1
    neighbors.forEach(c => { if (c.gcost > this.gcost+1) c.evaluate() })
  }
  
  setType(type) {
    this.t = type
    switch (this.t) {
        case 'S':
        this.gcost = 0
        this.hcost = abs((this.i - end.i) + (this.j - end.j))
        this.fcost = this.gcost + this.hcost
        this.col = color("#4cd137")
        this.visited = true
        this.evaluated = true
        break;
        case 'N':
        this.col = color("#dcdde1")
        break;
        case 'E':
        this.col = color("#00a8ff")
        break;
        case 'O':
        this.col = color("#2f3640")
        break;
    }
  }
}
