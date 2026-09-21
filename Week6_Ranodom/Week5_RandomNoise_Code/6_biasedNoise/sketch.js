/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Biased Noise
 */

function setup() {
  createCanvas(256, 256);
  frameRate(60);
  stroke(255);
  noFill();
}

function draw() {
  background(0);

  // Uncomment the code to try the different examples.
  // Comment it again before running the next one.

  //=== 1 - even distribution of random points ===
  /*
  for (var i = 0; i < 5000; i++) {
    var x = random(0, 70);
    var y = random(0, height);
    point(x, y);
  }*/

  //=== 2 - bias towards the left ===
  /*
  for (var i = 0; i < 5000; i++) {
    var x = min(random(0, width), random(0, width));
    var y = random(0, height);
    point(x, y);
  }*/

  //=== 3 - bias towards bottom left corner ===
  /*
  for (var i = 0; i < 5000; i++) {
    var x = min(random(0, width), random(0, width));
    var y = max(random(0, height), random(0, height));
    point(x, y);
  }*/

  //=== 4 - create more extreme effects ===
   for (var i = 0; i < 5000; i++) {
     var x = getMinBiasRand(0, width, 5);
     var y = getMaxBiasRand(0, height, 5);
     point(x, y);
   }
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
