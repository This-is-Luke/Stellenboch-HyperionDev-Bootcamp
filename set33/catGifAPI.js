// to run this use node in IDE, as soon as a browser is involved CORS becomes a issue (node catGifAPI.js in console)
// using a straight normal function with async to fetch a gif
async function fetchCatGif() {
    // using a try catch to handle errors
  try {
    // variable to hold the url and response once the data has been fetched
    const apiUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif';
    // there is the await preramiter in a fetch call accessing the url variable.
    const response = await fetch(apiUrl);
    // issue if the the response is not ok from server
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // simply log the url from the response variable only
    console.log(response.url);
  } catch (error) {
    console.error('Failed to fetch cat gif:', error);
  }
}
// call the function
fetchCatGif();

// expected output
// node catGifAPI.js        
//(node:5480) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
//(Use `node --trace-warnings ...` to show where the warning was created)
//https://cdn2.thecatapi.com/images/584.gif

// I tried to use a index.html to trigger the call with the below but kept getting errors,

// document.getElementById('button').addEventListener('click', fetchCatGif);

// main error is with CORS
// I tried using a proxy server (https://cors-anywhere.herokuapp.com)
// I tried using https instead of http
// I tried forcing with a no-cors mode but opaque repsonses were a issue (const response = await fetch(apiUrl, { mode: 'no-cors' });)
// I tried running with and without live server extention(https-server)
// I even tried to use Ai to help but the errors would just circle

// If the goal was simply to use node to run this ie (node catGigAPI.js) to output to the console of the IDE then the wording 
// of this assignment should be updated to not use the word website



