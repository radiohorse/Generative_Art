/*
 * Quiet Noise: ink teal, translucent cyan and dusty pink soften the point clouds.
 * 30 fps, a 0.004 time step and a 26 px wave keep the motion slow and subtle.
 * A fixed random seed holds the grain together as the shapes gently drift.
 * DN3008 Generative Art, Ashley Hi 2026 - Noise Shapes.
 */

function setup() {
  createCanvas(512, 512);
  frameRate(30);
  noFill();
  strokeWeight(1);
}

function draw() {
  background(9, 20, 24);
  randomSeed(12);

  const time = frameCount * 0.004;
  const centreX = width / 2 + 20 + sin(time) * 8;

  stroke(100, 160, 164, 80);
  for (let i = 0; i < 180; i++) {
    const y = random(32, height - 32);
    point(centreX, y);
    point(centreX + random(40), y);
    point(centreX - random(70), y);
    point(centreX + random(150), y);
  }

  stroke(124, 181, 181, 65);
  for (let i = 0; i < 1200; i++) {
    const x = getMinBiasRand(28, width - 28, 4);
    point(x, height / 2);
  }

  push();
  stroke(192, 137, 151, 90);
  translate(width / 2, height / 2);
  for (let i = 0; i < 240; i++) {
    const radius = random(-1, 1) * (14 + sin(time) * 3);
    const angle = random(TWO_PI);
    const x = cos(angle) * radius;
    const y = sin(angle) * radius;

    point(x, y);
    point(x + 100, y + 100);
    point(x - 100, y + 100);
    point(x - 100, y - 100);
    point(x + 100, y - 100);
  }
  pop();

  push();
  stroke(72 + sin(time) * 8, 147, 156, 60);
  translate(0, height / 2);
  const amplitude = 26;

  for (let i = 0; i < 2600; i++) {
    const x = getMinBiasRand(24, width - 24, 3);
    const y = cos((x / 180) * TWO_PI + time) * amplitude + random(-46, 46);

    point(x, y);
    point(x + 60, y - 100);
    point(x + 280, y + 80);
  }
  pop();
}

function getMinBiasRand(minimum, maximum, iterations) {
  let value = maximum;

  for (let i = 0; i < iterations; i++) {
    value = min(value, random(minimum, maximum));
  }

  return value;
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("quiet-noise", "png");
  }
}
