const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7d31d32c88msh8050b164e432d09p121535jsnc1807f2b1f36',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));