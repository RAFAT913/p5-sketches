function setup() {
  createCanvas(cols * w + 1, rows * w + 1);
  background(255);

  for (let i = 0; i < rows; i++) {
    board.push(new Array(10));
    for (let j = 0; j < cols; j++) {
      board[i][j] = Object.assign({}, empty_tile);
      draw_tile(i, j, false)
    }
  }

  // add_player("one");
  // advance_player(players[0], 12);
  //TODO set win condition if player is at last or beyond

  //dx can be negative if line is ver
}


// function draw() {
//  draw is for beta males
// }

let i1 = 0
let j1 = 0
let i2 = 5
let j2 = 5

// let i1 = floor(random() * (cols / 2))
// let j1 = floor(random() * (cols / 2))
// let i2 = floor(random() * (cols / 2) + 5)
// let j2 = floor(random() * (cols / 2) + 5)

function mouseClicked() {

  let mi = floor(mouseX / w)
  let mj = floor(mouseY / w)

  if (mouseButton === LEFT) {
    i1 = mi
    j1 = mj
    console.log(i1, j1)
  }
  
  let delta_x = abs(i2 - i1)
  let delta_y = abs(j2 - j1)

  

  let x = i1
  let y = j1
  let e = (2 * delta_y) - delta_x
  let i = 1

  draw_tile(x, y, false, "red")

  while (i <= delta_x) {
    while (e >= 0) {
      y++
      e -= 2 * delta_x
    }

    x++
    e += 2 * delta_y
    i++

    draw_tile(x, y, false, "blue")
  }



  // let e = 0
  // let delta_e = abs(delta_y/delta_x)
  // let i = 1

  // let y = j1
  
  // for (let x = i1; x <= i2; x++) {
  //   draw_tile(x, y, false, "green")
  //   e += delta_e
  //   if (e >= 0.5) {
  //     y += Math.sign(delta_y)
  //     e -= 1
  //   }
  // }
}