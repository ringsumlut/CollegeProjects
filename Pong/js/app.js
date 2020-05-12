var gameStart = false;

var paddle1 = {
  x: 20,
  y: 20,
  update: function() {
    fill("white");
    rect(this.x, this.y, 15, 60);

    //Keycodes
    //https://keycode.info/
    if (keyIsDown(87) == true) {
      this.y--;
    }

    if (keyIsDown(83) == true) {
      this.y++;
    }
  }
};

var paddle2 = {
  x: 365,
  y: 20,
  update: function() {
    fill("white");
    rect(this.x, this.y, 15, 60);

    //Keycodes
    //https://keycode.info/
    if (keyIsDown(38) == true) {
      this.y--;
    }

    if (keyIsDown(40) == true) {
      this.y++;
    }
  }
};

var ball = {
  x: 50,
  y: 20,
  diam: 25,
  speedX: 2,
  speedY: 2
};

var speedX = 2;
var speedY = 2;
var paddleSpeed = 12;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  gameStart == true;
  background(10);

  paddle1.update();
  paddle2.update();
  createBall();
  bounce();
  move();

  /**for (var i = 0; i < 4; i++) {
    fill("#ff0000");
    rect(100 + i * 100, 0, 20 + i * 20, 20 + i * 20); 
  } */
}

function createBall() {
  fill("white");
  ellipse(ball.x, ball.y, ball.diam, ball.diam);

  ball.x = ball.x + speedX;
  ball.y = ball.y + speedY;
}

function move() {
  ball.x += speedX;
  ball.y += speedY;
}

function bounce() {
  if (ball.x < 60 / 2 || ball.x > 400 - 60 / 2) {
    speedX *= -1;
  }
  if (ball.y < 15 / 2 || ball.y > 300 - 15 / 2) {
    speedY *= -1;
  }
}
