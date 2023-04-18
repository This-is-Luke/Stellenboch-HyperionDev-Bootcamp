// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion"
//Above i added quotations to the word lion to make it a string
let animalType = "cub";
let numberOfTeeth = 16;
//above I removed a extra tab for readibility
let numberOfLegs = 4;

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth`
// above i chaged a few things, the quotes to `` so its a template literal and added the $ to the variables to make them read as variables
// also I modified the placment of the variables to fix the logical error and they were named incorectly in the template litteral
// I also declared the variable fullSpec by adding let to the front of the variable

if (numberOfLegs >= 3) 
//above i added > to the = to factor in the 3 legs or more
{
console.log(fullSpec);
//Above i added parenthesis to the console.log and changed the variable from full_spec to fullSpec
}
