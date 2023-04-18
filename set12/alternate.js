alternativeString = (myString) => {
    // Place your code here
    // basically its just a for loop to convert every other letter to uppercase
    let output = "";
    // start the for loop at the begining of the string
    for (let i = 0; i < myString.length; i++) 
    {
        // get the character at the current index the program is at
        let char = myString.charAt(i);
        // if the index is even then make the character uppercase
        if (i % 2 == 0) 
        {
        output += char.toUpperCase();
        } 
        else 
        {
        output += char.toLowerCase();
        }
    }
    // return the output
    return output;

}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
