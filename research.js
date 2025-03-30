var research = [];
var activeResearch = [];

var research1 = {
  id: "researchButton1",
  title: "Hire employees",
  priceTag: "",
  description: "Automate your sales - each employee generates 1 kür per second",
  trigger: function() {return balance >= 5},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research1.flag = 1;
    employeesDiv.classList.remove("hidden");
    currencyBaseAnnouncementDiv.classList.remove('hidden');
    research1.element.parentNode.removeChild(research1.element);
    let index = activeResearch.indexOf(research1);
    activeResearch.splice(index, 1);
  }
}

research.push(research1);

var research2 = {
  id: "researchButton2",
  title: "Employee training ",
  priceTag: "(7 \u024e / 210 \u20ad)",
  description: "Employees generate 10% more revenue",
  trigger: function() {return research1.flag === 1},
  uses: 1,
  cost: function() {return balance >= 210},
  flag: 0,
  element: null,
  effect: function() {
    research2.flag = 1;
    balance -= 210;
    empMult += 0.10;
    employeesRPSText.innerText = empMult;
    research2.element.parentNode.removeChild(research2.element);
    let index = activeResearch.indexOf(research2);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research2);

var research3 = {
  id: "researchButton3",
  title: "Overtime contracts ",
  priceTag: "(2 \u023a / 720 \u20ad)",
  description: "Happier employees generate 25% more revenue",
  trigger: function() {return research2.flag === 1},
  uses: 1,
  cost: function() {return balance >= 720},
  flag: 0,
  element: null,
  effect: function() {
    research3.flag = 1;
    balance -= 720;
    empMult += 0.25;
    employeesRPSText.innerText = empMult;
    research3.element.parentNode.removeChild(research3.element);
    let index = activeResearch.indexOf(research3);
    activeResearch.splice(index, 1);
  }
}

research.push(research3);

var research4 = {
  id: "researchButton4",
  title: "Convert kürler to yiralar and alt\u0131nlar ",
  priceTag: "",
  description: "Doesn't affect revenue, but it is easier to read!",
  trigger: function() {return balance >= 500},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research4.flag = 1;
    convertCurrency(balance);
    currency.classList.remove("hidden");
    research4.element.parentNode.removeChild(research4.element);
    let index = activeResearch.indexOf(research4);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research4);

var research5 = {
  id: "researchButton5",
  title: "Open shops",
  priceTag: "",
  description: "Sell your wares from shops - each shop generates 4 yiralar (120 \u20ad) every 5 seconds",
  trigger: function() {return balance >= 750},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research5.flag = 1;
    shopsDiv.classList.remove("hidden");
    research5.element.parentNode.removeChild(research5.element);
    let index = activeResearch.indexOf(research5);
    activeResearch.splice(index, 1);
  }
}

research.push(research5);

