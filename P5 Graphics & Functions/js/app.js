function setup() {
  createCanvas(1000, 800);
}
function draw() {
  background("skyblue");

  stroke(180, 240, 70);
  strokeWeight(2);
  fill("yellow");
  ellipse(400, 400, 200, 200);

  fill("black");
  ellipse(360, 360, 20, 20);
  ellipse(441, 360, 20, 20);

  fill("red");
  ellipse(400, 430, 80, 80);
}
