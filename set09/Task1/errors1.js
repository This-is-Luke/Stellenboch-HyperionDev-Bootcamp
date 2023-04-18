// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log ("Welcome to the error program");
// above i added the parenthesis to the console.log
    console.log ("\n");
    // again i added the parenthesis to the console.log but also made C lowercase
    let ageStr = "24 years old"; 
    // Above i removed the extra = sign to declare the variable not say that the variable is equal to.
    age = parseInt(ageStr)
    // Above i changed the Integer to parseInt
    console.log("I'm "+ age +" years old.");
    //above i added spaces in the appriopriate places for readibility
let three = 3;
//above I removed the quotes from the 3 to read as a integer
let answerYears = age + three;
console.log ("The total number of years: " + answerYears);
// above i added the parenthesis to the console.log and removed the quotes from answerYears and added a space for readibility in the string
let answerMonths = (age + three) * 12 + 6;
// above i fixed the logical error and changed the variable to answerMonths and factored in the extra 6 months
console.log ("In 3 years and 6 months, I'll be " + answerMonths + " months old");
// above i added the parenthesis to the console.log
//HINT, 330 months is the correct answer