/*Slime mold experimentation*/
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
  m = new Mold();
}

function draw() {
  background(220);
  m.update();
  m.display();  
}
