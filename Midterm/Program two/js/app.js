function setup() {
  createCanvas(400, 300);
}

var x = 10;
var speed = 1;

function draw() {
  background("skyblue");
  fill("black");
  rect(x, 100, 50, 50);
  if (x > 400) {
    x = 0;
  }
  x += speed;
}
