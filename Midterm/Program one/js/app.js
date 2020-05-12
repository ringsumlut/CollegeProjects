/** canvas 400x300
 * draw a circle at the mouse location, repaints/clears the background every draw call. if the circle is on the left half of the screen, make it a red circle. else make it a black circle.
 */

/** draw a square at x position 10. every frame draw the square one pixel futher to the right. this will cause the square to animation towards the right side of the screen */

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background("skyblue");
  ellipse(mouseX, mouseY, 33, 33);

  if (mouseX > 200) {
    fill("black");
  }
  if (mouseX <= 200) {
    fill("red");
  }
}
