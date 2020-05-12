function submit() {
  var pizzaName = document.getElementById("pizzaName").value;
  var totalPrice = document.getElementById("totalPrice").value;
  var newDiv = document.createElement("div");

  newDiv.innerHTML =
    "Pizza Name: " + pizzaName + "</br>" + "Total Price: " + totalPrice;
  //document.getElementById("dvOutput").innerHTML = "Pizza Name: " + pizzaName;//

  //document.getElementById("dvOutput2").innerHTML = "Total Price: " + totalPrice;//

  document.body.appendChild(newDiv);
  if (totalPrice < 5) {
    newDiv.style.backgroundColor = "red";
  }
  document.getElementById("pizzaName").value = null;
  document.getElementById("totalPrice").value = null;
}
