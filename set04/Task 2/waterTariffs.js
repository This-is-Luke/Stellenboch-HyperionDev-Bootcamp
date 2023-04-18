let waterUsed = prompt("Enter the number of liters of water you have used:");
let bill = 0;

while (waterUsed.toString().match(/\D/)) //rejects any input that isnt a number
{
  alert("Please input a number.");
  waterUsed = prompt("Enter the number of liters of water you have used:");
}

if (waterUsed > 0) {
  if (waterUsed <= 6000) // 15.73 cents per 1000 liters
  {
    bill += waterUsed * 15.73 / 1000
  } 
  if (waterUsed > 6000 && waterUsed <= 10500) // 22.38 cents per 1000 liters
  {
    bill += 6000 * 15.73 / 1000;
    bill += (waterUsed - 6000) * 22.38 / 1000;
  } 
  if (waterUsed > 10500 && waterUsed <= 35000) // 31.77 cents per 1000 liters
  {
    bill += 6000 * 15.73 / 1000;
    bill += 4500 * 22.38 / 1000;
    bill += (waterUsed - 10500) * 31.77 / 1000;
  } 
  if (waterUsed > 35000) // 69.76 cents per 1000 liters
  {
    bill += 6000 * 15.73 / 1000;
    bill += 4500 * 22.38 / 1000;
    bill += 24500 * 31.77 / 1000;
    bill += (waterUsed - 35000) * 69.76 / 1000;
  }
}

alert("Your total water bill is R" + bill.toFixed(2));

/*
Resubmition,
I see that you would have liked the answer according to the table in the example in the provided PDF, not the updated table in the "here" link that
has different rates than the examples. I have updated the code to reflect the old rates.
*/