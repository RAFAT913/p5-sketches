let tile_width = 52;
let tile_height = tile_width*2;
let tile_offset_x = 0;
let tiles = [];
let canvas_width = (tile_width * 9) + (tile_height * 2);
let monopolyColor = '#bdd6e0'


function preload() {
  imgGo = loadImage('res/go.png');
  imgChance = loadImage('res/chance.png');
  imgChest = loadImage('res/chest.png');
  imgGotojail = loadImage('res/gotojail.png');
  imgTrain = loadImage('res/train.png');
  imgJail = loadImage('res/jail.png');
  imgElectricity = loadImage('res/electricity.png');
  imgWater = loadImage('res/water.png');
  imgRing = loadImage('res/ring.png');
  imgTax = loadImage('res/tax.png');
  
  player_red = loadImage('res/player_red.png');
}

let p;

function setup() {
  p = new Player(0, 10, 10, "red")

  imgGo.resizeNN(360, 360)
  imgJail.resizeNN(360, 360)
  imgGotojail.resizeNN(360, 360)

  imgChance.resizeNN(180, 360)
  imgChest.resizeNN(180, 360)
  imgTrain.resizeNN(180, 360)
  imgElectricity.resizeNN(180, 360)
  imgWater.resizeNN(180, 360)
  imgRing.resizeNN(180, 360)
  imgTax.resizeNN(180, 360)

  player_red.resizeNN(20, 20)

  createCanvas(canvas_width, canvas_width);
  angleMode(DEGREES)
  
  setMonopolyLayout();
  loopOverTiles();
}

function draw() {
  background(monopolyColor);
  // background('#e0e0e0')

  for(i = 0; i < tiles.length; i++) {
    tiles[i].draw()
    tiles[i].update()
  }

  p.draw()
}
