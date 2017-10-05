let weatherApp = {};
let api = '13575c20459895df0ea1025d354ec66a';

// http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}

weatherApp.init = () => {
	weatherApp.getWeather();
};


weatherApp.getWeather = () => {
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/weather?APPID=${api}&q=Toronto`,
		method: 'GET',
		dataType: 'json',
		data: {
			name: '',
		}
	}).then(function(res) {
		console.log(res);
		weatherApp.getCity(res);
	});
};


weatherApp.getCity = function(res) {
	let temp = JSON.stringify(res.main.temp);
	let humidity = JSON.stringify(res.main.humidity);
	let cloudCoverage = JSON.stringify(res.weather[0].main);
	let numberClouds = JSON.stringify(res.clouds.all);
	let windSpeed = JSON.stringify(res.wind.speed);
	let windGusts = JSON.stringify(res.wind.gust);
	let sunrise = JSON.stringify(res.sys.sunrise);
	let sunset = JSON.stringify(res.sys.sunset);
	document.getElementById('weatherInfo').innerHTML += `
		<div>
			<p>Current Temperature: ${temp}</p>
			<p>Cloud Coverage: ${cloudCoverage}</p>
			<p>humidity: ${humidity}</p>
			<p>Number of Clouds: ${numberClouds}</p>
			<p>Wind Speed: ${windSpeed}</p>
			<p>Wind Gusts: ${windGusts}</p>
			<p>Sunrise: ${sunrise}</p>
			<p>Sunset: ${sunset}</p>
		</div>
	`;
};




$(function(){
	weatherApp.init();
});













