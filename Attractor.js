class Attractor {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  show() {
    push();
    stroke(255, 0, 0);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }
}
