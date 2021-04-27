function get_tile_players_positions(player_count) {
	let points = [];

	if (player_count % 2 == 1) points.push(tile_points[0]);
	if (points.length == player_count) return points;

	for (let i = 1; points.length < player_count; i++) {
			points.push(tile_points[i]);
	}
	return points;
}

function draw_tile_players(i, j) {
	curr_players = get_players(i, j);
	let player_points = get_tile_players_positions(curr_players.length);
	
	curr_players.forEach((p, i) => {
		noStroke()
		fill(p.color);
		ellipse((player_points[i][0]+1) * w/4 + (p.i * w), (player_points[i][1]+1) * w/4 + (p.j * w), w/4);
	});
}

function draw_tile(i, j, gen_points, color = undefined) {
	
	if (is_out_of_bounds(i, j)) {
		console.log("draw tile is not valid, i:", i, " j:", j, "are out of bounds")
	}

	stroke(255);
	if (color) { 
		board[i][j].color = color
		fill(color)
	} else {
		fill(board[i][j].color)
	}
		
	rect(i * w, j * w, w, w);

	if (gen_points) {
		draw_tile_players(i, j)
	}
}

function get_tiles_around(tile_i, tile_j) {
  tiles = []
  for (let i = tile_i-1; i <= tile_i+1; i++) {
    for (let j = tile_j-1; j <= tile_j+1; j++) {
      if (is_out_of_bounds(i, j)) continue
      if (i == tile_i && j == tile_j) continue
      let t = Object.assign({}, board[i][j])
      t.i = i
      t.j = j
      tiles.push(t)
    }
  }
  return tiles
}