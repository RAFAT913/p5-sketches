function Player(i, x, y, color) {

    this.index = i;
    this.x = x;
    this.y = y;
    this.color = color;
    this.img = null;
  
    this.draw = function() {
        switch(this.color) {
            case "red": this.img = player_red; break;
            case "blue": this.img = player_blue; break;
            case "green": this.img = player_green; break;
            case "yellow": this.img = player_yellow; break;
        }

        image(this.img, 0, 0, 20, 20)
    }
      
  
    this.update = function() {

    }
    
}