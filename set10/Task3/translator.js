// Define the map of translations available to the user
const translations = new Map
([
    ['hello', 'hola'],
    ['goodbye', 'adiós'],
    ['thank you', 'gracias'],
    ['please', 'por favor'],
    ['yes', 'sí'],
    ['no', 'no'],
    ['sorry', 'lo siento'],
    ['excuse me', 'disculpe'],
    ['how are you?', '¿cómo estás?'],
    ['i love you', 'te quiero']
])
  
// using a while loop, ask the user to enter words to translate
while (true) 
{   
    let word = ""
    // Prompt the user to enter an english word
    word = prompt('Enter an English word in lower case to translate to Spanish:')

    // If the user clicks cancel, stop asking for words
    if (word === null)
    {
        break
    }
        
    // Look up the word in the translation map and output to alert
    if (translations.has(word)) 
    {
        alert(`The Spanish translation of ${word} is: \n${translations.get(word)}.`)
    } 
    // If the word is not in the map, output an error message    
    else 
    {    
        alert(`Sorry, I don't know the translation of ${word}.\n I only know: ${Array.from(translations.keys()).join(', ')}.`)
    }    
}

// reference : I cant speak spanish so I used google translate to get the translations
