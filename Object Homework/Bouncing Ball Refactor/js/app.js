/** Take your ball bounce assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function. */

var ball = {
  xball: 200,
  yball: 300,
  xVel: 5,
  yVel: 5,
  fill: "#6C3483",
  stroke: "#F39C12",
  strokeWeight: 3,
  size: 40
};
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("skyblue");
  fill(ball.fill);
  stroke(ball.stroke);
  strokeWeight(ball.strokeWeight);
  circle(ball.xball, ball.yball, ball.size, ball.size);

  ball.xball = ball.xball + ball.xVel;
  ball.yball = ball.yball + ball.yVel;

  if (ball.xball > 800 || ball.xball < 0) {
    ball.xVel = ball.xVel * -1;
  }
  if (ball.yball > 600 || ball.yball < 0) {
    ball.yVel = ball.yVel * -1;
  }
}
