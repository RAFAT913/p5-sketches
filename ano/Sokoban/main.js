let grid = []
let player = {i:0, j:0}
let goals = []
let boxes = []

// let level = [
// "  ######  ",
// "###     # ",
// "##. $## ##",
// "#..$ $  @#",
// "#.. $ $ ##",
// "######  # ",
// "     #### ",
// ]

// let level = [
// "    #####        ",
// "    #   #",
// "    #$  #",
// "  ###  $###",
// "  #  $  $ #",
// "### # ### #######",
// "#   # ### ##  ..#",
// "# $  $      @ ..#",
// "##### #### #  ..#",
// "    #      ######",
// "    ########",
// ]


// let level = [
// "        #####           ",
// "        #   #####",
// "        # #$##  #",
// "        #    $  #",
// "######### ###   #",
// "#....  ## $  $###",
// "#....    $ $$ ##",
// "#....  ##$  $ @#",
// "#########  $  ##",
// "        # $ $  #",
// "        ### ## #",
// "          #    #",
// "          ######",
// ]

let level = [
" #########",
" #   ##  #",
" #    $  #",
" ## ###  #",
"  # # .. #",
"### $  #.#",
"# $$# ##.#",
"#  @     #",
"##########",
]

let cols = level[0].length
let rows = level.length

// let cols = level[0].length //15
// let rows = level.length //15
let w = 70

function setup() {
  createCanvas((w*cols)+1, (w*rows)+1)

  for (let i = 0; i < cols; i++) {
    grid.push(new Array(cols))
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, "empty")
    }
  }


  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      switch (level[j][i]) {
        case '#': grid[i][j].t = "wall"; break;
        case '.': grid[i][j].t = "goal"; break;
        case '$': grid[i][j].t = "box"; break;
        case '@': grid[i][j].t = "player"; break;
      }

      if (level[j][i] == '@') {
        player.i = i
        player.j = j
      }
      if (level[j][i] == '.') {
        goals.push({i: i, j: j})
      }
      if (level[j][i] == '$') {
        boxes.push({i: i, j: j})
      }
    }
  }

}

function draw() {

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].render()
    }
  }
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) movePlayer(0, -1)
  if (keyIsDown(DOWN_ARROW)) movePlayer(0, 1)
  if (keyIsDown(LEFT_ARROW)) movePlayer(-1, 0)
  if (keyIsDown(RIGHT_ARROW)) movePlayer(1, 0)
}

function movePlayer(i, j) {
  grid[player.i][player.j].move(i, j)
}
