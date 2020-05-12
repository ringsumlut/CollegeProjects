let ellipseY = 80;
let ellipseX = 100;
let velocityX = 8;
let velocityY = 8;

function setup() {
  //Make canvas
  createCanvas(900, 800);
}

//rectangle function
function rectangle(color, x, y, sizeX, sizeY) {
  fill(color);
  stroke("black");
  rect(x, y, sizeX, sizeY);
}

function draw() {
  background("green");
  //create ball
  fill("yellow");
  stroke("white");
  strokeWeight(5);
  ellipse(ellipseX, ellipseY, 80);
  //create rectangle
  rectangle("orange", 10, 740, 880, 50);

  ellipseY = ellipseY + velocityY;
  ellipseX = ellipseX + velocityX;

  //bounce the ball when it hits the rectangle
  rectTop = 750;
  rectLeft = 10;
  rectRight = 880;
  ellipseBottom = ellipseY + 20;
  if (
    ellipseBottom > rectTop &&
    ellipseX >= rectLeft &&
    ellipseX <= rectRight
  ) {
    velocityY = -8;
  } else if (ellipseY > 800) {
    velocityY = -8;
  }
  if (ellipseY == 0) {
    velocityY = 8;
  } else if (ellipseX > 900) {
    velocityX = -8;
  } else if (ellipseX < 0) {
    velocityX = 8;
  }
}
