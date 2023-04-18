//declare my variables
// the sum variable will hold the sum of the numbers entered
let sum = 0
// the count variable will hold the number of numbers entered
let count = 0
// the num variable will hold the user input
let num = ""
//open the while loop focused on the variable num, here it will also stop the loop if the user enters "-1"
while (num !== "-1") 
{
  //filll the variable num with the user input
  num = prompt("please enter a number or enter -1 to calculate the average of the numbers added:")
  //check to see if the user input is a number and not -1.
  if (num !== "-1") 
  {
    /*add the number to the sum variable (here I know you haven't mentioned how to convert to a number yet but I had to use it 
    to get the code to work as per guidance of a friend, please do let me know how this would have worked without it)*/
    sum += Number(num)
    //add 1 to the count variable to be divided by the sum variable to get the average
    count++
  }
}

if (count > 0) 
{ 
  //calculate the average and store it in the variable average
  const average = sum / count
  //display the average to the user
  alert(`The average of the ${count} numbers entered is ${average}.`)
}
else 
{
  //display an error message if no valid numbers were entered
  alert("No valid numbers were entered.")
}

/*
I see I misunderstood the wording of the assignment, this is the correct version of the code that will provide a
average of the numbers entered. Not the average of the sum of the numbers added. 
As per https://www.calculator.net/average-calculator.html?numberinputs=25%2C25%2C25%2C40%2C50%2C2&x=62&y=24
*/
