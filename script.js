const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const balanceText = document.getElementById("balance");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");
const currency = document.getElementById("currency");
const altinlar = document.getElementById("altinlar");
const yiralar = document.getElementById("yiralar");
const kurler = document.getElementById("kurler");
const revTrackDiv = document.getElementById("rev-track-div");
const revTrackerElement = document.getElementById("rev-tracker");
const researchList = document.getElementById("research-list");
const employeesDiv = document.getElementById("employees-div");
const employeesCount = document.getElementById("employees-count");
const employeesRPSText = document.getElementById("employees-rps");
const employeeCost = document.getElementById("employee-cost");
const shopsDiv = document.getElementById("shops-div");
const shopsCount = document.getElementById("shops-count");
const shopsRPSText = document.getElementById("shops-rps");
const shopCost = document.getElementById("shop-cost");
const fleetDiv = document.getElementById("fleet-div");
const fleetCount = document.getElementById("fleet-count");
const fleetRPSText = document.getElementById("fleet-rps");
const fleetCost = document.getElementById("fleet-cost");
const minesDiv = document.getElementById("mines-div");
const minesCount = document.getElementById("mines-count");
const minesRPSText = document.getElementById("mines-rps");
const minesCost = document.getElementById("mines-cost");
const happinessDiv = document.getElementById("happiness-div");
const happinessLevel = document.getElementById("happiness-level-text");
const happinessBar = document.getElementById("happiness-bar");
const happinessPSElem = document.getElementById("happiness-per-sec");
const points2Elem = document.getElementById("points2-count");
const expeditionsDiv = document.getElementById("expeditions-div");
const pointsCount = document.getElementById("points-count");
const researchFleetCost = document.getElementById("research-fleet-cost");
const researchFleetCount = document.getElementById("research-fleet-count");
const expeditionOptionsEngine = document.getElementById("expedition-option-engine");
const typePicker = document.getElementById("type-picker");
const crewPicker = document.getElementById("crew-picker");
const equipmentPicker = document.getElementById("equipment-picker");
const escapePlans = document.getElementById("escape-plans");
const launchCostText = document.getElementById("launch-cost");
const successRateText = document.getElementById("success-rate");
const expeditionProgressBar = document.getElementById("expedition-progress-bar");
const expeditionResultText = document.getElementById("expedition-result-text");
const currencyBaseAnnouncementDiv = document.getElementById("currency-base-announcement");
const discoveredSecretAnnouncementDiv = document.getElementById("discovered-secret-announcement");
const billionaireAnnouncementDiv = document.getElementById("billionaire-announcement");
const loansEngineDiv = document.getElementById("loans-engine");
const countryPicker = document.getElementById("country-picker");
const optOissos = document.getElementById("opt-oissos");
const optKaskinen = document.getElementById("opt-kaskinen");
const optVinte = document.getElementById("opt-vinte");
const optHeyrland = document.getElementById("opt-heyrland");
const optAmariyan = document.getElementById("opt-amariyan");
const optMapSut = document.getElementById("opt-mapsut");
const optGenzhu = document.getElementById("opt-genzhu");
const optPezia = document.getElementById("opt-pezia");
const optCascavey = document.getElementById("opt-cascavey");
const principalPicker = document.getElementById("principal-picker");
const interestPicker = document.getElementById("interest-picker");
const opt10pc = document.getElementById("10pc");
const opt20pc = document.getElementById("20pc");
const timePicker = document.getElementById("time-picker");
const opt5y = document.getElementById("5y");
const opt15y = document.getElementById("15y");
const opt25y = document.getElementById("25y");
const opt40y = document.getElementById("40y");
const loan6Slot = document.getElementById("loan6-slot");
const loan7Slot = document.getElementById("loan7-slot");
const loan8Slot = document.getElementById("loan8-slot");
const loan9Slot = document.getElementById("loan9-slot");
const loan10Slot = document.getElementById("loan10-slot");
const loan1C = document.getElementById("country1");
const loan1Pr = document.getElementById("principal1");
const loan1R = document.getElementById("rate1");
const loan1T = document.getElementById("time1");
const loan1Pd = document.getElementById("paid1");
const loan2C = document.getElementById("country2");
const loan2Pr = document.getElementById("principal2");
const loan2R = document.getElementById("rate2");
const loan2T = document.getElementById("time2");
const loan2Pd = document.getElementById("paid2");
const loan3C = document.getElementById("country3");
const loan3Pr = document.getElementById("principal3");
const loan3R = document.getElementById("rate3");
const loan3T = document.getElementById("time3");
const loan3Pd = document.getElementById("paid3");
const loan4C = document.getElementById("country4");
const loan4Pr = document.getElementById("principal4");
const loan4R = document.getElementById("rate4");
const loan4T = document.getElementById("time4");
const loan4Pd = document.getElementById("paid4");
const loan5C = document.getElementById("country5");
const loan5Pr = document.getElementById("principal5");
const loan5R = document.getElementById("rate5");
const loan5T = document.getElementById("time5");
const loan5Pd = document.getElementById("paid5");
const loan6C = document.getElementById("country6");
const loan6Pr = document.getElementById("principal6");
const loan6R = document.getElementById("rate6");
const loan6T = document.getElementById("time6");
const loan6Pd = document.getElementById("paid6");
const loan7C = document.getElementById("country7");
const loan7Pr = document.getElementById("principal7");
const loan7R = document.getElementById("rate7");
const loan7T = document.getElementById("time7");
const loan7Pd = document.getElementById("paid7");
const loan8C = document.getElementById("country8");
const loan8Pr = document.getElementById("principal8");
const loan8R = document.getElementById("rate8");
const loan8T = document.getElementById("time8");
const loan8Pd = document.getElementById("paid8");
const loan9C = document.getElementById("country9");
const loan9Pr = document.getElementById("principal9");
const loan9R = document.getElementById("rate9");
const loan9T = document.getElementById("time9");
const loan9Pd = document.getElementById("paid9");
const loan100C = document.getElementById("country10");
const loan10Pr = document.getElementById("principal10");
const loan10R = document.getElementById("rate10");
const loan10T = document.getElementById("time10");
const loan10Pd = document.getElementById("paid10");
const taxesEngineDiv = document.getElementById("taxes-engine");
const tax1Div = document.getElementById("tax1");
const tax2Div = document.getElementById("tax2");
const tax3Div = document.getElementById("tax3");
const tax4Div = document.getElementById("tax4");
const tax5Div = document.getElementById("tax5");
const tax6Div = document.getElementById("tax6");
const tax7Div = document.getElementById("tax7");
const tax8Div = document.getElementById("tax8");
const tax9Div = document.getElementById("tax9");
const tax10Div = document.getElementById("tax10");
const sell = document.getElementById("sell");
const hire = document.getElementById("hire");
const buyShop = document.getElementById("buy-shop");
const buyShip = document.getElementById("buy-ship");
const buyMine = document.getElementById("buy-mine");
const buyResearchShip = document.getElementById("buy-research-ship");
const launchBtn = document.getElementById("launch-btn");
const lowerTax1Btn = document.getElementById("btn-lower-tax1");
const tax1TextElem = document.getElementById("tax1-display");
const raiseTax1Btn = document.getElementById("btn-raise-tax1");
const lowerTax2Btn = document.getElementById("btn-lower-tax2");
const tax2TextElem = document.getElementById("tax2-display");
const raiseTax2Btn = document.getElementById("btn-raise-tax2");
const lowerTax3Btn = document.getElementById("btn-lower-tax3");
const tax3TextElem = document.getElementById("tax3-display");
const raiseTax3Btn = document.getElementById("btn-raise-tax3");
const lowerTax4Btn = document.getElementById("btn-lower-tax4");
const tax4TextElem = document.getElementById("tax4-display");
const raiseTax4Btn = document.getElementById("btn-raise-tax4");
const lowerTax5Btn = document.getElementById("btn-lower-tax5");
const tax5TextElem = document.getElementById("tax5-display");
const raiseTax5Btn = document.getElementById("btn-raise-tax5");
const lowerTax6Btn = document.getElementById("btn-lower-tax6");
const tax6TextElem = document.getElementById("tax6-display");
const raiseTax6Btn = document.getElementById("btn-raise-tax6");
const lowerTax7Btn = document.getElementById("btn-lower-tax7");
const tax7TextElem = document.getElementById("tax7-display");
const raiseTax7Btn = document.getElementById("btn-raise-tax7");
const lowerTax8Btn = document.getElementById("btn-lower-tax8");
const tax8TextElem = document.getElementById("tax8-display");
const raiseTax8Btn = document.getElementById("btn-raise-tax8");
const lowerTax9Btn = document.getElementById("btn-lower-tax9");
const tax9TextElem = document.getElementById("tax9-display");
const raiseTax9Btn = document.getElementById("btn-raise-tax9");
const lowerTax10Btn = document.getElementById("btn-lower-tax10");
const tax10TextElem = document.getElementById("tax10-display");
const raiseTax10Btn = document.getElementById("btn-raise-tax10");
const loanBtn = document.getElementById("loan-btn");
const startOverBtn = document.getElementById("start-over-btn");

