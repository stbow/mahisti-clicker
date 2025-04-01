var research = [];
var activeResearch = [];

//TODO scholar stipends and open orphanages / happiness per second text not updating when taxes update / too much money

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
    empMult += 0.15;
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
    empMult += 0.10;
    shopsMult += 0.20;
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
    empMult += 0.10;
    shopsMult += 0.20;
    fleetMult += 0.30;
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
    empMult += 0.10;
    shopsMult += 0.20;
    fleetMult += 0.30;
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
    minesMult += 0.15;
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
    minesMult += 0.20;
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
  priceTag: "(50 points)",
  description: "Venture into open waters - serpent attacks are possible, but payoff is greater",
  trigger: function() {return research31.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 50},
  flag: 0,
  element: null,
  effect: function() {
    research32.flag = 1;
    researchPoints -= 50;
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
  priceTag: "(200 points)",
  description: "Directly sail into serpent territory - high chance of losses but largest payoff",
  trigger: function() {return research32.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 200},
  flag: 0,
  element: null,
  effect: function() {
    research33.flag = 1;
    researchPoints -= 200;
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
  priceTag: "(10 points)",
  description: "Inexperienced (Level 1) crews are cheap, but more likely to make mistakes",
  trigger: function() {return research31.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 10},
  flag: 0,
  element: null,
  effect: function() {
    research34.flag = 1;
    crewPicker.classList.remove("hidden");
    researchPoints -= 10;
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
  priceTag: "(100 points)",
  description: "More experienced (Level 2) crews are more expensive, but more likely to survive",
  trigger: function() {return research34.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 100},
  flag: 0,
  element: null,
  effect: function() {
    research35.flag = 1;
    researchPoints -= 100;
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
  priceTag: "(300 points)",
  description: "Very experienced (Level 3) crews are most expensive, but most likely to survive",
  trigger: function() {return research35.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 300},
  flag: 0,
  element: null,
  effect: function() {
    research36.flag = 1;
    researchPoints -= 300;
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
  priceTag: "(20 points)",
  description: "Supply your research fleet with supplies and equipment",
  trigger: function() {return research31.flag === 1 && researchPoints >= 30},
  uses: 1,
  cost: function() {return researchPoints >= 20},
  flag: 0,
  element: null,
  effect: function() {
    research37.flag = 1;
    equipmentPicker.classList.remove("hidden");
    researchPoints -= 20;
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
  priceTag: "(150 points)",
  description: "Improve the supplies and equipment used for research expeditions",
  trigger: function() {return research37.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 150},
  flag: 0,
  element: null,
  effect: function() {
    research38.flag = 1;
    researchPoints -= 150;
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
  priceTag: "(400 points)",
  description: "Improve the supplies and equipment used for research expeditions",
  trigger: function() {return research38.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 400},
  flag: 0,
  element: null,
  effect: function() {
    research39.flag = 1;
    researchPoints -= 400;
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
  priceTag: "(50,000 \u023a + 500 pts)",
  description: "Invest in diversion tactics to improve expedition success rates",
  trigger: function() {return balance >= 10000000 && research33.flag === 1},
  uses: 1,
  cost: function() {return balance >= 18000000 && researchPoints >= 500},
  flag: 0,
  element: null,
  effect: function() {
    research40.flag = 1;
    balance -= 18000000;
    researchPoints -= 500;
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
    fleetMult += 0.50;
    minesMult += 0.50;
    research45.element.parentNode.removeChild(research45.element);
    let index = activeResearch.indexOf(research45);
    activeResearch.splice(index, 1);
  }
}

research.push(research45);

var research46 = {
  id: "researchButton46",
  title: "Buy off the core guard",
  priceTag: "(25,000 \u023a)",
  description: "Pay the core guard to be loyal to the Mahisti family",
  trigger: function() {return research45.flag === 1},
  uses: 1,
  cost: function() {return balance >= 9000000},
  flag: 0,
  element: null,
  effect: function() {
    research46.flag = 1;
    balance -= 9000000;
    research46.element.parentNode.removeChild(research46.element);
    let index = activeResearch.indexOf(research46);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research46);

var research47 = {
  id: "researchButton47",
  title: "Buy off the fringe guard",
  priceTag: "(35,000 \u023a)",
  description: "Pay the fringe guard to be loyal to the Mahisti family",
  trigger: function() {return research46.flag === 1},
  uses: 1,
  cost: function() {return balance >= 12600000},
  flag: 0,
  element: null,
  effect: function() {
    research47.flag = 1;
    balance -= 12600000;
    research47.element.parentNode.removeChild(research47.element);
    let index = activeResearch.indexOf(research47);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research47);

var research49 = {
  id: "researchButton49",
  title: "Overthrow the Shahre and take over Ara\u015Ft ",
  priceTag: "(1,000,000 \u023a)",
  description: "Mines and fleet are now run by the crown, employees and shops are sold off",
  trigger: function() {return research47.flag === 1},
  uses: 1,
  cost: function() {return balance >= 360000000},
  flag: 0,
  element: null,
  effect: function() {
    research49.flag = 1;
    balance -= 360000000;
    employees = 0;
    shops = 0;
    employeesDiv.classList.add("hidden");
    shopsDiv.classList.add("hidden");
    fleetDiv.classList.add("hidden");
    minesDiv.classList.add("hidden");
    discoveredSecretAnnouncementDiv.classList.add("hidden");
    pointsP.classList.remove("hidden");
    happinessDiv.classList.remove("hidden");
    research49.element.parentNode.removeChild(research49.element);
    let index = activeResearch.indexOf(research49);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research49);

var research50 = {
  id: "researchButton50",
  title: "Basic roads ",
  priceTag: "(90,000 \u023a)",
  description: "Upgrade to cobbled roads. Small increases to happiness and revenues",
  trigger: function() {return research49.flag === 1},
  uses: 1,
  cost: function() {return balance >= 32400000},
  flag: 0,
  element: null,
  effect: function() {
    research50.flag = 1;
    balance -= 32400000;
    happinessPS += 0.01;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult += 0.1;
    minesMult += 0.1;
    research50.element.parentNode.removeChild(research50.element);
    let index = activeResearch.indexOf(research50);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research50);

var research51 = {
  id: "researchButton51",
  title: "Aqueducts and wells ",
  priceTag: "(175,000 \u023a)",
  description: "Provide clean water for a healthier citizenry",
  trigger: function() {return research50.flag === 1},
  uses: 1,
  cost: function() {return balance >= 63000000},
  flag: 0,
  element: null,
  effect: function() {
    research51.flag = 1;
    balance -= 63000000;
    happinessPS += 0.02;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    research51.element.parentNode.removeChild(research51.element);
    let index = activeResearch.indexOf(research51);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research51);

var research52 = {
  id: "researchButton52",
  title: "Public bathhouses ",
  priceTag: "(320,000 \u023a)",
  description: "Improve hygiene and morale. Increases happiness, but decreases revenue",
  trigger: function() {return research51.flag === 1},
  uses: 1,
  cost: function() {return balance >= 115200000},
  flag: 0,
  element: null,
  effect: function() {
    research52.flag = 1;
    balance -= 115200000;
    happinessPS += 0.05;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult -= 0.3;
    minesMult -= 0.3;
    research52.element.parentNode.removeChild(research52.element);
    let index = activeResearch.indexOf(research52);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research52);

var research53 = {
  id: "researchButton53",
  title: "Upgrade roads ",
  priceTag: "(540,000 \u023a)",
  description: "Improve quality of roads",
  trigger: function() {return research52.flag === 1},
  uses: 1,
  cost: function() {return balance >= 194400000},
  flag: 0,
  element: null,
  effect: function() {
    research53.flag = 1;
    balance -= 194400000;
    happinessPS += 0.01;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    empMult += 0.2;
    shopsMult += 0.2;
    fleetMult += 0.2;
    minesMult += 0.2;
    research53.element.parentNode.removeChild(research53.element);
    let index = activeResearch.indexOf(research53);
    activeResearch.splice(index, 1);
  }
}

research.push(research53);

var research54 = {
  id: "researchButton54",
  title: "Universal education ",
  priceTag: "(125,000 \u023a)",
  description: "Open local schools in all townships",
  trigger: function() {return research50.flag === 1 && balance >= 37800000},
  uses: 1,
  cost: function() {return balance >= 45000000},
  flag: 0,
  element: null,
  effect: function() {
    research54.flag = 1;
    balance -= 45000000
    happinessPS += 0.04;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult -= 0.1;
    minesMult -= 0.1;
    research54.element.parentNode.removeChild(research54.element);
    let index = activeResearch.indexOf(research54);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research54);

var research55 = {
  id: "researchButton55",
  title: "Open orphanages ",
  priceTag: "(220,000 \u023a)",
  description: "Government-funded orphanages provide care for children with no caregivers",
  trigger: function() {return research54.flag === 1},
  uses: 1,
  cost: function() {return balance >= 79200000},
  flag: 0,
  element: null,
  effect: function() {
    research55.flag = 1;
    balance -= 79200000;
    happinessPS += 0.05;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult -= 0.2;
    minesMult -= 0.2;
    research55.element.parentNode.removeChild(research55.element);
    let index = activeResearch.indexOf(research55);
    activeResearch.splice(index, 1);
  }
}

research.push(research55);

var research56 = {
  id: "researchButton56",
  title: "Open the cadet academy ",
  priceTag: "(350,000 \u023a)",
  description: "Basic training for the civil service",
  trigger: function() {return research55.flag === 1},
  uses: 1,
  cost: function() {return balance >= 126000000},
  flag: 0,
  element: null,
  effect: function() {
    research56.flag = 1;
    balance -= 126000000;
    happinessPS += 0.02;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult -= 0.2;
    minesMult -= 0.2;
    research56.element.parentNode.removeChild(research56.element);
    let index = activeResearch.indexOf(research56);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research56);

var research57 = {
  id: "researchButton57",
  title: "Invest in fringe guard training",
  priceTag: "(650,000 \u023a)",
  description: "Expand and improve training for members of the fringe guard",
  trigger: function() {return research56.flag === 1},
  uses: 1,
  cost: function() {return balance >= 234000000},
  flag: 0,
  element: null,
  effect: function() {
    research57.flag = 1;
    balance -= 234000000;
    happinessPS += 0.03;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult -= 0.4;
    minesMult -= 0.4;
    research57.element.parentNode.removeChild(research57.element);
    let index = activeResearch.indexOf(research57);
    activeResearch.splice(index, 1);
  }
}

research.push(research57);

var research58 = {
  id: "researchButton58",
  title: "Invest in core guard training ",
  priceTag: "(1,250,000 \u023a)",
  description: "Expand and improve training for members of the core guard",
  trigger: function() {return research57.flag === 1},
  uses: 1,
  cost: function() {return balance >= 450000000},
  flag: 0,
  element: null,
  effect: function() {
    research58.flag = 1;
    balance -= 450000000;
    happinessPS += 0.01;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult -= 0.3;
    minesMult -= 0.3;
    research58.element.parentNode.removeChild(research58.element);
    let index = activeResearch.indexOf(research58);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research58);

var r59count = 4;

var research59 = {
  id: "researchButton59",
  title: "Host a cultural festival ",
  priceTag: "100,000 \u023a",
  description: "Promote unity through national events",
  trigger: function() {return happiness <= 30},
  uses: 5,
  cost: function() {return balance >= 360000},
  flag: 0,
  element: null,
  effect: function() {
    research59.flag = 1;
    balance -= 360000; //(-200000 * r59count) + 900000
    happiness += 5;
    updateHappiness();
    //r59count--;
    research59.element.parentNode.removeChild(research59.element);
    let index = activeResearch.indexOf(research59);
    activeResearch.splice(index, 1);
  }
}

research.push(research59);

var research60 = {
  id: "researchButton60",
  title: "Civic code reform ",
  priceTag: "(250,000 \u023a)",
  description: "Fairer laws and tax policies",
  trigger: function() {return research51.flag === 1},
  uses: 1,
  cost: function() {return balance >= 90000000},
  flag: 0,
  element: null,
  effect: function() {
    research60.flag = 1;
    balance -= 90000000;
    happinessPS += 0.05;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult -= 0.2;
    minesMult -= 0.2;
    research60.element.parentNode.removeChild(research60.element);
    let index = activeResearch.indexOf(research60);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research60);

var research61 = {
  id: "researchButton61",
  title: "Grand census ",
  priceTag: "(950,000 \u023a)",
  description: "Track population and needs accurately",
  trigger: function() {return research60.flag === 1},
  uses: 1,
  cost: function() {return balance >= 342000000},
  flag: 0,
  element: null,
  effect: function() {
    research61.flag = 1;
    happiness -= 2;
    happinessPS += 0.02;
    happinessPSElem.innerText = Math.floor(happinessPS * 100) / 100;
    fleetMult += 0.1;
    minesMult += 0.1;
    research61.element.parentNode.removeChild(research61.element);
    let index = activeResearch.indexOf(research61);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research61);

var research63 = {
  id: "researchButton63",
  title: "Negotiate The Pact ",
  priceTag: "(2,000,000 \u023a)",
  description: "Provide the citizens of Scuttle Cove with food during serpent season in exchange for fleet safety",
  trigger: function() {return research61.flag === 1},
  uses: 1,
  cost: function() {return balance >= 720000000},
  flag: 0,
  element: null,
  effect: function() {
    research63.flag = 1;
    balance -= 720000000
    fleetMult += 0.3;
    minesMult += 0.3;
    research63.element.parentNode.removeChild(research63.element);
    let index = activeResearch.indexOf(research63);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research63);

var research64 = {
  id: "researchButton64",
  title: "Scholar stipends",
  priceTag: "(160,000 \u023a)",
  description: "Research points generate twice as fast",
  trigger: function() {return research50.flag === 1 && balance >= 46800000},
  uses: 1,
  cost: function() {return balance >= 57600000},
  flag: 0,
  element: null,
  effect: function() {
    research64.flag = 1;
    balance -= 57600000
    researchMult *= 2;
    research64.element.parentNode.removeChild(research64.element);
    let index = activeResearch.indexOf(research64);
    activeResearch.splice(index, 1);
  }
}

research.push(research64);

var research65 = {
  id: "researchButton65",
  title: "Invest in Ministry of Intelligence ",
  priceTag: "(300,000 \u023a)",
  description: "If they told you, they'd have to kill you",
  trigger: function() {return research64.flag === 1},
  uses: 1,
  cost: function() {return balance >= 108000000},
  flag: 0,
  element: null,
  effect: function() {
    research65.flag = 1;
    balance -= 108000000;
    fleetMult += 0.2;
    minesMult += 0.2;
    researchMult *= 4;
    research65.element.parentNode.removeChild(research65.element);
    let index = activeResearch.indexOf(research65);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research65);

var research66 = {
  id: "researchButton66",
  title: "Patronage of the Inventor's Guild ",
  priceTag: "(480,000 \u023a)",
  description: "Offer gold and materials to tinkerers, alchemists, and engineers in exchange for useful discoveries",
  trigger: function() {return research65.flag === 1},
  uses: 1,
  cost: function() {return balance >= 172800000},
  flag: 0,
  element: null,
  effect: function() {
    research66.flag = 1;
    balance -= 172800000;
    fleetMult -= 0.2;
    minesMult -= 0.2;
    researchMult *= 3;
    research66.element.parentNode.removeChild(research66.element);
    let index = activeResearch.indexOf(research66);
    activeResearch.splice(index, 1);
  }
}

research.push(research66);

var research67 = {
  id: "researchButton67",
  title: "Establish a Royal Observatory ",
  priceTag: "(800,000 \u023a)",
  description: "Construct a grand tower for stargazers and scholars to study the heavens and track time",
  trigger: function() {return research66.flag === 1},
  uses: 1,
  cost: function() {return balance >= 288000000},
  flag: 0,
  element: null,
  effect: function() {
    research67.flag = 1;
    balance -= 288000000;
    researchMult *= 2;
    research67.element.parentNode.removeChild(research67.element);
    let index = activeResearch.indexOf(research67);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research67);

var r68count = 4;

var research68 = {
  id: "researchButton68",
  title: "Inventor's Challenge ",
  priceTag: "1,200,000 \u023a",
  description: "Hold an empire-wide competition for the best new invention, idea, or process",
  trigger: function() {return research67.flag === 1 && balance >= 360000000 && researchPoints <= 1000},
  uses: 1,
  cost: function() {return balance >= 432000000},
  flag: 0,
  element: null,
  effect: function() {
    research68.flag = 1;
    balance -= 432000000; //(-200000 * r68count) + 1200000
    researchPoints += 500; //(-500 * r68count) + 2500
    pointsCount.innerText = researchPoints;
    //r68count--;
    research68.element.parentNode.removeChild(research68.element);
    let index = activeResearch.indexOf(research68);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research68);

var research69 = {
  id: "researchButton69",
  title: "Issue loans to other countries ",
  priceTag: "(400 points)",
  description: "Ara\u015Ft's currency is the most stable in the world and we're being asked to lend it",
  trigger: function() {return research70.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 400},
  flag: 0,
  element: null,
  effect: function() {
    research69.flag = 1;
    researchPoints -= 400;
    pointsCount.innerText = researchPoints;
    loansEngineDiv.classList.remove("hidden");
    research69.element.parentNode.removeChild(research69.element);
    let index = activeResearch.indexOf(research69);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research69);

var research70 = {
  id: "researchButton70",
  title: "Charge taxes on basic industries ",
  priceTag: "(300 points)",
  description: "Raising taxes generates income, but also makes people unhappy",
  trigger: function() {return research60.flag === 1},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research70.flag = 1;
    researchPoints -= 300;
    pointsCount.innerText = researchPoints;
    taxesEngineDiv.classList.remove("hidden");
    research70.element.parentNode.removeChild(research70.element);
    let index = activeResearch.indexOf(research70);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research70);

var research71 = {
  id: "researchButton71",
  title: "Tax textiles ",
  priceTag: "(500 points)",
  description: "Wool, silk, cotton weaving.	High income in urban centers but politically sensitive",
  trigger: function() {return research70.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 500},
  flag: 0,
  element: null,
  effect: function() {
    research71.flag = 1;
    researchPoints -= 500;
    pointsCount.innerText = researchPoints;
    tax3Div.classList.remove("hidden");
    research71.element.parentNode.removeChild(research71.element);
    let index = activeResearch.indexOf(research71);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research71);

var research72 = {
  id: "researchButton72",
  title: "Tax salt works ",
  priceTag: "(800 points)",
  description: "Essential for preservation.	Solid, stable income",
  trigger: function() {return research71.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 800},
  flag: 0,
  element: null,
  effect: function() {
    research72.flag = 1;
    researchPoints -= 800;
    pointsCount.innerText = researchPoints;
    tax4Div.classList.remove("hidden");
    research72.element.parentNode.removeChild(research72.element);
    let index = activeResearch.indexOf(research72);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research72);

var research73 = {
  id: "researchButton73",
  title: "Tax tanneries and leatherworks ",
  priceTag: "(1,200 points)",
  description: "",
  trigger: function() {return research72.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 1200},
  flag: 0,
  element: null,
  effect: function() {
    research73.flag = 1;
    researchPoints -= 1200;
    pointsCount.innerText = researchPoints;
    tax5Div.classList.remove("hidden");
    research73.element.parentNode.removeChild(research73.element);
    let index = activeResearch.indexOf(research73);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research73);

var research74 = {
  id: "researchButton74",
  title: "Tax olives and grapes ",
  priceTag: "(1,700 points)",
  description: "Olive presses and oil mills, wine and vineyards",
  trigger: function() {return research73.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 1700},
  flag: 0,
  element: null,
  effect: function() {
    research74.flag = 1;
    researchPoints -= 1700;
    pointsCount.innerText = researchPoints;
    tax6Div.classList.remove("hidden");
    research74.element.parentNode.removeChild(research74.element);
    let index = activeResearch.indexOf(research74);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research74);

var research75 = {
  id: "researchButton75",
  title: "Tax pawn brokers and moneylenders ",
  priceTag: "(2,300 points)",
  description: "Lucrative but resented",
  trigger: function() {return research74.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 2300},
  flag: 0,
  element: null,
  effect: function() {
    research75.flag = 1;
    researchPoints -= 2300;
    pointsCount.innerText = researchPoints;
    tax7Div.classList.remove("hidden");
    research75.element.parentNode.removeChild(research75.element);
    let index = activeResearch.indexOf(research75);
    activeResearch.splice(index, 1);
  }
}

research.push(research75);

var research76 = {
  id: "researchButton76",
  title: "Tax courtesans ",
  priceTag: "(3,800 points)",
  description: "Lucrative and appreciated",
  trigger: function() {return research75.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 3800},
  flag: 0,
  element: null,
  effect: function() {
    research76.flag = 1;
    researchPoints -= 3800;
    pointsCount.innerText = researchPoints;
    tax8Div.classList.remove("hidden");
    research76.element.parentNode.removeChild(research76.element);
    let index = activeResearch.indexOf(research76);
    activeResearch.splice(index, 1);
  }
}

research.push(research76);

var research77 = {
  id: "researchButton77",
  title: "Tax pottery and ceramics ",
  priceTag: "(4,600 points)",
  description: "Common trade goods.	Minor income boost, aesthetically popular",
  trigger: function() {return research76.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 4600},
  flag: 0,
  element: null,
  effect: function() {
    research77.flag = 1;
    researchPoints -= 4600;
    pointsCount.innerText = researchPoints;
    tax9Div.classList.remove("hidden");
    research77.element.parentNode.removeChild(research77.element);
    let index = activeResearch.indexOf(research77);
    activeResearch.splice(index, 1);
  }
}

research.push(research77);

var research78 = {
  id: "researchButton78",
  title: "Tax spices and exotic goods ",
  priceTag: "(6,000 \u023a)",
  description: "High-value luxury goods.	Very high income, risky if smuggling increases",
  trigger: function() {return research77.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 6000},
  flag: 0,
  element: null,
  effect: function() {
    research78.flag = 1;
    researchPoints -= 6000;
    pointsCount.innerText = researchPoints;
    tax10Div.classList.remove("hidden");
    research78.element.parentNode.removeChild(research78.element);
    let index = activeResearch.indexOf(research78);
    activeResearch.splice(index, 1);
  }
}

research.push(research78);

var research81 = {
  id: "researchButton81",
  title: "Increase loan capacity ",
  priceTag: "(700 points)",
  description: "Unlock an additional loan slot",
  trigger: function() {return research69.flag === 1 && research70.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 700},
  flag: 0,
  element: null,
  effect: function() {
    research81.flag = 1;
    researchPoints -= 700;
    pointsCount.innerText = researchPoints;
    loan6Slot.classList.remove("hidden");
    maxLoans = 6;
    research81.element.parentNode.removeChild(research81.element);
    let index = activeResearch.indexOf(research81);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research81);

var research82 = {
  id: "researchButton82",
  title: "Increase loan capacity ",
  priceTag: "(2,000 points)",
  description: "Unlock an additional loan slot",
  trigger: function() {return research81.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 2000},
  flag: 0,
  element: null,
  effect: function() {
    research82.flag = 1;
    researchPoints -= 2000;
    pointsCount.innerText = researchPoints;
    loan7Slot.classList.remove("hidden");
    maxLoans = 7;
    research82.element.parentNode.removeChild(research82.element);
    let index = activeResearch.indexOf(research82);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research82);

var research83 = {
  id: "researchButton83",
  title: "Increase loan capacity ",
  priceTag: "(3,400 points)",
  description: "Unlock an additional loan slot",
  trigger: function() {return research82.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 3400},
  flag: 0,
  element: null,
  effect: function() {
    research83.flag = 1;
    researchPoints -= 3400;
    pointsCount.innerText = researchPoints;
    loan8Slot.classList.remove("hidden");
    maxLoans = 8;
    research83.element.parentNode.removeChild(research83.element);
    let index = activeResearch.indexOf(research83);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research83);

var research84 = {
  id: "researchButton84",
  title: "Increase loan capacity ",
  priceTag: "(5,000 points)",
  description: "Unlock an additional loan slot",
  trigger: function() {return research83.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 5000},
  flag: 0,
  element: null,
  effect: function() {
    research84.flag = 1;
    researchPoints -= 5000;
    pointsCount.innerText = researchPoints;
    loan9Slot.classList.remove("hidden");
    maxLoans = 9;
    research84.element.parentNode.removeChild(research84.element);
    let index = activeResearch.indexOf(research84);
    activeResearch.splice(index, 1);
  }
}

research.push(research84);

var research85 = {
  id: "researchButton85",
  title: "Increase loan capacity ",
  priceTag: "(6,500 points)",
  description: "Unlock an additional loan slot",
  trigger: function() {return research84.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 6500},
  flag: 0,
  element: null,
  effect: function() {
    research85.flag = 1;
    researchPoints -= 6500;
    pointsCount.innerText = researchPoints;
    loan10Slot.classList.remove("hidden");
    maxLoans = 10;
    research85.element.parentNode.removeChild(research85.element);
    let index = activeResearch.indexOf(research85);
    activeResearch.splice(index, 1);
  }
}

research.push(research85);

var research86 = {
  id: "researchButton86",
  title: "Loan to more countries ",
  priceTag: "(600 points)",
  description: "Unlock additional country options",
  trigger: function() {return research71.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 600},
  flag: 0,
  element: null,
  effect: function() {
    research86.flag = 1;
    researchPoints -= 600;
    pointsCount.innerText = researchPoints;
    optOissos.classList.remove("hidden");
    optKaskinen.classList.remove("hidden");
    optVinte.classList.remove("hidden");
    research86.element.parentNode.removeChild(research86.element);
    let index = activeResearch.indexOf(research86);
    activeResearch.splice(index, 1);
  }
}

research.push(research86);

var research87 = {
  id: "researchButton87",
  title: "Loan to more countries ",
  priceTag: "(2,600 points)",
  description: "Unlock additional country options",
  trigger: function() {return research86.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 2600},
  flag: 0,
  element: null,
  effect: function() {
    research87.flag = 1;
    researchPoints -= 2600;
    pointsCount.innerText = researchPoints;
    optHeyrland.classList.remove("hidden");
    optAmariyan.classList.remove("hidden");
    optMapSut.classList.remove("hidden");
    research87.element.parentNode.removeChild(research87.element);
    let index = activeResearch.indexOf(research87);
    activeResearch.splice(index, 1);
  }
}

research.push(research87);

var research88 = {
  id: "researchButton88",
  title: "Loan to more countries ",
  priceTag: "(5,500 points)",
  description: "Unlock additional country options",
  trigger: function() {return research87.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 5500},
  flag: 0,
  element: null,
  effect: function() {
    research88.flag = 1;
    researchPoints -= 5500;
    pointsCount.innerText = researchPoints;
    optGenzhu.classList.remove("hidden");
    optPezia.classList.remove("hidden");
    optCascavey.classList.remove("hidden");
    research88.element.parentNode.removeChild(research88.element);
    let index = activeResearch.indexOf(research88);
    activeResearch.splice(index, 1);
  }
}

research.push(research88);

var research89 = {
  id: "researchButton89",
  title: "Charge higher interest ",
  priceTag: "(1,000 points)",
  description: "Unlock a 10% interest rate",
  trigger: function() {return research81.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 1000},
  flag: 0,
  element: null,
  effect: function() {
    research89.flag = 1;
    researchPoints -= 1000;
    pointsCount.innerText = researchPoints;
    opt10pc.classList.remove("hidden");
    research89.element.parentNode.removeChild(research89.element);
    let index = activeResearch.indexOf(research89);
    activeResearch.splice(index, 1);
  }
}

research.push(research89);

var research90 = {
  id: "researchButton90",
  title: "Charge even higher interest ",
  priceTag: "(3,000 points)",
  description: "Unlock a 20% interest rate",
  trigger: function() {return research89.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 3000},
  flag: 0,
  element: null,
  effect: function() {
    research90.flag = 1;
    researchPoints -= 3000;
    pointsCount.innerText = researchPoints;
    opt20pc.classList.remove("hidden");
    research90.element.parentNode.removeChild(research90.element);
    let index = activeResearch.indexOf(research90);
    activeResearch.splice(index, 1);
  }
}

research.push(research90);

var research91 = {
  id: "researchButton91",
  title: "Loan for longer terms ",
  priceTag: "(1,400 points)",
  description: "Offer loans for 5 and 15 year terms",
  trigger: function() {return research89.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 1400},
  flag: 0,
  element: null,
  effect: function() {
    research91.flag = 1;
    researchPoints -= 1400;
    pointsCount.innerText = researchPoints;
    opt5y.classList.remove("hidden");
    opt15y.classList.remove("hidden");
    research91.element.parentNode.removeChild(research91.element);
    let index = activeResearch.indexOf(research91);
    activeResearch.splice(index, 1);
  }
}

research.push(research91);

var research92 = {
  id: "researchButton92",
  title: "Loan for even longer terms ",
  priceTag: "(4,200 points)",
  description: "Offer loans for 25 and 40 year terms",
  trigger: function() {return research91.flag === 1},
  uses: 1,
  cost: function() {return researchPoints >= 4200},
  flag: 0,
  element: null,
  effect: function() {
    research92.flag = 1;
    researchPoints -= 4200;
    pointsCount.innerText = researchPoints;
    opt25y.classList.remove("hidden");
    opt40y.classList.remove("hidden");
    research92.element.parentNode.removeChild(research92.element);
    let index = activeResearch.indexOf(research92);
    activeResearch.splice(index, 1);
  }
}

research.push(research92);

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
    happinessPS += 0.5;
    empMult += 0.5;
    shopsMult += 0.5;
    fleetMult += 0.5;
    minesMult += 0.5;
    researchX.element.parentNode.removeChild(researchX.element);
    let index = activeResearch.indexOf(researchX);
    activeResearch.splice(index, 1);
  }
}
  
research.push(researchX);
*/
