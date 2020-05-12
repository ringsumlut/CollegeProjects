function calculate() {
  var Amount = Number(document.getElementById("Amount").value);
  /** var Percentage = document.getElementById("Percentage").value; **/

  var tipPercentage = Amount * 0.1;
  var totalBill = Amount + tipPercentage;

  console.log(totalBill);

  var outPut = document.getElementById("outPut");
  var outPut2 = document.getElementById("outPut2");

  outPut.innerHTML = "Tip : $" + Number(tipPercentage).toFixed(2);
  outPut2.innerHTML = "Total : $" + Number(totalBill).toFixed(2);

  tipPercentage.value = " ";
  totalBill.value = " ";
}
