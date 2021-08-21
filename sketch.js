const particles = [];
const attractors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   createCanvas(600, 400);

  // PARTICLES
  for (let i = 0; i < 5; i++) {
    // particles.push(new Particle(random(width), random(height)));
    particles.push(new Particle(width / 2, height / 2));
  }

  // ATTRACTORS
  for (let i = 0; i < 1; i++) {
    // attractors.push(new Attractor(width / 2, height / 2));
  }
  background(0);

  // DRAWS BACKGROUND STARS
  drawBackground();
}

function draw() {
  //
  for (let i = 0; i < attractors.length; i++) {
    const attractor = attractors[i];
    attractor.show();
    for (let j = 0; j < particles.length; j++) {
      const particle = particles[j];
      particle.attracted(attractor);
      particle.update();
      particle.show();
    }
  }
}

function mousePressed() {
  attractors.push(new Attractor(mouseX, mouseY));
}

function drawBackground() {
  let numOfStars = width / 2;

  while (numOfStars >= 0) {
    push();
    stroke(255);
    strokeWeight(1);
    point(random(width), random(height));
    pop();
    numOfStars--;
  }
}
