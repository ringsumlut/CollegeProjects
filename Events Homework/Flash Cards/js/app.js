var answerDiv = document.getElementById("answerDiv");
var Question1 = document.getElementById("firstQuestion");
var Question2 = document.getElementById("secondQuestion");
var Question3 = document.getElementById("thirdQuestion");

theQuestions.addEventListener("click", theAnswer);
function theAnswer() {
  var questionAttribute = event.target.getAttribute("data-question");
  if (event.target == Question1) {
    answerDiv.innerText = "Naruto's first kiss is " + questionAttribute;
  }
  if (event.target == Question2) {
    answerDiv.innerText = "One Piece will " + questionAttribute + "end.";
  }
  if (event.target == Question3) {
    answerDiv.innerText = questionAttribute;
  }
}
