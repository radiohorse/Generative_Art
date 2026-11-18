/*
 * Teal-to-rose rings, 2.2-0.45 px strokes, and a 0.43-0.48 radius ratio.
 * Slower breathing and rotation keep the geometry delicate and quietly shifting.
 * Based on Ashley Hi's Nested Worlds, DN3008 Generative Art, 2026.
 */

let mouseTouched = false;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
}

function draw() {
  background(205, 35, 6);

  let ratio = map(sin(frameCount * 0.004), -1, 1, 0.43, 0.48);
  if (mouseIsPressed) {
    ratio = map(mouseX, 0, width, 0.32, 0.48, true);
  }

  const depth = mouseTouched ? floor(map(mouseY, 0, height, 2, 6, true)) : 5;
  drawRings(width / 2, height / 2, 330, depth, depth, ratio, 0);
}

function drawRings(x, y, radius, depth, top, ratio, spin) {
  const level = top - depth;
  const hue = map(level, 0, top, 178, 338) + sin(frameCount * 0.002) * 4;

  stroke(hue, 32, 86, map(level, 0, top, 72, 38));
  strokeWeight(map(level, 0, top, 2.2, 0.45));
  circle(x, y, radius * 2);

  if (depth === 0 || radius < 2) {
    return;
  }

  const childRadius = radius * ratio;
  const offset = radius - childRadius;
  const turn = spin + frameCount * 0.00045;

  for (let i = 0; i < 4; i++) {
    const angle = turn + i * HALF_PI;
    drawRings(
      x + cos(angle) * offset,
      y + sin(angle) * offset,
      childRadius,
      depth - 1,
      top,
      ratio,
      turn
    );
  }
}

function mouseMoved() {
  mouseTouched = true;
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("quiet-orbits", "png");
  }
}
