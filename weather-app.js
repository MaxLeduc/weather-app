// 7f3f04b2cee5f57b

var weatherWidget = {
};

weatherWidget.apiUrl = 'http://api.wunderground.com/api/7f3f04b2cee5f57b/conditions/q/Mexico/Mexico_City.json';

weatherWidget.init = function(){
	weatherWidget.getData();
};

weatherWidget.getData = function(){
	$.ajax({
		url:weatherWidget.apiUrl,
		method:'GET',
		dataType:'jsonp'
	})
	.then(function(weatherData){
		console.log(weatherData);
		var weatherObject = weatherData.current_observation;
		weatherWidget.displayWeather(weatherObject);
	});
};

	//the 'weather' in the function is defined in the '.then' and referring to the weatherObject,
	//because we called it in the '.then function'. the display weather function actually runs in the get Data function.

weatherWidget.displayWeather = function(weather){
	var image = weather.icon_url;
	$('.weather_image').attr('src', image);

	var conditions = weather.weather;
	$('.weather_string').text(conditions);

	var temperature = weather.temp_c;
	$('.temp_c').text(temperature);

	var city = weather.display_location.city;
	$('.city_name').text(city);

	var time = weather.local_time_rfc822;
	$('.date_time').text(time)
};

//when the page loads, we need to get some data\
// make an ajax call to the wunderground api
//when the data returns we want to display specific things (found on the html page)


$(document).ready(function(){
  weatherWidget.init();
});