var savegame;

// INITIALIZE BUTTONS

saveBtn.onclick = save;
deleteBtn.onclick = deleteSave;
sell.onclick = sellItem;
/* hire.onclick = hireEmployee;
buyShop.onclick = newShop;
buyShip.onclick = newShip;
buyMine.onclick = newMine;
buyResearchShip.onclick = newResearchShip;
launchBtn.onclick = launchExpedition;
startOverBtn.onclick = startOver; */

// PURCHASE FUNCTIONS ----------------------

function sellItem() {
  balance++;
  balanceText.innerText = Math.floor(balance);
  convertCurrency(balance);
}

function hireEmployee() {
  employees++;
  balance -= nextEmployee;
  balanceText.innerText = Math.floor(balance);
  employeesCount.innerText = employees;
  nextEmployee = Math.floor(10 * Math.pow(1.2,employees));
  employeeCost.innerText = easyRead(nextEmployee);
  convertCurrency(balance);
  checkButtons();
}

function newShop() {
  shops++;
  balance -= nextShop;
  balanceText.innerText = Math.floor(balance);
  shopsCount.innerText = shops;
  nextShop = Math.floor(1080 * Math.pow(1.1,shops));
  shopCost.innerText = easyRead(nextShop);
  convertCurrency(balance);
  checkButtons();
}

