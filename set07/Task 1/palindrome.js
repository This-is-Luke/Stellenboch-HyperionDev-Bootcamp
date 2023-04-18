// no variable to set yet so im just starting the loop
while (true) 
{
  //declare a variable to hold the user input and set the isPalindrome variable to true
  let str = prompt("Enter a word in lower case: ")
  let isPalindrome = true;
  /*
  The loop uses a variable called "i" to keep track of which letter it is looking at. 
  The loop will continue as long as "i" is less than half of the length of the word
  */
  for (let i = 0; i < str.length / 2; i++) {
    //The loop will check to see if the letter at the "i"th position is the same as the letter at position "str.length - 1 - i" 
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  //check to see if isPalindrome is true and display the matched message
  if (isPalindrome === true) 
  {
    alert(`${str} Is a palindrome`)
    break
  } 
  else
  {
    alert(`${str} Is not a palindrome`)
    break
  }

}

/*
My previous submitions were to impress and go beyond the assignments slighly as I do have some coding experience.
Moving forward I will try to stay within the scope of the assignment and not go beyond it. 
*/