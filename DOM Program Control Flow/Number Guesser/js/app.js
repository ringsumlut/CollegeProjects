var numberGuess = document.getElementById("guessNumber");
var submit = document.getElementById("guess");
var dvResponse = document.getElementById("dvResponse");

var count = 1;
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
function guess() {
  var userGuess = numberGuess.value;

  if (count > 3) {
    document.getElementById("dvResponse").innerHTML = "";
    dvResponse.innerHTML += "Game Over";
    console.log("over");
  } else {
    if (userGuess == randomNumber) {
      document.getElementById("dvResponse").innerHTML = "";
      dvResponse.innerHTML += "Congratulations! You guessed it right.";
      console.log("nice");
    } else {
      document.getElementById("dvResponse").innerHTML = "";
      dvResponse.innerHTML += "Incorrect. ";
      if (userGuess > randomNumber) {
        dvResponse.innerHTML += "Guess Lower";
        console.log("lower");
      } else if (userGuess < randomNumber) {
        document.getElementById("dvResponse").innerHTML = "";
        dvResponse.innerHTML += "Guess Higher";
        console.log("higher");
      }
    }
    count++;
    guessNumber.value = "";
  }
}
