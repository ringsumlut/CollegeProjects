function catchBadWords() {
  var badWords = ["virii", "quitters", "asteroid"];

  var Input = document.getElementById("Input").value;
  Input = Input.toLowerCase();
  var Str = Input.split(" ");

  var findBadWords = Str.filter((el) => badWords.includes(el));

  dvResponse.innerHTML = "Bad Words : " + findBadWords.join(", ");
  dvResponse2.innerHTML =
    "There has been " + findBadWords.length + " bad words  in the string.";
  document.getElementById("Input").value = null;
}
