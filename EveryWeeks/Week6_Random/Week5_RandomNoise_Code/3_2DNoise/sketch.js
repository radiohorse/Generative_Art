/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * 2D Noise
 *** Try adjusting pixelScale and noiseScale. Can you get it to a point where you see the pattern in the noise ?
 *** Try animating the noise.
 */

var octaves = 8;
var falloff = 0.5;
var noiseScale = 0.0106;
var pixelScale = 1;

function setup() {
  createCanvas(512, 512);
  frameRate(60);
  noStroke();
}

function draw() {
  background(0);
  noiseDetail(octaves, falloff);

  var numCols = width / pixelScale;
  var numRows = height / pixelScale;
  var w = width / numCols;
  var h = height / numRows;
  for (var x = 0; x < numCols; x++) {
    for (var y = 0; y < numRows; y++) {
      var noiseVal = noise(x * noiseScale, y * noiseScale);
      fill(noiseVal * 255);
      rect(x * w, y * h, w, h);
    }
  }
}
