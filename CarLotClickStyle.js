
var CarLot = (function(oldCarLot){


	var color;
	
	var car1 = document.getElementById("0");
	var car2 = document.getElementById("1");
	var car3 = document.getElementById("2");

	CarLot.selectStyle = function(carId, color) {
		if (carId === car1) {
			color = "green";
		}
		else if (carId === car2) {
			color = "blue";
		}
		else {
			color = "red";
		}
		event.currentTarget.style.border = `4px solid ${color}`;
		event.currentTarget.style.backgroundColor = "gold";
	};

	return oldCarLot;
})(CarLot);

	





	// var color;
	// 	var carId = event.currentTarget.id;
	// 	var rodeo = document.getElementById("0");
	// 	var taurus = document.getElementById("1");
	// 	var m83 = document.getElementById("2");
	// 	var textBox = document.getElementById("edit");

// if statement setting the border color based on car ids, 
		// as well as removing styling from previously clicked cards
		// if (carId === "0") {
		// 	color = "green";
		// 	taurus.removeAttribute("style");
		// 	m83.removeAttribute("style");
		// }
		// else if (carId === "1") {
		// 	color = "blue";
		// 	rodeo.removeAttribute("style");
		// 	m83.removeAttribute("style");
		// }
		// else {
		// 	color = "red";
		// 	rodeo.removeAttribute("style");
		// 	taurus.removeAttribute("style");
		// }

		// event.currentTarget.style.border = `4px solid ${color}`;
		// event.currentTarget.style.backgroundColor = "gold";

