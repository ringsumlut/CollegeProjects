/** Create an object with a custom update function that draws a circle to the screen. This object should have properties for its x and y location.
In the custom update function, move the object 2 pixels to the right if the right key is held down. 2 pixels to the left if the left key is held down, 2 pixels up if the up key is held down, and 2 pixels down if the down key is held down. */

function setup() {
  createCanvas(500, 500);
}

/** position the circle */
var i = 100;
var j = 100;

function draw() {
  background("skyblue");
  fill("yellow");
  stroke("orange");
  strokeWeight(2);
  circle(i, j, 100, 100);

  if (i >= 500) {
    i = 0;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    i = i - 2;
  } else if (keyCode === RIGHT_ARROW) {
    i = i + 2;
  }
  if (keyCode === UP_ARROW) {
    j = j - 2;
  } else if (keyCode === DOWN_ARROW) {
    j = j + 2;
  }
}
