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
const expeditionsDiv = document.getElementById("expeditions-div");
const pointsP = document.getElementById("points-p")
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
const rebellionAnnouncementDiv = document.getElementById("rebellion-announcement");
const billionaireAnnouncementDiv = document.getElementById("billionaire-announcement");
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
// Tax DOM refs, Index 0 = tax1 ... index 9 = tax10.
const taxDisplays = [];
const lowerTaxBtns = [];
const raiseTaxBtns = [];
for (let i = 1; i <= 10; i++) {
  taxDisplays.push(document.getElementById(`tax${i}-display`));
  lowerTaxBtns.push(document.getElementById(`btn-lower-tax${i}`));
  raiseTaxBtns.push(document.getElementById(`btn-raise-tax${i}`));
}
const startOverBtn = document.getElementById("start-over-btn");

var savegame;

// INITIALIZE BUTTONS

saveBtn.onclick = save;
deleteBtn.onclick = deleteSave;
sell.onclick = sellItem;
hire.onclick = hireEmployee;
buyShop.onclick = newShop;
buyShip.onclick = newShip;
buyMine.onclick = newMine;
buyResearchShip.onclick = newResearchShip;
launchBtn.onclick = launchExpedition;
startOverBtn.onclick = startOver;

// PURCHASE FUNCTIONS ----------------------

/**
 * @namespace phase1Functions
 */

/**
 * Produces item, adds 1 to balance (on click)
 * @see convertCurrency
 * @memberof phase1Functions
 */
function sellItem() {
  balance++;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  convertCurrency(balance);
}

/**
 * Adds employee, updates balance and employees count
 * @see easyRead
 * @see convertCurrency
 * @see checkButtons
 * @memberof phase1Functions
 */
function hireEmployee() {
  employees++;
  balance -= nextEmployee;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  employeesCount.innerText = employees;
  nextEmployee = Math.floor(10 * Math.pow(1.2,employees));
  employeeCost.innerText = easyRead(nextEmployee);
  convertCurrency(balance);
  checkButtons();
}

/**
 * Add shop, updates balance and shops count
 * @see easyRead
 * @see convertCurrency
 * @see checkButtons
 * @memberof phase1Functions
 */
function newShop() {
  shops++;
  balance -= nextShop;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  shopsCount.innerText = shops;
  nextShop = Math.floor(1080 * Math.pow(1.1,shops));
  shopCost.innerText = easyRead(nextShop);
  convertCurrency(balance);
  checkButtons();
}

/**
 * Adds ship to fleet, updates balance and fleet count
 * @see easyRead
 * @see convertCurrency
 * @see checkButtons
 * @memberof phase1Functions
 */
function newShip() {
  ships++;
  balance -= nextShip;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  fleetCount.innerText = ships;
  nextShip = Math.floor(43200 * Math.pow(1.1,ships));
  fleetCost.innerText = easyRead(nextShip);
  convertCurrency(balance);
  checkButtons();
}

/**
 * Adds mine, updates balance and mines count
 * @see easyRead
 * @see convertCurrency
 * @see checkButtons
 * @memberof phase1Functions
 */
function newMine() {
  mines++;
  balance -= nextMine;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  minesCount.innerText = mines;
  nextMine = Math.floor(504000 * Math.pow(1.1,mines));
  minesCost.innerText = easyRead(nextMine);
  convertCurrency(balance);
  checkButtons();
}

// PAGE UPDATING --------------------------

/**
 * @namespace displayFunctions
 */

/**
 * Converts balance to A/Y/K for display under balance
 * @param {number} num - balance
 * @memberof displayFunctions
 */
function convertCurrency(num) {
  altinlar.innerText = Math.floor(num / 360).toLocaleString();
  yiralar.innerText = Math.floor(num % 360 / 30);
  kurler.innerText = Math.floor(num % 360 % 30);
}

/**
 * Displays value as only A/Y/K depending on amount
 * @param {number} num - number
 * @returns {string} Value of A/Y/K
 * @memberof displayFunctions
 */
function easyRead(num) {
  let a = Math.ceil(num / 360).toLocaleString();
  let y = Math.ceil(num % 360 / 30);
  let k = Math.ceil(num % 360 % 30);
  if (num >= 331) {
    return `${a} \u023a`;
  } else if (num >= 30) {
    return `${y} \u024e`;
  } else {
    return `${k} \u20ad`
  }
}

/**
 * Calculates and displays revenue per second
 * @memberof displayFunctions
 */
