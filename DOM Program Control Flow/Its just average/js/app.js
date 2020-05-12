var dvResponse = document.getElementById("dvResponse");

function calculate() {
  var stepCount = [16, 22, 20, 30];
  var sum = 0;
  var average = 0;

  for (var i = 0; i < stepCount.length; i++) {
    sum += stepCount[i];
    average = sum / stepCount.length;
  }
  dvResponse.innerHTML += "The sum of the numbers = " + sum;

  dvResponse.innerHTML += "</br> Average = " + average;
}