function newShip() {
  ships++;
  balance -= nextShip;
  balanceText.innerText = Math.floor(balance);
  fleetCount.innerText = ships;
  nextShip = Math.floor(43200 * Math.pow(1.1,ships));
  fleetCost.innerText = easyRead(nextShip);
  convertCurrency(balance);
  checkButtons();
}

function newMine() {
  mines++;
  balance -= nextMine;
  balanceText.innerText = Math.floor(balance);
  minesCount.innerText = mines;
  nextMine = Math.floor(504000 * Math.pow(1.1,mines));
  minesCost.innerText = easyRead(nextMine);
  convertCurrency(balance);
  checkButtons();
}

// PAGE UPDATING --------------------------

function convertCurrency(num) {
  altinlar.innerText = Math.floor(num / 360);
  yiralar.innerText = Math.floor(num % 360 / 30);
  kurler.innerText = Math.floor(num % 360 % 30);
}

function easyRead(num) {
  a = Math.ceil(num / 360);
  y = Math.ceil(num % 360 / 30);
  k = Math.ceil(num % 360 % 30);
  if (num >= 331) {
    return `${a} \u023a`;
  } else if (num >= 30) {
    return `${y} \u024e`;
  } else {
    return `${k} \u20ad`
  }
}

function revTracker() {
  let rps = (empMult * employees) + (shopsRPS * shopsMult * shops) + (fleetRPS * fleetMult * ships) + (minesRPS * minesMult * mines);
  let rpsText;
  if (rps >= 331) {
    rpsText = `${(rps / 360).toFixed(2)} \u023a`;
  } else if (rps >= 30) {
    rpsText = `${(rps % 360 / 30).toFixed(2)} \u024e`;
  } else {
    rpsText = `${(rps % 360 % 30).toFixed(2)} \u20ad`
  }
  revTrackerElement.innerText = rpsText;
}

/* function checkButtons() {
  if (balance < nextEmployee) {
    hire.disabled = true;
  } else {
    hire.disabled = false;
  }
  if (balance < nextShop) {
    buyShop.disabled = true;
  } else {
    buyShop.disabled = false;
  }
  if (balance < nextShip) {
    buyShip.disabled = true;
  } else {
    buyShip.disabled = false;
  }
  if (balance < nextMine) {
    buyMine.disabled = true;
  } else {
    buyMine.disabled = false;
  }
  if (balance < nextResearchShip) {
    buyResearchShip.disabled = true;
  } else {
    buyResearchShip.disabled = false;
  }
  if (researchShips === 0 || balance < (launchCost * researchShips) || typePicker.value === "0" || launching === 1) {
    launchBtn.disabled = true;
  } else {
    launchBtn.disabled = false;
  }
} */
// TODO add all new buttons above

function manageResearch() {
  for(let i=0; i < research.length; i++) {
    if (research[i].trigger() && (research[i].uses > 0)) {
      displayResearch(research[i]);
      research[i].uses -= 1;
      activeResearch.push(research[i]);
    }
  }
  for(var i = 0; i < activeResearch.length; i++){
    if (activeResearch[i].cost()){
        activeResearch[i].element.disabled = false;
    } else {
        activeResearch[i].element.disabled = true;
    }   
  }
}

