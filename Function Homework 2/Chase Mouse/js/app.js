function setup() {
  //Make canvas
  createCanvas(800, 800);
}
//variables
let x = 0;
let y = 0;
mouseX = 0;
mouseY = 0;

function draw() {
  background("skyblue");
  fill("black");
  ellipse(x, y, 50);

  let distanceX = (mouseX - x) * 0.2;
  let distanceY = (mouseY - y) * 0.2;

  let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  if (distance > 3) {
    distanceX *= 3 / distance;
    distanceY *= 3 / distance;
  }

  if (distance <= 7) {
    fill("red");
    ellipse(x, y, 50);
  }

  x += distanceX;
  y += distanceY;
}

function mouseMove(evt) {
  mouseX = evt.clientX;
  mouseY = evt.clientY;
}
