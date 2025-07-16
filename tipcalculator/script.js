const bill = document.getElementById("bill");
const tipNo = document.getElementById("tip");
const noPeople = document.getElementById("people");
const btn = document.getElementById("calculate");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const perPerson = document.getElementById("per-person");

function calculate() {

  if (bill.value === "" || tipNo.value === "" || noPeople.value === "") {
    alert("Please fill in all the fields correctly.");
    return;
  }

  const billAmount = Number(bill.value);
  const tipValue = Number(tipNo.value);
  const people = Number(noPeople.value);

  if (billAmount <= 0 || tipValue < 0 || people <= 0) {
    alert("Please enter positive values only.");
    return;
  }

  const tip = (billAmount * tipValue) / 100;
  const total = billAmount + tip;
  const perPersonAmount = total / people;

  tipAmount.textContent = tip.toFixed(2);
  totalAmount.textContent = total.toFixed(2);
  perPerson.textContent = perPersonAmount.toFixed(2);
}


btn.addEventListener("click", calculate);
