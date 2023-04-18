//function to handle user input
function getUserInput(message) 
{   //variable to hold user input
    let value
    //loop to handle invalid input
    while (true) 
    {
      const input = prompt(message)
      value = parseFloat(input)
  
      if (!isNaN(value)) 
      {
        break
      }
      //error message
      throw new Error(`Invalid input: ${input}`)
    }
    //return value
    return value
  }

  // boolean variable to help program loop
  let exitProgram = false
  
  // main programm dowhile loop
  do 
  {
    // try catch block to handle errors
    try 
    {
      const choice = prompt("Choose to calculate distance, time, or speed (or type 'exit' to quit):")
  
      if (choice.toLowerCase() === 'exit') 
      {
        exitProgram = true
        continue
      }
      // switch statement to handle user choice
      switch (choice.toLowerCase()) 
      { 
        //distance case
        case "distance":
          //call getUserInput function
          const timeForDistance = getUserInput("Enter time (hours):")
          const speedForDistance = getUserInput("Enter speed (km/h):")
          const distance = timeForDistance * speedForDistance
          alert(`Distance: ${distance} km`)
          break
        //time case
        case "time":
          //call getUserInput function
          const distanceForTime = getUserInput("Enter distance (km):")
          const speedForTime = getUserInput("Enter speed (km/h):")
          const time = distanceForTime / speedForTime
          const roundedTime = Math.round(time * 100) / 100
          alert(`Time: ${roundedTime} hours`)
          break
        //speed case
        case "speed":
          //call getUserInput function
          const distanceForSpeed = getUserInput("Enter distance (km):")
          const timeForSpeed = getUserInput("Enter time (hours):")
          const speedForSpeed = distanceForSpeed / timeForSpeed
          alert(`Speed: ${speedForSpeed} km/h`)
          break
        //default case
        default:
          //throw error
          throw new Error(`Invalid choice: ${choice}`)
      }
    } 
    //catch block
    catch (error) 
    {
      if (error.message.startsWith("Invalid input")) 
      {
        alert(`Error: ${error.message}. Please enter a valid number.`)
      } else if (error.message.startsWith("Invalid choice")) 
      {
        alert(`Error: ${error.message}. Please choose distance, time, or speed.`)
      } 
      else 
      {
        alert(`Error: ${error.message}`)
      }
    }
    // end of try catch block
  } while (!exitProgram)


  // appologies on the oversite of not adding the HTML file. I have added it now.