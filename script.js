const input = document.getElementById("search");

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
}


input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("searchButton").click();
  }
}); 

const searchInput = () => {
  let query = document.getElementById("search").value;
  if (query === ""){
    query = "check";
  }
  fetch(`https://api.getgeoapi.com/v2/ip/${query}?api_key=3931a91ca81fb754455e445ca9f4bf66879fa0f5&format=json`)
  .then(response => response.json())
  .then(data => {
  console.log(data);
  currentIpAddress.innerHTML = data.ip
  currentLocation.innerHTML = data.city.name + ', ' + data.area.name + ' ' + data.postcode
  currentCountry.innerHTML = data.country.flag.emoji
  currentTimezone.innerHTML = data.time.code
  
  updateMap([parseFloat(data.location.latitude), parseFloat(data.location.longitude)]);
});
};

let query = searchInput().toString();