function displayResearch(project){
  project.element = document.createElement("button");
  project.element.setAttribute("id", project.id);
  
  project.element.onclick = function() {project.effect()};

  project.element.setAttribute("class", "research-button");
  researchList.appendChild(project.element);

  var span = document.createElement("span");
  span.style.fontWeight = "bold";
  project.element.appendChild(span);

  var title = document.createTextNode(project.title);
  span.appendChild(title);

  var cost = document.createTextNode(project.priceTag);
  project.element.appendChild(cost);

  var div = document.createElement("div");
  project.element.appendChild(div);

  var description = document.createTextNode(project.description);
  project.element.appendChild(description);
}

// RESEARCH EXPEDITIONS --------------------

function newResearchShip() {
  researchShips++;
  researchFleetTotal++;
  balance -= nextResearchShip;
  balanceText.innerText = Math.floor(balance);
  researchFleetCount.innerText = researchShips;
  nextResearchShip = Math.floor(72000 * Math.pow(1.06,researchFleetTotal));
  researchFleetCost.innerText = easyRead(nextResearchShip);
  updateLaunchCost();
  convertCurrency(balance);
  checkButtons();
}

function calcProbability(prb) {
  if (Math.random() < prb) {return true}
  else {return false};
}

function calcLaunchCost() {
  typeValue = parseInt(typePicker.value);
  crewValue = parseInt(crewPicker.value);
  equipmentValue = parseInt(equipmentPicker.value);
  successRate = typeValue + crewValue + equipmentValue + escapePlansFlag;

  launchCost = 0;

  for (let i=0; i < 3; i++) { //look through TYPES
    if (typeValue === expeditionOptionsList[i].value) {
      launchCost += expeditionOptionsList[i].cost;
    }
  }
  for (let i=3; i < 6; i++) { //look through CREWS
    if (crewValue === expeditionOptionsList[i].value) {
      launchCost += expeditionOptionsList[i].cost;
    }
  }
  for (let i=6; i < expeditionOptionsList.length; i++) { //look through EQUIPS
    if (equipmentValue === expeditionOptionsList[i].value) {
      launchCost += expeditionOptionsList[i].cost;
    }
  }
  launchCost = launchCost * researchShips;
  checkButtons();
}

/* typePicker.oninput = updateLaunchCost;
crewPicker.oninput = updateLaunchCost;
equipmentPicker.oninput = updateLaunchCost; */

function updateLaunchCost() {
  calcLaunchCost();
  launchCostText.innerText = `${Math.ceil(launchCost)} \u023a`;
  successRateText.innerText = successRate;
}

var progress = 0;
var width = 1;
var launching = 0;
var progressDelay;
var loadDelayTimer;
var loadDelay = false;

function launchExpedition() {
  if (loadDelay) {
    clearTimeout(loadDelayTimer);
    width = 1;
    expeditionProgressBar.style.width = "1%";
  };
  launching = 1;
  expeditionResultText.innerHTML = `Expedition in progress...`;
  calcLaunchCost();
  balance -= launchCost * 360;
  balanceText.innerText = Math.floor(balance);
  let currentShips = researchShips;
  let newResearchPoints = 0;
  let time = 50; 

  if (typeValue === 30) {
    time = 600;
  } else if (typeValue === 10) {
    time = 3000;
  }
  
  progressBar(time);
  checkButtons();

  progressDelay = setTimeout(() => { // wait for progress to finish

    if (calcProbability(successRate/100)) { //success!
      for (let i=0; i < 3; i++) { //look through TYPES
        if (typeValue === expeditionOptionsList[i].value) {
          newResearchPoints = expeditionOptionsList[i].result;
          researchPoints += newResearchPoints;
          break;
        }
      }
      pointsCount.innerText = researchPoints;
      expeditionResultText.innerHTML = `Expedition successful! You generated ${newResearchPoints} research points.`;
    } else { //failure
      let lostShips = Math.floor(Math.random() * (currentShips + 1));
      researchShips -= lostShips;
      researchFleetCount.innerText = researchShips;
      expeditionResultText.innerHTML = `Expedition failed. You lost ${lostShips} ships.`;
      updateLaunchCost();
    }
    loadDelayTimer = setTimeout(() => {
      width = 1;
      expeditionProgressBar.style.width = "1%";
      loadDelay = false;
    }, 1500);
    launching = 0;
    loadDelay = true;
  }, (time * 100) + 500);
}

