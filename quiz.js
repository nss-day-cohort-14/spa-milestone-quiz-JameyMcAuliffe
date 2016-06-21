

// function populatePage (inventory) {
//   // Loop over the inventory and populate the page

//   // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// CarLot.loadInventory();


var inventory = [];

//XHR
var inventoryLoader = new XMLHttpRequest();
inventoryLoader.open("GET", "inventory.json");
inventoryLoader.send();


inventoryLoader.addEventListener("load", function () {
	carObjs = JSON.parse(this.responseText);
	
	//Loop through carObjs array, concatenating strings to place into inventory array
	for (var i  = 0; i < carObjs.cars.length; i++) {
	
		//inserting each string representing the car info into the html of a column div	
		document.getElementById(i).innerHTML = inventory[i] = carObjs.cars[i].year + " " + carObjs.cars[i].make + " " + carObjs.cars[i].model + " (" + carObjs.cars[i].color + "): " + carObjs.cars[i].price + "\n" + carObjs.cars[i].description;
	}

});

//event listeners

//variable storing the id of the last selected element
var lastEvent;

//Rodeo click to expand border
var rodeo = document.getElementById("0").addEventListener("click", function(event){
	// event.target.style.borderWidth = "4px";
	// event.target.style.backgroundColor = "gold";
	event.target.classList.add("targeted-rodeo");
	var textBox = document.getElementById("search");
	textBox.value = "";
	textBox.focus();
	textBox.select();
	lastEvent = event.target.id;
	document.getElementById("1").classList.remove("targeted-taurus");
	document.getElementById("2").classList.remove("targeted-m83");
});


//Taurus click to expand border
document.getElementById("1").addEventListener("click", function(event){
	// event.target.style.borderWidth = "4px";
	// event.target.style.backgroundColor = "gold";
	event.target.classList.add("targeted-taurus");
	var textBox = document.getElementById("search");
	textBox.value = "";
	textBox.focus();
	textBox.select();
	lastEvent = event.target.id;
	document.getElementById("0").classList.remove("targeted-rodeo");
	document.getElementById("2").classList.remove("targeted-m83");
});

//M83 click to expand border
document.getElementById("2").addEventListener("click", function(event){
	// event.target.style.borderWidth = "4px";
	// event.target.style.backgroundColor = "gold";
	event.target.classList.add("targeted-m83");
	var textBox = document.getElementById("search");
	textBox.value = "";
	textBox.focus();
	textBox.select();
	lastEvent = event.target.id;
	document.getElementById("0").classList.remove("targeted-rodeo");
	document.getElementById("1").classList.remove("targeted-taurus");
});

//Enter button, edits inner html of car articles, and resets the border/background color
document.getElementById("button").addEventListener("click", function(){
	
	if (lastEvent === "0") {
		document.getElementById(lastEvent).classList.remove("targeted-rodeo");
	}
	else if (lastEvent === "1") {
		document.getElementById(lastEvent).classList.remove("targeted-taurus");
	}
	else {
		document.getElementById(lastEvent).classList.remove("targeted-m83");
	}
})










