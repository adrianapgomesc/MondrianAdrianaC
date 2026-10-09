function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 6, 200);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
