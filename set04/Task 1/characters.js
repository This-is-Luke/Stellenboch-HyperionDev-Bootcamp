//First add a variable to get used input
let input = prompt("Enter a uppercase letter, a lower case letter, or a number")

// Then add an if statement to check if the input is a uppercase letter and set alerts for the appriopriate input
if (input === input.toUpperCase() && input.match(/^[A-Z]$/)) 
{
    alert(`${input} is an uppercase letter`)

} else if (input === input.toLowerCase() && input.match(/^[a-z]$/)) 
{
    alert(`${input} is a lowercase letter`)

} else if (Number.isInteger(Number(input)))
{
    alert(`${input} is a number`)

} else 
{
    alert(`${input} is not a letter nor is it a number`)
}

