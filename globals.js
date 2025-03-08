var balance = 0;

var employees = 0;
var shops = 0;
var ships = 0;
var mines = 0;

var nextEmployee = 10;
var nextShop = 1080;
var nextShip = 43200;
var nextMine = 1512000;

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
    cost: 800,
    result: 10
  },
  {
    id: "exOpt24",
    title: "type2",
    picker: "type",
    value: 30,
    cost: 6000,
    result: 50
  },
  {
    id: "exOpt25",
    title: "type3",
    picker: "type",
    value: 10,
    cost: 30000,
    result: 150
  },
  {
    id: "exOpt26",
    title: "crew1",
    picker: "crew",
    value: 10,
    cost: 400
  },
  {
    id: "exOpt27",
    title: "crew2",
    picker: "crew",
    value: 15,
    cost: 2000
  },
  {
    id: "exOpt28",
    title: "crew3",
    picker: "crew",
    value: 20,
    cost: 10000
  },
  {
    id: "exOpt29",
    title: "equip1",
    picker: "equip",
    value: 10,
    cost: 300
  },
  {
    id: "exOpt30",
    title: "equip2",
    picker: "equip",
    value: 15,
    cost: 1000
  },
  {
    id: "exOpt31",
    title: "equip3",
    picker: "equip",
    value: 20,
    cost: 10000
  }
]

var typeValue;
var crewValue;
var equipmentValue;
var successRate;
