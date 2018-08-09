var wood = {}
	wood.name = "Wood";
	wood.owned = 0;
	wood.price = 0;

var iron = {}
	iron.name = "Iron";
	iron.owned = 0;
	iron.price = 0;

var steel = {}
	steel.name = "Steel";
	steel.owned = 0;
	steel.price = 0;

var silver = {}
	silver.name = "Silver";
	silver.owned = 0;
	silver.price = 0;

var gold = {}
	gold.name = "Gold";
	gold.owned = 0;
	silver.price = 0;

var warsaw = {}
	warsaw.name = "Warsaw"
	warsaw.woodPriceMin = 1;
	warsaw.woodPriceMax = 5;
	warsaw.woodPriceHolder = document.getElementById("woodPrice");
	warsaw.ironPriceMin = 15;
	warsaw.ironPriceMax = 22;
	warsaw.ironPriceHolder = document.getElementById("ironPrice");
	warsaw.steelPriceMin = 20;
	warsaw.steelPriceMax = 28;
	warsaw.steelPriceHolder = document.getElementById("steelPrice");
	warsaw.silverPriceMin = 31;
	warsaw.silverPriceMax = 36;
	warsaw.silverPriceHolder = document.getElementById("silverPrice");
	warsaw.goldPriceMin = 40;
	warsaw.goldPriceMax = 50;
	warsaw.goldPriceHolder = document.getElementById("goldPrice");

var berlin = {}
	berlin.name = "Berlin"
	berlin.woodPriceMin = 10;
	berlin.woodPriceMax = 15;
	berlin.woodPriceHolder = document.getElementById("woodPrice");
	berlin.ironPriceMin = 21;
	berlin.ironPriceMax = 30;
	berlin.ironPriceHolder = document.getElementById("ironPrice");
	berlin.steelPriceMin = 25;
	berlin.steelPriceMax = 32;
	berlin.steelPriceHolder = document.getElementById("steelPrice");
	berlin.silverPriceMin = 35;
	berlin.silverPriceMax = 43;
	berlin.silverPriceHolder = document.getElementById("silverPrice");
	berlin.goldPriceMin = 46;
	berlin.goldPriceMax = 60;
	berlin.goldPriceHolder = document.getElementById("goldPrice");

var paris = {}
	paris.name = "Paris"
	paris.woodPriceMin = 15;
	paris.woodPriceMax = 20;
	paris.woodPriceHolder = document.getElementById("woodPrice");
	paris.ironPriceMin = 23;
	paris.ironPriceMax = 30;
	paris.ironPriceHolder = document.getElementById("ironPrice");
	paris.steelPriceMin = 31;
	paris.steelPriceMax = 39;
	paris.steelPriceHolder = document.getElementById("steelPrice");
	paris.silverPriceMin = 40;
	paris.silverPriceMax = 46;
	paris.silverPriceHolder = document.getElementById("silverPrice");
	paris.goldPriceMin = 50;
	paris.goldPriceMax = 67;
	paris.goldPriceHolder = document.getElementById("goldPrice");

var london = {}
	london.name = "London"
	london.woodPriceMin = 20;
	london.woodPriceMax = 26;
	london.woodPriceHolder = document.getElementById("woodPrice");
	london.ironPriceMin = 25;
	london.ironPriceMax = 35;
	london.ironPriceHolder = document.getElementById("ironPrice");
	london.steelPriceMin = 34;
	london.steelPriceMax = 42;
	london.steelPriceHolder = document.getElementById("steelPrice");
	london.silverPriceMin = 45;
	london.silverPriceMax = 55;
	london.silverPriceHolder = document.getElementById("silverPrice");
	london.goldPriceMin = 56;
	london.goldPriceMax = 75;
	london.goldPriceHolder = document.getElementById("goldPrice");

var madrit = {}
	madrit.name = "Madrit"
	madrit.woodPriceMin = 30;
	madrit.woodPriceMax = 37;
	madrit.woodPriceHolder = document.getElementById("woodPrice");
	madrit.ironPriceMin = 37;
	madrit.ironPriceMax = 45;
	madrit.ironPriceHolder = document.getElementById("ironPrice");
	madrit.steelPriceMin = 40;
	madrit.steelPriceMax = 50;
	madrit.steelPriceHolder = document.getElementById("steelPrice");
	madrit.silverPriceMin = 52;
	madrit.silverPriceMax = 65;
	madrit.silverPriceHolder = document.getElementById("silverPrice");
	madrit.goldPriceMin = 68;
	madrit.goldPriceMax = 85;
	madrit.goldPriceHolder = document.getElementById("goldPrice");

var round = 0;
var maxRound = 20;
document.getElementById("maxRound").innerHTML = maxRound
var money = 500;
document.getElementById("money").innerHTML = money;
var amount = document.getElementById("amount");
var wareHouse = 0;
document.getElementById("wareHouse").innerHTML = wareHouse;
var wareHouseLimit = 8;
document.getElementById("wareHouseLimit").innerHTML = wareHouseLimit;
var wareHouseBonus = ((wareHouseLimit - 8) / 5) * 1000
var score = money + ownedMaterial(wood) + ownedMaterial(iron) + 
			ownedMaterial(steel) + ownedMaterial(silver) + 
			ownedMaterial(gold) + wareHouseBonus
var currentLocation = {};

var startingWareHouseLimit = 8;

var infoBox = document.querySelector('#infoBox');
var name = document.getElementById("name");
var player = document.getElementById("player");
var startBtn = document.querySelector('startBtn');
var resetBtn = document.querySelector('resetBtn');
