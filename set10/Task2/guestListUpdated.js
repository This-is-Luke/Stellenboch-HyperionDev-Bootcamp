// Assign a variable to hold the guest list
let guestList = []

// Ask the user to input guest names inside a loop
while (guestList.length < 10) 
{
  // Prompt user to enter a name
  let name = prompt(`Enter a name to add to the guest list (maximum 10 people, ${guestList.length + 1}/10):`)
  
  // If a user clicks "cancel", stop asking for names
  if (name === null) 
  {    
      break;
  }

  // if a user entered an empty string, ask again
  if (name === "") 
  {
      alert("Please enter a name.")
      continue;
  }
  
  // Add the name to the guest list and display the current list
  guestList.push(name);
  
}
// If the guest list is full, ask the user if they want to replace someone using a while loop
while (guestList.length === 10) 
{
  // Ask user if they want to replace someone on the list
  let replace = prompt("You have already added 10 people to your guest list. Would you like to kick someone off the list with a new person? y/n:")
  
  // Output the current guest list if the user doesn't want to replace anyone
  if (replace === "n") 
  {    
    let guestListDisplay = guestList.map((name, index) => `${index+1}. ${name}`).join(",\n ")
    alert(`Ok, The current guest list is:\n${guestListDisplay}.`);
  }
  // If the user wants to replace someone, ask them who they want to replace
  if (replace === "y") 
  {    
      let guestListDisplay = guestList.map((name, index) => ` ${index+1}. ${name}`).join(",\n ")
      let index = prompt(`Alright ,the current guest list is below, Who would you like to replace? Enter the number of the guest you want to replace (1-10):\n${guestListDisplay}.\n`);
      
      // Convert index to 0-based array index to properly reference the guest
      index = parseInt(index) - 1;
      
      // Ask user for the name of the new guest
      let newGuestName = prompt("Enter the name of the new guest:");
      
      // Replace the old guest with the new one
      guestList[index] = newGuestName;
      
      // Output the updated guest list
      guestListDisplay = guestList.map((name, index) => `${index+1}. ${name}`).join(",\n ");
      alert(`The updated guest list is:\n${guestListDisplay}.`);
  }

    // If the user enters anything other than y or n, ask again
    if (replace !== "y" && replace !== "n") 
    {
        alert("Please enter only y or n.")
    }

    // If the user clicks cancel, stop asking
    if(replace === null) 
    {
        break
    }
}

// I would like to know of a way to have it end a bit more gracefully if replace equals null but I'm not sure how to do that and ive been at this for a while now, just a bit stuck. Any help would be appreciated. Thanks!