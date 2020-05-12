var mainDiv = document.getElementById("mainDiv");
var firstDiv = document.getElementById("firstDiv");
var secondDiv = document.getElementById("secondDiv");
var thirdDiv = document.getElementById("thirdDiv");

mainDiv.addEventListener("click", changeColor);

function changeColor() {
  if (event.target == firstDiv) {
    event.target.style.backgroundColor = "#750c18";
  }
  if (event.target == secondDiv) {
    event.target.style.backgroundColor = "#0c7a2d";
  }
  if (event.target == thirdDiv) {
    event.target.style.backgroundColor = "#160d8f";
  }
}
