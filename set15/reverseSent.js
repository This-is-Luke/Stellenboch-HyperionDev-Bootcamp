//Global variables
let input = "Hello, my name is Luke";

//function with 2 arguments
function reverseSent(sentence, index) 
{
  // Reversing the sentence using recursion
  function reverse(str) 
  { // Base case
    if (str.length <= 1) 
    {
      return str;
    } 
    // Recursive case
    else 
    {
      return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
  }
  // Reversed sentence
  let reversedSentence = reverse(sentence);
  
  // Output the reversed sentence from the index position to the console
  console.log(reversedSentence.substring(index));
}

// Calling the function
// first, the whole sentence is reversed
reverseSent(input, 0);
// then, the reversed sentence is output from the 6th index position
reverseSent(input, 5);
// then, the reversed sentence is output from the 11th index position
reverseSent(input, 10);