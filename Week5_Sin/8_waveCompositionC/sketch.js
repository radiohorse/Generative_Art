/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Composition C
*/

var magnify = 100; // how big we want the rose to be
var rotation = 180;
var radius = 20;
var elements = 300; // no. of elements to draw

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  colorMode(HSB);
}
 
function draw() {
  background(5,5,5,20);
    
  radius = map(frameCount - 2, 0, width, 0, 10);
  rotation = map(frameCount / 10, 0, height, 0, 50);
  
  var spacing = TWO_PI/elements; // how far apart each 'node' will be
  translate(width*0.5, height*0.5); // translate the whole sketch to the centre of the screen
  
  for (var i = 0; i < elements ;i++) {
      noStroke();
      fill(180*sin(frameCount*0.02), random(135, 200), random(50,100));
      push();
      rotate(spacing * i * rotation);
      translate(sin(spacing*i*radius) * magnify, 0); 
      //comment out the line above and swap for the line below for uneven spacing
      //translate(i * 5 ,0);
      rect(i, i, i/20, i/40, random(i/40, i/80));
      
      /*for (let m = 0; m < 10; m++){
        for (let n = 0; n < 10; n++){
          rect(m, n, random(6, 8), random(2, 4));
        }
      }*/
      
      pop();
  }
}