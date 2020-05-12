let ball = {
  x: 200,
  y: 300,
  speed: 8
};

function draw() {
  background("skyblue");
  if (ball.y > height) {
    ball.speed = ball.speed * -0.95;
  }
  ball.y = ball.y + ball.speed;
  ball.speed = ball.speed + gravity;
  fill(255);
  ellipse(ball.x, ball.y, 24, 24);
}
var gravity = 1;

function setup() {
  createCanvas(800, 600);
}
