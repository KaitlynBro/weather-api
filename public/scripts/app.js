'use strict';

var weatherApp = {};
var api = '13575c20459895df0ea1025d354ec66a';

// http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}

weatherApp.init = function () {
	weatherApp.getWeather();
};

weatherApp.getWeather = function () {
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?APPID=' + api + '&q=Toronto',
		method: 'GET',
		dataType: 'json',
		data: {
			name: ''
		}
	}).then(function (res) {
		console.log(res);
		weatherApp.getCity(res);
	});
};

weatherApp.getCity = function (res) {
	var temp = JSON.stringify(res.main.temp);
	var humidity = JSON.stringify(res.main.humidity);
	var cloudCoverage = JSON.stringify(res.weather[0].main);
	var numberClouds = JSON.stringify(res.clouds.all);
	var windSpeed = JSON.stringify(res.wind.speed);
	var windGusts = JSON.stringify(res.wind.gust);
	var sunrise = JSON.stringify(res.sys.sunrise);
	var sunset = JSON.stringify(res.sys.sunset);
	document.getElementById('weatherInfo').innerHTML += '\n\t\t<div>\n\t\t\t<p>Current Temperature: ' + temp + '</p>\n\t\t\t<p>Cloud Coverage: ' + cloudCoverage + '</p>\n\t\t\t<p>humidity: ' + humidity + '</p>\n\t\t\t<p>Number of Clouds: ' + numberClouds + '</p>\n\t\t\t<p>Wind Speed: ' + windSpeed + '</p>\n\t\t\t<p>Wind Gusts: ' + windGusts + '</p>\n\t\t\t<p>Sunrise: ' + sunrise + '</p>\n\t\t\t<p>Sunset: ' + sunset + '</p>\n\t\t</div>\n\t';
};

$(function () {
	weatherApp.init();
});