//Declare global variables
let word = prompt("Please enter a word:");
let replacedChar = ""
let everySixthLetter = ""
// to reverse the word variable
let reversedWord = word.split("").reverse().join("");
let asciiArray = []

// a for loop that itterates over the word variable
for (let i = 0; i < word.length; i++) 
{   
    // if the index is even, add the character to the replacedChar variable
    if (i % 2===0) 
    {
        replacedChar += word[i]
    }
    // if the index is odd, add a ! to the replacedChar variable
    else
    {
        replacedChar += "!";
    }
    // if the index is divisible by 6, add the character to the everySixthLetter variable in upper case
    if ((i + 1) % 6 === 0) 
    {
        everySixthLetter += word[i].toUpperCase();
    } 
    // if the index is not divisible by 6, add the character to the everySixthLetter variable as is
    else 
    {
        everySixthLetter += word[i];
    }
    // add the ASCII code of the character to the asciiArray variable
    asciiArray.push(word.charCodeAt(i));
}

//The output in alert box.
alert
(
`Original word: ${word}\n
The word where every second character is a '!': ${replacedChar}\n
The word but reversed: ${reversedWord}\n
The word but every sixth letter is upper case: ${everySixthLetter}\n
The word in ASCII code: ${asciiArray}`
)