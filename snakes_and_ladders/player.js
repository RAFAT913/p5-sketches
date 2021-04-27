function add_player(name) {
	p = Object.assign({}, empty_player);
	p.name = name;
	p.id = players.length
	p.color = colors[players.length];
	players.push(p);
	draw_tile(p.i, p.j, true);
}

function get_players(i, j) {
	arr = [];
	players.forEach(p => {
		if (p.i == i && p.j == j) arr.push(p);
	})
	return arr;
}

function move_player(player, i, j) {
  old_i = player.i
  old_j = player.j
  player.i = i;
  player.j = j;
  draw_tile(old_i, old_j, true)
  draw_tile(player.i, player.j, true)
}

function advance_player(player, n) {
  let new_i = player.i;
  let new_j = player.j;

  let remainder = player.j % 2 == 0 ? player.i : cols - player.i -1;
  let dir = player.j % 2 == 0 ? -1 : 1;

  new_i += remainder * dir;

  if (n > remainder) {
    k = floor(n / cols);
    new_j -= k;
    dir *= pow(-1, k);
    new_i = dir < 0 ? cols -1 : 0;

    let stretch = n - (k * cols);
    new_i += stretch * dir;
  }

  move_player(player, new_i, new_j);
}