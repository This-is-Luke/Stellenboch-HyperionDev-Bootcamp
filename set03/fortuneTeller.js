// Multiple variables asking for user input
let mothersName = prompt("What is your mother's name?")
let streetName = prompt("What is the name of the street you grew up on?")
let favColor = prompt("What is your favourite colour as a child?")
let currentAge = prompt("What is your current age?")
let numberBetween = prompt("Pick a number between 1 and 10")
let resultOfMath = Math.round(currentAge/numberBetween)

console.log(
`In ${numberBetween} years you are going to meet your best friend named ${mothersName} ${streetName}
You will get married in ${resultOfMath} years and have ${currentAge%numberBetween} child/children.
In ${currentAge-numberBetween} years you are going to dye your hair ${favColor}.`
)

//Refrence: Hyperion Docs (as well as the hint in hyperion docs)