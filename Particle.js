class Particle {
  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector();
    this.acc = createVector();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }

  attract(attractor) {
    const direction = p5.Vector.sub(attractor.pos, this.pos);
    direction.setMag(0.1);
    this.acc.add(direction);
  }
}
