var userName = document.getElementById("userName");
var outPut = document.getElementById("outPut");

function gatherName() {
  outPut.innerHTML = "Hello " + userName.value;
  userName.value = " ";
}
