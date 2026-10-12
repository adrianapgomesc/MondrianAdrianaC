function setup() {
  createCanvas(800, 800);
  background(20, 6, 200);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
