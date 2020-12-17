class Unicorn {
    constructor() {
        this.r = 150
        this.x = 50;
        this.y = height - this.r;
        this.velocity = 0;
        this.gravity = 2;
    }

    jump() {
        if (keyDown("space")) {
            this.velocity = -12;  
            }
            
            this.velocity = this.velocity + 0.8;
        
        this.velocity = -25;
    }

    hits(train) {
        return collideRectRect(this.x, this.y, this.r, this.r, 
        train.x, train.y, train.r, train.r);
    }

    move() {
        this.y += this.velocity
        this.velocity += this.gravity;
        this.y = constrain(this.y, 0, height - this.r)
    }

    show() {
        image(unicornImage, this.x, this.y, this.r, this.r);

    }
}