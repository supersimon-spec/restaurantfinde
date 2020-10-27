window.addEventListener("DOMContentLoaded", () => {
    var itemInput = document.getElementById("Enterinput");
    var addButton = document.getElementById("buttonenter");
    var removeButton = document.getElementById("buttonremove");
    var rollButton = document.getElementById("buttonroll");
    var list = document.getElementById("Listrestaurant");

    

    itemInput.addEventListener("keyup", function(event) {

      if (event.keyCode === 13) {

        event.preventDefault();

        document.getElementById("buttonenter").click();
        
    } 

    if (event.keyCode === 8) {

      event.preventDefault();

      document.getElementById("buttonremove").click()
    }

  });
    
    addButton.addEventListener("click", () => {

      // Get the value from the input
      var item = itemInput.value;

      // Create a new list item element
      var listItem = document.createElement("li");

      // Insert the value from the input
      listItem.innerText = item;

      // Prepend new element to the list
      list.prepend(listItem);

      // Clear input
      itemInput.value = "";
        
    });

    removeButton.addEventListener("click", () => {

        // Remoce last entry
        list.removeChild(list.childNodes[0]);
  
      });

    rollButton.addEventListener("click", () => {

        // convert list to an array
        
        var theArray = [];

        for (var i = 0; i < list.childNodes.length -1; i++) {
            var arrValue = list.childNodes[i].innerText;
            console.log(arrValue);
            theArray.push(arrValue);
        }
    
        // output the array in the console - just for checking 
    console.log(theArray)
  
         // pick a random element from the array

      const random = Math.floor(Math.random() * theArray.length);
      var choice = theArray[random];
      console.log(choice, theArray[random]);

         // output that entry
 
      document.getElementById("Choice").innerHTML = choice;

      

      });

     

  });