function revTracker() {
  let rps = ((empMult * employees) + (shopsRPS * shopsMult * shops) + (fleetRPS * fleetMult * ships) + (minesRPS * minesMult * mines)) * unrestPenalty;
  let rpsText;
  if (rps >= 331) {
    rpsText = `${(rps / 360).toFixed(2).toLocaleString()} \u023a`;
  } else if (rps >= 30) {
    rpsText = `${(rps % 360 / 30).toFixed(2)} \u024e`;
  } else {
    rpsText = `${(rps % 360 % 30).toFixed(2)} \u20ad`
  }
  revTrackerElement.innerText = rpsText;
}

/**
 * Disables purchasing buttons if balance is too low
 * @memberof displayFunctions
 */
function checkButtons() {
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
  if (researchShips === 0 || balance < (launchCost * 360) || typePicker.value === "0" || launching === 1) {
    launchBtn.disabled = true;
  } else {
    launchBtn.disabled = false;
  }
  for (let i = 0; i < 10; i++) {
    lowerTaxBtns[i].disabled = taxes[i] <= 0;
    raiseTaxBtns[i].disabled = taxes[i] >= 9;
  }
}

/**
 * Adds new research items to active array, calls displayResearch to show the item
 * @see displayResearch
 * @memberof displayFunctions
 */
