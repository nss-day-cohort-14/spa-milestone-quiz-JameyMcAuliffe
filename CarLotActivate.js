
var CarLot = (function(oldCarLot){

	//function to create event handlers
	CarLot.activateEvents = function() {

		//variable storing the id of the last selected element
		var lastEvent;
		var textBox = document.getElementById("edit");

		//Rodeo click to expand border
		var rodeo = document.getElementById("0").addEventListener("click", function(event){
			event.currentTarget.classList.add("targeted-rodeo");
			textBox.value = "";
			textBox.focus();
			textBox.select();
			lastEvent = event.target.id;
			document.getElementById("1").classList.remove("targeted-taurus");
			document.getElementById("2").classList.remove("targeted-m83");

		});
		  var carCards = document.getElementsByClassName("cards");
		  for (var i = 0; i < carCards.length; i++) {
		    carCards[i].addEventListener("click", doThings);
		  }
	};

	function doThings(event) {

		// all your sweet code
		// event.target.style.border = `4px solid ${color}`;
	}

	return oldCarLot;

})(CarLot || {});