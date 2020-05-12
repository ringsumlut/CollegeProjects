function setup() {
  createCanvas(800, 600);
}

var xball = 100;
var yball = 300;
var xspeed = 5;
var yspeed = 5;

function draw() {
  background(35, 232, 247);
  stroke(255, 255, 255);
  strokeWeight(25);
  fill(249, 118, 10);
  circle(xball, yball, 50, 50);

  if (xball > 800 || xball < 0) {
    xspeed *= -1;
  }
  if (yball > 600 || yball < 0) {
    yspeed *= -1;
  }
  xball = xball + xspeed;
  yball = yball + yspeed;
}