var research6 = {
  id: "researchButton6",
  title: "Apprentice system ",
  priceTag: "(7 alt\u0131nlar)",
  description: "Trains young workers, increasing long-term efficiency",
  trigger: function() {return research4.flag === 1 && shops >= 1},
  uses: 1,
  cost: function() {return balance >= 2520},
  flag: 0,
  element: null,
  effect: function() {
    research6.flag = 1;
    currencyBaseAnnouncementDiv.classList.add('hidden');
    balance -= 2520;
    empMult += 0.20;
    shopsMult += 0.20;
    employeesRPSText.innerText = empMult;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    research6.element.parentNode.removeChild(research6.element);
    let index = activeResearch.indexOf(research6);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research6);

var research6b = {
  id: "researchButton6b",
  title: "Health care coverage ",
  priceTag: "(9 alt\u0131nlar)",
  description: "Implement a health care policy for all employees",
  trigger: function() {return research6.flag === 1},
  uses: 1,
  cost: function() {return balance >= 3240},
  flag: 0,
  element: null,
  effect: function() {
    research6b.flag = 1;
    balance -= 3240;
    empMult += 0.30;
    research6b.element.parentNode.removeChild(research6b.element);
    let index = activeResearch.indexOf(research6b);
    activeResearch.splice(index, 1);
  }
}

research.push(research6b);

var research7 = {
  id: "researchButton7",
  title: "Launch loyalty program ",
  priceTag: "(18 alt\u0131nlar)",
  description: "Customers return more often, increasing revenue",
  trigger: function() {return research5.flag === 1},
  uses: 1,
  cost: function() {return balance >= 6480},
  flag: 0,
  element: null,
  effect: function() {
    research7.flag = 1;
    balance -= 6480;
    shopsMult += 0.15;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    research7.element.parentNode.removeChild(research7.element);
    let index = activeResearch.indexOf(research7);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research7);

var research8 = {
  id: "researchButton8",
  title: "Improve marketing ",
  priceTag: "(36 alt\u0131nlar)",
  description: "Increases customer patronage",
  trigger: function() {return research7.flag === 1},
  uses: 1,
  cost: function() {return balance >= 12960},
  flag: 0,
  element: null,
  effect: function() {
    research8.flag = 1;
    balance -= 12960;
    shopsMult += 0.30;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    research8.element.parentNode.removeChild(research8.element);
    let index = activeResearch.indexOf(research8);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research8);

var research9 = {
  id: "researchButton9",
  title: "Dynamic bartering ",
  priceTag: "(48 alt\u0131nlar)",
  description: "Skilled negotiators improve trade deals, raising earnings",
  trigger: function() {return research6.flag === 1 && shops >= 5},
  uses: 1,
  cost: function() {return balance >= 17280},
  flag: 0,
  element: null,
  effect: function() {
    research9.flag = 1;
    balance -= 17280;
    empMult += 0.25;
    shopsMult += 0.40;
    employeesRPSText.innerText = empMult;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    research9.element.parentNode.removeChild(research9.element);
    let index = activeResearch.indexOf(research9);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research9);

var research10 = {
  id: "researchButton10",
  title: "Renovate shops ",
  priceTag: "(10 \u023a per shop)",
  description: "Shops generate 50% higher revenue",
  trigger: function() {return research8.flag === 1},
  uses: 1,
  cost: function() {return balance >= 3600 * shops},
  flag: 0,
  element: null,
  effect: function() {
    research10.flag = 1;
    balance -= 3960 * shops;
    shopsMult += 0.50;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    research10.element.parentNode.removeChild(research10.element);
    let index = activeResearch.indexOf(research10);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research10);

var research11 = {
  id: "researchButton11",
  title: "Start a fleet",
  priceTag: "",
  description: "Trade your wares across the sea - each ship generates 14 alt\u0131nlar every 20 seconds",
  trigger: function() {return balance >= 30000},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research11.flag = 1;
    fleetDiv.classList.remove("hidden");
    research11.element.parentNode.removeChild(research11.element);
    let index = activeResearch.indexOf(research11);
    activeResearch.splice(index, 1);
  }
}

research.push(research11);

var research12 = {
  id: "researchButton12",
  title: "Master craftsmen ",
  priceTag: "(210 alt\u0131nlar)",
  description: "Hire expert artisans to refine goods, boosting value",
  trigger: function() {return research9.flag === 1 && ships >= 1},
  uses: 1,
  cost: function() {return balance >= 75600},
  flag: 0,
  element: null,
  effect: function() {
    research12.flag = 1;
    balance -= 75600;
    empMult += 0.30;
    shopsMult += 0.50;
    fleetMult += 0.50;
    employeesRPSText.innerText = empMult;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    fleetRPSText.innerText = fleetMult * fleetRPS;
    research12.element.parentNode.removeChild(research12.element);
    let index = activeResearch.indexOf(research12);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research12);

var research13 = {
  id: "researchButton13",
  title: "New hull materials ",
  priceTag: "(275 alt\u0131nlar)",
  description: "Improves speed and durability of ships; increases revenue by 30%",
  trigger: function() {return research11.flag === 1},
  uses: 1,
  cost: function() {return balance >= 99000},
  flag: 0,
  element: null,
  effect: function() {
    research13.flag = 1;
    balance -= 99000;
    fleetMult += 0.30;
    fleetRPSText.innerText = fleetMult * fleetRPS;
    research13.element.parentNode.removeChild(research13.element);
    let index = activeResearch.indexOf(research13);
    activeResearch.splice(index, 1);
  }
}

research.push(research13);

var research14 = {
  id: "researchButton14",
  title: "Research fluid dynamics ",
  priceTag: "(425 alt\u0131nlar)",
  description: "Ships are faster; increases revenue by 50%",
  trigger: function() {return research13.flag === 1},
  uses: 1,
  cost: function() {return balance >= 153000},
  flag: 0,
  element: null,
  effect: function() {
    research14.flag = 1;
    balance -= 153000;
    fleetMult += 0.50;
    fleetRPSText.innerText = fleetMult * fleetRPS;
    research14.element.parentNode.removeChild(research14.element);
    let index = activeResearch.indexOf(research14);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research14);

var research15 = {
  id: "researchButton15",
  title: "Expand international market ",
  priceTag: "(580 alt\u0131nlar)",
  description: "Expands international trade, increasing all profits",
  trigger: function() {return research12.flag === 1 && ships >= 1},
  uses: 1,
  cost: function() {return balance >= 208800},
  flag: 0,
  element: null,
  effect: function() {
    research15.flag = 1;
    balance -= 208800;
    empMult += 0.20;
    shopsMult += 0.30;
    fleetMult += 0.50;
    fleetRPSText.innerText = fleetMult * fleetRPS;
    employeesRPSText.innerText = empMult;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    research15.element.parentNode.removeChild(research15.element);
    let index = activeResearch.indexOf(research15);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research15);

var research16 = {
  id: "researchButton16",
  title: "Paint hulls ",
  priceTag: "(72 \u023a per ship)",
  description: "No impact on sailing, but our ships look better than any others on the ocean!",
  trigger: function() {return ships >= 10},
  uses: 1,
  cost: function() {return balance >= 25920 * ships},
  flag: 0,
  element: null,
  effect: function() {
    research16.flag = 1;
    balance -= 25920 * ships;
    //TODO nextShip += 72000;
    research16.element.parentNode.removeChild(research16.element);
    let index = activeResearch.indexOf(research16);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research16);

var research17 = {
  id: "researchButton17",
  title: "Open gold mines ",
  priceTag: "",
  description: "Invest in gold by opening your own gold mines",
  trigger: function() {return balance >= 400000},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research17.flag = 1;
    minesDiv.classList.remove("hidden");
    research17.element.parentNode.removeChild(research17.element);
    let index = activeResearch.indexOf(research17);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research17);

var research18 = {
  id: "researchButton18",
  title: "Deeper drilling ",
  priceTag: "(2,700 alt\u0131nlar)",
  description: "Extracts 20% more gold per cycle",
  trigger: function() {return mines >= 2},
  uses: 1,
  cost: function() {return balance >= 972000},
  flag: 0,
  element: null,
  effect: function() {
    research18.flag = 1;
    balance -= 972000;
    minesMult += 0.20;
    minesRPSText.innerText = minesMult * minesRPS;
    research18.element.parentNode.removeChild(research18.element);
    let index = activeResearch.indexOf(research18);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research18);

var research19 = {
  id: "researchButton19",
  title: "Famed merchant dynasty ",
  priceTag: "(10,000 alt\u0131nlar)",
  description: "The Mahisti name carries weight, increasing all trade profits",
  trigger: function() {return balance >= 3000000 && mines >= 1},
  uses: 1,
  cost: function() {return balance >= 3600000},
  flag: 0,
  element: null,
  effect: function() {
    research19.flag = 1;
    balance -= 3600000;
    empMult += 0.40;
    shopsMult += 0.40;
    fleetMult += 0.40;
    minesMult += 0.40;
    employeesRPSText.innerText = empMult;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    fleetRPSText.innerText = fleetMult * fleetRPS;
    minesRPSText.innerText = minesMult * minesRPS;
    research19.element.parentNode.removeChild(research19.element);
    let index = activeResearch.indexOf(research19);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research19);

var research20 = {
  id: "researchButton20",
  title: "Gold purification ",
  priceTag: "(4,900 alt\u0131nlar)",
  description: "Increases the value of gold ore",
  trigger: function() {return research18.flag === 1},
  uses: 1,
  cost: function() {return balance >= 1764000},
  flag: 0,
  element: null,
  effect: function() {
    research20.flag = 1;
    balance -= 1764000;
    minesMult += 0.25;
    minesRPSText.innerText = minesMult * minesRPS;
    research20.element.parentNode.removeChild(research20.element);
    let index = activeResearch.indexOf(research20);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research20);

var research21 = {
  id: "researchButton21",
  title: "Underground tunnels ",
  priceTag: "(9,300 alt\u0131nlar)",
  description: "Expands mining operations, unlocking more gold reserves",
  trigger: function() {return research20.flag === 1},
  uses: 1,
  cost: function() {return balance >= 3348000},
  flag: 0,
  element: null,
  effect: function() {
    research21.flag = 1;
    balance -= 3348000;
    minesMult += 0.30;
    minesRPSText.innerText = minesMult * minesRPS;
    research21.element.parentNode.removeChild(research21.element);
    let index = activeResearch.indexOf(research21);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research21);

var research22 = {
  id: "researchButton22",
  title: "Revenue Tracker ",
  priceTag: "(6 yiralar)",
  description: "Automatically calculates average revenue per second",
  trigger: function() {return balance >= 100},
  uses: 1,
  cost: function() {return balance >= 180},
  flag: 0,
  element: null,
  effect: function() {
    research22.flag = 1;
    revTrackDiv.classList.remove("hidden");
    research22.element.parentNode.removeChild(research22.element);
    let index = activeResearch.indexOf(research22);
    activeResearch.splice(index, 1);
  }
}

research.push(research22);

var research30 = {
  id: "researchButton30",
  title: "Begin researching sea serpents ",
  priceTag: "(15,000 \u023a)",
  description: "Launch research expeditions to learn more about the sea serpents",
  trigger: function() {return research19.flag === 1},
  uses: 1,
  cost: function() {return balance >= 5400000},
  flag: 0,
  element: null,
  effect: function() {
    research30.flag = 1;
    expeditionsDiv.classList.remove("hidden");
    balance -= 5400000;
    research30.element.parentNode.removeChild(research30.element);
    let index = activeResearch.indexOf(research30);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research30);

var research31 = {
  id: "researchButton31",
  title: "Shallow waters survey ",
  priceTag: "",
  description: "Explore coastal waters - ships rarely encounter serpents but find fewer useful insights",
  trigger: function() {return researchShips >= 1},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research31.flag = 1;
    typePicker.classList.remove("hidden");
    research31.element.parentNode.removeChild(research31.element);
    let index = activeResearch.indexOf(research31);
    activeResearch.splice(index, 1);
  }
}

research.push(research31);

var research32 = {
  id: "researchButton32",
  title: "Deep sea study ",
  priceTag: "(100 points)",
  description: "Venture into open waters - serpent attacks are possible, but payoff is greater",
  trigger: function() {return research31.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 100},
  flag: 0,
  element: null,
  effect: function() {
    research32.flag = 1;
    researchPoints -= 100;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("type-picker");
    var el = document.createElement("option");
    el.textContent = "Deep sea study (1 min)";
    el.value = 30;
    list.appendChild(el);
    research32.element.parentNode.removeChild(research32.element);
    let index = activeResearch.indexOf(research32);
    activeResearch.splice(index, 1);
  }
}

research.push(research32);

var research33 = {
  id: "researchButton33",
  title: "Forbidden waters expedition ",
  priceTag: "(300 points)",
  description: "Directly sail into serpent territory - high chance of losses but largest payoff",
  trigger: function() {return research32.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 300},
  flag: 0,
  element: null,
  effect: function() {
    research33.flag = 1;
    researchPoints -= 300;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("type-picker");
    var el = document.createElement("option");
    el.textContent = "Forbidden waters expedition (5 min)";
    el.value = 10;
    list.appendChild(el);
    research33.element.parentNode.removeChild(research33.element);
    let index = activeResearch.indexOf(research33);
    activeResearch.splice(index, 1);
  }
}

research.push(research33);

var research34 = {
  id: "researchButton34",
  title: "Hire inexperienced crews ",
  priceTag: "(20 points)",
  description: "Inexperienced (Level 1) crews are cheap, but more likely to make mistakes",
  trigger: function() {return researchPoints >= 10},
  uses: 1,
  cost: function() {return researchPoints >= 20},
  flag: 0,
  element: null,
  effect: function() {
    research34.flag = 1;
    crewPicker.classList.remove("hidden");
    researchPoints -= 20;
    pointsCount.innerText = researchPoints;
    research34.element.parentNode.removeChild(research34.element);
    let index = activeResearch.indexOf(research34);
    activeResearch.splice(index, 1);
  }
}

research.push(research34);

var research35 = {
  id: "researchButton35",
  title: "Hire more experienced crews ",
  priceTag: "(150 points)",
  description: "More experienced (Level 2) crews are more expensive, but more likely to survive",
  trigger: function() {return research34.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 150},
  flag: 0,
  element: null,
  effect: function() {
    research35.flag = 1;
    researchPoints -= 150;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("crew-picker");
    var el = document.createElement("option");
    el.textContent = "Level 2";
    el.value = 15;
    list.appendChild(el);
    research35.element.parentNode.removeChild(research35.element);
    let index = activeResearch.indexOf(research35);
    activeResearch.splice(index, 1);
  }
}

research.push(research35);

var research36 = {
  id: "researchButton36",
  title: "Hire very experienced crews ",
  priceTag: "(400 points)",
  description: "Very experienced (Level 3) crews are most expensive, but most likely to survive",
  trigger: function() {return research35.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 400},
  flag: 0,
  element: null,
  effect: function() {
    research36.flag = 1;
    researchPoints -= 400;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("crew-picker");
    var el = document.createElement("option");
    el.textContent = "Level 3";
    el.value = 20;
    list.appendChild(el);
    research36.element.parentNode.removeChild(research36.element);
    let index = activeResearch.indexOf(research36);
    activeResearch.splice(index, 1);
  }
}

research.push(research36);

var research37 = {
  id: "researchButton37",
  title: "Low quality supplies ",
  priceTag: "(50 points)",
  description: "Supply your research fleet with supplies and equipment",
  trigger: function() {return researchPoints >= 30},
  uses: 1,
  cost: function() {return researchPoints >= 50},
  flag: 0,
  element: null,
  effect: function() {
    research37.flag = 1;
    equipmentPicker.classList.remove("hidden");
    researchPoints -= 50;
    pointsCount.innerText = researchPoints;
    research37.element.parentNode.removeChild(research37.element);
    let index = activeResearch.indexOf(research37);
    activeResearch.splice(index, 1);
  }
}

research.push(research37);

var research38 = {
  id: "researchButton38",
  title: "Medium quality supplies ",
  priceTag: "(200 points)",
  description: "Improve the supplies and equipment used for research expeditions",
  trigger: function() {return research37.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 200},
  flag: 0,
  element: null,
  effect: function() {
    research38.flag = 1;
    researchPoints -= 200;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("equipment-picker");
    var el = document.createElement("option");
    el.textContent = "Medium quality";
    el.value = 15;
    list.appendChild(el);
    research38.element.parentNode.removeChild(research38.element);
    let index = activeResearch.indexOf(research38);
    activeResearch.splice(index, 1);
  }
}

research.push(research38);

var research39 = {
  id: "researchButton39",
  title: "High quality supplies ",
  priceTag: "(500 points)",
  description: "Improve the supplies and equipment used for research expeditions",
  trigger: function() {return research38.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 500},
  flag: 0,
  element: null,
  effect: function() {
    research39.flag = 1;
    researchPoints -= 500;
    pointsCount.innerText = researchPoints;
    var list = document.getElementById("equipment-picker");
    var el = document.createElement("option");
    el.textContent = "High quality supplies";
    el.value = 20;
    list.appendChild(el);
    research39.element.parentNode.removeChild(research39.element);
    let index = activeResearch.indexOf(research39);
    activeResearch.splice(index, 1);
  }
}

research.push(research39);

var research40 = {
  id: "researchButton40",
  title: "Advanced escape plans ",
  priceTag: "(50,000 alt\u0131nlar)",
  description: "Invest in diversion tactics to improve expedition success rates",
  trigger: function() {return balance >= 10000000 && research33.flag === 1},
  uses: 1,
  cost: function() {return balance >= 18000000},
  flag: 0,
  element: null,
  effect: function() {
    research40.flag = 1;
    balance -= 18000000;
    escapePlans.classList.remove("hidden");
    escapePlansFlag = 5;
    research40.element.parentNode.removeChild(research40.element);
    let index = activeResearch.indexOf(research40);
    activeResearch.splice(index, 1);
  }
}

research.push(research40);

var research45 = {
  id: "researchButton45",
  title: "Launch the \"Ocean's Light\" ",
  priceTag: "(1,000 points)",
  description: "Make the maiden voyage from Ara\u015ft to Amariyan",
  trigger: function() {return research39.flag === 1 && researchPoints > 500},
  uses: 1,
  cost: function() {return researchPoints >= 1000},
  flag: 0,
  element: null,
  effect: function() {
    research45.flag = 1;
    discoveredSecretAnnouncementDiv.classList.remove("hidden");
    expeditionsDiv.classList.add("hidden");
    empMult += 0.50;
    shopsMult += 0.50;
    fleetMult += 0.50;
    minesMult += 0.50;
    employeesRPSText.innerText = empMult;
    shopsRPSText.innerText = shopsMult * shopsRPS;
    fleetRPSText.innerText = fleetMult * fleetRPS;
    minesRPSText.innerText = minesMult * minesRPS;
    research45.element.parentNode.removeChild(research45.element);
    let index = activeResearch.indexOf(research45);
    activeResearch.splice(index, 1);
  }
}

research.push(research45);

var research46 = {
  id: "researchButton46",
  title: "Buy off the core guard",
  priceTag: "(XX alt\u0131nlar)",
  description: "Pay the core guard to be loyal to the Mahisti family",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research46.flag = 1;
    balance -= 55555555;
    research46.element.parentNode.removeChild(research46.element);
    let index = activeResearch.indexOf(research46);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research46);

var research47 = {
  id: "researchButton47",
  title: "Buy off the fringe guard",
  priceTag: "(XX alt\u0131nlar)",
  description: "Pay the fringe guard to be loyal to the Mahisti family",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research47.flag = 1;

    research47.element.parentNode.removeChild(research47.element);
    let index = activeResearch.indexOf(research47);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research47);

var research48 = {
  id: "researchButton48",
  title: "",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research48.flag = 1;

    research48.element.parentNode.removeChild(research48.element);
    let index = activeResearch.indexOf(research48);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research48);

var research49 = {
  id: "researchButton49",
  title: "Overthrow the Shahre and take over Ara\u015Ft",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    research49.flag = 1;
    employeesDiv.classList.add("hidden");
    shopsDiv.classList.add("hidden");
    fleetDiv.classList.add("hidden");
    minesDiv.classList.add("hidden");
    discoveredSecretAnnouncementDiv.classList.add("hidden");
    researchPoints2 = researchPoints;
    happinessDiv.classList.remove("hidden");
    research49.element.parentNode.removeChild(research49.element);
    let index = activeResearch.indexOf(research49);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research49);

/* var researchX = {
  id: "researchButtonX",
  title: "",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return },
  uses: 1,
  cost: function() {return },
  flag: 0,
  element: null,
  effect: function() {
    researchX.flag = 1;

    researchX.element.parentNode.removeChild(researchX.element);
    let index = activeResearch.indexOf(researchX);
    activeResearch.splice(index, 1);
  }
}
  
research.push(researchX);
*/