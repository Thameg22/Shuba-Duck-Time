var ducky;
var background1;
function preload() {
 
  ducky = createImg("duck.gif");

}

function setup() {
  createCanvas(600, 600);
 


}

function draw() {
image(ducky, 300, 300, 309, 156); //loads only first frame
ducky.position(50,100); //loads GIF correctly}


  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
 
}