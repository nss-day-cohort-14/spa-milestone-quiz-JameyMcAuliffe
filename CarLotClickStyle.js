
var CarLot = (function(oldCarLot){

	//function accepting a selected dom element and color name from cardClick to edit a card's style
	CarLot.selectStyle = function(currentTarget, color) {
		
		currentTarget.style.borderWidth = "4px";
		currentTarget.style.backgroundColor = color;
	};

	//accepts an id from buttonClick, removing the style attribute from that dom element
	CarLot.resetStyle = function(id) {

		document.getElementById(id).removeAttribute("style");
	};

	return oldCarLot;

})(CarLot || {});

	