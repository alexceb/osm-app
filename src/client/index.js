import 'leaflet';

const mymap = L.map('map').setView([51.505, -0.09], 13);
const mapboxStreetsUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGNlYiIsImEiOiJjaXQyejZpbzgwMGNzMnptbnVna21vYXM0In0.YeucTsMlhFy8CjkFQQVWWw";

L.tileLayer(mapboxStreetsUrl, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);