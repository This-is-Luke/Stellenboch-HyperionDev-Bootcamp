// Define a function that encodes a message using the ROT15 cipher
function secretMessageEncoderFunction(message) 
{
  // set variable to hold the encoded message
  let secretMessage = ''

  // for loop to iterate through each character in the message
  for (let i = 0; i < message.length; i++) 
  {
      // grab the letterToEncode
      let letterToEncode = message[i]

      // if it matches the regex, encode it
      if (letterToEncode.match(/[a-z]/i)) 
        {
        // Determine the 15th letter after the current letter by first setting it to ASCII and then converting it back to a letter
        let letterToEncodeCode = (letterToEncode.toLowerCase().charCodeAt(0) - 97 + 15) % 26 + 97

        // Convert the code back to a letterToEncode, and set to uppercase
        let encodedletterToEncode = String.fromCharCode(letterToEncodeCode).toUpperCase()

        // Add the encoded letter to the encoded message
        secretMessage += encodedletterToEncode
        } 
      // If its not a letter, do not encode it
      else 
      {
      // just add it back to the encoded message
      secretMessage += letterToEncode
      }
  }
  // Return the encoded message
  return secretMessage
}

// function to decode 
function secretMessageDecoderFunction(message) 
{
  // set variable to hold the decoded message
  let decodedMessage = ''

  // for loop to iterate through each character in the message
  for (let i = 0; i < message.length; i++) 
  {
      // grab the letterToDecode
      let letterToDecode = message[i]

      // if it matches the regex, decode it
      if (letterToDecode.match(/[a-z]/i)) 
      {
      // Determine the 15th letter before the current letter by first setting it to ASCII and then converting it back to a letter
      let letterToDecodeCode = (letterToDecode.toLowerCase().charCodeAt(0) - 97 - 15 + 26) % 26 + 97

      // Convert the code back to a letterToDecode, and set to upper case
      let decodedLetter = String.fromCharCode(letterToDecodeCode).toUpperCase()
      
      // Add the decoded letter to the decoded message
      decodedMessage += decodedLetter
      } 
      // If its not a letter, do not encode it
      else 
      {
      // just add it back to the decoded message
      decodedMessage += letterToDecode
      }
  }
  // Return the decoded message
  return decodedMessage
}

// A function to handle the form submission for encoding
function onSubmit() 
{
  // Get the user's input message from the form
  let userMessage = document.getElementById('messageInput').value

  // Encode the user's message using the secretMessageEncoderFunction function
  let secretMessage = secretMessageEncoderFunction(userMessage)

  // Display the encoded message on the page
  document.getElementById('secretMessage').innerHTML = secretMessage

  // Prevent the form from submitting
  return false
}

// A function to handle the form submission for decoding
function onDecodeSubmit() 
{
  // Get the user's input message from the form
  let userMessage = document.getElementById('decodeMessageInput').value

  // Decode the user's message using the secretMessageDecoderFunction function
  let decodedMessage = secretMessageDecoderFunction(userMessage)

  // Display the decoded message on the page
  document.getElementById('decodedMessage').innerHTML = decodedMessage

  // Prevent the form from submitting
  return false
}