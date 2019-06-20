function Tile(i, x, y, isCorner, hasHeader, color, side) {
  //filled with the arguments
    this.index = i;
    this.x = x;
    this.y = y;
    this.isCorner = isCorner;
    this.hasHeader = hasHeader;
    this.color = color;
    this.side = side;

  //filled with a loop
    this.name = '';
    this.shortName = '';
    this.type = '';

  //switches
    this.hovered = false;
    this.shortNameStyle = NORMAL;

  //statics
    this.hoverColor = 'white';
    this.headerUsedColor = this.color;
    this.tileUsedColor = monopolyColor;

    this.bigCardX = 295;
    this.bigCardY = 110;
    this.bigCardW = 180;
    this.bigCardH = 300;
    this.width = tile_width;
    this.height = tile_height;
    this.headerWidth = this.width;
    this.headerHeight = this.width/2;


    this.init = function() {
      if (this.isCorner) this.width = this.height
    }


    this.drawImage = function(type) {
      switch(type) {
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
      fill(this.tileUsedColor)
      if (this.side == 's') rect(this.x, this.y, this.width, this.height);
      if (this.side == 'w') rect(this.x, this.y, -this.height, this.width);
      if (this.side == 'n') rect(this.x, this.y, -this.width, -this.height);
      if (this.side == 'e') rect(this.x, this.y, this.height, -this.width);

      //Images
      if (this.type == 'go') image(imgGo, this.x, this.y, tile_height, tile_height);
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
        fill(this.headerUsedColor)
        if (this.side == 's') rect(this.x, this.y, this.headerWidth, this.headerHeight);
        if (this.side == 'w') rect(this.x, this.y, -this.headerHeight, this.headerWidth);
        if (this.side == 'n') rect(this.x, this.y, -this.headerWidth, -this.headerHeight);
        if (this.side == 'e') rect(this.x, this.y, this.headerHeight, -this.headerWidth);
      }

      //Short Names
      if (!this.isCorner && this.hasHeader) {
        fill('black');
        textAlign(CENTER);
        textStyle(this.shortNameStyle)
        textSize(9);
        noStroke();

        //shorten this
        if (this.side == 's') text(this.shortName, this.x + 23, this.y + 35);

        if (this.side == 'w') {
          push()
            translate(this.x - 35, this.y + 23);
            rotate(90);
            text(this.shortName, 0, 0);
          pop()
        }

        if (this.side == 'n') {
          push()
            translate(this.x - 23, this.y - 35);
            rotate(180);
            text(this.shortName, 0, 0);
          pop()
        }

        if (this.side == 'e') {
          push()
            translate(this.x + 35, this.y - 23);
            rotate(270);
            text(this.shortName, 0, 0);
          pop()
        }
      }


      if (this.hovered && this.name != '') {
        //Big Card
        stroke('black')
        fill('#e9e9e9')
        rect(this.bigCardX, this.bigCardY, this.bigCardW, this.bigCardH);

        noStroke()
        fill('black');

        textAlign(CENTER)
        textStyle(BOLD)
        textSize(15)
        text(this.name, this.bigCardX + this.bigCardW/2, this.bigCardY + 50)

        if (this.hasHeader) {
          stroke('black')
          fill(this.color)
          rect(this.bigCardX, this.bigCardY, this.bigCardW, this.bigCardH/10);
        }
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
        this.tileUsedColor = this.hoverColor
        // this.shortNameStyle = BOLD;
      } else {
        this.tileUsedColor = monopolyColor
        // this.shortNameStyle = NORMAL;
      }

    }
  
  }