function manageResearch() {
  for(let i=0; i < research.length; i++) {
    if (research[i].trigger() && (research[i].uses > 0) && !activeResearch.includes(research[i])) {
      research[i].uses -= 1;
      displayResearch(research[i]);
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

/**
 * Creates HTML for new research item
 * @param {Object} project - the research item being displayed
 * @param {?Element} project.element
 * @param {string} project.id
 * @param {Function} project.effect - actions the project does when fired
 * @param {string} project.title
 * @param {string} project.priceTag
 * @param {string} project.description
 * @memberof displayFunctions
 */
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

  var cost = document.createTextNode(typeof project.priceTag === "function" ? project.priceTag() : project.priceTag);
  project.element.appendChild(cost);

  var div = document.createElement("div");
  project.element.appendChild(div);

  var description = document.createTextNode(project.description);
  project.element.appendChild(description);
}

// RESEARCH EXPEDITIONS --------------------

/**
 * @namespace phase2Functions
 */

/**
 * Adds research ship, updates balance and expedition info
 * @see easyRead
 * @see updateLaunchCost
 * @see convertCurrency
 * @see checkButtons
 * @memberof phase2Functions
 */
function newResearchShip() {
  researchShips++;
  researchFleetTotal++;
  balance -= nextResearchShip;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  researchFleetCount.innerText = researchShips;
  nextResearchShip = Math.floor(72000 * Math.pow(1.06,researchFleetTotal));
  researchFleetCost.innerText = easyRead(nextResearchShip);
  updateLaunchCost();
  convertCurrency(balance);
  checkButtons();
}

/**
 * Calculates success or failure based on chance of success
 * @param {number} prb - chance of success
 * @returns {boolean}
 */
function calcProbability(prb) {
  if (Math.random() < prb) {return true}
  else {return false};
}

/**
 * Finds probabilities and costs for expedition options; returns the cost for the expedition and the success rate
 * @param {num} typeVal 
 * @param {num} crewVal
 * @param {num} equipVal
 * @param {num} ships
 * @memberof phase2Functions
 */
function calcLaunchCost(typeVal, crewVal, equipVal, ships) {
  let rate;
  if ((typeVal + crewVal + equipVal + ships) <= 90 ) {
    rate = typeVal + crewVal + equipVal + escapePlansFlag + ships;
  } else {
    rate = 90 + escapePlansFlag;
  }

  let tempLaunchCost = 0;

  for (let i=0; i < 3; i++) { //look through TYPES
    if (typeVal === expeditionOptionsList[i].value) {
      tempLaunchCost += expeditionOptionsList[i].cost;
    }
  }
  for (let i=3; i < 6; i++) { //look through CREWS
    if (crewVal === expeditionOptionsList[i].value) {
      tempLaunchCost += expeditionOptionsList[i].cost;
    }
  }
  for (let i=6; i < expeditionOptionsList.length; i++) { //look through EQUIPS
    if (equipVal === expeditionOptionsList[i].value) {
      tempLaunchCost += expeditionOptionsList[i].cost;
    }
  }
  tempLaunchCost *= ships;
  return { cost: tempLaunchCost, rate };
}

typePicker.oninput = updateLaunchCost;
crewPicker.oninput = updateLaunchCost;
equipmentPicker.oninput = updateLaunchCost;

/**
 * Displays launchCost and successRate on page
 * @see calcLaunchCost
 * @see checkButtons
 * @memberof phase2Functions
 */
function updateLaunchCost() {
  const typeValue = parseInt(typePicker.value);
  const crewValue = parseInt(crewPicker.value);
  const equipmentValue = parseInt(equipmentPicker.value);
  
  const { cost, rate } = calcLaunchCost(typeValue, crewValue, equipmentValue, researchShips);
  launchCost = cost;

  launchCostText.innerText = `${Math.ceil(launchCost).toLocaleString()} \u023a`;
  successRateText.innerText = rate;

  checkButtons();
}

var progress = 0;
var width = 1;
var launching = 0;
var progressDelay;
var loadDelayTimer;
var loadDelay = false;

/**
 * @summary Runs expedition
 * @description Updates progress bar and expedition status, calculates total launch cost, starts countdown. After countdown, calculates result and updates display.
 * @see progressBar
 * @see checkButtons
 * @see calcProbability
 * @see updateLaunchCost
 * @memberof phase2Functions
 */
function launchExpedition() {
  const typeValueTemp = parseInt(typePicker.value);
  const crewValueTemp = parseInt(crewPicker.value);
  const equipmentValueTemp = parseInt(equipmentPicker.value);
  const currentShips = researchShips;

  const { cost: thisLaunchCost, rate: thisSuccessRate } = calcLaunchCost(typeValueTemp, crewValueTemp, equipmentValueTemp, currentShips);

  if (currentShips === 0 || balance < thisLaunchCost * 360 || typePicker.value === "0" || launching === 1) {
    return;
  }

  if (loadDelay) {
    clearTimeout(loadDelayTimer);
    width = 1;
    expeditionProgressBar.style.width = "1%";
  };
  launching = 1;
  expeditionResultText.innerHTML = `Expedition in progress...`;

  balance -= thisLaunchCost * 360;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  
  let newResearchPoints = 0;
  let time = 50; 
  if (typeValueTemp === 30) {
    time = 600;
  } else if (typeValueTemp === 10) {
    time = 3000;
  }
  
  progressBar(time);
  checkButtons();

  progressDelay = setTimeout(() => { // wait for progress to finish

    if (calcProbability(thisSuccessRate/100)) { //success!
      for (let i=0; i < 3; i++) { //look through TYPES
        if (typeValueTemp === expeditionOptionsList[i].value) {
          newResearchPoints = expeditionOptionsList[i].result;
          researchPoints += newResearchPoints;
          //break;
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
    checkButtons();
    loadDelayTimer = setTimeout(() => {
      width = 1;
      expeditionProgressBar.style.width = "1%";
      loadDelay = false;
    }, 1500);
    launching = 0;
    loadDelay = true;
  }, (time * 100) + 500); //live = time * 100 XXX test=time*10
}

/**
 * Updates progress bar width in display
 * @param {number} time - either 50, 600, or 3,000
 * @memberof phase2Functions
 */
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
    }, time); // testing = time/10 XXX live = time
  }
}

// HAPPINESS AND PHASE 3 RESEARCH ------------------

/**
 * @namespace phase3Functions
 */

/**
 * Sets happiness display; calculates unrest penalty
 * @memberof phase3Functions
 */
function updateHappiness() {
  if (happiness >= 100) {happiness = 100}
  else if (happiness <= 0) {happiness = 0}
  happinessBar.style.width = happiness + "%";
  happinessLevel.innerText = Math.floor(happiness);
  happinessLevel.style.marginLeft = (happiness - 1) + "%";
  unrestPenalty = (happiness < 30) ? 0.5 : 1;
}

/** Closes rebellion announcement */
function dismissRebellion() {
  rebellionAnnouncementDiv.classList.add("hidden");
}

// TAXES -------------------------------------

/**
 * Changes revenue and happiness generation when +/- tax
 * @param {number} num 
 * @memberof phase3Functions
 */
function updateTaxes(num) {
  fleetMult += num;
  minesMult += num;
  happinessPS -= Math.round((happinessPS - num) * 100 ) / 100;
  happinessPSElem.innerText = happinessPS;
}

// n is 1-indexed (matches the tax1...tax10 naming used in the HTML/IDs).
/**
 * Reduce tax
 * @param {number} n - tax ID
 * @see updateTaxes
 * @memberof phase3Functions
 */
function lowerTax(n) {
  const i = n - 1;
  if (taxes[i] <= 0) return;
  updateTaxes(-0.1);
  taxes[i]--;
  taxDisplays[i].innerText = taxes[i];
}

/**
 * Raise tax
 * @param {number} n - tax ID
 * @see updateTaxes
 * @memberof phase3Functions
 */
function raiseTax(n) {
  const i = n - 1;
  if (taxes[i] >= 9) return;
  updateTaxes(0.1);
  taxes[i]++;
  taxDisplays[i].innerText = taxes[i];
}

// CHECK FOR SAVES -------------------------

if (localStorage.getItem("saveData") !== null) {
  load();
}

// SAVING AND LOADING ----------------------

/**
 * Updates DOM with current values
 * @memberof displayFunctions
 */
function refresh() {
  balanceText.innerText = Math.floor(balance).toLocaleString();
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
  for (let i = 0; i < 10; i++) {
    taxDisplays[i].innerText = taxes[i];
  }

  if (research1.flag === 1) employeesDiv.classList.remove("hidden");
  if (research5.flag === 1) shopsDiv.classList.remove("hidden");
  if (research4.flag === 1) currency.classList.remove("hidden");
  if (research11.flag === 1) fleetDiv.classList.remove("hidden");
  if (research17.flag === 1) minesDiv.classList.remove("hidden");
  if (research22.flag === 1) revTrackDiv.classList.remove("hidden");
  if (research30.flag === 1 && research45.flag === 0) {
    expeditionsDiv.classList.remove("hidden");
    pointsP.classList.remove("hidden");
    if (research31.flag === 1) typePicker.classList.remove("hidden");
    if (research32.flag === 1) {
      var list = document.getElementById("type-picker");
      var el = document.createElement("option");
      el.textContent = "Deep sea study (1 min)";
      el.value = 30;
      list.appendChild(el);
    }
    if (research33.flag === 1) {
      var list = document.getElementById("type-picker");
      var el = document.createElement("option");
      el.textContent = "Forbidden waters expedition (5 min)";
      el.value = 10;
      list.appendChild(el);
    }
    if (research34.flag === 1) crewPicker.classList.remove("hidden");
    if (research35.flag === 1) {
      var list = document.getElementById("crew-picker");
      var el = document.createElement("option");
      el.textContent = "Level 2 crew";
      el.value = 15;
      list.appendChild(el);
    }
    if (research36.flag === 1) {
      var list = document.getElementById("crew-picker");
      var el = document.createElement("option");
      el.textContent = "Level 3 crew";
      el.value = 20;
      list.appendChild(el);
    }
    if (research37.flag === 1) equipmentPicker.classList.remove("hidden");
    if (research38.flag === 1) {
      var list = document.getElementById("equipment-picker");
      var el = document.createElement("option");
      el.textContent = "Medium quality supplies";
      el.value = 15;
      list.appendChild(el);
    }
    if (research39.flag === 1) {
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
    updateHappiness();
    happinessDiv.classList.remove("hidden");
    pointsP.classList.remove("hidden");
  }
  if (research70.flag === 1) taxesEngineDiv.classList.remove("hidden");
  if (research71.flag === 1) tax3Div.classList.remove("hidden");
  if (research72.flag === 1) tax4Div.classList.remove("hidden");
  if (research73.flag === 1) tax5Div.classList.remove("hidden");
  if (research74.flag === 1) tax6Div.classList.remove("hidden");
  if (research75.flag === 1) tax7Div.classList.remove("hidden");
  if (research76.flag === 1) tax8Div.classList.remove("hidden");
  if (research77.flag === 1) tax9Div.classList.remove("hidden");
  if (research78.flag === 1) tax10Div.classList.remove("hidden");
}

/**
 * Store research statuses and variables in browser storage
 * @memberof displayFunctions
 */
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
    taxes: taxes
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

/**
 * Pull data from localStorage and parse into variables
 * @see refresh
 * @memberof displayFunctions
 */
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
  if (typeof savegame.taxes !== "undefined") taxes = savegame.taxes;

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

/**
 * For use at end of game
 * @see deleteSave
 * @memberof displayFunctions
 */
function startOver() {
  deleteSave();
  location.reload();
}

// TIMERS ------------------------------------

/**
 * @summary Main game engine
 * @description Fires every 1 second (1,000 ms). Updates DOM elements. 
 */
window.setInterval(function() {
  balance += ((empMult * employees) + (shopsRPS * shopsMult * shops) + (fleetRPS * fleetMult * ships) + (minesRPS * minesMult * mines)) * unrestPenalty;
  balanceText.innerText = Math.floor(balance).toLocaleString();
  manageResearch();
  convertCurrency(balance);
  checkButtons();
  revTracker();
  if (balance >= 1000000000) billionaireAnnouncementDiv.classList.remove("hidden");
  //TODO write winning vs losing win conditions
  if (research49.flag === 1) {
    happiness += happinessPS; //TODO need to rewrite so happiness trends toward 50 rather than increasing/decreasing indefinitely??
    if (happiness <= 0) {
      ships -= Math.floor(ships * 0.2);
      mines -= Math.floor(mines * 0.2);
      happiness = 50;
      rebellionAnnouncementDiv.classList.remove("hidden");
    }
    updateHappiness();
    researchPoints += researchMult;
    pointsCount.innerText = researchPoints;
  }
}, 1000); //NOTE LIVE is 1000 XXX test = 100

window.setInterval(function() {
  save();  
}, 60000);
