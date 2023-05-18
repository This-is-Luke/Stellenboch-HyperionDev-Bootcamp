// variable to hold the api curl
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-25.8021&longitude=28.3278&hourly=temperature_2m,precipitation_probability,rain&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Africa%2FCairo";

// Fetch data from API
fetch(apiUrl)
//grab a respons from the json
.then(response => response.json())
//
.then(data => {
    // Extract the data, min/max, current and percipitation and plonk it into a variable to get called later
    //here from the data we are looking through the object and searching for "daily" then "temperature-2m-max/min" and to spice it up also the probability updated every hour for today, tommorrow and the following day percipitation probabilty
    const currentTemperature = data.hourly.temperature_2m[0];
    const next3DaysMaxTemperatures = data.daily.temperature_2m_max.slice(0, 7);
    const next3DaysMinTemperatures = data.daily.temperature_2m_min.slice(0, 7);
    const precipitationProbabilities = data.hourly.precipitation_probability.slice(0, 7);

    // Combine max and min temperatures for each day with a "/", this is just for logic, it looked wierd without a seperator
    const combinedTemperatures = next3DaysMaxTemperatures.map((maxTemp, index) => {
        return maxTemp + '/' + next3DaysMinTemperatures[index];
    });

    // Set the extracted data as the content of the HTML elements by grabing the ID of the html elements then using a join opperator to just seperate the individual calls
    document.getElementById("current-temp").textContent = currentTemperature;
    document.getElementById("next-3-days-temp").textContent = combinedTemperatures.join(', ');
    document.getElementById("precipitation-probabilities").textContent = precipitationProbabilities.join(', ');

})
//catch any errors and log some info about the error
.catch(error => {
    console.error("Error fetching data:", error);
});

  // Update date and time, this I used in previous assignments so just grabbed it from there and used it here, use to use it as a footer in some ofther assignments but here it just gets plonked into a div with a ID
  function updateDateTime() {
    let currentDate = new Date();
    let dateTimeString = currentDate.toLocaleString();
    document.getElementById('currentDateTime').innerHTML = dateTimeString;
  }
  // this is the line that updates it every second(every 1000 milliseconds)
  setInterval(updateDateTime, 1000);
  