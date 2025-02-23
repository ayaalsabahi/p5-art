let pastelColors = [
  [255, 209, 186], 
  [248, 200, 220], 
  [214, 195, 252], 
  [179, 229, 252] 
];

let canvasSize = 400;
let currentBlocks = [];
let blockSpeed = 15;
let maxDist = 50; 

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
      max: floor(random(10,maxDist)),
      s: floor(random(3,blockSpeed)),
      forward: true
    };
    currentBlocks.push(block);
  }
  
}
function displayblocks(){
  for (let block of currentBlocks) {
    //clearing the first drawn block
    if(block.d > block.max){
      block.forward = false;
      stroke(220);
      fill(220);
      strokeWeight(1.2);
      rect(block.x, block.y, block.h, block.w);
      block.d -=1; 
    }

    //if going fowrads
    if(block.forward){
      block.angle += block.rotationSpeed; 
      block.x += cos(block.angle) * block.s;
      block.y += sin(block.angle) * block.s;
      block.d +=1;
      fill(block.color);
      strokeWeight(0.5);
      stroke(0);
      rect(block.x, block.y, block.h, block.w);
    }

    //if going backwards
    else if (!block.forward && block.d >= 0){
      stroke(220);
      fill(220);
      strokeWeight(1.2);
      let offsetX = cos(block.angle) * block.s;
      let offsetY = sin(block.angle) * block.s;
      rect(block.x - offsetX, block.y - offsetY, block.h, block.w);
      block.x -= cos(block.angle) * block.s;
      block.y -= sin(block.angle) * block.s;
      block.angle -= block.rotationSpeed; 
      block.d -=1;
    }
  
  }
}