function progressBar(time) {
  if (progress === 0) {
    progress = 1;
    let progressTimer = setInterval(() => {
      if (width >= 100) {
        clearInterval(progressTimer);
        progress = 0;
      } else {
        width++;
        expeditionProgressBar.style.width = width + "%";
      }
    }, time);
  }
}

// HAPPINESS AND PHASE 3 RESEARCH ------------------

function updateHappiness() {
  if (happiness >= 100) {happiness = 100}
  else if (happiness <= 0) {happiness = 0}
  happinessBar.style.width = happiness + "%";
  happinessLevel.innerText = Math.floor(happiness);
  happinessLevel.style.marginLeft = (happiness - 1) + "%";
}

/* function calcResearchPts() {
  researchPoints += 1;

} */

// LOANS -------------------------------------

function signLoan() {
  countryValue = countryPicker.value;
  principalValue = parseInt(principalPicker.value);
  rateValue = parseInt(interestPicker.value);
  timeValue = parseInt(timePicker.value);
  loansList.push({
    loanNum: loansList.length + 1,
    country: countryValue,
    principal: principalValue,
    rate: rateValue,
    time: timeValue,
    paid: 0,
    pmt: (Math.floor(((rateValue/100 * principalValue) / 12) * 100) / 100)
  })
  balance -= (principalValue * 360);
  displayLoans();
}

function updateLoans() {
  for (let i=0; i < loansList.length; i++) {
    let currTime = loansList[i].time;
    let currPaid = loansList[i].paid;
    currTime--;
    currPaid += loansList[i].pmt;
    loansList[i].time = currTime;
    loansList[i].paid = currPaid;
    balance += loansList[i].pmt * 360;
  }
  displayLoans();
  for (let i= (loansList.length-1); i>=0; i--) {
    if (loansList[i].time <= 0) {
      balance += loansList[i].principal;
      loansList.splice(i, 1);
    }
  }
}

function displayLoans() {
  for (let i=0; i < maxLoans; i++) {
    let cid = "country" + (i + 1);
    let prid = "principal" + (i + 1);
    let rid = "rate" + (i + 1);
    let tid = "time" + (i + 1);
    let pdid = "paid" + (i + 1);
    let c = document.getElementById(cid);
    let pr = document.getElementById(prid);
    let r = document.getElementById(rid);
    let t = document.getElementById(tid);
    let pd = document.getElementById(pdid);
    if (typeof loansList[i] !== 'undefined') {
      c.innerText = loansList[i].country;
      if (loansList[i].principal === 100) {
        pr.innerText = "100 \u023a";
      } else if (loansList[i].principal === 1000) {
        pr.innerText = "1,000 \u023a";
      } else {
        pr.innerText = "10,000 \u023a";
      }
      //pr.innerText = loansList[i].principal;
      r.innerText = `${loansList[i].rate}%`;
      t.innerText = loansList[i].time;
      pd.innerText = `${Math.floor(loansList[i].paid)} \u023a`;
    } else {
      c.innerText = "";
      pr.innerText = "";
      r.innerText = "";
      t.innerText = "";
      pd.innerText = "";
    }
  }
}

// TAXES -------------------------------------

function updateTaxes(num) {
  empMult += num;
  shopsMult += num;
  fleetMult += num;
  minesMult += num;
}

function lowerTax1() {
  updateTaxes(-0.1);
  taxes1--;
  tax1TextElem.innerText = taxes1;
}

function raiseTax1() {
  updateTaxes(0.1);
  taxes1++;
  tax1TextElem.innerText = taxes1;
}

function lowerTax2() {
  updateTaxes(-0.1);
  taxes2--;
  tax2TextElem.innerText = taxes2;
}

function raiseTax2() {
  updateTaxes(0.1);
  taxes2++;
  tax2TextElem.innerText = taxes2;
}

function lowerTax3() {
  updateTaxes(-0.1);
  taxes3--;
  tax3TextElem.innerText = taxes3;
}

function raiseTax3() {
  updateTaxes(0.1);
  taxes3++;
  tax3TextElem.innerText = taxes3;
}

function lowerTax4() {
  updateTaxes(-0.1);
  taxes4--;
  tax4TextElem.innerText = taxes4;
}

function raiseTax4() {
  updateTaxes(0.1);
  taxes4++;
  tax4TextElem.innerText = taxes4;
}

function lowerTax5() {
  updateTaxes(-0.1);
  taxes5--;
  tax5TextElem.innerText = taxes5;
}

function raiseTax5() {
  updateTaxes(0.1);
  taxes5++;
  tax5TextElem.innerText = taxes5;
}

