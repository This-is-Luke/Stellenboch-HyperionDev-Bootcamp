// I think you should rework these tasks to have a output thats closer to realworld solutions.
// no one would have hardcoded strikethroughs or lists in their list
// to add this to my list of projects ill be adding a firebase or mongo datatbase to hold the data and remove tha hard coded lists

// 2 arrays, 1 with the hard coded list of defaults and 1 to hold the strikethough list
const groceries = ["Coke", "Carton of Marlboro", "Coffee", "Red Bull", "3 x Jack Daniels Honey"];
const boughtItems = [];

// -------------------------------------------------------
// This file does a few things ABOVE THE ASSIGNMENT REQUIREMENTS
// first we grab the id itemlist and assign it to a varable list
// second we clear the list, this helps with a strikethough error I got
// Third I set a foreach loop to itterate through the array and append the textcontent from an arguemnt
// Forth I use the boughtItems array to check inside the forloop if there is a item in the array, if it is, append linethrough text decoration
// Firth i set the strikethrough function and some peramiters inside
// then finally we update the list with a function listening to the form in the html
// -------------------------------------------------------

function displayItems() {
  const list = document.getElementById("itemList");

  // Clear the list before appending items
  list.innerHTML = "";

  groceries.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    // Check if the item's index is in the boughtItems array and apply the strikethrough style accordingly
    if (boughtItems.includes(index)) {
      listItem.style.textDecoration = "line-through";
    }

    // Add event listener to the list item if its clicked to strike it though
    listItem.addEventListener("click", () => markAsBought(index));
    // add the strikethrough item to the current list
    list.appendChild(listItem);
  });
}

function markAsBought(index) {
  const list = document.getElementById("itemList");
  // here i had a bug that took some solving, i needed to add the children of the index to solve a strikethough error
  const listItem = list.children[index];

  // Add the index of bought items to  boughtItems array
  boughtItems.push(index);
  // this line is what adds the strikethrouhg
  listItem.style.textDecoration = "line-through";
}
// update the list with info from the form to be displayed
function updateList() {
  const input = document.getElementById("input");
  const newItem = input.value.trim();

  if (newItem) {
    groceries.push(newItem);
    displayItems();
    input.value = "";
  }
}
// call the items list to show the hard coded list for the task.
displayItems();
markAsBought(1)
markAsBought(2)
