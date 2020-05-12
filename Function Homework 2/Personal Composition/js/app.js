var ball = {
  xball: 200,
  yball: 300,
  xVel: 5,
  yVel: 5,
  size: 40
};
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("black");
  circle(ball.xball, ball.yball, ball.size, ball.size);

  ball.xball = ball.xball + ball.xVel;
  ball.yball = ball.yball + ball.yVel;

  if (ball.xball < 0) {
    ball.xVel = ball.xVel * -1;
    fill("red");
    stroke("blue");
    strokeWeight(5);
    ball.size += 20;
  }
  if (ball.xball > 800) {
    ball.xVel = ball.xVel * -1;
    fill("blue");
    stroke("green");
    strokeWeight(5);
    ball.size -= 20;
  }

  if (ball.yball < 0) {
    ball.yVel = ball.yVel * -1;
    fill("green");
    stroke("white");
    strokeWeight(5);
    ball.size -= 20;
  }
  if (ball.yball > 600) {
    ball.yVel = ball.yVel * -1;
    fill("white");
    stroke("red");
    strokeWeight(5);
    ball.size += 20;
  }
}
