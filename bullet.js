
class Bullet {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.angle = gun.angle;
    this.body = createSprite(x, y, 30, 20);
    
    this.body.visible = false
    //this.body.debug = true;
    this.image = loadImage("./others/bullet.png");    
  }

  display() {
    var angle = this.angle;
    
    push();
     translate(this.body.x, this.body.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.w,this.h)
    pop();
  }
}