function lowerTax6() {
  updateTaxes(-0.1);
  taxes6--;
  tax6TextElem.innerText = taxes6;
}

function raiseTax6() {
  updateTaxes(0.1);
  taxes6++;
  tax6TextElem.innerText = taxes6;
}

function lowerTax7() {
  updateTaxes(-0.1);
  taxes7--;
  tax7TextElem.innerText = taxes7;
}

function raiseTax7() {
  updateTaxes(0.1);
  taxes7++;
  tax7TextElem.innerText = taxes7;
}

function lowerTax8() {
  updateTaxes(-0.1);
  taxes8--;
  tax8TextElem.innerText = taxes8;
}

function raiseTax8() {
  updateTaxes(0.1);
  taxes8++;
  tax8TextElem.innerText = taxes8;
}

function lowerTax9() {
  updateTaxes(-0.1);
  taxes9--;
  tax9TextElem.innerText = taxes9;
}

function raiseTax9() {
  updateTaxes(0.1);
  taxes9++;
  tax9TextElem.innerText = taxes9;
}

function lowerTax10() {
  updateTaxes(-0.1);
  taxes10--;
  tax10TextElem.innerText = taxes10;
}

function raiseTax10() {
  updateTaxes(0.1);
  taxes10++;
  tax10TextElem.innerText = taxes10;
}

// CHECK FOR SAVES -------------------------

if (localStorage.getItem("saveData") !== null) {
  load();
}

// SAVING AND LOADING ----------------------
function refresh() {
  balanceText.innerText = Math.floor(balance);
  convertCurrency(balance);
  employeesCount.innerText = employees;
  employeeCost.innerText = easyRead(nextEmployee);
  shopsCount.innerText = shops;
  shopCost.innerText = easyRead(nextShop);
  fleetCount.innerText = ships;
  fleetCost.innerText = easyRead(nextShip);
  minesCount.innerText = mines;
  minesCost.innerText = easyRead(nextMine);
  pointsCount.innerText = researchPoints;
  researchFleetCost.innerText = easyRead(nextResearchShip);
  researchFleetCount.innerText = researchShips;
  //TODO add the info for updating the phase 3 elements

  if (research1.flag === 1) employeesDiv.classList.remove("hidden");
  if (research5.flag === 1) shopsDiv.classList.remove("hidden");
  if (research4.flag === 1) currency.classList.remove("hidden");
  if (research11.flag === 1) fleetDiv.classList.remove("hidden");
  if (research17.flag === 1) minesDiv.classList.remove("hidden");
  if (research22.flag === 1) revTrackDiv.classList.remove("hidden");
  if (research30.flag === 1 && research45.flag === 0) {
    expeditionsDiv.classList.remove("hidden");
    if (research31.flag === 1) typePicker.classList.remove("hidden");
    if (research32.flag === 1) {
      var list = document.getElementById("type-picker");
      var el = document.createElement("option");
      el.textContent = "Deep sea study";
      el.value = 30;
      list.appendChild(el);
    }
    if (research33.flag === 1) {
      var list = document.getElementById("type-picker");
      var el = document.createElement("option");
      el.textContent = "Forbidden waters expedition";
      el.value = 10;
      list.appendChild(el);
    }
    if (research34.flag === 1) crewPicker.classList.remove("hidden");
    if (research35.flag === 1) {
      var list = document.getElementById("crew-picker");
      var el = document.createElement("option");
      el.textContent = "Level 2";
      el.value = 15;
      list.appendChild(el);
    }
    if (research36.flag === 1) {
      var list = document.getElementById("crew-picker");
      var el = document.createElement("option");
      el.textContent = "Level 3";
      el.value = 20;
      list.appendChild(el);
    }
    if (research37.flag === 1) equipmentPicker.classList.remove("hidden");
    if (research38.flag === 1) {
      var list = document.getElementById("equipment-picker");
      var el = document.createElement("option");
      el.textContent = "Medium quality";
      el.value = 15;
      list.appendChild(el);
    }
    if (research39.flag === 5) {
      var list = document.getElementById("equipment-picker");
      var el = document.createElement("option");
      el.textContent = "High quality supplies";
      el.value = 20;
      list.appendChild(el);
    }
    if (research40.flag === 1) escapePlans.classList.remove("hidden");
  } else if (research45.flag === 1 && research49.flag === 0) {
    discoveredSecretAnnouncementDiv.classList.remove("hidden");
  } else if (research49.flag === 1) {
    employeesDiv.classList.add("hidden");
    shopsDiv.classList.add("hidden");
    fleetDiv.classList.add("hidden");
    minesDiv.classList.add("hidden");
    happinessDiv.classList.remove("hidden");
  }
  if (research69.flag === 1) loansEngineDiv.classList.remove("hidden");
  if (research70.flag === 1) taxesEngineDiv.classList.remove("hidden");
  if (research71.flag === 1) tax3Div.classList.remove("hidden");
  if (research72.flag === 1) tax4Div.classList.remove("hidden");
  if (research73.flag === 1) tax5Div.classList.remove("hidden");
  if (research74.flag === 1) tax6Div.classList.remove("hidden");
  if (research75.flag === 1) tax7Div.classList.remove("hidden");
  if (research76.flag === 1) tax8Div.classList.remove("hidden");
  if (research77.flag === 1) tax9Div.classList.remove("hidden");
  if (research78.flag === 1) tax10Div.classList.remove("hidden");
  if (research81.flag === 1) loan6Slot.classList.remove("hidden");
  if (research82.flag === 1) loan7Slot.classList.remove("hidden");
  if (research83.flag === 1) loan8Slot.classList.remove("hidden");
  if (research84.flag === 1) loan9Slot.classList.remove("hidden");
  if (research85.flag === 1) loan10Slot.classList.remove("hidden");
  if (research86.flag === 1) {
    optOissos.classList.remove("hidden");
    optKaskinen.classList.remove("hidden");
    optVinte.classList.remove("hidden");
  };
  if (research87.flag === 1) {
    optHeyrland.classList.remove("hidden");
    optAmariyan.classList.remove("hidden");
    optMapSut.classList.remove("hidden");
  };
  if (research88.flag === 1) {
    optGenzhu.classList.remove("hidden");
    optPezia.classList.remove("hidden");
    optCascavey.classList.remove("hidden");
  };
  if (research89.flag === 1) {
    opt10pc.classList.remove("hidden");
  }
  if (research90.flag === 1) {
    opt20pc.classList.remove("hidden");
  }
  if (research91.flag === 1) {
    opt5y.classList.remove("hidden");
    opt15y.classList.remove("hidden");
  }
  if (research92.flag === 1) {
    opt25y.classList.remove("hidden");
    opt40y.classList.remove("hidden");
  }
}

