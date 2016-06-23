
var CarLot = (function(oldCarLot){

	//function to create event handlers
	CarLot.activateEvents = function() {

		//variable storing the id of the last selected element
		var lastEvent;
		var textBox = document.getElementById("edit");

		//Rodeo click to expand border
		var rodeo = document.getElementById("0").addEventListener("click", function(event){
			event.target.classList.add("targeted-rodeo");

			textBox.value = "";
			textBox.focus();
			textBox.select();
			lastEvent = event.target.id;
			document.getElementById("1").classList.remove("targeted-taurus");
			document.getElementById("2").classList.remove("targeted-m83");
		});

	};

	return oldCarLot;

})(CarLot || {});