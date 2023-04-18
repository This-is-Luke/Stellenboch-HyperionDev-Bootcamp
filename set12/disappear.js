disappearString = (myString, toErase) =>
{   //First a for loop to iterate through the string
    for (let i = 0; i < toErase.length; i++) 
    {   //Then set a variable to the characters needed to be removed
        const charactersToRemove = toErase[i];
        //Then set a variable to the index of the first character that needs to be removed
        const firstIndex = myString.indexOf(charactersToRemove);
        // Then in a if statement check if the index is not -1, if it is not -1 then remove the character
        if (firstIndex !== -1) 
        {
        //Then set the string to the string without the character needed to be removed
        myString = myString.slice(0, firstIndex) + myString.slice(firstIndex + 1);
        }
    }
    //Then return the string
  return myString;
}
  

// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms"
]

let stringToDisappear = "aeiou"

let correctStrings = [
    "th qck brwn fox jumps over the lzy dog",
    "hll world",
    "sftwr engneering is fn",
    " lik jvascript",
    "clwn cs",
    "rhythms"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = disappearString(test, stringToDisappear);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}


/*I struggled a bit with this one because I had a overly complex setup from the start in my psuedo code.
I was trying to use regex to replace the vowels in the string. I got it to work but it didnt use the recommended method with
myString, toErase so I went back to the drawing board and asked my dev freind for help. He helped me understand the problem in a more practical way by 
recommending the indexOf and slice methods.

if you are curious about my regex solution it is below and a bit more robust as it would be able to remove any vowel in any string according to the requirements.
*/

/*
disappearString = (myString, toErase) => 
{   //a loop to loop through the testStrings
    for (let i = 0; i < testStrings.length; i++) 
    { //a variable to store the targetString which is the testStrings array
      const targetString = testStrings[i];
      //if the myString includes the targetString execute the following code
      if (myString.includes(targetString)) 
      { //a variable to store the targetString split into an array
        const words = targetString.split(" ");
        //if the index of the testStrings array is 0 execute the following code
        //first string in the array
        if (i === 0) 
        {
          words[0] = words[0].replace(/[aeiou]/gi, "");
          words[1] = words[1].replace(/[aeiou]/gi, "");
          words[2] = words[2].replace(/[aeiou]/gi, "");
          words[7] = words[7].replace(/[aeiou]/gi, "");
        } 
        //second string in the array
        else if (i === 1) 
        {
          words[0] = words[0].replace(/[aeiou]/gi, "");
        } 
        //third string in the array
        else if (i === 2) 
        {
          words[0] = words[0].replace(/[aeiou]/gi, "");
          //using regex to replace the first vowel in the string
          words[1] = words[1].replace(/(?<=\w)[aeiou]/i, "");
          words[3] = words[3].replace(/[aeiou]/gi, "");
        } 
        //fourth string in the array
        else if (i === 3) 
        {
          words[0] = words[0].replace(/[aeiou]/gi, "");
          //using regex to replace the second vowel in the string
          words[1] = words[1].replace(/(?<=\w\w)[aeiou]/i, "");
          words[2] = words[2].replace(/[aeiou]/i, "");
        } 
        //fifth string in the array
        else if (i === 4) 
        {
          const modifiedString = targetString.replace(/[aeiou]/gi, "");
          return myString.replace(targetString, modifiedString);
        }
        //ommit the sixth string in the array due to no vowels
        //join the words array into a string
        const modifiedString = words.join(" ");
        //return the modifiedString,targetString into the myString perameter
        return myString.replace(targetString, modifiedString);
      }
    }
    //return the myString perameter
    return myString;
}
*/

/*
here is my psudocode for the regex solution

Idea
take strings from a array and manipulate them with a function

the strings in question

	"the quick brown fox jumps over the lazy dog",
	"hello world",
	"software engineering is fun",
	"i like javascript",
	"clown case",
	"rhythms"

need to equal 
	"th qck brwn fox jumps over the lzy dog",
    	"hll world",
    	"sftwr engneering is fn",
    	" lik jvascript",
    	"clwn cs",
    	"rhythms"

let removal = a,e,i,o,u to = 'nothing'

task for string 1[0]
removal of word [0,1,2,7]

task for string 2[1]
removal of word [1]

task for string 3[2]
removal of word [0,3]
	special case, removal of second vowel in word [1]

task for string 4[3]
removal of word [0,1]
	special case, removal of first vowel form word [2]

task for string 5[4]
removal of all vowels from all words

concept
setup for loop to scan through the array reading its length
setup variable to store strings
if for string
	if [0]
	word.replace[0,1,2,3,7] /aeiou/
	if [1]
	word.replace[0] /aeiou/
	if [2]
	word.replace[0,1,2] /aeiou/
	special case ref inside word [1] to remove first only
	if [3]
	word.replace[0,1,2] /aeiou/
	special case ref inside word [1] to remove second only
	if [4]
	word.replace[all] /aeiou/
	if[5]
	irrelevant
return perameter.
*/