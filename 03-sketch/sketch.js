/*Slime molds experimentation, 
Tutorial: https://youtu.be/VyXxSNcgDtg?si=epcvfxiPLKw_GkDQ
Academic Paper: https://uwe-repository.worktribe.com/output/980579/characteristics-of-pattern-formation-and-evolution-in-approximations-of-physarum-transport-networks
Blogpost: https://cargocollective.com/sagejenson/physarum */

let m; 
let d; 
let molds = []; 
let numMolds = 1000; 
let mouseRadius = 50; //max distance for the mouse

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); 
  d =  pixelDensity();

  //creating the molds
  for(let i = 0; i < numMolds; i++){
    append(molds, new Mold()); 
  }
  
}
function draw() {
  background(0, 5);
  loadPixels();
  for(let i = 0; i < numMolds; i++){
    molds[i].update();
    molds[i].display();
  }
}
