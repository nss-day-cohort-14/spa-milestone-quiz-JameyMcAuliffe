

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var list;
  var price = "";
  var title = "";
  var description = "";

  for (var i = 0; i < inventory.length; i++) {
   	var currentCar = inventory[i];
    list = document.getElementById(i);
    price = `<h1>${currentCar.price}</h1>`
    title = `<h3 class="rodeo-title">${currentCar.year + " " + currentCar.make + " " + currentCar.model}</h3>`;
    description = `<p id="car--${i}">${currentCar.description}</p>`;
    list.innerHTML = price;
    list.innerHTML += title;
    list.innerHTML += description;
  }

  // Now that the DOM is loaded, establish all the event listeners needed


  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();











//var textBox = document.getElementById("edit");

// inventoryLoader.addEventListener("load", function () {
// 	carObjs = JSON.parse(this.responseText);
	
	//Loop through carObjs array, concatenating strings to place into inventory array
	//   for (var i  = 0; i < carObjs.cars.length; i++) {
	
	// 	//inserting each string representing the car info into the html of a column div	
	// 	document.getElementById(i).innerHTML = inventory[i] = carObjs.cars[i].year + " " + carObjs.cars[i].make + " " + carObjs.cars[i].model + " (" + carObjs.cars[i].color + "): " + carObjs.cars[i].price + "\n" + carObjs.cars[i].description;
	// }
	

// });

// //event listeners

// //variable storing the id of the last selected element
// var lastEvent;

// //Rodeo click to expand border
// var rodeo = document.getElementById("0").addEventListener("click", function(event){
// 	// event.target.style.borderWidth = "4px";
	
// 	event.target.classList.add("targeted-rodeo");
// 	textBox.value = "";
// 	textBox.focus();
// 	textBox.select();
// 	lastEvent = event.target.id;
// 	document.getElementById("1").classList.remove("targeted-taurus");
// 	document.getElementById("2").classList.remove("targeted-m83");
// });


// //Taurus click to expand border
// document.getElementById("1").addEventListener("click", function(event){
// 	// event.target.style.borderWidth = "4px";
// 	// event.target.style.backgroundColor = "gold";
// 	event.target.classList.add("targeted-taurus");
// 	textBox.value = "";
// 	textBox.focus();
// 	textBox.select();
// 	lastEvent = event.target.id;
// 	document.getElementById("0").classList.remove("targeted-rodeo");
// 	document.getElementById("2").classList.remove("targeted-m83");
// });

// //M83 click to expand border
// document.getElementById("2").addEventListener("click", function(event){
// 	// event.target.style.borderWidth = "4px";
// 	// event.target.style.backgroundColor = "gold";
// 	event.target.classList.add("targeted-m83");
// 	textBox.value = "";
// 	textBox.focus();
// 	textBox.select();
// 	lastEvent = event.target.id;
// 	document.getElementById("0").classList.remove("targeted-rodeo");
// 	document.getElementById("1").classList.remove("targeted-taurus");
// });

// //Enter button, edits inner html of car articles, and resets the border/background color
// document.getElementById("button").addEventListener("click", function(){
	
// 	if (lastEvent === "0") {
// 		document.getElementById(lastEvent).classList.remove("targeted-rodeo");
// 		textBox.value = "";
// 		lastEvent = "";
// 	}
// 	else if (lastEvent === "1") {
// 		document.getElementById(lastEvent).classList.remove("targeted-taurus");
// 		textBox.value = "";
// 		lastEvent = "";
// 	}
// 	else if (lastEvent === "2") {
// 		document.getElementById(lastEvent).classList.remove("targeted-m83");
// 		textBox.value = "";
// 		lastEvent = "";
// 	}
// 	else {
// 		textBox.value = "";
// 	}
// })

// //Text input inserting each stroke to the innerhtml of the selected car description
// textBox.addEventListener("keyup", function(event) {
// 	if (lastEvent === "0") {
// 		document.getElementById(lastEvent).innerHTML = event.target.value;
// 	}
// 	else if (lastEvent === "1") {
// 		document.getElementById(lastEvent).innerHTML = event.target.value;
// 	}
// 	else if (lastEvent === "2") {
// 		document.getElementById(lastEvent).innerHTML = event.target.value;
// 	}
// 	else {

// 	}
// })











