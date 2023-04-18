// First add a variable
let i = 20
// The below is for readability for ease of use
console.log("\ncount backwards from 20 to 0\n")
// Then add a while loop to count from 20 to 0
while (i >= 0) 
{
  console.log(i)
  i--;
}
// The below is for readability for ease of use
console.log("\n--------------------")
console.log("Now count from 0 to 20 in steps of 2\n")
// Then add a for loop to count from 0 to 20 in steps of 2 using the modulos operator
for (let j = 0; j <= 20; j++) 
{
    if ( j % 2 === 0) 
    {
    console.log(j)
    }
}
// The below is for readability for ease of use
console.log("\n--------------------")
console.log("Now print a star for every row and increment the star by 1 in every row\n")
// Then add a for loop to print a star for every row and increment the star by 1 in every row
for (let row = 1; row <= 5; row++) 
{   
    console.log("*".repeat(row))
}

console.log("\n--------------------")
console.log("Now for extra credit I am printing the same pattern backwards\n")


for (let inverse = 5; inverse >= 1; inverse--) 
{   
    console.log("*".repeat(inverse))
}

/* 
I struggled with the star so I had to search a bit and found the below solution which I then modified to fit my needs. I understand what it does but I 
had to use a .repeat method to get it to work. I would like some guidance on how to get it to work without the .repeat method as I feel like I am missing something.
I will await your respons and not submit more tasks until I have a better understanding of this section.
reference: https://stackoverflow.com/questions/28365737/how-to-print-star-pattern-in-javascript-in-a-very-simple-manner and hyperion docs
*/