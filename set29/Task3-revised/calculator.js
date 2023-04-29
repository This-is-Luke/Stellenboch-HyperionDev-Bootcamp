// Arrow function to add two numbers
const add = (a, b) => a + b;

// Arrow function to subtract second number from first number
const subtract = (a, b) => a - b;

// Arrow function to multiply two numbers
const multiply = (a, b) => a * b;

// Arrow function to divide first number by second number
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by 0";
  }
  return a / b;
};

// Get input from user
const num1 = Number(prompt("Enter your first number"));
const num2 = Number(prompt("Enter your second number"));
const operation = prompt("What would you like to do? (+, -, *, /)");
let result;

// Perform operation based on user input
switch (operation) {
  case "+":
    result = add(num1, num2);
    alert(`${num1} plus ${num2} = ${result}`);
    break;
  case "-":
    result = subtract(num1, num2);
    alert(`${num1} subtract ${num2} = ${result}`);
    break;
  case "*":
    result = multiply(num1, num2);
    alert(`${num1} times ${num2} = ${result}`);
    break;
  case "/":
    result = divide(num1, num2);
    alert(`${num1} devided by ${num2} = ${result}`);
    break;
  default:
    alert("Please use a valid operation (+, -, *, /)");
}
