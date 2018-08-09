
//=================================================================================================LOGIC
function changePrice(city) {
	city.price = Math.floor(Math.random()*(city.woodPriceMax-city.woodPriceMin+1)+city.woodPriceMin);
	city.woodPriceHolder.innerHTML = city.price;
	wood.price = city.price;

	city.price = Math.floor(Math.random()*(city.ironPriceMax-city.ironPriceMin+1)+city.ironPriceMin);
	city.ironPriceHolder.innerHTML = city.price;
	iron.price = city.price;

	city.price = Math.floor(Math.random()*(city.steelPriceMax-city.steelPriceMin+1)+city.steelPriceMin);
	city.steelPriceHolder.innerHTML = city.price;
	steel.price = city.price;

	city.price = Math.floor(Math.random()*(city.silverPriceMax-city.silverPriceMin+1)+city.silverPriceMin);
	city.silverPriceHolder.innerHTML = city.price;
	silver.price = city.price;

	city.price = Math.floor(Math.random()*(city.goldPriceMax-city.goldPriceMin+1)+city.goldPriceMin);
	city.goldPriceHolder.innerHTML = city.price;
	gold.price = city.price;

	money -= 10;
	document.getElementById("money").innerHTML = money;

}

function selectMaterial(which) {
	document.getElementById("currentMaterial").innerHTML = which.name
	currentMaterial = which.name;
}

function changeCity(which){
	document.getElementById("currentLocation").innerHTML = which.name
	currentLocation = which.name
	changePrice(which)
	nextRound();
	document.getElementById("currentMaterial").innerHTML = null;
	currentMaterial = null;
}

//=================================================================================================NEXT ROUND
function nextRound(){
	if(round === maxRound){
		gameOver()
	} else {
		round++
	}
	document.getElementById("round").innerHTML = round;
	document.getElementById("maxRound").innerHTML = maxRound;
};

//=================================================================================================GAME OVER FUNCTION
function gameOver(){
	var wareHouseBonus = ((wareHouseLimit - 8) / 5) * 1000
	var score = money + ownedMaterial(wood) + ownedMaterial(iron) + 
			ownedMaterial(steel) + ownedMaterial(silver) + 
			ownedMaterial(gold) + wareHouseBonus
	alert('End of the game your result is ' + parseInt(score) + ' $')
	scoreTable()
	if (score != undefined) {
		makeZero()
	} else {
		console.log("something goes wrong")
	}
		resetGame()	
};

function makeZero (){
	czysc(wood, woodPrice, ownedWood);
	czysc(iron, ironPrice, ownedIron);
	czysc(steel, steelPrice, ownedSteel);
	czysc(silver, silverPrice, ownedSilver);
	czysc(gold, goldPrice, ownedGold);

	money = 500;
	document.getElementById("money").innerHTML = money;
	round = 0;
	document.getElementById("round").innerHTML = round;
	wareHouse = 0;
	document.getElementById("wareHouse").innerHTML = wareHouse
	document.getElementById("wareHouseLimit").innerHTML = startingWareHouseLimit;
	currentLocation = null;
	document.getElementById("currentLocation").innerHTML = null;
}

function czysc (which1, which2, which3){
	which1.price = 0
	which1.owned = 0
	which2.innerHTML = 0
	which3.innerHTML = which1.owned
}

function ownedMaterial(which){
	var ownedMaterial = which.owned
	var priceMaterial = which.price
	ownedValue = ownedMaterial * priceMaterial
	return ownedValue
};

//=================================================================================================BUY LOGIC
function buyMaterial(material) {
	material = currentMaterial.toLowerCase()
	materialPrice = this[material].price
	materialValue = materialPrice * amount.value

	if (money >= materialValue && wareHouseLimit >= (wareHouse + parseInt(amount.value))) {
		money -= materialValue
			document.getElementById("money").innerHTML = money

		wareHouse += parseInt(amount.value)
			document.getElementById("wareHouse").innerHTML = wareHouse

		this[material].owned += parseInt(amount.value)
		updateOwnedMaterial(this[material])
		amount.value = null;
		console.log("u buy " + amount.value + " " + material + " for " + materialValue + " $, " + materialPrice + "$ each")
	} else {
		alert("u dont have money or enought space in warehouse")
	}
}

//=================================================================================================SELL LOGIC
function sellMaterial(material) {
	material = currentMaterial.toLowerCase()
	materialPrice = this[material].price
	materialValue = materialPrice * amount.value

	if (this[material].owned >= parseInt(amount.value)) {
		money += materialValue
			document.getElementById("money").innerHTML = money

		wareHouse -= parseInt(amount.value)
			document.getElementById("wareHouse").innerHTML = wareHouse
		
		this[material].owned -= parseInt(amount.value)
		updateOwnedMaterial(this[material])
		amount.value = null;
		console.log("u sell " + amount.value + " " + material + " for " + materialValue + " $, " + materialPrice + "$ each")
	} else {
		alert("u dont have enought material to sell")
	}
}

//=================================================================================================UPDATE FUNCTION
function updateOwnedMaterial(which){
	switch (which) {
		case wood:
			document.getElementById("ownedWood").innerHTML = wood.owned
			break
		case iron:
			document.getElementById("ownedIron").innerHTML = iron.owned
			break
		case (steel):
			document.getElementById("ownedSteel").innerHTML = steel.owned
			break
		case (silver):
			document.getElementById("ownedSilver").innerHTML = silver.owned
			break
		case (gold):
			document.getElementById("ownedGold").innerHTML = gold.owned
	}
}

//=================================================================================================Upgrading functions
function buyUpgrade (){
	if (money >= 1000) {
		wareHouseLimit += 5
			document.getElementById("wareHouseLimit").innerHTML = wareHouseLimit
		money -= 1000
			document.getElementById("money").innerHTML = money
	} else {
		alert('You dont have enought money!')
	}
};

//=================================================================================================Starting Function
function startGame (){
	var name = document.getElementById("name")
	player.innerHTML = name.value

	start = document.getElementById("start");
  	start.classList.remove("active");
  	start.classList.add("d-none");

	game = document.getElementById("game");
  	game.classList.remove("d-none");
  	game.classList.add("active");

  	reset = document.getElementById("resetBtn");
  	reset.classList.remove("d-none");
  	reset.classList.add("active");

  	changeCity(warsaw)
  	money += 10
  	document.getElementById("money").innerHTML = money;
};

//=================================================================================================Reset function
 function resetGame(){
 	start = document.getElementById("start");
  	start.classList.remove("d-none");
  	start.classList.add("active");

	game = document.getElementById("game");
  	game.classList.remove("active");
  	game.classList.add("d-none");

  	reset = document.getElementById("resetBtn");
  	reset.classList.remove("active");
  	reset.classList.add("d-none");

  	player.innerHTML = "";
  	name.value = "";
  	makeZero();

 };

 //=================================================================================================Score table
 function scoreTable(){
 	var score = money + ownedMaterial(wood) + ownedMaterial(iron) + 
			ownedMaterial(steel) + ownedMaterial(silver) + 
			ownedMaterial(gold) + wareHouseBonus

 	var ul = document.getElementById("scoreTable")
 	var li = document.createElement("li")
 	var result = player.innerHTML + " " + score
 	li.appendChild(document.createTextNode(player.innerHTML + " " + score));
  	ul.appendChild(li);

 };
//==========================================================================================================================

// Score

// var scoreList = document.getElementById("scoreList")
// localStorage.setItem(scoreList, score);
// scoreList = localStorage.getItem(scoreList);
