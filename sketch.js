function setup() {
  createCanvas(800, 800);
  background(5, 80, 100);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
