const groceries = JSON.parse(localStorage.getItem("groceries")) || [];

function deleteItem(index, listItem) {
  const retVal = confirm("Are you sure you want to delete this item?");
  if (retVal == true) {
    groceries.splice(index, 1);
    listItem.remove();
    displayItems();
    localStorage.setItem("groceries", JSON.stringify(groceries));
  }
}

function displayItems() {
  const list = document.getElementById("itemList");
  list.innerHTML = "";
  groceries.forEach((itemObj, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = itemObj.name;
    if (itemObj.bought) {
      listItem.classList.add("checkmark");
    } else {
      listItem.classList.remove("checkmark");
    }
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.textContent = " \u00D7";
    closeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteItem(index, listItem);
    });
    listItem.appendChild(closeBtn);
    list.appendChild(listItem);
    listItem.addEventListener("click", () => markAsBought(index));
  });
}

function markAsBought(index) {
  const list = document.getElementById("itemList");
  const listItem = list.children[index];
  if (groceries[index].bought) {
    groceries[index].bought = false;
    listItem.classList.remove("checkmark");
    } else {
    groceries[index].bought = true;
    listItem.classList.add("checkmark");
  }
  localStorage.setItem("groceries", JSON.stringify(groceries));
}

function updateList() {
  const input = document.getElementById("input");
  const newItem = input.value.trim();
  if (newItem == "") {
    // alert("Please insert an item.");
  } else {
    groceries.push({
      name: newItem,
      bought: false
    });
    input.value = "";
    localStorage.setItem("groceries", JSON.stringify(groceries));
  }
  displayItems();
}

const inputElement = document.getElementById("input");
inputElement.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    updateList();
  }
});

document.getElementById("addBtn").addEventListener("click", updateList);

displayItems();
