const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7d31d32c88msh8050b164e432d09p121535jsnc1807f2b1f36',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then((response) => response.json())
	.then((response) => {
        console.log(response)
        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  });
  
  getWeather("Hyderabad");
  