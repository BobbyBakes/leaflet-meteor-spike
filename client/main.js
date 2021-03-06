import {
    Template
} from 'meteor/templating';
import './main.html';

Template.map.rendered = function () {
    console.log('-------Initializing Map---------')
    map = L.map('map', {
        crs: L.CRS.Simple
    }).setView([500, 500], 1);

    var bounds = [[0, 0], [1000, 1000]];
    var image = L.imageOverlay('img/TRC-Map_web.svg', bounds).addTo(map);

    let purpleCamera = 'img/cameraPin-Purple.png';
    let cameraIcon = L.icon({
        iconUrl: purpleCamera,
        iconSize: [128 / 3, 126 / 3],
    });
    let camera1 = new L.Marker([500, 500], {
        title: 'Camera',
        icon: cameraIcon
    }).on('click', function (e) {
        $(".camera").toggle();
    }).addTo(map);

    Locations.find({}).observe({
        changed: function (car) {
            console.log(car.id + '\'s location has changed to X:' + car.x + " Y:" + car.y);
            let marker = markers[car.id];
            marker.setLatLng([car.y, car.x]);
        },
        added: function (car) {
            console.log('Adding car' + car.id + '\'s location');
            let marker = new L.marker([car.y, car.x], {
                _id: car.id,
                title: "Car " + car.id,
                riseOnHover: true,
                icon: createIcon(car)
            });
            markers[car.id] = marker;
            map.addLayer(marker);
        }
    });

};


var createIcon = function (car) {
    return L.icon({
        iconUrl: car.icon,
        iconSize: [86 / 2, 89 / 2],
    })
};

var markers = {};
