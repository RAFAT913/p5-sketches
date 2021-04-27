function drawVec(base, vec, col) {
  push()
  stroke(col)
  strokeWeight(3)
  fill(col)
  let arrowSize = 7

  translate(base.x, base.y)
  line(0, 0, vec.x, vec.y)
  rotate(vec.heading())
  translate(vec.mag() - arrowSize, 0)
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0)
  pop()
}