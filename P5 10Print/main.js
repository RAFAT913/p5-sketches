let w = 10, x = 0, y = 0, i = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  if (y > height) return

  while(i < 100) {
    i++

    if (random() > 0.5) line(x, y, x+w, y+w); else line(x, y+w, x+w, y);

    x+=w
    if (x > width) { y+=w; x=0 }
  }
  
  i=0
}