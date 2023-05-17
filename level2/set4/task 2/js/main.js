/*The assignments are starting to become more complex thank you! Im starting to learn more and even have to use Ai to assist in the logic (!!I do understand the importance of understanding the code made by AI and dont simply copy paste!!)
In future re assesments of the task and course material I would encourage the use of Ai more like phind.com as its going to be a paramount tool moving forward for coders in the future
I would suggest a section dedicated to how to prompt and site sources similarly to how the stack overflow section in the beginner material is structured*/

/* 
income object to hold
    name
    amount
    is/isnot recurring
    (salary, freelance, investments, rental, gift?)
expenses object to hold
    name of expense
    amount
    is/isnot recurring
    (groceries, rent, util, entertainment, transport)
prompt
    diplay income and offer to add a expense object
prompt
    display all expenses and ask if they want to add expenses
prompt
    ask how much of remaining income to put into savings
alert
    total remaining income
*/

// Retrieve income, expenses, and savings from sessionStorage (if available)
const storedIncomes = JSON.parse(sessionStorage.getItem("incomes"));
const storedExpenses = JSON.parse(sessionStorage.getItem("expenses"));
const storedSavings = parseFloat(sessionStorage.getItem("savings"));

// Use stored data if available, otherwise use the default data below
const incomes = storedIncomes || [
  { name: "Luke's Salary", amount: 22000, recurring: true },
  { name: "Graphic Design Freelance", amount: 2000, recurring: false },
  { name: "Investments", amount: 1200, recurring: true },
  { name: "Tax Returns", amount: 2100, recurring: false },
  { name: "Gifts", amount: 100, recurring: false }
];

const expenses = storedExpenses || [
  { name: "Groceries", amount: 8000, recurring: true },
  { name: "Rent", amount: 7000, recurring: true },
  { name: "Utilities", amount: 3500, recurring: true },
  { name: "Entertainment", amount: 1000, recurring: false },
  { name: "Transportation", amount: 3000, recurring: true },
];
// set savings to 0 on load
const savings = storedSavings || 0;

// Update the displayed savings total
document.getElementById("savings-total").innerText = 'R' + savings.toFixed(2);

// Display income and expense items
function displayItems(items, listId) {
  const list = document.getElementById(listId);
  list.innerHTML = "";
  items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerText = `${item.name} - R${item.amount.toFixed(2)} (${item.recurring ? "Recurring" : "Once-off"})`;
    list.appendChild(listItem);
  });
}

// Calculate and display disposable income
function calculateDisposableIncome(incomes, expenses) {
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalSavings = parseFloat(document.getElementById("savings-total").innerText.slice(1));
  const disposableIncome = totalIncome - totalExpenses - totalSavings;

  document.getElementById("disposable-income").innerText = 'R' + disposableIncome.toFixed(2);
  return disposableIncome;
}

// Prompt user for savings
function promptForSavings() {
  const disposableIncome = calculateDisposableIncome(incomes, expenses);

  const savings = parseFloat(prompt("How much should we add to savings from this new income ?"));
  if (!isNaN(savings)) {
    const remainingDisposableIncome = disposableIncome - savings;

    // Store data in session storage
    sessionStorage.setItem("remainingDisposableIncome", remainingDisposableIncome.toFixed(2));

    // call function to update the savings total and disposable income
    updateSavingsAndDisposableIncome(savings, remainingDisposableIncome);
  }
}

// function to update the savings total and disposable income
function updateSavingsAndDisposableIncome(savings, remainingDisposableIncome) {
  const savingTotal = document.getElementById("savings-total");
  const currentSavings = parseFloat(savingTotal.innerText.slice(1));

  const updatedSavings = currentSavings + savings;

  // Store data in session storage
  sessionStorage.setItem("savings", updatedSavings.toFixed(2));

  savingTotal.innerText = 'R' + updatedSavings.toFixed(2);

  const disposableIncomeEl = document.getElementById("disposable-income");
  disposableIncomeEl.innerText = 'R' + remainingDisposableIncome.toFixed(2);
}
// callback function to set yes no instead of ok and cancel for boolean selection(access modal)
function customConfirm(message, callback) {
    const confirmModal = document.getElementById("confirm-modal");
    const confirmMessage = document.getElementById("confirm-modal-message");
    const confirmYes = document.getElementById("confirm-modal-yes");
    const confirmNo = document.getElementById("confirm-modal-no");
  
    confirmMessage.textContent = message;
    confirmModal.style.display = "block";
  
    confirmYes.onclick = function () {
      callback(true);
      confirmModal.style.display = "none";
    };
  
    confirmNo.onclick = function () {
      callback(false);
      confirmModal.style.display = "none";
    };
  }  

// Add income using a prompt box
function addIncome() {
    const name = prompt("Enter the income name:");
    if (!name) return;
  
    let amount;
    do {
      amount = prompt("Enter the amount for this new income:");
      if (isNaN(parseFloat(amount))) {
        alert("Please enter a valid number for the amount.");
      }
    } while (isNaN(parseFloat(amount)));
  
    customConfirm("Is the income from this new job recurring?", function (isRecurring) {
      const newIncome = { name, amount: parseFloat(amount), recurring: isRecurring };
      incomes.push(newIncome);
  
      sessionStorage.setItem("incomes", JSON.stringify(incomes));
  
      displayItems(incomes, "income-list");
      const updatedDisposableIncome = calculateDisposableIncome(incomes, expenses);
      alert("New disposable income total: R" + updatedDisposableIncome.toFixed(2));
    });

    promptForSavings();
    
  }
        
// Add expense using a prompt box
function addExpense() {
    const name = prompt("Enter the expense name:");
    if (!name) return;

    const amount = parseFloat(prompt("Enter the expense amount:"));
    if (isNaN(amount)) return;

    customConfirm("Is the expense recurring?", function(isRecurring) {
        const newExpense = { name, amount, recurring: isRecurring };
        expenses.push(newExpense);

        sessionStorage.setItem("expenses", JSON.stringify(expenses));

        displayItems(expenses, "expense-list");
        calculateDisposableIncome(incomes, expenses);
        
    });
}

  // Call the initial functions to display the income and expense items and calculate the disposable income
  displayItems(incomes, "income-list");
  displayItems(expenses, "expense-list");
  calculateDisposableIncome(incomes, expenses);
      