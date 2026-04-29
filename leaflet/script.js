(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([38.602100, -121.290901], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // markers
    // my town
    var homeMarker = L.marker([38.602100, -121.290901]).addTo(map);

    // airport
    var airportMarker = L.marker([38.552358, -121.304138]).addTo(map);
    var circle = L.circle([38.552358, -121.304138], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 3000
    }).addTo(map);

    var marketMarker = L.marker([38.601837, -121.269395]).addTo(map);

    homeMarker.bindPopup("<b>Welcome to my hometown!").openPopup();

    airportMarker.bindPopup('Sacramento Mather Airport -  where the California Capital Airshow occurs!');
    circle.bindPopup('The airshow practice zone; planes get very loud for about a week each year :૮(˶ㅠ︿ㅠ)ა');

    marketMarker.bindPopup('SF Supermarket - my FAVORITE grocery store in my hometown')
    
}());