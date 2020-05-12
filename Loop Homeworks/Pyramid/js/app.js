function setup() {
  createCanvas(1400, 600);
}

function draw() {
  background("white");

  for (i = 0; i <= 4; i++) {
    for (z = 0; z < i; z++) {
      let x = z * 52;
      let y = i * 52;
      fill("red");
      stroke("white");
      square(x, y, 50);
    }
  }
}
