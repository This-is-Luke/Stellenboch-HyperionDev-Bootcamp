// First, declare the functions
// Function to add two numbers
function add(a, b) 
{
    return a + b
}
  
// Function to subtract second number from first number
function subtract(a, b) 
{
    return a - b
}
  
// Function to multiply two numbers
function multiply(a, b) 
{
    return a * b
}
  
// Function to divide first number by second number
function divide(a, b) 
{
if (b === 0) 
{
    return "Cannot divide by 0"
}
    return a / b
}
  
// Get input from user
const num1 = Number(prompt("Enter your first number"))
const num2 = Number(prompt("Enter your second number"))
const operation = prompt("What would you like to do? (+, -, *, /)")
  
let result
// Perform operation based on user input
switch (operation) 
{   
    //if the operation is +, call the add function
    case "+":
      result = add(num1, num2)
      alert(`${num1} plus ${num2} = ${result}`)
      break
    //if the operation is -, call the subtract function
    case "-":
      result = subtract(num1, num2)
      alert(`${num1} subtract ${num2} = ${result}`)
      break
    //if the operation is *, call the multiply function
    case "*":
      result = multiply(num1, num2)
      alert(`${num1} times ${num2} = ${result}`)
      break
    //if the operation is /, call the divide function
    case "/":
      result = divide(num1, num2)
      alert(`${num1} devided by ${num2} = ${result}`)
      break
    //if the operation is not +, -, *, or /, ask the user to use a valid operation
    default:
      alert("Please use a valid operation (+, -, *, /)")
}