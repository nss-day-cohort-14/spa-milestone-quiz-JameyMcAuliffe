
var CarLot = (function(oldCarLot){

	//function accepting a selected dom element and color name from cardClick to edit a card's style
	CarLot.selectStyle = function(currentTarget, color) {

		//for loop checks to see if any cards have already been clicked, removing style once a new one has been clicked
		for(var i = 0; i < CarLot.getInventory().length; i++) {
			var car = document.getElementById(i);
			if (car.getAttribute("style") != null) {
				car.removeAttribute("style");
			}
		}
		
		//adds style to newly clicked card
		currentTarget.style.borderWidth = "4px";
		currentTarget.style.backgroundColor = color;
	};

	//accepts an id from buttonClick, removing the style attribute from that dom element only if a card has been clicked on
	 CarLot.resetStyle = function(id) {

		id ? document.getElementById(id).removeAttribute("style") : "";
	};

	return oldCarLot;

})(CarLot || {});

	