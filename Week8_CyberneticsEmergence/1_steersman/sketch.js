// Stance: Resonance (after Lucier)

/* DN3008 Generative Art, Ashley Hi 2026
 * Week 7 - Cybernetics & Emergence
 * Steersman
 */
let feeding = true;

// Press the space bar to stop and start the agents drawing
function keyPressed() {
  if (key === ' ') feeding = !feeding;
}

let gain = 26;
let agents = [];

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  background(20);
  for (let i = 0; i < 200; i++) {
    agents.push({ x: random(width), y: random(height), a: random(TWO_PI) });
  }
}

function draw() {
  const reading = sense(); // 1. Read back something the system produced
  update(reading); // 2. lLet that reading change what happens next
  render(); // 3. Draw it
}

function sense() {
  // How bright is the canvas under each agent?
  loadPixels();
  return agents.map((a) => pixels[4 * (floor(a.y) * width + floor(a.x))] / 255);
}

function update(reading) {
  agents.forEach((a, i) => {
    a.a += (reading[i] - 0.5) * gain + random(-0.1, 0.1);
    a.x = (a.x + cos(a.a) * 1.5 + width) % width;
    a.y = (a.y + sin(a.a) * 1.5 + height) % height;
  });
}

function render() {
  // Redraw the last frame, slightly larger: the loop
  const prev = get();
  push();
  translate(width / 2, height / 2);
  scale(1 + 0.005 * gain);
  image(prev, -width / 2, -height / 2);
  pop();
  if (frameCount % 5 === 0) filter(BLUR, 1);   // a little is lost each time

  if (feeding) {
    noStroke();
    fill(240, 170, 50, 60);
    agents.forEach(a => circle(a.x, a.y, 3));
  }
}
