class Cell {

  constructor(i, j) {
    this.i = i
    this.j = j
    this.x = this.i * grid.w
    this.y = this.j * grid.w
    this.t = ""
    this.col = ""
    // this.t = "empty"
    // this.col = "#3d4A57"
  }

  render() {
    strokeWeight(1)
    fill(this.col)
    stroke("#1d2A37")
    rect(this.x, this.y, grid.w, grid.w)
  }
  
}