function save() {
  var researchUses = [];
  var researchFlags = [];
  var researchActive = [];
    
  for(var i=0; i < research.length; i++){
    researchUses[i] = research[i].uses;
    researchFlags[i] = research[i].flag;
  }
    
  for(var i=0; i < activeResearch.length; i++){
    researchActive[i] = activeResearch[i].id;
  } 

  var saveData = {
    balance: balance,
    employees: employees,
    shops: shops,
    ships: ships,
    mines: mines,
    nextEmployee: nextEmployee,
    nextShop: nextShop,
    nextShip: nextShip,
    nextMine: nextMine,
    empMult: empMult,
    shopsMult: shopsMult,
    fleetMult: fleetMult,
    minesMult: minesMult,
    researchPoints: researchPoints,
    researchShips: researchShips,
    nextResearchShip: nextResearchShip,
    launchCost: launchCost,
    escapePlansFlag: escapePlansFlag,
    researchFleetTotal: researchFleetTotal,
    happiness: happiness,
    happinessPS: happinessPS,
    researchMult: researchMult,
    loansList: loansList,
    maxLoans: maxLoans,
    taxes1: taxes1,
    taxes2: taxes2,
    taxes3: taxes3,
    taxes4: taxes4,
    taxes5: taxes5,
    taxes6: taxes6,
    taxes7: taxes7,
    taxes8: taxes8,
    taxes9: taxes9,
    taxes10: taxes10,
    r59count: r59count,
    r68count: r68count
    //prestige: prestige
  }
  localStorage.setItem("saveData",JSON.stringify(saveData));
  localStorage.setItem("saveResearchUses",JSON.stringify(researchUses));
  localStorage.setItem("saveResearchFlags", JSON.stringify(researchFlags));
  localStorage.setItem("saveResearchActive", JSON.stringify(researchActive));
}

function deleteSave() {
  localStorage.removeItem("saveData");
}

