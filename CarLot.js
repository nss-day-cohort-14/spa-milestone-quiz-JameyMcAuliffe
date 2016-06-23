
var CarLot = (function () {
  
  //private variable to store array of car objects from inventory.json
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        
        //pasing inventory into the populatePage function from quiz.js
        populatePage(inventory);
        
      });

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      
    }
  }

})();

//CarLot.loadInventory();