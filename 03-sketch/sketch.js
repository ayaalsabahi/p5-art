/*Slime mold experimentation*/

let m; 
let d; 

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
  d =  pixelDensity();
  m = new Mold();
  
}

function draw() {
  background(220);
  loadPixels();
  m.update();
  m.display();   
}
