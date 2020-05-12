function setup() {
  createCanvas(400, 300);
  //First section
  for (var e = 0; e < 20; e++) {
    for (var h = 0; h < 20; h++) {
      circle(e * 20, h * 20, 20);
    }
  }
}
function draw() {
  //Second section

  background(255, 200, 200);
  for (var e = 0; e < 20; e++) {
    for (var h = 0; h < 20; h++) {
      circle(e * 20, h * (frameCount % 200), 20);
    }
  }

  //Third section
  //set background color to pink
  background(255, 200, 200);
  //return the sin of i*10+200
  for (var i = 0; i < 20; i++) {
    var y = Math.sin(i) * 10 + 200;
    circle(i * 10, y, 7);
  }

  //"For fun": how might you animate the third section?
}
