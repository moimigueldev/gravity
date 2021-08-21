const particles = [];
const attractors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //   createCanvas(600, 400);

  // PARTICLES
  for (let i = 0; i < 1; i++) {
    particles.push(new Particle());
  }

  // ATTRACTORS
  for (let i = 0; i < 1; i++) {
    attractors.push(new Attractor(width / 2, height / 2));
  }
}

function draw() {
  // put drawing code here
  background(50);

  for (let i = 0; i < attractors.length; i++) {
    const attractor = attractors[i];
    attractor.show();
    for (let j = 0; j < particles.length; j++) {
      const particle = particles[j];
      particle.attract(attractor);
      particle.update();
      particle.show();
    }
  }
}

function mousePressed() {
  attractors.push(new Attractor(mouseX, mouseY));
  console.log(attractors.length, mouseX);
}
