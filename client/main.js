import {
    Template
} from 'meteor/templating';
import './main.html';

Template.map.rendered = function () {
    console.log('-------initializing map---------')
    map = L.map('map').setView([-70, -70], 4);
    L.tileLayer('http://localhost:8000/sampleTrack/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 6,
        tms: true
    }).addTo(map);


    let cameraIcon = L.icon({
        iconUrl: 'http://www.clipartbest.com/cliparts/KTj/o54/KTjo548ac.png',
        iconSize: [50, 40],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    let camera1 = new L.Marker([-80, -70], {
        icon: cameraIcon
    }).on('click', function (e) {
        $(".camera").toggle();
    }).addTo(map);
    Locations.find({}).observe({
        changed: function (car) {
            console.log(car.id + '\'s location has changed to X:' + car.x  + " Y:" + car.y);
            map.removeLayer(markers[car.id]);
            delete markers[car.id];
            var marker = new L.marker([car.x, car.y], {
                _id: car.id,
                icon: createIcon()
            });
            markers[car.id] = marker;
            map.addLayer(marker);
        },
        added: function (car) {
            console.log('adding ' + car.id + '\'s location');
            var marker = new L.marker([car.x, car.y], {
                _id: car.id,
                icon: createIcon()
            });
            markers[car.id] = marker;
            map.addLayer(marker);
        }
    })
};


var createIcon = function () {
    return L.icon({
        iconUrl: 'http://www.clker.com/cliparts/q/0/m/g/P/c/red-sports-car-top-view.svg',
        iconSize: [100, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    })
};

var markers = {};
