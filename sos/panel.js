class Panel {
  constructor(i, j, players_amount) {
    this.player_scores = []

    this.x = i * w
    this.y = j * w

    for (let i = 0; i < players_amount; i++) {
      this.player_scores.push(0)
    }
  }

  render() {
    for (let i = 0; i < this.player_scores.length; i++) {
      stroke('black')
      fill('white')
      textAlign(CENTER, CENTER)
      text('asd', this.x, this.y)
    }
  }
}
