// MAP
// Get element references
var confirmBtn = document.getElementById('confirmPosition');
var map = document.getElementById('map');

// Initialize LocationPicker plugin

var lp = new locationPicker(map, {
  setCurrentPosition: true, // You can omit this, defaults to true
  lat: 40.40627,
  lng: 49.87105
}, {
  zoom: 12 // You can set any google map options here, zoom defaults to 15
});

// Listen to button onclick event
confirmBtn.onclick = function () {
  // Get current location and show it in HTML
  //let aaa = document.getElementById("onClickPositionView");
  var location = lp.getMarkerPosition();
  $("#onClickPositionView-lat").val(location.lat);
  $("#onClickPositionView-lng").val(location.lng);
  geocodeLatLng(location.lat + ',' + location.lng);
};


function geocodeLatLng(geocoder) {
  const input = geocoder;
  const latlngStr = input.split(",", 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'latLng': latlng }, function (results, status) {
    if (status !== google.maps.GeocoderStatus.OK) {
      alert(status);
    }
    // This is checking to see if the Geoeode Status is OK before proceeding
    if (status == google.maps.GeocoderStatus.OK) {
      var street = document.getElementById('street-input');
      let adressInfo = (results[0].formatted_address);
      const words = adressInfo.split(',');
      street.value = words[0];
    }
  });
}
// İMPLEMENTED BY RASHAD SADİGHOV
// MAP-END
