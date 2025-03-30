var research = [];
var activeResearch = [];

//TODO testing - money not fast enough, happiness too fast

var research49 = {
  id: "researchButton49",
  title: "Overthrow the Shahre and take over Ara\u015Ft ",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return true},
  uses: 1,
  cost: function() {return true},
  flag: 0,
  element: null,
  effect: function() {
    research49.flag = 1;
    /* employeesDiv.classList.add("hidden");
    shopsDiv.classList.add("hidden");
    fleetDiv.classList.add("hidden");
    minesDiv.classList.add("hidden");
    discoveredSecretAnnouncementDiv.classList.add("hidden"); */
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
  priceTag: "(90,000 alt\u0131nlar)",
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
    happinessPSElem.innerText = happinessPS;
    empMult += 0.1;
    shopsMult += 0.1;
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
  priceTag: "(175,000 alt\u0131nlar)",
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
    happinessPSElem.innerText = happinessPS;
    research51.element.parentNode.removeChild(research51.element);
    let index = activeResearch.indexOf(research51);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research51);

var research52 = {
  id: "researchButton52",
  title: "Public bathhouses ",
  priceTag: "(320,000 alt\u0131nlar)",
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
    happinessPSElem.innerText = happinessPS;
    empMult -= 0.3;
    shopsMult -= 0.3;
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
    happinessPSElem.innerText = happinessPS;
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
  trigger: function() {return balance >= 37800000},
  uses: 1,
  cost: function() {return balance >= 45000000},
  flag: 0,
  element: null,
  effect: function() {
    research54.flag = 1;
    balance -= 45000000
    happinessPS += 0.04;
    empMult -= 0.1;
    shopsMult -= 0.1;
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
    happinessPSElem.innerText = happinessPS;
    empMult -= 0.2;
    shopsMult -= 0.2;
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
    happinessPSElem.innerText = happinessPS;
    empMult -= 0.2;
    shopsMult -= 0.2;
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
    happinessPSElem.innerText = happinessPS;
    empMult -= 0.4;
    shopsMult -= 0.4;
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
    happinessPSElem.innerText = happinessPS;
    empMult -= 0.3;
    shopsMult -= 0.3;
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
  priceTag: `${(-200000 * r59count) + 900000} \u023a`,
  description: "Promote unity through national events",
  trigger: function() {return happiness <= 30},
  uses: 5,
  cost: function() {return balance >= (-200000 * r59count) + 900000},
  flag: 0,
  element: null,
  effect: function() {
    research59.flag = 1;
    balance -= (-200000 * r59count) + 900000;
    happiness += 5;
    r59count--;
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
    happinessPSElem.innerText = happinessPS;
    empMult -= 0.2;
    shopsMult -= 0.2;
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
    happinessPS += 0.02
    empMult += 0.1;
    shopsMult += 0.1;
    fleetMult += 0.1;
    minesMult += 0.1;
    research61.element.parentNode.removeChild(research61.element);
    let index = activeResearch.indexOf(research61);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research61);

/* var research62 = {
  id: "researchButton9",
  title: " ",
  priceTag: "(XX alt\u0131nlar)",
  description: "",
  trigger: function() {return research6.flag === 1 && shops >= 5},
  uses: 1,
  cost: function() {return balance >= 17280},
  flag: 0,
  element: null,
  effect: function() {
    research62.flag = 1;
    
    research62.element.parentNode.removeChild(research62.element);
    let index = activeResearch.indexOf(research62);
    activeResearch.splice(index, 1);
  }
}
  
research.push(research62); */

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
    empMult += 0.3;
    shopsMult += 0.3;
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
  trigger: function() {return balance >= 46800000},
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
  title: "Invest in the Ministry of Intelligence ",
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
    empMult += 0.2;
    shopsMult += 0.2;
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
    empMult -= 0.2;
    shopsMult -= 0.2;
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
  priceTag: `${(-200000 * r68count) + 1200000} \u023a`,
  description: "Hold an empire-wide competition for the best new invention, idea, or process",
  trigger: function() {return research67.flag === 1 && balance >= 360000000 && researchPoints <= 1000},
  uses: 5,
  cost: function() {return balance >= (-200000 * r68count) + 1200000},
  flag: 0,
  element: null,
  effect: function() {
    research68.flag = 1;
    balance -= (-200000 * r68count) + 1200000;
    researchPoints += (-500 * r68count) + 2500;
    points2Elem.innerText = researchPoints;
    r68count--;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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
    points2Elem.innerText = researchPoints;
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