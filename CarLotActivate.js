
var CarLot = (function(oldCarLot){

	var textBox = document.getElementById("edit");
	var lastEvent;


	//function to create event handlers
	CarLot.activateEvents = function() {

		//Card click handler
		for (var i = 0; i < CarLot.getInventory().length; i++) {
		  document.getElementById(i).addEventListener("click", cardClick);
		}

		//input handler
		textBox.addEventListener("keyup", editDescription);

		//button handler
		document.getElementById("button").addEventListener("click", buttonClick);
	};

		
	function cardClick(event) {
		
	//Clearing the text input, adding focus and placing the cursor inside
	//lastEvent holds the id of the card that will be edited with the text input
	 	textBox.value = "";
		textBox.focus();
		textBox.select();
		lastEvent = event.currentTarget.id;
		CarLot.selectStyle(document.getElementById(lastEvent), "gold");
		//CarLot.resetStyle();
	};

	function editDescription(event) {

		//if statement using value of lastEvent to determine which card's p tag will be edited
		if (lastEvent === "0") {
			document.getElementById("car--0").innerHTML = event.target.value;
		}
		else if (lastEvent === "1") {
			document.getElementById("car--1").innerHTML = event.target.value;
		}
		else if (lastEvent === "2") {
			document.getElementById("car--2").innerHTML = event.target.value;
		}
		else {
			
		}
	};

	function buttonClick(event) {

		//clears text input and value of lastEvent, essentially saving the innerHTML of the edited p tag
		textBox.value = "";
		CarLot.resetStyle(lastEvent);
		lastEvent = "";

	};

	return oldCarLot;

})(CarLot || {});







