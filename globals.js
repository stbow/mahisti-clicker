var balance = 0;

var employees = 0;
var shops = 0;
var ships = 0;
var mines = 0;

var nextEmployee = 10;
var nextShop = 1080;
var nextShip = 43200;
var nextMine = 504000;

var shopsRPS = 24;
var fleetRPS = 252;
var minesRPS = 3000;

var empMult = 1;
var shopsMult = 1;
var fleetMult = 1;
var minesMult = 1;

var researchPoints = 0;
var researchShips = 0;
var nextResearchShip = 72000;
var launchCost = 0;
var escapePlansFlag = 0;
var researchFleetTotal = 0;

const expeditionOptionsList = [
  {
    id: "exOpt23",
    title: "type1",
    picker: "type",
    value: 50,
    cost: 400,
    result: 2
  },
  {
    id: "exOpt24",
    title: "type2",
    picker: "type",
    value: 30,
    cost: 3000,
    result: 30
  },
  {
    id: "exOpt25",
    title: "type3",
    picker: "type",
    value: 10,
    cost: 15000,
    result: 200
  },
  {
    id: "exOpt26",
    title: "crew1",
    picker: "crew",
    value: 10,
    cost: 200
  },
  {
    id: "exOpt27",
    title: "crew2",
    picker: "crew",
    value: 15,
    cost: 1000
  },
  {
    id: "exOpt28",
    title: "crew3",
    picker: "crew",
    value: 20,
    cost: 5000
  },
  {
    id: "exOpt29",
    title: "equip1",
    picker: "equip",
    value: 10,
    cost: 150
  },
  {
    id: "exOpt30",
    title: "equip2",
    picker: "equip",
    value: 15,
    cost: 500
  },
  {
    id: "exOpt31",
    title: "equip3",
    picker: "equip",
    value: 20,
    cost: 5000
  }
]

var typeValue;
var crewValue;
var equipmentValue;
var successRate;

var happiness = 50;
var happinessPS = 0;
var researchMult = 1;

var loansList = [];

var maxLoans = 5;
var countryValue;
var principalValue;
var rateValue;
var timeValue;

var taxes1 = 0;
var taxes2 = 0;
var taxes3 = 0;
var taxes4 = 0;
var taxes5 = 0;
var taxes6 = 0;
var taxes7 = 0;
var taxes8 = 0;
var taxes9 = 0;
var taxes10 = 0;
