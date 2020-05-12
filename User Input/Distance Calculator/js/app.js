function calculate() {
  x1 = Number(document.getElementById("x1").value);
  x2 = Number(document.getElementById("x2").value);
  y1 = Number(document.getElementById("y1").value);
  y2 = Number(document.getElementById("y2").value);

  var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
document.getElementById("calculation").innerHTML +=
    "The distance bewtween (" +
    x1 +
    "," +
    y1 +
    ") and (" +
    x2 +
    "," +
    y2 +
    ") is " +
    distance;
}
