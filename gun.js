class Gun {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.angle = angle;
    this.image = loadImage("./others/gun.png");
  }

  display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle < -12.75) {
      this.angle += 2;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -48.75) {
      this.angle -= 2;
    }
   
    push();
     translate(this.x, this.y);
     rotate(this.angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}