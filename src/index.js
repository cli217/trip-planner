const mapboxgl = require("mapbox-gl");
const markerBuilder = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNsaTIwMTciLCJhIjoiY2ptaTZjZHFqMDBuejN3bGZiNm90NHFucCJ9.8d5oN0loJ5T-9TDI-aOHOw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

 console.log('running');
const marker = markerBuilder("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);


