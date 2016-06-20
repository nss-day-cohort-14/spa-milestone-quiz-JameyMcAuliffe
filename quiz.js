

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

var rodeo = document.getElementById("0").addEventListener("click", function(){
	rodeo.style.borderWidth = "5px";
});
