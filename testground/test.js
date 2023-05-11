async function weatherApi (long, lat){
const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86dc7cc9a5msh1fdd0ac95d66c8ap1742f3jsn2cc5256878a6',
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

weatherApi()