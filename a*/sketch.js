let w = 60
let cols = 10
let rows = 10
let cells = []
let start, end, curr
let opened = []
let closed = []

// let adjacent_coords = [[0, -1], [-1, 0], [1, 0], [0, 1]]
let adjacent_coords = [[-1, -1], [1, -1], [-1, 1], [1, 1]]
// let adjacent_coords = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

let map = [
    "S.........",
    "#.######.#",
    ".........#",
    ".#..######",
    ".#.....###",
    ".##.##...#",
    "..##...###",
    ".##.####.#",
    "..##.....#",
    ".........E",
]

function setup() {
  createCanvas(cols * w, rows * w)
  background(220)
  
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let c = new Cell(i, j)
      cells.push(c)
    }
  }
  
  for (let j = 0; j < map.length; j++) {
    for (let i = 0; i < map[0].length; i++) {
      let t = map[j][i]
      switch (t) {
        case '.': t = 'N'; break;
        case '#': t = 'O'; break;
      }

      let c = getCell(i, j)
      
      if (t == 'S') { start = c; continue }
      if (t == 'E') { end = c; continue }
      c.setType(t)
    }
  }
  
  end.setType('E')
  start.setType('S')
  opened.push(start)
}

function draw() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].render()
    }
}

function mousePressed() {
    // astartTick()
    astarBegin()
}

function astarBegin() {
  let interval = setInterval(() => {
    if (astartTick() || opened.length == 0) clearInterval(interval)
  }, 100)
}

function getCell(i, j) {
  return cells[(j * cols) + i]
}

function astartTick() {   
    // lowest fcost in open
    let clfc = opened[0]
    opened.forEach((c) => { if (c.fcost < clfc.fcost) clfc = c })

    // curr cell
    curr = clfc
    opened = opened.filter(c_open => { return (clfc.i == c_open.i && clfc.j == c_open.j) ? false : true })
    closed.push(curr)
    curr.visited = true

    // path reached !
    if (curr.t == 'E') {
      let cell_retrace = end
      while (cell_retrace != null) {
        cell_retrace.is_path = true
        cell_retrace = cell_retrace.parent
      }
	return true
    }
    
    
    // getting neighbor coords
    neighbors_coords = adjacent_coords.map(co => { return { i: co[0]+curr.i, j: co[1]+curr.j }})
    neighbors_coords = neighbors_coords.filter(co => co.i < 0 || co.i == cols || co.j < 0 || co.j == rows ? false : true)
    
    // getting neighbor cells
    let neighbors = neighbors_coords.map(co => getCell(co.i, co.j))
    
    // filtering neighbor cells
    neighbors = neighbors.filter(c => {
      if (c.t == 'O') return false
      if (c.visited) return false
      return true
    })

    neighbors.forEach(c => {
      if (!opened.some(c_open => c_open.i == c.i && c_open.j == c.j)) {
        c.evaluate()
        opened.push(c)
      }
    })

    return false
}
