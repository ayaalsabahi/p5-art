let circles = []; // Array to store circle positions
let resetButton;
let w = 400;
let h = 400;

function setup() {
  createCanvas(w, h);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
   
    circles.push({ x: mouseX, y: mouseY });
  }

  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    let size = random(5, 20); // Random size
    circle(c.x, c.y, size);
    

    c.x += random(-4, 4);
    c.y += random(-4, 4);
  }
}
