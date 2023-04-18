//Global variables
let dataArray = ["java", "html", "javascript", "css"]
let array1 = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9", "j10"];
let array2 = ["Hello,", "My", "name", "is", "Luke" ];
let word0 = "javascript";
let word1 = "f6";
let word2 = "Luke";
let word3 = "My";


//Function to search for a word in an array and return the index position of the word
function searchIndex(array, word, i = 0) 
{
    // Base case
    if (i >= array.length) 
    {
      return -1
    }
  
    // recursive case
    if (array[i] === word) 
    {
      return i + 1 //+1 to get the index position not the array position
    }
  
    // Make the recursive call with the next index position
    return searchIndex(array, word, i + 1)

}
    // Tests
    // first is to find the index position of the word "f6" in the array
  console.log(searchIndex(array1, word1))
    // second is to find the index position of the word "Luke" in the array
  console.log(searchIndex(array2, word2))
    // third is to find the index position of the word "My" in the same array
  console.log(searchIndex(array2, word3))
    // fourth is to find the index position of the word "javascript" in the array
  console.log(searchIndex(dataArray, word0))

  // to output the array + 1 in the recursive case is to get the accurate position of the word in the array. If you don't add +1, the output will be the array position, not the index position.