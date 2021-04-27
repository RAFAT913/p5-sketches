//hidden = 0
//empty = 1
//ship = 2
//wreck = 3

class Cell {

  constructor(i, j) {
    this.i = i
    this.j = j
    this.x = this.i * grid.w
    this.y = this.j * grid.w
    this.t = 0
  }

  render() {

    switch (this.t) {
      case 0: {
        fill("#0984e3")
      }; break;
      case 1: {
        fill("#74b9ff")
      }; break;
      case 2: {
        fill("#ffeaa7")
      }; break;
      case 3: {
        fill("#ff7675")
      }; break;
    }
    
    strokeWeight(10)
    stroke("#1C2A37")
    rect(this.x, this.y, grid.w, grid.w)
  }

}