import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';


$(document).ready(function() {
     let map = L.map('map',{


     }).setView(new L.LatLng(40.308057, -83.541730),13);
     L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png',{opacity:.5}).addTo(map);
});
