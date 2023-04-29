// Declare global variables
let word = prompt("Please enter a word:");
let replacedChar = "";
let everySixthLetter = "";
let reversedWord = word.split("").reverse().join("");
let asciiArray = [];

// Arrow function to process characters
const processCharacters = (word) => {
  for (let i = 0; i < word.length; i++) {
    // If the index is even, add the character to the replacedChar variable
    if (i % 2 === 0) {
      replacedChar += word[i];
    }
    // If the index is odd, add a ! to the replacedChar variable
    else {
      replacedChar += "!";
    }

    // If the index is divisible by 6, add the character to the everySixthLetter variable in upper case
    if ((i + 1) % 6 === 0) {
      everySixthLetter += word[i].toUpperCase();
    }
    // If the index is not divisible by 6, add the character to the everySixthLetter variable as is
    else {
      everySixthLetter += word[i];
    }

    // Add the ASCII code of the character to the asciiArray variable
    asciiArray.push(word.charCodeAt(i));
  }
};

// Call the arrow function
processCharacters(word);

// The output in alert box
alert(`Original word: ${word}\n The word where every second character is a '!': ${replacedChar}\n The word but reversed: ${reversedWord}\n The word but every sixth letter is upper case: ${everySixthLetter}\n The word in ASCII code: ${asciiArray}`);
