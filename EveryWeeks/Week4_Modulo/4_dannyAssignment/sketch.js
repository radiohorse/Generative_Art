/* DM3008 Generative Art, Ashley Hi 2026
 * Week 3 - Modulo
 * Micro Animations 
 * -- Run 1 animation at a time by uncommenting it
 * -- Comment it again before running the next one
*/


i=5,k=150; //i controls rotate starting angle | k controls text size & centre point of rotation
speed=.01;//speed of rotation
g=140;
b=180;
t=4;
function setup(){
    createCanvas(900,900);
    textSize(k)}


function draw(){
    translate(k,k); //the centre point of rotation
    fill(i%1*k/2,g,b,t); //fill(R, G, B, Transparency)
    rotate(i+=speed);  // i will gradually become bigger, but modulo restrict R in rgb from getting too big, causing a subtle hue shift loop
    text("Danny",0,0)} //text("the text u want", xpos, ypos)

    /*
    why i find it interesting: 
    creating elegant visual using few lines of code
    the subtle hue shift, i really enjoy the subtlety
    transparency make the whole visual style softer
    text gradually blend into abstract, geometric shape
    */

//modified by Danny 08312026