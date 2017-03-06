import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';
import './main.html';


$(document).ready(function () {
    // let map = L.map('map', {
    //     doubleClickZoom: true,
    //     touchZoom: true
    // }).setView(new L.LatLng(40.308057, -83.541730), 13);


    // L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
    //     opacity: .5
    // }).addTo(map);

    var map = L.map('map').setView([0, 0], 1);
    L.tileLayer('http://localhost:8000/sampleTrack/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 6,
        tms:true
    }).addTo(map);


    let redIcon = L.icon({
        iconUrl: 'http://www.clker.com/cliparts/q/0/m/g/P/c/red-sports-car-top-view.svg',
        iconSize: [25, 10],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    let greenIcon = L.icon({
        iconUrl: 'http://images.clipartpanda.com/car-top-view-lime-car-top-view.svg',
        iconSize: [25, 10],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

    let cameraIcon = L.icon({
        iconUrl: 'http://www.clipartbest.com/cliparts/KTj/o54/KTjo548ac.png',
        iconSize: [25, 20],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });


    let markerRed = new L.Marker([40.300288, -83.541707], {
        icon: redIcon
    });
    let markerGreen = new L.Marker([40.317028, -83.561549], {
        icon: greenIcon
    });
    let camera1 = new L.Marker([40.298586, -83.531446], {
        icon: cameraIcon
    }).on('click', function (e) {
        $(".camera").toggle();
    });
    markerRed.addTo(map);
    markerGreen.addTo(map);
    camera1.addTo(map);
    // image overlay
    // var imageUrl = 'http://johngeorgeracing.com/gallery/var/resizes/racing/thompson2014/IMG_7482.jpg?m=1406648141',
    // imageBounds = [[40.298586, -83.531446], [40.317028, -83.561549]];
    // L.imageOverlay(imageUrl, imageBounds).addTo(map);
});
