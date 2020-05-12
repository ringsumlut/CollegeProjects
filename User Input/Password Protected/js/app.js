var un = "Username";
var pw = "Password";
function login(form) {
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");

  if (user.value == "Username") {
    if (pass.value == "Password") {
      document.getElementById("success").style.color = "green";
      document.getElementById("success").innerHTML = "Success!";
    }
  } else {
    alert("Invalid Password");
  }
}
