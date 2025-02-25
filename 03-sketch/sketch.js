/*Slime mold experimentation*/

let m; 
let d; 
let molds = []; 
let numMolds = 5; 

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
  d =  pixelDensity();

  //creating the molds
  for(let i = 0; i < numMolds; i++){
    append(molds, new Mold()); 
  }
  
}

function draw() {
  background(220);
  loadPixels();
  for(let i = 0; i < numMolds; i++){
    molds[i].update();
    molds[i].display();
  }
}
