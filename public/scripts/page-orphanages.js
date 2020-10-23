//criação do mapa
var map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

//backend do mapa
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
.addTo(map);


//adicionar icone
const icon = L.icon({
        iconUrl: './public/images/map-marker.svg',
        iconSize:     [58, 68],
        iconAnchor:   [29, 68],
        popupAnchor:  [170, 2]
    });
    
// adicionar popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"</a>')
//adicionar marcador
L.marker([-27.222633, -49.6455874], { icon }).addTo(map).bindPopup(popup);