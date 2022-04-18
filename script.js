const input = document.getElementById("search");
let query = document.getElementById("search").value;
let currentLat;
let currentLon;

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("searchButton").click();
  }
}); 

fetch(`http://ip-api.com/json/${query}?fields=status,region,city,zip,lat,lon,timezone,isp,query`)
.then(response => response.json())
.then(data => {
  currentIpAddress.innerHTML = data.query
  currentLocation.innerHTML = data.city + ', ' + data.region + ' ' + data.zip
  currentTimezone.innerHTML = data.currentTimezone
  currentISP.innerHTML = data.isp
  currentLat = data.lat
  currentLon = data.lon
});