let board = [];
let players = [];
let rows = 10;
let cols = 10;
let w = 50;
let colors = ["red", "green", "blue", "purple", "orange", "yellow"];

let empty_tile = {
  color: "black",
	from: false,
	to: false
}

let empty_player = {
  id: -1,
  name: "no name",
  color: "no color",
  i: 0,
  j: 9
}

let tile_points = [
  [1, 1],
  [0, 0],
  [2, 2],
  [0, 2],
  [2, 0],
  [0, 1],
  [2, 1]
];

function is_out_of_bounds(i, j) {
  if (i < 0 || i >= cols) return true
  if (j < 0 || j >= rows) return true
  return false
}

// function vec2_to_vec1(i, j) {
//   return i + (j * cols)
// }

// function binary_switch(x) {
//   return x = 1 - x
// }