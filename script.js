const balanceText = document.getElementById("balance");
const employeesCount = document.getElementById("employees-count");
const employeeCost = document.getElementById("employee-cost");
const storesCount = document.getElementById("stores-count");
const storeCost = document.getElementById("store-cost");
const sell = document.getElementById("sell");
const hire = document.getElementById("hire");
const buyStore = document.getElementById("buy-store");

let balance = 0;
let employees = 0;
let stores = 0;
let nextEmployee = 5;
let nextStore = 1000;

sell.onclick = sellItem;
hire.onclick = hireEmployee;
buyStore.onclick = newStore;

function sellItem() {
  balance++;
  balanceText.innerText = balance;
}

function hireEmployee() {
  if (balance >= nextEmployee) {
    employees++;
    balance -= nextEmployee;
    balanceText.innerText = balance;
    employeesCount.innerText = employees;
    nextEmployee = Math.floor(5 * Math.pow(1.2,employees));
    employeeCost.innerText = nextEmployee;
  }
}

function newStore() {
  if (balance >= nextStore) {
    stores++;
    balance -= nextStore;
    balanceText.innerText = balance;
    storesCount.innerText = stores;
    nextStore = Math.floor(1000 * Math.pow(2,stores));
    storeCost.innerText = nextStore;
  }
}

window.setInterval(function() {
  balance += employees;
  balanceText.innerText = balance;
}, 1000);

function convertCurrency(kurler) {
  if (kurler / 20 < 1) {
    return;
  } else if (kurler / 240 < 1) {
    return;
  } else {
    return;
  }
}
