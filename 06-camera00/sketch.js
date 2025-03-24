let video;
let pixelSize = 5; 
let colors = ['#EDABBE', '#DE5C8F', '#872D72', '#7C4EBB', '#411E57', '#411E57']

function setup() {
  createCanvas(800, 800);
  pixelDensity(1)
  noSmooth()
  video = createCapture(VIDEO);
  video.size(width / pixelSize, height / pixelSize);
  video.hide();
}

function draw() {
  background(220);
  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let brightnessValue = ((r + g + b) / 3); 
      let id = floor(map(brightnessValue, 0, 255, 0, colors.length - 1))

      fill(colors[id]);
      noStroke();
      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
   
  }
}