function load() {
  savegame = JSON.parse(localStorage.getItem("saveData"));
  if (typeof savegame.balance !== "undefined") balance = savegame.balance;
  if (typeof savegame.employees !== "undefined") employees = savegame.employees;
  if (typeof savegame.shops !== "undefined") shops = savegame.shops;
  if (typeof savegame.ships !== "undefined") ships = savegame.ships;
  if (typeof savegame.mines !== "undefined") mines = savegame.mines;
  if (typeof savegame.nextEmployee !== "undefined") nextEmployee = savegame.nextEmployee;
  if (typeof savegame.nextShop !== "undefined") nextShop = savegame.nextShop;
  if (typeof savegame.nextShip !== "undefined") nextShip = savegame.nextShip;
  if (typeof savegame.nextMine !== "undefined") nextMine = savegame.nextMine;
  if (typeof savegame.empMult !== "undefined") empMult = savegame.empMult;
  if (typeof savegame.shopsMult !== "undefined") shopsMult = savegame.shopsMult;
  if (typeof savegame.fleetMult !== "undefined") fleetMult = savegame.fleetMult;
  if (typeof savegame.minesMult !== "undefined") minesMult = savegame.minesMult;
  if (typeof savegame.researchPoints !== "undefined") researchPoints = savegame.researchPoints;
  if (typeof savegame.researchShips !== "undefined") researchShips = savegame.researchShips;
  if (typeof savegame.nextResearchShip !== "undefined") nextResearchShip = savegame.nextResearchShip;
  if (typeof savegame.launchCost !== "undefined") launchCost = savegame.launchCost;
  if (typeof savegame.escapePlansFlag !== "undefined") escapePlansFlag = savegame.escapePlansFlag;
  if (typeof savegame.researchFleetTotal !== "undefined") researchFleetTotal = savegame.researchFleetTotal;
  if (typeof savegame.happiness !== "undefined") happiness = savegame.happiness;
  if (typeof savegame.happinessPS !== "undefined") happinessPS = savegame.happinessPS;
  if (typeof savegame.researchMult !== "undefined") researchMult = savegame.researchMult;
  if (typeof savegame.loansList !== "undefined") loansList = savegame.loansList;
  if (typeof savegame.maxLoans !== "undefined") maxLoans = savegame.maxLoans;
  if (typeof savegame.taxes1 !== "undefined") taxes1 = savegame.taxes1;
  if (typeof savegame.taxes2 !== "undefined") taxes2 = savegame.taxes2;
  if (typeof savegame.taxes3 !== "undefined") taxes3 = savegame.taxes3;
  if (typeof savegame.taxes4 !== "undefined") taxes4 = savegame.taxes4;
  if (typeof savegame.taxes5 !== "undefined") taxes5 = savegame.taxes5;
  if (typeof savegame.taxes6 !== "undefined") taxes6 = savegame.taxes6;
  if (typeof savegame.taxes7 !== "undefined") taxes7 = savegame.taxes7;
  if (typeof savegame.taxes8 !== "undefined") taxes8 = savegame.taxes8;
  if (typeof savegame.taxes9 !== "undefined") taxes9 = savegame.taxes9;
  if (typeof savegame.taxes10 !== "undefined") taxes10 = savegame.taxes10;
  if (typeof savegame.r59count !== "undefined") r59count = savegame.r59count;
  if (typeof savegame.r68count !== "undefined") r68count = savegame.r68count;
  //if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;

  // update research
  var loadResearchUses = JSON.parse(localStorage.getItem("saveResearchUses"));
  var loadResearchFlags = JSON.parse(localStorage.getItem("saveResearchFlags"));
  var loadResearchActive = JSON.parse(localStorage.getItem("saveResearchActive"));

  for(var i=0; i < research.length; i++){
    research[i].uses = loadResearchUses[i];
    research[i].flag = loadResearchFlags[i];       
  }
    
  for(var i=0; i < research.length; i++){
    if (loadResearchActive.indexOf(research[i].id)>=0){
      displayResearch(research[i]);
      activeResearch.push(research[i]);
    }
  }
  refresh();
}

function startOver() {
  deleteSave();
  location.reload();
}

// TIMERS ------------------------------------

window.setInterval(function() {
  balance += (empMult * employees) + (shopsRPS * shopsMult * shops) + (fleetRPS * fleetMult * ships) + (minesRPS * minesMult * mines);
  balanceText.innerText = Math.floor(balance);
  manageResearch();
  convertCurrency(balance);
  //checkButtons();
  revTracker();
  if (balance >= 1000000000) billionaireAnnouncementDiv.classList.remove("hidden");
  //if (research49.flag === 1) {
    happiness += happinessPS;
    updateHappiness();
    researchPoints += researchMult;
    points2Elem.innerText = researchPoints;
    //if (research69.flag === 1) {
      updateLoans();
    //}
  //}
}, 1000); //LIVE is 1000

window.setInterval(function() {
  save();  
}, 60000);
