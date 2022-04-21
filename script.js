const input = document.getElementById("search");
let currentLat;
let currentLon;


var map = L.map('map').setView([39.03, -77.5], 12);
var marker = L.marker([39.03, -77.5]).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXBrMyIsImEiOiJjbDIzcWNuYWcwcXQxM29wN2F1Z2k5cjJkIn0.GAc85N093LVVq9qu1JvW1g'
}).addTo(map);

const updateMap = (update_map) => {
  map.setView(update_map, 12);
  L.marker(update_map).addTo(map);
  console.log(update_map)
}


input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("searchButton").click();
  }
}); 

const searchInput = () => {
  let query = document.getElementById("search").value;
  fetch(`http://ip-api.com/json/${query}?fields=status,region,city,zip,lat,lon,timezone,isp,query`)
  .then(response => response.json())
  .then(data => {
  currentIpAddress.innerHTML = data.query
  currentLocation.innerHTML = data.city + ', ' + data.region + ' ' + data.zip
  currentISP.innerHTML = data.isp
  currentTimezone.innerHTML = data.timezone.replace("_", " ");
  
  updateMap([parseFloat(data.lat), parseFloat(data.lon)]);
});
};

let query = searchInput().toString();
