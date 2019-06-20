let venuses = []
let v = 10;

function setup() {
    createCanvas(1350, 600)

    for (i = 0; i < v; i++) {
        venuses.push(new venus())
    }
}

function draw() {
    background(50)

    for (i = 0; i < v; i++) {
        venuses[i].show();
        venuses[i].update();
        venuses[i].chain();
    }
}


function venus() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(10, 40);
    this.speed_x = random(-3, 3)
    this.speed_y = random(-3, 3)

    this.show = function() {
        ellipse(this.x, this.y, this.r)
    }

    this.update = function() {
        this.x += this.speed_x
        this.y += this.speed_y

        // switch (true) {
        //     case this.x < 0: this.x = width; break;
        //     case this.x > width: this.x = 0; break;
        //     case this.y < 0: this.y = height; break;
        //     case this.y > height: this.y = 0; break;
        // }

        switch (true) {
            case this.x - this.r/2 < 0: this.speed_x = -this.speed_x; break;
            case this.y - this.r/2 < 0: this.speed_y = -this.speed_y; break;

            case this.x + this.r/2 > width: this.speed_x = -this.speed_x; break;
            case this.y + this.r/2 > height: this.speed_y = -this.speed_y; break;
        }


    }

    this.chain = function() {
        stroke(255)

        line(this.x, this.y, venuses[0].x, venuses[0].y);
        line(this.x, this.y, venuses[1].x, venuses[1].y);
        line(this.x, this.y, venuses[2].x, venuses[2].y);
        line(this.x, this.y, venuses[3].x, venuses[3].y);
        line(this.x, this.y, venuses[4].x, venuses[4].y);
        line(this.x, this.y, venuses[5].x, venuses[5].y);
        line(this.x, this.y, venuses[6].x, venuses[6].y);
        line(this.x, this.y, venuses[7].x, venuses[7].y);
        line(this.x, this.y, venuses[8].x, venuses[8].y);
        line(this.x, this.y, venuses[9].x, venuses[9].y);
    }
}

