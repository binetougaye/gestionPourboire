// VARIABLES
let inputBill = document.getElementById("inputBill");

let inputPeople = document.getElementById("inputPeople");
console.log(inputPeople);
// BUTTONS
let btn15 = document.getElementById("btn15");
let btn5 = document.getElementById("btn5");
let btn10 = document.getElementById("btn10");
let btn25 = document.getElementById("btn25");
let btn50 = document.getElementById("btn50");
let btnCustom = document.getElementById("custom");
let montant = document.getElementById("montant");
let pourcentage = document.getElementById("pourcentage");
let error = document.getElementById("error");
//

let btnReset = document.getElementById("reset");
// LOGIC
// btn15
btn15.addEventListener("click", function () {
  if (inputPeople.value === "") {
    error.innerHTML = "Can't be zero";
  } else {
    error.style.display = "none";
  }
  if (inputPeople.value === 1) {
    btn15.classList.add("btnClick");
    let pourboireenPourcentage = (inputBill.value * 15) / 100;
    let montantTotal = Number(inputBill.value) + Number(pourboireenPourcentage);
    pourcentage.innerHTML = "$" + " " + pourboireenPourcentage;
    montant.innerHTML = "$" + " " + montantTotal;
  }
  if (inputPeople.value > 1) {
    let pourboireenPourcentage = (inputBill.value * 15) / 100;
    let pourcentageParPerson = pourboireenPourcentage / inputPeople.value;
    pourcentage.innerHTML = "$" + " " + pourcentageParPerson;
    let montantParPerson = inputBill.value / inputPeople.value;
    let total = montantParPerson + pourcentageParPerson;
    montant.innerHTML = "$" + " " + total;
  }
});
// btn5
btn5.addEventListener("click", function () {
  if (inputPeople.value === "") {
    error.innerHTML = "Can't be zero";
  }
  if (inputPeople.value === 1) {
    let pourboireenPourcentage = (inputBill.value * 5) / 100;
    let montantTotal = Number(inputBill.value) + Number(pourboireenPourcentage);
    pourcentage.innerHTML = "$" + " " + pourboireenPourcentage;
    montant.innerHTML = "$" + " " + montantTotal;
  }
  if (inputPeople.value > 1) {
    let pourboireenPourcentage = (inputBill.value * 5) / 100;
    let pourcentageParPerson = pourboireenPourcentage / inputPeople.value;
    pourcentage.innerHTML = "$" + " " + pourcentageParPerson;
    let montantParPerson = inputBill.value / inputPeople.value;
    let total = montantParPerson + pourcentageParPerson;
    montant.innerHTML = "$" + " " + total;
  }
});
//btn10
btn10.addEventListener("click", function () {
  if (inputPeople.value === "") {
    error.innerHTML = "Can't be zero";
  } else {
    error.style.display = "none";
  }
  if (inputPeople.value === 1) {
    let pourboireenPourcentage = (inputBill.value * 10) / 100;
    let montantTotal = Number(inputBill.value) + Number(pourboireenPourcentage);
    pourcentage.innerHTML = "$" + " " + pourboireenPourcentage;
    montant.innerHTML = "$" + " " + montantTotal;
  }
  if (inputPeople.value > 1) {
    let pourboireenPourcentage = (inputBill.value * 10) / 100;
    let pourcentageParPerson = pourboireenPourcentage / inputPeople.value;
    pourcentage.innerHTML = "$" + " " + pourcentageParPerson;
    let montantParPerson = inputBill.value / inputPeople.value;
    let total = montantParPerson + pourcentageParPerson;
    montant.innerHTML = "$" + " " + total;
  }
  pourcentage.innerHTML = "$" + " " + pourboireenPourcentage;
});
//   btn25
btn25.addEventListener("click", function () {
  if (inputPeople.value === "") {
    error.innerHTML = "Can't be zero";
  } else {
    error.style.display = "none";
  }
  if (inputPeople.value === 1) {
    let pourboireenPourcentage = (inputBill.value * 25) / 100;
    let montantTotal = Number(inputBill.value) + Number(pourboireenPourcentage);
    pourcentage.innerHTML = "$" + " " + pourboireenPourcentage;
    montant.innerHTML = "$" + " " + montantTotal;
  }
  if (inputPeople.value > 1) {
    let pourboireenPourcentage = (inputBill.value * 25) / 100;
    let pourcentageParPerson = pourboireenPourcentage / inputPeople.value;
    pourcentage.innerHTML = "$" + " " + pourcentageParPerson;
    let montantParPerson = inputBill.value / inputPeople.value;
    let total = montantParPerson + pourcentageParPerson;
    montant.innerHTML = "$" + " " + total;
  }
});
// btn50
btn50.addEventListener("click", function () {
  if (inputPeople.value === "") {
    error.innerHTML = "Can't be zero";
  } else {
    error.style.display = "none";
  }
  if (inputPeople.value === 1) {
    let pourboireenPourcentage = (inputBill.value * 50) / 100;
    let montantTotal = Number(inputBill.value) + Number(pourboireenPourcentage);
    pourcentage.innerHTML = "$" + " " + pourboireenPourcentage;
    montant.innerHTML = "$" + " " + montantTotal;
  }
  if (inputPeople.value > 1) {
    let pourboireenPourcentage = (inputBill.value * 50) / 100;
    let pourcentageParPerson = pourboireenPourcentage / inputPeople.value;
    pourcentage.innerHTML = "$" + " " + pourcentageParPerson;
    let montantParPerson = inputBill.value / inputPeople.value;
    let total = montantParPerson + pourcentageParPerson;
    montant.innerHTML = "$" + " " + total;
  }
});
// INPUT COSTUM

btnCustom.addEventListener("input", function () {
  if (inputPeople.value === "") {
    error.innerHTML = "Can't be zero";
  } else {
    error.style.display = "none";
  }
  if (inputPeople.value === 1) {
    let pourboireenPourcentage = (inputBill.value * btnCustom.value) / 100;
    let montantTotal = Number(inputBill.value) + Number(pourboireenPourcentage);
    pourcentage.innerHTML = "$" + " " + pourboireenPourcentage;
    montant.innerHTML = "$" + " " + montantTotal;
  }
  if (inputPeople.value > 1) {
    let pourboireenPourcentage = (inputBill.value * btnCustom.value) / 100;
    let pourcentageParPerson = pourboireenPourcentage / inputPeople.value;
    pourcentage.innerHTML = "$" + " " + pourcentageParPerson;
    let montantParPerson = inputBill.value / inputPeople.value;
    let total = montantParPerson + pourcentageParPerson;
    montant.innerHTML = "$" + " " + total;
  }
});
// BTN RESET
btnReset.addEventListener("click", function () {
  montant.innerHTML = "$" + " 0.00";
  pourcentage.innerHTML = "$" + " 0.00";
  inputBill.value = "0";
  inputPeople.value = " 0";
});
