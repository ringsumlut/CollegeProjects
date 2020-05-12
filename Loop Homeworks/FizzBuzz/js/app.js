function setup() {
  createCanvas(1450, 600);
}

function draw() {
  background(999);
  var y = 300;
  // draw 25 black squares
  for (let i = 0; i < 25; i++) {
    let x = i * 50;
    fill(0);
    ellipse(x + 25, y + 25, 50, 50);

    if (i % 3 == 0 && i % 5 == 0) {
      // draw a blue square when it's divisible by both 3 & 5
      fill(4, 22, 255);
      square(x, y, 50);
    } else if (i % 3 === 0) {
      // draw a purple circle
      fill(195, 4, 255);
      ellipse(x + 25, y + 25, 50, 50);
    } else if (i % 5 === 0) {
      // draw a green square
      fill(4, 255, 14);
      square(x, y, 50);
    }
  }
}
