//Declare variables
//first const is simply my question
const question = "Who wrote Hitchikers Guide to the Galaxy?"
//second const is my choices in array form
const choices = [" a. Purple", " b. J.K Rolling ", " c. Adam Smasher ", " or d. Douglas Adams "]
//third const is the correct answer
const correctAnswer = "d"
//fourth let is the user input
let UserInput = ""

// start of my do while loop
do 
{
    //start by asking the questions and displaying the choices
    alert(question)
    alert(choices)
    //take input from the user  
    let UserInput = prompt("Enter a, b, c, or d:")
    //check to see if the user input is correct and display the appropriate message
    if (UserInput === correctAnswer) 
    {   
        //if its correct then break the loop after displaying "That's correct!"
        alert("That's correct!")
        break
    } 
    else
    {   // if its incorrect then ask the user if they would like to try again 
        let tryAgain = confirm("That's incorrect! Would you like to try again?")
        if (tryAgain === false) 
        {   
            //if they want to give up simply break the loop and display "Goodbye!"
            alert("Goodbye!")
            break
        }
    }
} 
//end of my do while loop
while (UserInput !== correctAnswer)

// from now on I will also more thuroughly comment my code to make it clear that I do understand the concepts and am not just copying and pasting code from the internet.

