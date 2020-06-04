const map = L.map('map-template').setView([25.683308, -100.417102], 5);

const socket = io();

		var mapboxUrl = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";
		var mapboxVectorTileOptions = {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoidmlwb290ciIsImEiOiJja2F5ZnNhaXgwYW1kMnFyeGM5Z2dnNG94In0.a64SORWyLejFlbSRD_6MYA'
    };
	 L.tileLayer(mapboxUrl, mapboxVectorTileOptions).addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    console.log(e);
    const coords = [e.latlng.lat, e.latlng.lng];
  const newMarker = L.marker(coords);
  newMarker.bindPopup('You are Here!');
  map.addLayer(newMarker);
  socket.emit('userCoordinates', e.latlng);
});

socket.on('newUserCoordinates', (coords) => {
  console.log('nuevo ususario conectado',L.marker([coords.lat, coords.lng]));
  const marker = L.marker([coords.lat, coords.lng]);
  marker.bindPopup('holiii');
  map.addLayer(marker);
});

const marker = L.marker([25.683308, -100.417102]);
marker.bindPopup('holiii');
map.addLayer(marker);