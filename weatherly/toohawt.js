//**********************************
//** The Start of It All   *********
//**********************************

window.onload = function () {
      $("#submit").on("click", submitPostalCode_Click);
      $(document).on("click", "#remove", function () {
            $(this).parent("#gencard").fadeOut();
      });

};

//***************************************
//Where the magic (hopefully) happens ***
//***************************************

function submitPostalCode_Click() {
      var pcode = $("#zip").val();
      lookupLatLong("", "", pcode);
}

function lookupLatLong(city, state, zipCode) {
      var address = "";
      if (zipCode.length != 0) {
            address = zipCode.trim();
      }
      else if (city.length != 0 && state != 0) {
            address = city.trim() + "," + state;
      }
      else {
            return; // They didn't give anything valid, so exit
      }

      //Call Google's API'
      var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBoF6RI6tJp5G-WpgyYpcXvYVepuODPAsY";
      var request = {
            url: googleUrl,
            success: lookupLatLong_Complete
      };

      $.ajax(request);
}

var cityState = "";
function lookupLatLong_Complete(result) {
      var result = result.results["0"];
      var latitude = result.geometry.location.lat;
      var longitude = result.geometry.location.lng;

      console.log("Latitude: " + latitude);
      console.log("Longitude: " + longitude);
      // $("#citystate").text(cityState);
      cityState = result.formatted_address;
      console.log("City and State: " + cityState);

      //Call DarkSky API
      var darkSky = {
            url: "https://api.darksky.net/forecast/aefd56c69dcc8e1a7cb5a60336300ec0/" + latitude + "," + longitude,
            dataType: "jsonp",
            success: generateCard
      };
      $.ajax(darkSky);
}

function generateCard(result) {
      var weatherData = {
            time: new Date(result.currently.time * 1000),
            temp: Math.round(result.currently.temperature) + String.fromCharCode(176) + " F",
            skies: result.currently.summary,
            precip: Math.round(result.currently.precipProbability * 100) + "% chance of precipitation",
            hiTemp: result.daily.data["0"].temperatureMax,
            lowTemp: result.daily.data["0"].temperatureMin,
            cityState: result.formatted_address,
      }

      console.log(weatherData);

      var html = templateGen(weatherData);
      console.log(html);
      $("#card").prepend(html);
}

function templateGen(weatherData) {
      var template = $("#templateDiv").html();

      template = template.replace("@@CITY@@", cityState);
      template = template.replace("@@TIME@@", "As of " + weatherData.time.toLocaleString());
      template = template.replace("@@TEMP@@", weatherData.temp);
      template = template.replace("@@SKIES@@", weatherData.skies);
      template = template.replace("@@MAX@@", Math.round(weatherData.hiTemp));
      template = template.replace("@@MIN@@", Math.round(weatherData.lowTemp));
      template = template.replace("@@PRECIP@@", weatherData.precip);

      return template;
}

//******************
//End of Functions *
//******************


