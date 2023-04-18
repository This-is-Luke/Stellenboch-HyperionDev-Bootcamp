//Declare global variables
let numbers = []
let i = 0

//While loop to get 10 numbers
while (i < 10) 
{   
    //Prompt user to enter a number
    let input = prompt(`Enter a number ${i + 1}/10`)
    //Convert input to a number
    let number = Number(input)
    
    //Check if input is null
    if (input === null) 
    {
        break
    }

    //Check if input is a number
    if (!isNaN(number)) 
    {
        //Add number to array
        numbers.push(number)
        //Increment i
        i++
    }

    //If input is not a number error out
    else 
    {
        alert('Please enter a number')
    }
}

//variables for calculations
let total = 0
let maxIndex = 0
let minIndex = 0
let median = 0

//Loop through array to calculate sum, max, min, average, and median
for (let i = 0; i < numbers.length; i++)
{
    //Calculate sum
    total += numbers[i]
    //Calculate max
    if (numbers[i] > numbers[maxIndex])
    {
        maxIndex = i 
    }
    //Calculate min
    if (numbers[i] < numbers[minIndex])
    {
        minIndex = i 
    }
}

//Calculate median
if (numbers.length % 2 === 0) 
{
    let mid = numbers.length / 2;
    median = (numbers[mid - 1] + numbers[mid]) / 2;
} 
// //If the length of the array is odd
// else 
// {
//     median = numbers[Math.floor(numbers.length / 2)];
// }

//Calculate average
let average = total / numbers.length
    average = average.toFixed(2)

//Display results
alert
(
`The sum of the numbers is ${total}\n
The maximum value is ${numbers[maxIndex]} and its index is ${maxIndex+=1}.\n
The minimum value is ${numbers[minIndex]} and its index is ${minIndex+=1}.\n
The average of all numbers is: ${average}\n
The median of all numbers is: ${median}\n`
)