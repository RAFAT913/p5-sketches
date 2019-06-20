function Player(i, color) {
    //filled with the arguments
			this.i = i;
			this.color = color;

    //values
    	this.weapon = ''
  
      this.update = function() {
				while(this.i >= 40) this.i -= 40;
      }
    
    }