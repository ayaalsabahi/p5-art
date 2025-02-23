let pastelColors = [
  [255, 209, 186], // Peach
  [248, 200, 220], // Blush Pink
  [214, 195, 252], // Lavender
  [179, 229, 252]  // Powder Blue
];

let canvasSize = 400;
let currentBlocks = [];
let blockSpeed = 7;
let maxDist = 20; 

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(220);
  frameRate(60); 
}

function draw() {
  computeblock();
  displayblocks();
  
}

function computeblock(){
  if (mouseIsPressed) { 
    let randomAngle = random(0, TWO_PI);
    let randomColorj = floor(random(pastelColors.length));
    let randomHeight = random(10,30);
    let randomWidth = random(10,30);

    let block = {
      x: mouseX, 
      y: mouseY,
      angle: randomAngle,
      color: pastelColors[randomColorj],
      rotationSpeed: random(-0.1, 0.1),
      h: randomHeight, 
      w: randomWidth,
      d: 0, 
      forward: true
    };
    currentBlocks.push(block);
  }
  
}
function displayblocks(){
  // Update and display all blocks
  for (let block of currentBlocks) {

    if(block.d > maxDist){
      block.forward = false;
      fill(220); //fill the current block spot
      rect(block.x, block.y, block.h, block.w);
      block.d -=1; 
    }

    if(block.forward){
      block.angle += block.rotationSpeed; 
      block.x += cos(block.angle) * blockSpeed;
      block.y += sin(block.angle) * blockSpeed;
      block.d +=1;
      fill(block.color);
      stroke(0.5);
      rect(block.x, block.y, block.h, block.w);
      
    }
    else if (!block.forward && block.d >= 0){
      fill(220);
      noStroke();
      rect(block.x, block.y, block.h, block.w);

      block.angle -= block.rotationSpeed; 
      block.x -= cos(block.angle) * blockSpeed;
      block.y -= sin(block.angle) * blockSpeed;
      block.d -=1;
    }
  
  }
}

