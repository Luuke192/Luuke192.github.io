$(function () {

});


//One
$("#showWeather1").click(function() {
        var weatherLocation1 = $("#locationInput1").val();
        getFromGoogle1(weatherLocation1);
        $("#locationInput1").val("");
});

var getFromGoogle1 = function () {
    var weatherLocation1 = $("#locationInput1").val();
    var googleKey = "&key=AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";
    var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + weatherLocation1 + googleKey;
    $.ajax(googleApi).done(function (data) {
        var nameCity = data.results[0].formatted_address;
        var lati = data.results[0].geometry.location.lat;
        console.log(lati);
        var lon = data.results[0].geometry.location.lng;

        $(".cityName1").append('<h4>' + nameCity + '</h4>');

        getFromDarkSky1(lati, lon, nameCity);
        console.log(nameCity);
    });
}

var getFromDarkSky1 = function (latitude, longitude) {
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

        $("#locationInput1").remove();
        $("#showWeather1").remove();

        var currentTemperature1 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions1 = data.currently.summary;
        var currentMinTemperature1 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip1 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature1 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";
        
        $(".currentTemperature1").append('<h1>' + currentTemperature1 + '</h1>');
        $(".currentConditions1").append('<h4>' + currentConditions1 + '</h4>');
        $(".currentMinTemperature1").append('<h5>' + currentMinTemperature1 + '</h5>');
        $(".chanceOfPrecip1").append('<h5>' + chanceOfPrecip1 + '</h5>');
        $(".currentMaxTemperature1").append('<h5>' + currentMaxTemperature1 + '</h5>');
    });
    
}



//Two
$("#showWeather2").click(function() {
        var weatherLocation = $("#locationInput2").val();
        getFromGoogle2(weatherLocation);
        $("#locationInput2").val("");
});

var getFromGoogle2 = function () {
    var weatherLocation = $("#locationInput2").val();
    var googleKey = "&key=AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";
    var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + weatherLocation + googleKey;
    $.ajax(googleApi).done(function (data) {
        var nameCity = data.results[0].formatted_address;
        var lati = data.results[0].geometry.location.lat;
        console.log(lati);
        var lon = data.results[0].geometry.location.lng;

        $(".cityName2").append('<h4>' + nameCity + '</h4>');

        getFromDarkSky2(lati, lon, nameCity);
        console.log(nameCity);
    });
}

var getFromDarkSky2 = function (latitude, longitude) {
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

        $("#locationInput2").remove();
        $("#showWeather2").remove();

        var currentTemperature2 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions2 = data.currently.summary;
        var currentMinTemperature2 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip2 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature2 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";
        
        $(".currentTemperature2").append('<h1>' + currentTemperature2 + '</h1>');
        $(".currentConditions2").append('<h4>' + currentConditions2 + '</h4>');
        $(".currentMinTemperature2").append('<h5>' + currentMinTemperature2 + '</h5>');
        $(".chanceOfPrecip2").append('<h5>' + chanceOfPrecip2 + '</h5>');
        $(".currentMaxTemperature2").append('<h5>' + currentMaxTemperature2 + '</h5>');
    });
}



//Three
$("#showWeather3").click(function() {
        var weatherLocation = $("#locationInput3").val();
        getFromGoogle3(weatherLocation);
        $("#locationInput3").val("");
});

var getFromGoogle3 = function () {
    var weatherLocation = $("#locationInput3").val();
    var googleKey = "&key=AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";
    var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + weatherLocation + googleKey;
    $.ajax(googleApi).done(function (data) {
        var nameCity = data.results[0].formatted_address;
        var lati = data.results[0].geometry.location.lat;
        console.log(lati);
        var lon = data.results[0].geometry.location.lng;

        $(".cityName3").append('<h4>' + nameCity + '</h4>');

        getFromDarkSky3(lati, lon, nameCity);
        console.log(nameCity);
    });
}

var getFromDarkSky3 = function (latitude, longitude) {
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

        $("#locationInput3").remove();
        $("#showWeather3").remove();

        var currentTemperature3 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions3 = data.currently.summary;
        var currentMinTemperature3 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip3 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature3 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";
        
        $(".currentTemperature3").append('<h1>' + currentTemperature3 + '</h1>');
        $(".currentConditions3").append('<h4>' + currentConditions3 + '</h4>');
        $(".currentMinTemperature3").append('<h5>' + currentMinTemperature3 + '</h5>');
        $(".chanceOfPrecip3").append('<h5>' + chanceOfPrecip3 + '</h5>');
        $(".currentMaxTemperature3").append('<h5>' + currentMaxTemperature3 + '</h5>');
    });
}



