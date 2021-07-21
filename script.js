var APIKey = '17fd9562a3e4c868a8c0fe91c54bd5ed';
var city = "";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var citySearch = $("#citySearch");
var currentTemp= $("#temp");
var currentSpeed = $("#windSpeed");
var currentHumid = $("#humidity");
var currentUV = $("#uvIndex");
