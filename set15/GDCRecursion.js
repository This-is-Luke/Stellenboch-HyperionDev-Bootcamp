//global variables
let num1 = 5;
let num2 = 10;
let num3 = 14;
let num4 = 28;
let num5 = 21;
let num6 = 14;

//function to calculate the GCD of two numbers
function gcdRecursion(x, y) 
{   
    // Base case
    if (y === 0) 
    {
      return x;
    } 
    // Recursive case
    else 
    {
      return gcdRecursion(y, x % y);
    }
}
 
// Tests  
console.log(gcdRecursion(num1, num2)); 
console.log(gcdRecursion(num3, num4)); 
console.log(gcdRecursion(num5, num6)); 


/* 
This task although optional was a bit difficult for me. 
I had to look at the solution to understand how to do it as I struggle a bit with maths.
https://stackoverflow.com/questions/66795996/calculate-the-gcd-of-two-numbers-recursively-with-javascript
*/