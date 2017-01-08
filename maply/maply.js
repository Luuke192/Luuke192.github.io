//**********************************
//** The Start of It All   *********
//**********************************

$(function () {
      $("#submit").on("click", submitPostalCode_Click);

});

//**************************************
//Where the magic (hopefully) happens **
//**************************************
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

      //Call Google's Geocode API'
      var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBoF6RI6tJp5G-WpgyYpcXvYVepuODPAsY";
      var request = {
            url: googleUrl,
            success: lookupLatLong_Complete
      };
      $.ajax(request);

}
var latitude;
var longitude;
var maply;
var citystate = "";
function lookupLatLong_Complete(result) {
      var result = result.results["0"];
      latitude = result.geometry.location.lat;
      longitude = result.geometry.location.lng;
      citystate = result.formatted_address;
      console.log(latitude);
      console.log(longitude);
      console.log(citystate);
      var html = templateGen();
      $("#map").prepend(html);
      $("#maply").prepend(myMap);
}
function myMap(result) {
      var mapCanvas = document.getElementById("maply");
      var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 6,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            rotateControl: true
      }
      var location = new google.maps.LatLng(latitude, longitude);
      map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({
            position: location,
            map: map,
            zoom: 9
      });
      google.maps.event.addListener(marker, 'click', function () {
            map.setZoom(11);
            map.setCenter(marker.getPosition());
      });
}
function templateGen(result) {
      var template = $("#templateDiv").html();
      template = template.replace("@@CITY@@", citystate);
      return template;
}
//******************
//End of Functions *
//******************


