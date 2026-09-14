/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Noise Shapes
 */

function setup() {
  createCanvas(512, 512);
  frameRate(100);
  noFill();
  stroke(0);
}

function draw() {
  background(1,155,155);

  // Uncomment the code to try the different examples.
  // Comment it again before running the next one.

  //=== 1 - square ===
  /*
  for (var i = 0; i < 1000; i++) {
    var x = random(200, width - 100);
    var y = random(200, height - 100);
    point(x, y);
  }*/

  //=== 2 - vertical line ===
  for (var i = 0; i < 150; i++) {
    var x = random(width/2+20, width/2 + 20);
    var y = random(0,height);
    point(x,y);
    point(x+random(50),y);
    point(x-random(100),y);
    point(x+random(200),y);
  }

  //=== 3 - horizontal line ===
  
  for (var i = 0; i < 2000; i++) {
    var x = getMinBiasRand(0, width, 6);
    var y = random(height/2, height/2);
    point(x,y);
  }

  //=== 4 - circle ===
  push();
  stroke(25,250,242,100);
  translate(width / 2, height / 2);
  for (var i = 0; i < 200; i++) {
    var dist = (random(-1.0, 1.0) * width) / 50.5;
    var angle = random(0, PI * 2);
    var p = createVector(cos(angle), sin(angle));
    p.mult(dist);
    point(p.x, p.y);
    point(p.x+100, p.y+100);
    point(p.x-100, p.y+100);
    point(p.x-100, p.y-100);
    point(p.x+100, p.y-100);
  }
  pop();

  //=== 5 - wave ===
  push();
  stroke(20,86,132)
  translate(0, height / 2);
  var amp = 20;
  for (var i = 0; i < 5000; i++) {
    var x = getMinBiasRand(0, width, 20);
    ;
    var y = cos((x / getMinBiasRand(0, width)) * PI * 6) * amp;
    y += random(-150, 150);
    point(x, y);
    point(x+50, y-100);
    point(x+440, y+50);
  }
  pop();
}

function getMinBiasRand(_min, _max, iters) {
  var r = _max;
  for (var i = 0; i < iters; i++) {
    r = min(r, random(_min, _max));
  }
  return r;
}

function getMaxBiasRand(_min, _max, iters) {
  var r = _min;
  for (var i = 0; i < iters; i++) {
    r = max(r, random(_min, _max));
  }
  return r;
}