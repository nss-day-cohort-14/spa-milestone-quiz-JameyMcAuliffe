

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var list;
  var price = "";
  var title = "";
  var description = "";
  var availability = "";
  var image = ""

  for (var i = 0; i < inventory.length; i++) {
   	var currentCar = inventory[i];
    list = document.getElementById(i);
    price = `<h1>${currentCar.price}</h1>`
    title = `<h3 class="rodeo-title">${currentCar.year + " " + currentCar.make + " " + currentCar.model}</h3>`;
    description = `<p id="car--${i}">${currentCar.description}</p>`;

    if(currentCar.purchased === true) {
      availability = `<h4 class="availability">${"Sold Out"}</h4>`;
    }
    else {
      availability = `<h4 class="availability">${"Available"}</h4>`;
    }

    image = `<img src="img/${i}.jpeg">`;

    list.innerHTML = price;
    list.innerHTML += title;
    list.innerHTML += description;
    list.innerHTML += image;
    list.innerHTML += availability;
  }

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();










