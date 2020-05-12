function setup() {
  createCanvas(1400, 600);
}

function draw() {
  background("skyblue");

  for (i = 0; i <= 10; i++) {
    for (z = 0; z < i; z++) {
      let x = z * 52;
      let y = i * 52;
      fill("orange");
      stroke("white");
      square(x, y, 50);
      if (i % 2 === 0) {
        fill("purple");
        square(x, y, 50);
        if (z % 2 === 0) {
          fill("green");
          ellipse(x + 25, y + 25, 50, 50);
        }
      }
    }
  }
}
