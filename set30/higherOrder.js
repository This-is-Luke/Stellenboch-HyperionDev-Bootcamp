// A funtion that takes in an array and a callback function as arguments
function myFilterFunction(arr, callback) {
    const result = [];
  
    arr.forEach(word => {
      if (callback(word)) {
        result.push(word);
      }
    });
  
    return result;
  }
  
  // Callback function to check if a word has 6 letters
  function hasSixLetters(word) {
    return word.length === 6 ? true : false;
  }
  
  // Sample array of strings
  const words = ['banana', 'apple', 'orange', 'grape', 'kiwi', 'pineapple', 'strawberry', 'pear', 'plum', 'melon'];
  
  // Call myFilterFunction with the words array and hasSixLetters callback
  const sixLetterWords = myFilterFunction(words, hasSixLetters);
  
  console.log(sixLetterWords); // Output: ['banana', 'orange']
  