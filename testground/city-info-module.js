// backend key --------
// front end key +++++++

// -----------------------------------------------------------------
// set delay function to prevent rapid api access
// -----------------------------------------------------------------

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
  
// -----------------------------------------------------------------
// Get cityWikiInfo from the api endpoint called "cities"
// -----------------------------------------------------------------

async function getCityWiki (id){
const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=ZA&namePrefix=${id}`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '51556daa54msh2897bac3c8822cap178152jsn61d78544bfe3',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  const cityWikiId = result.data[0]["wikiDataId"]
  return cityWikiId

} catch (error) {
  console.error(error, "failed to fetch wiki data from city Name, please check the name.");
}
}

// -----------------------------------------------------------------
// Get info from the return of the last funtion and return lat, long, pop and 
// elevation from "city details" endpoint
// -----------------------------------------------------------------

async function getCityInfo (id){
	await delay(2000)
	const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51556daa54msh2897bac3c8822cap178152jsn61d78544bfe3',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	const elevation = result.data["elevationMeters"]
	const population = result.data["population"]
	const lat = result.data["latitude"]
	const long = result.data["longitude"]

	console.log(`Population: ${population} \nElevation: ${elevation} \nlat and long: ${lat}, ${long}`);
	return {
		lat: lat,
		long: long,
		population: population,
		elevation: elevation
	  }

} catch (error) {
	console.error(error, "failed to fetch further info from city API");
}
}

// -----------------------------------------------------------------
// grab weather data and pass in the lat and long from above
// -----------------------------------------------------------------

async function weatherApi (long, lat){
const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${long}&lat=${lat}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51556daa54msh2897bac3c8822cap178152jsn61d78544bfe3',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	const temp = result.data[0].temp;
	console.log("Temp: ", temp, "C");
	return temp
} catch (error) {
	console.error(error, "failed to fetch data from weather API");
}
}


// -----------------------------------------------------------------
// pass in the getCityWiki arguement into getCityInfo function and pass the city info(long, lat) into the weatherApi
// -----------------------------------------------------------------

  async function fetchCityInfoAndWeather(cityName) {
	const cityWikiInfo = await getCityWiki(cityName);
	const cityInfo = await getCityInfo(cityWikiInfo);
	await weatherApi(cityInfo.long, cityInfo.lat);
  }
  await delay(4000)
  fetchCityInfoAndWeather("pretoria");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// front end
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const to handle the form
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

cityForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const cityInput = document.getElementById('cityInput').value;
	displayCityInfo(cityInput);
  });
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // variables to hold div info from html
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  const cityNameElement = document.getElementById('cityName');
  const weather = document.getElementById('weather');
  const populationElement = document.getElementById('population');
  const elevationElement = document.getElementById('elevation');
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // function to pass the city name from the form to the wiki request to start backend the process
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  async function displayCityInfo(cityName) {
	  await delay(4000);
	  const cityWikiInfo = await getCityWiki(cityName);
	  const cityInfo = await getCityInfo(cityWikiInfo);
	  const cityTemp = await weatherApi(cityInfo.long, cityInfo.lat);
	  cityNameElement.textContent = `City: ${cityInfo.cityName}`;
	  populationElement.textContent = `Population: ${cityInfo.population}`;
	  elevationElement.textContent = `Elevation: ${cityInfo.elevation}`;
	  weather.textContent = `Temperature: ${cityTemp}°C`;
  }
  
  
  