//Four
$("#showWeather4").click(function() {
        var weatherLocation = $("#locationInput").val();
        getFromGoogle4(weatherLocation);
        $("#locationInput4").val("");
});

var getFromGoogle4 = function () {
    var weatherLocation = $("#locationInput4").val();
    var googleKey = "&key=AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";
    var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + weatherLocation + googleKey;
    $.ajax(googleApi).done(function (data) {
        var nameCity = data.results[0].formatted_address;
        var lati = data.results[0].geometry.location.lat;
        console.log(lati);
        var lon = data.results[0].geometry.location.lng;

        $(".cityName4").append('<h4>' + nameCity + '</h4>');

        getFromDarkSky4(lati, lon, nameCity);
        console.log(nameCity);
    });
}

var getFromDarkSky4 = function (latitude, longitude) {
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

        $("#locationInput4").remove();
        $("#showWeather4").remove();

        var currentTemperature4 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions4 = data.currently.summary;
        var currentMinTemperature4 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip4 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature4 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";
        
        $(".currentTemperature4").append('<h1>' + currentTemperature4 + '</h1>');
        $(".currentConditions4").append('<h4>' + currentConditions4 + '</h4>');
        $(".currentMinTemperature4").append('<h5>' + currentMinTemperature4 + '</h5>');
        $(".chanceOfPrecip4").append('<h5>' + chanceOfPrecip4 + '</h5>');
        $(".currentMaxTemperature4").append('<h5>' + currentMaxTemperature4 + '</h5>');
    });
}



//Five
$("#showWeather5").click(function() {
        var weatherLocation = $("#locationInput5").val();
        getFromGoogle5(weatherLocation);
        $("#locationInput5").val("");
});

var getFromGoogle5 = function () {
    var weatherLocation = $("#locationInput5").val();
    var googleKey = "&key=AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";
    var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + weatherLocation + googleKey;
    $.ajax(googleApi).done(function (data) {
        var nameCity = data.results[0].formatted_address;
        var lati = data.results[0].geometry.location.lat;
        console.log(lati);
        var lon = data.results[0].geometry.location.lng;

        $(".cityName5").append('<h4>' + nameCity + '</h4>');

        getFromDarkSky5(lati, lon, nameCity);
        console.log(nameCity);
    });
}

var getFromDarkSky5 = function (latitude, longitude) {
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

        $("#locationInput5").remove();
        $("#showWeather5").remove();

        var currentTemperature5 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions5 = data.currently.summary;
        var currentMinTemperature5 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip5 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature5 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";
        
        $(".currentTemperature5").append('<h1>' + currentTemperature5 + '</h1>');
        $(".currentConditions5").append('<h4>' + currentConditions5 + '</h4>');
        $(".currentMinTemperature5").append('<h5>' + currentMinTemperature5 + '</h5>');
        $(".chanceOfPrecip5").append('<h5>' + chanceOfPrecip5 + '</h5>');
        $(".currentMaxTemperature5").append('<h5>' + currentMaxTemperature5 + '</h5>');
    });
}



//Six
$("#showWeather6").click(function() {
        var weatherLocation = $("#locationInput6").val();
        getFromGoogle6(weatherLocation);
        $("#locationInput6").val("");
});

var getFromGoogle6 = function () {
    var weatherLocation = $("#locationInput6").val();
    var googleKey = "&key=AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";
    var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + weatherLocation + googleKey;
    $.ajax(googleApi).done(function (data) {
        var nameCity = data.results[0].formatted_address;
        var lati = data.results[0].geometry.location.lat;
        console.log(lati);
        var lon = data.results[0].geometry.location.lng;

        $(".cityName6").append('<h4>' + nameCity + '</h4>');

        getFromDarkSky6(lati, lon, nameCity);
        console.log(nameCity);
    });
}

var getFromDarkSky6 = function (latitude, longitude) {
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

        $("#locationInput6").remove();
        $("#showWeather6").remove();

        var currentTemperature6 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions6 = data.currently.summary;
        var currentMinTemperature6 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip6 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature6 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";
        
        $(".currentTemperature6").append('<h1>' + currentTemperature6 + '</h1>');
        $(".currentConditions6").append('<h4>' + currentConditions6 + '</h4>');
        $(".currentMinTemperature6").append('<h5>' + currentMinTemperature6 + '</h5>');
        $(".chanceOfPrecip6").append('<h5>' + chanceOfPrecip6 + '</h5>');
        $(".currentMaxTemperature6").append('<h5>' + currentMaxTemperature6 + '</h5>');
    });
}