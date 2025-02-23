let circles = []
let speed = 0.05
//circle stuff
let d =  30
let time = 0
let circleNum = 6
function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(220);
  if (mouseIsPressed){
    circles.push({x: mouseX, y:mouseY});
  }

  for(let i = 0; i < circles.length; i++){
   c = circles[i];
   fill(0);
   circle(c.x,c.y,d);
   drawCircles(c.x, c.y, 6);
  }
  time += speed;

}

function drawCircles(posX, posY, numCircles){
  
  let distanceFromCenter = d;
  for(let i = 0; i < numCircles; i++){
    let angleDifference = ((2 * i)* Math.PI)/numCircles + time;
    let xVal = posX + distanceFromCenter * Math.cos(angleDifference);
    let yVal = posY + distanceFromCenter * Math.sin(angleDifference);

    fill(255);
    strokeWeight(0.5);
    circle(xVal,yVal,d - 10);

    //calculate next positions for line ending
    let angleDifferenceForLine = ((2 * ((i + 1)%numCircles))* Math.PI)/numCircles + time;
    let xValE = posX + distanceFromCenter * Math.cos(angleDifferenceForLine);
    let yValE = posY + distanceFromCenter * Math.sin(angleDifferenceForLine);
    strokeWeight(1);
    fill(255)
    line(xVal,yVal,xValE, yValE);     //reuse some x & y vals from the circle
  }
}
