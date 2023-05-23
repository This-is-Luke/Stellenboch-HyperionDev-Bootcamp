// first i apologise for so many comments, it helped me in troubleshooting some logic errors and helps show my logic.

// Initialize the 'groceries' array with items from local storage or an empty array
const groceries = JSON.parse(localStorage.getItem("groceries")) || [];
// Initialize the 'boughtItems' array with bought items from local storage or an empty array
const boughtItems = JSON.parse(localStorage.getItem("boughtItems")) || [];

displayItems();
//  first I had to call the delete function to have that run before the diplay function 
// to solve a logic error that would diplay a previously deleted item when a new item was added
function deleteItem(index, listItem) {
  const retVal = confirm("Are you sure you want to delete this item?");

  if (retVal == true) {
    groceries.splice(index, 1);
    const boughtIndex = boughtItems.indexOf(index);
    if (boughtIndex !== -1) {
      boughtItems.splice(boughtIndex, 1);
    }
    listItem.remove();
    displayItems();

    localStorage.setItem("groceries", JSON.stringify(groceries));
    localStorage.setItem("boughtItems", JSON.stringify(boughtItems));
  }
}

// start of the main function to diplay the items
function displayItems() {
  // Getting the HTML element with id "itemList" and storing it in the variable 'list'
  const list = document.getElementById("itemList"); 
  // Clearing the contents of the list  
  list.innerHTML = ""; 

  // Iterating over each item in the 'groceries' array
  groceries.forEach((item, index) => { 
    // Creating a new 'li' element
    const listItem = document.createElement("li"); 
    // Setting the text content of the list item to the current grocery item
    listItem.textContent = item; 

    // Checking if the current index is in the 'boughtItems' array
    if (boughtItems.includes(index)) { 
      // Applying a line-through text decoration to indicate the item is bought
      listItem.style.textDecoration = "line-through"; 
    }

    // Creating a new 'span' element
    const closeBtn = document.createElement("span"); 
    // Setting the class name of the close button
    closeBtn.className = "close"; 
    // Setting the text content of the close button to the multiplication sign (×)
    closeBtn.textContent = " \u00D7"; 
    // Adding a click event listener to the close button
    closeBtn.addEventListener("click", (event) => { 
      // Preventing the event from bubbling up to the list item
      event.stopPropagation(); 
      // Calling the 'deleteItem' function passing the current index and list item
      deleteItem(index, listItem); 
    });
    
    // Appending the close button to the list item
    listItem.appendChild(closeBtn); 
    // Appending the list item to the list
    list.appendChild(listItem); 

    // Adding a click event listener to the list item to mark it as bought
    listItem.addEventListener("click", () => markAsBought(index)); 
  });
}

function markAsBought(index) {
  const list = document.getElementById("itemList");
  const listItem = list.children[index];

  if (boughtItems.includes(index)) {
    const boughtIndex = boughtItems.indexOf(index);
    if (boughtIndex !== -1) {
      boughtItems.splice(boughtIndex, 1);
    }
    listItem.style.textDecoration = "none";
  } else {
    boughtItems.push(index);
    listItem.style.textDecoration = "line-through";
  }

  localStorage.setItem("boughtItems", JSON.stringify(boughtItems));
}

function updateList() {
  const input = document.getElementById("input");
  const newItem = input.value.trim();

  if (newItem === "") {
    alert("Please insert an item.");
  } else {
    groceries.push(newItem);
    displayItems();
    input.value = "";

    localStorage.setItem("groceries", JSON.stringify(groceries));
  }
}
const inputElement = document.getElementById("input");

// Add an event listener for the 'keypress' event to the input element
inputElement.addEventListener("keypress", function(event) {
  // Check if the key code is 13 (Enter key)
  if (event.keyCode === 13) { // side note, the keyCode argument is depreciated, please update your task requirements.
    event.preventDefault();
    // Call the updateList function when the Enter key is pressed
    updateList(); 
  }
});




