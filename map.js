var map = L.map('map').setView([40.7128, -74.0060], 13);
var marker = L.marker([40.7128, -74.0060]).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXBrMyIsImEiOiJjbDIzcWNuYWcwcXQxM29wN2F1Z2k5cjJkIn0.GAc85N093LVVq9qu1JvW1g'
}).addTo(map);