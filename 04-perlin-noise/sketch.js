let t = 3; // Time variable

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);

    beginShape();
    for (let x = 0; x < width; x++) {
      let y = noise(x * 0.01, t) * height; // Noise varies over time
      vertex(x, y);
      point(x + 3,y+2);
      point(x + 10,y+2);
    }
    endShape();
   
  

  t += 0.01; // Increment time
}
