// first i apologise for so many comments, it helped me in troubleshooting some logic errors and helps show my logic.

// Initializing an empty array to store grocery items
const groceries = []; 
// Initializing an empty array to store indices of bought items
const boughtItems = []; 

//  first I had to call the delete function to have that run before the diplay function 
// to solve a logic error that would diplay a previously deleted item when a new item was added
function deleteItem(index, listItem) {
  // Removing the item from the 'groceries' array at the specified index
  groceries.splice(index, 1);
  // Finding the index of the item in the 'boughtItems' array
  const boughtIndex = boughtItems.indexOf(index);
  // Checking if the item exists in the 'boughtItems' array
  if (boughtIndex !== -1) {
    // Removing the item from the 'boughtItems' array
    boughtItems.splice(boughtIndex, 1);
  }

  // Removing the list item from the display
  listItem.remove();

  // Updating the display by calling the 'displayItems' function again
  displayItems();
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
  // Getting the HTML element with id "itemList" and storing it in the variable 'list'
  const list = document.getElementById("itemList");
  // Accessing the list item at the specified index 
  const listItem = list.children[index]; 

  // Checking if the item is already marked as bought
  if (boughtItems.includes(index)) { 
    // Finding the index of the item in the 'boughtItems' array
    const boughtIndex = boughtItems.indexOf(index); 
    // Checking if the item exists in the 'boughtItems' array
    if (boughtIndex !== -1) { 
      // Removing the item from the 'boughtItems' array
      boughtItems.splice(boughtIndex, 1); 
    }
    // Removing the line-through text decoration
    listItem.style.textDecoration = "none"; 
  } else {
    // Adding the index to the 'boughtItems' array
    boughtItems.push(index); 
    // Applying a line-through text decoration to indicate the item is bought
    listItem.style.textDecoration = "line-through"; 
  }
}

function updateList() {
  // Getting the HTML element with id "input" and storing it in the variable 'input'
  const input = document.getElementById("input"); 

  // Getting the trimmed value of the input field
  const newItem = input.value.trim(); 

  // Checking if the input is empty
  if (newItem === "") { 
    // Displaying an alert to prompt the user to insert an item
    alert("Please insert an item."); 
  } else {
    // Adding the new item to the 'groceries' array
    groceries.push(newItem); 
    // Calling the 'displayItems' function to update the list
    displayItems(); 
    // Clearing the input field
    input.value = ""; 
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




