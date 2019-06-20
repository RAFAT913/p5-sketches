function Tile(i, x, y, isCorner, side) {
  //filled with the arguments
    this.i = i;
    this.x = x;
    this.y = y;
    this.isCorner = isCorner;
    this.side = side;

  //filled with a loop
    this.type = '';

  //switches
    this.hovered = false;

  //statics
    this.hasHeader = true;
    this.width = tile_width;
    this.height = tile_height;
    this.headerWidth = this.width;
    this.headerHeight = this.width/2;

  //Colors
    this.colorDefault = 'white';
    this.colorTile = monopolyColor;
    this.colorTileHover = 'yellow';
    this.colorHeader = this.colorDefault


    this.init = function() {
      if (this.isCorner) this.width = this.height
    }


    this.drawImage = function(type) {
      switch(type) {
        case 'go': image(imgGo, 0, 0, tile_height, tile_height); break;
        case 'chance': image(imgChance, 0, 0, tile_width, tile_height); break;
        case 'chest': image(imgChest, 0, 0, tile_width, tile_height); break;
        case 'jail': image(imgJail, 0, 0, tile_height, tile_height); break;
        case 'gotojail': image(imgGotojail, 0, 0, tile_height, tile_height); break;
        case 'train': image(imgTrain, 0, 0, tile_width, tile_height); break;
      }
    }


    this.draw = function() {
      stroke('black');
      strokeWeight(2);
      
      //Card
      fill(this.colorTile)
      if (this.side == 's') rect(this.x, this.y, this.width, this.height);
      if (this.side == 'w') rect(this.x, this.y, -this.height, this.width);
      if (this.side == 'n') rect(this.x, this.y, -this.width, -this.height);
      if (this.side == 'e') rect(this.x, this.y, this.height, -this.width);

      //Images
      push()
        translate(this.x, this.y);
        switch(this.side) {
          case 's': rotate(0); break;
          case 'w': rotate(90); break;
          case 'n': rotate(180); break;
          case 'e': rotate(270); break;
        }
        this.drawImage(this.type)
      pop()

      //Header
      if (!this.isCorner && this.hasHeader) {
        fill(this.colorHeader)
        if (this.side == 's') rect(this.x, this.y, this.headerWidth, this.headerHeight);
        if (this.side == 'w') rect(this.x, this.y, -this.headerHeight, this.headerWidth);
        if (this.side == 'n') rect(this.x, this.y, -this.headerWidth, -this.headerHeight);
        if (this.side == 'e') rect(this.x, this.y, this.headerHeight, -this.headerWidth);
      }

      //Border
      noFill()
      if (this.side == 's') rect(this.x, this.y, this.width, this.height);
      if (this.side == 'w') rect(this.x, this.y, -this.height, this.width);
      if (this.side == 'n') rect(this.x, this.y, -this.width, -this.height);
      if (this.side == 'e') rect(this.x, this.y, this.height, -this.width);
      
    }


    this.update = function() {
      //Mouse Hover Detector
      if(this.side == 's') if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) this.hovered = true; else this.hovered = false;
      if(this.side == 'w') if (mouseX < this.x && mouseX > this.x - this.height && mouseY > this.y && mouseY < this.y + this.width) this.hovered = true; else this.hovered = false;
      if(this.side == 'n') if (mouseX < this.x && mouseX > this.x - this.width && mouseY < this.y && mouseY > this.y - this.height) this.hovered = true; else this.hovered = false;
      if(this.side == 'e') if (mouseX > this.x && mouseX < this.x + this.height && mouseY < this.y && mouseY > this.y - this.width) this.hovered = true; else this.hovered = false;

      if (this.hovered) {
        this.colorTile = this.colorTileHover
      } else {
        this.colorTile = monopolyColor
      }

      for (i = 0; i < players.length; i++) {
        if(this.i == players[i].i) this.colorHeader = players[i].color;
      }

    }
  
  }