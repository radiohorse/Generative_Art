/*

<Project Description>

*/

function setup() {
  createCanvas(600, 600);
  background(20);
}

function draw() {
  let x = random(width);
  let y = random(height);
  let r = random(2, 20);

  noStroke();
  fill(255);
  circle(x, y, r);
}
