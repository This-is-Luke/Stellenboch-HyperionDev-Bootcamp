// Initialize an empty array to store the numbers
let numbers = [];

// Initialize a counter variable
let i = 0;

// Loop until 10 numbers are entered or the user cancels the prompt
while (i < 10) {
  // Prompt the user to enter a number
  let input = prompt(`Enter a number ${i + 1}/10`);

  // Convert the input string to a number
  let number = Number(input);

  // If the user cancels the prompt, break out of the loop
  if (input === null) {
    break;
  }

  // Check if the input is a valid number
  if (!isNaN(number)) {
    // Add the number to the array and increment the counter
    numbers.push(number);
    i++;
  } else {
    // If the input is not a valid number, display an error message
    alert("Please enter a number");
  }
}

// Define a function to calculate the sum of an array of numbers
const sum = numbers => numbers.reduce((total, num) => total + num, 0);

// Define a function to find the maximum value in an array of numbers
const max = numbers => Math.max(...numbers);

// Define a function to find the minimum value in an array of numbers
const min = numbers => Math.min(...numbers);

// Define a function to calculate the average of an array of numbers
const average = numbers => (sum(numbers) / numbers.length).toFixed(2);

// Define a function to calculate the median of an array of numbers
const median = numbers => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};

// Calculate the total sum, maximum, minimum, average, and median of the entered numbers
const total = sum(numbers);
const maxNumber = max(numbers);
const minNumber = min(numbers);
const avg = average(numbers);
const med = median(numbers);

// Find the indices of the maximum and minimum numbers
const maxIndex = numbers.indexOf(maxNumber) + 1;
const minIndex = numbers.indexOf(minNumber) + 1;

// Display the results in an alert
alert(
  `The sum of the numbers is ${total}\n
  The maximum value is ${maxNumber} and its index is ${maxIndex}.\n
  The minimum value is ${minNumber} and its index is ${minIndex}.\n
  The average of all numbers is: ${avg}\n
  The median of all numbers is: ${med}`
);
