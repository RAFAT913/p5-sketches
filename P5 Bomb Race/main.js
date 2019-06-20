let tile_width = 52;
let tile_height = tile_width*2;
let tile_offset_x = 0;
let tiles = [];
let players = [];
let canvas_width = (tile_width * 9) + (tile_height * 2);
let monopolyColor = '#bdd6e0'

function preload() {
  imgGo = loadImage('res/go.png');
  imgChance = loadImage('res/chance.png');
  imgChest = loadImage('res/chest.png');
  imgGotojail = loadImage('res/gotojail.png');
  imgTrain = loadImage('res/train.png');
  imgJail = loadImage('res/jail.png');
}

function setup() {
  createCanvas(canvas_width, canvas_width);
  angleMode(DEGREES)
  
  setMonopolyLayout();
  loopOverTiles();

  players.push(new Player(4, 'red'))
  players.push(new Player(5, 'blue'))

}

function draw() {
  background(monopolyColor);

  for(i = 0; i < players.length; i++) {
    players[i].update()
  }

  for(i = 0; i < tiles.length; i++) {
    tiles[i].draw()
    tiles[i].update()
  }

}



//The Loop
types = [
  '', '', 'chance', '', '', '', '', 'chance', '', '',
  '', '', 'chance', '', '', '', '', 'chance', '', '',
  '', '', '', '', 'chance', '', '', '', '', '',
  '', '', '', '', 'chance', '', '', '', '', ''
];

function loopOverTiles() {
  for (i = 0; i < tiles.length; i++) {
      tiles[i].type = types[i];
  }
}

// emptyArray = [
//     '', '', '', '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '', '', '', ''
// ];