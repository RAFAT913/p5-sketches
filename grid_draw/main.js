
function setup() {
	createCanvas(cols * w, rows * w + controls_w)

	for (i = 0; i < cols; i++) {
		grid.push(new Array())
		for (j = 0; j < rows; j++) {
			grid[i].push(new Cell(i, j))
		}
	}
}

function draw() {
	background(50, 50, 50)

	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			grid[i][j].render()
		}
	}
}

function mousePressed() {
	let i = floor(mouseX / w)
	let j = floor(mouseY / w)
	if (grid[i] == undefined || grid[i][j] == undefined) return
	grid[i][j].click()
}
