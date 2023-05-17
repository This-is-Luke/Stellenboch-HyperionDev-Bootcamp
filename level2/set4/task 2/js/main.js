/*The assignments are starting to become more complex thank you im starting to learn more and even have to use Ai to assist in the logic (!!I do understand the importance of understanding the code made by AI and dont simply copy paste!!)
In future re assesments of the material I would encourage the use of Ai more like phind.com as its going to be a paramount tool moving forward in coding in the future
I would suggest a section dedicated to how to prompt and site sources similarly to how the stack overflow section in the beginner material is structured*/

/* 
income object to hold
    name
    amount
    is/isnot recurring
expenses object to hold
    name of expense
    amount
    is/isnot recurring
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

// Use stored data if available, otherwise use the default data
const incomes = storedIncomes || [
  { name: "Salary", amount: 25000, recurring: true },
  { name: "Freelance", amount: 2000, recurring: false },
  { name: "Investments", amount: 200, recurring: true },
  { name: "Rental", amount: 100, recurring: true },
  { name: "Gift", amount: 100, recurring: false }
];

const expenses = storedExpenses || [
  { name: "Groceries", amount: 8000, recurring: true },
  { name: "Rent", amount: 7000, recurring: true },
  { name: "Utilities", amount: 3500, recurring: true },
  { name: "Entertainment", amount: 1000, recurring: false },
  { name: "Transportation", amount: 3000, recurring: true },
  { name: "Savings", amount: 2000, recurring: true }
];

const savings = storedSavings || 0;

// Update the displayed savings total
document.getElementById("savings-total").innerText = 'R' + savings.toFixed(2);

// Display income and expense items
function displayItems(items, listId) {
  const list = document.getElementById(listId);
  list.innerHTML = "";
  items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerText = `${item.name} - R${item.amount.toFixed(2)} (${item.recurring ? "Recurring" : "One-time"})`;
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

  const savings = parseFloat(prompt("How much of the remaining income would you like to put into savings?"));
  if (!isNaN(savings)) {
    const remainingDisposableIncome = disposableIncome - savings;

    // Alert remaining disposable income
    alert("Total remaining disposable income: " + remainingDisposableIncome.toFixed(2));

    // Store data in session storage
    sessionStorage.setItem("remainingDisposableIncome", remainingDisposableIncome.toFixed(2));

    // Update the savings total and disposable income
    updateSavingsAndDisposableIncome(savings, remainingDisposableIncome);
  }
}

// Update the savings total and disposable income
function updateSavingsAndDisposableIncome(savings, remainingDisposableIncome) {
  const savingsTotalEl = document.getElementById("savings-total");
  const currentSavings = parseFloat(savingsTotalEl.innerText.slice(1));

  const updatedSavings = currentSavings + savings;

  sessionStorage.setItem("savings", updatedSavings.toFixed(2));

  savingsTotalEl.innerText = 'R' + updatedSavings.toFixed(2);

  const disposableIncomeEl = document.getElementById("disposable-income");
  disposableIncomeEl.innerText = 'R' + remainingDisposableIncome.toFixed(2);
}

// Add income using a confirm box
function addIncome() {
    const name = prompt("Enter the income name:");
    if (!name) return;
  
    const amount = parseFloat(prompt("Enter the income amount:"));
    if (isNaN(amount)) return;
  
    const isRecurring = window.confirm("Is the income recurring?", "Yes,No");
  
    const newIncome = { name, amount, recurring: isRecurring };
    incomes.push(newIncome);
  
    sessionStorage.setItem("incomes", JSON.stringify(incomes));
  
    displayItems(incomes, "income-list");
    promptForSavings();
    alert("New disposable income total: R" + getTotalAmount(incomes).toFixed(2));
}
  
// Add expense using a confirm box
function addExpense() {
    const name = prompt("Enter the expense name:");
    if (!name) return;
  
    const amount = parseFloat(prompt("Enter the expense amount:"));
    if (isNaN(amount)) return;
  
    const isRecurring = window.confirm("Is the expense recurring?", "Yes,No");
  
    const newExpense = { name, amount, recurring: isRecurring };
    expenses.push(newExpense);
  
    sessionStorage.setItem("expenses", JSON.stringify(expenses));
  
    displayItems(expenses, "expense-list");
    calculateDisposableIncome(incomes, expenses);
    alert("New disposable income total: R" + getTotalAmount(incomes).toFixed(2));
}

    
  // Call the initial functions to display the income and expense items and calculate the disposable income
  displayItems(incomes, "income-list");
  displayItems(expenses, "expense-list");
  calculateDisposableIncome(incomes, expenses);
      