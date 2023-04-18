// Assign a array to hold the guest list
let guestList = []

// Ask the user to input guest names inside a loop
while (guestList.length < 10) 
{
  //prmpt user to enter a name
  let name = prompt("Enter a name to add to the guest list (maximum 10 people):")

  // if user clicked cancel, stop asking for names
  if (name === null) 
  {    
    break
  }
  if (name === "") 
  {
    // User entered an empty string, ask again
    alert("Please enter a name.")
    continue
  }

  // Add the name to the guest list using the push method
  guestList.push(name)

  // Maximum number of guests reached, stop asking for names and show the list
  if (guestList.length === 10) 
  {    
    alert("You have added the max of 10 people to your guest list. The list is: \n" + " " + guestList.join(",\n ") + ".")
  }
}

