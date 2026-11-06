/* Soft Resonance — after Lucier.
 * 140 agents, 0.9px steps and a 1.008 feedback scale slow the outward drift.
 * A 0.22 steering gain opens the loops; alpha 160 lets their layers stay visible.
 * Translucent teal with occasional dusty rose keeps the trails soft and quiet.
 * DN3008 Generative Art — based on Ashley Hi's Steersman, 2026.
 */
const gain = 0.22;
const agents = [];
let feeding = true;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  background(10, 20, 24);

  for (let i = 0; i < 140; i++) {
    agents.push({
      x: random(width),
      y: random(height),
      a: random(TWO_PI),
    });
  }
}

function draw() {
  const reading = sense();
  update(reading);
  render();
}

function sense() {
  loadPixels();

  return agents.map((agent) => {
    const index = 4 * (floor(agent.y) * width + floor(agent.x));
    return (pixels[index] + pixels[index + 1] + pixels[index + 2]) / 765;
  });
}

function update(reading) {
  agents.forEach((agent, i) => {
    agent.a += (reading[i] - 0.5) * gain + random(-0.035, 0.035);
    agent.x = (agent.x + cos(agent.a) * 0.9 + width) % width;
    agent.y = (agent.y + sin(agent.a) * 0.9 + height) % height;
  });
}

function render() {
  const previous = get();

  push();
  translate(width / 2, height / 2);
  scale(1.008);
  image(previous, -width / 2, -height / 2);
  pop();

  background(10, 20, 24, 1);

  if (feeding) {
    noStroke();

    agents.forEach((agent, i) => {
      if (i % 7 === 0) {
        fill(182, 128, 143, 160);
      } else {
        fill(92, 181, 178, 160);
      }

      circle(agent.x, agent.y, 3);
    });
  }
}

function keyPressed() {
  if (key === " ") {
    feeding = !feeding;
    return false;
  }

  if (key === "s" || key === "S") {
    saveCanvas("soft-resonance", "png");
  }
}
