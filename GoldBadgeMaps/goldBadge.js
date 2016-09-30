$(function () {
    $('#showMap').click(function () {
        var locationInput = $('#locationInput').val();
        getFromGoogle();
        $("#locationInput").val("");
    })
})
var getFromGoogle = function () {
    var locationInput = $('#locationInput').val();;
    var googleApi = "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationInput + "&key=AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";

    $.ajax(googleApi).done(function (data) {
        var lati = data.results[0].geometry.location.lat;
        var lon = data.results[0].geometry.location.lng;
        console.log(lati);
        initMap(lati, lon)
    });
}
var initMap = function (lati, lon) {

    var myLatLng = { lat: + lati, lng: + lon }

    map = new google.maps.Map(document.getElementById('newMap'), {
        center: myLatLng,
        zoom: 10
    })
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'My maps!'
    })

    console.log(myLatLng);
}
