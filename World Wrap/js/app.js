function setup() {
  createCanvas(800, 600);
}

var i = 0;
var speed = 3;

function draw() {
  background(35, 232, 247);
  stroke(249, 118, 10);
  strokeWeight(5);
  fill(249, 118, 10);
  circle(i, 300, 100, 100);

  if (i > 900) {
    i = 0;
  }
  i += speed;
}
