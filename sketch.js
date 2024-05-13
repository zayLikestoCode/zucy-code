let flowers = [];

function setup() {
  createCanvas(400, 400);
  background(201,58,58);
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
  text("Happy Mother's Day", width/2, height/2);
}

function draw() {
  for (let flower of flowers) {
    flower.grow();
    flower.display();
  }
}

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  flowers.push(new Flower(x, y));
}

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.maxSize = random(50, 100);
  }
  
  grow() {
    if (this.size < this.maxSize) {
      this.size += 0.5;
    }
  }
  
  display() {
    // Stem
    stroke(0, 100, 0);
    strokeWeight(4);
    line(this.x, this.y, this.x, this.y + 50);
    
    // Petals
    for (let i = 0; i < 8; i++) {
      let angle = TWO_PI / 8 * i;
      let petalX = this.x + cos(angle) * this.size / 2;
      let petalY = this.y + sin(angle) * this.size / 2;
      fill(random(255), random(255), random(255));
      ellipse(petalX, petalY, this.size, this.size);
    }
    
    // Center
    fill(255, 200, 0);
    ellipse(this.x, this.y, this.size / 2, this.size / 2);
  }
}
