let inc = 0.05;
let off = 0;

function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(0, 0, 0);

  loadPixels();
  let ryoff = 0;
  let gyoff = 100;
  let byoff = 1000;
  
  for(let i = 0; i < width; i++) {
    let rxoff = 0;
    let gxoff = 0;
    let bxoff = 0;

    for(let j = 0; j < height; j++) {

      let index = (i + j * width) * 4
      
      pixels[index+0] = noise(rxoff, ryoff+off)*255;
      pixels[index+1] = noise(rxoff, ryoff+off)*100;
      pixels[index+2] = noise(rxoff, ryoff+off)*25;
      pixels[index+3] = 255;
      
      rxoff += inc;
      gxoff += inc;
      bxoff += inc;
      
    }

    ryoff += inc;
    gyoff += inc;
    byoff += inc;

  }

  updatePixels()

  off += inc

  noLoop()
}