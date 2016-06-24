
var CarLot = (function(oldCarLot){

	//function to create event handlers
	CarLot.activateEvents = function() {

		  //var carCards = document.getElementsByClassName("cards");
		  for (var i = 0; i < 3; i++) {
		    document.getElementById(i).addEventListener("click", cardClick);
		  }

		  //button handler
		  document.getElementById("button").addEventListener("click", buttonClick)
	};

	function cardClick(event) {
		var color;
		var carId = event.currentTarget.id;
		var rodeo = document.getElementById("0");
		var taurus = document.getElementById("1");
		var m83 = document.getElementById("2");
		var textBox = document.getElementById("edit");
		
		// if statement setting the proper border color based on car ids, 
		// as well as removing styling from previously clicked cards
		if (carId === "0") {
			color = "green";
			taurus.removeAttribute("style");
			m83.removeAttribute("style");
		}
		else if (carId === "1") {
			color = "blue";
			rodeo.removeAttribute("style");
			m83.removeAttribute("style");
		}
		else {
			color = "red";
			rodeo.removeAttribute("style");
			taurus.removeAttribute("style");
		}

		event.currentTarget.style.border = `4px solid ${color}`;
		event.currentTarget.style.backgroundColor = "gold";

		//Clearing the text input, adding focus and placing the cursor inside
		//lastEvent holds the id of the card that will be edited with the text input
		textBox.value = "";
		textBox.focus();
		textBox.select();
		lastEvent = event.target.id;
	}

	function buttonClick(event) {

	}

	return oldCarLot;

})(CarLot || {});


	//variable storing the id of the last selected element
		// var lastEvent;
		// var textBox = document.getElementById("edit");

		// //Rodeo click to expand border
		// var rodeo = document.getElementById("0").addEventListener("click", function(event){
		// 	event.currentTarget.classList.add("targeted-rodeo");
		// 	textBox.value = "";
		// 	textBox.focus();
		// 	textBox.select();
		// 	lastEvent = event.target.id;
		// 	document.getElementById("1").classList.remove("targeted-taurus");
		// 	document.getElementById("2").classList.remove("targeted-m83");

		// });