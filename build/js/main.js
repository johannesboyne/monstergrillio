var map = L.mapbox.map('map', 'johannesboyne.map-nq2k0d15', {zoomControl: false});
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

var options = {valueNames: ['deliciousItem']};
var dishesList = new List('dishes', options);

$(function () {
  $('#delSort').click(function () {
    $(dishesList.items).each(function (i,e) { $(e.elm).removeClass('highlighted'); });
    dishesList.sort('delicioItem', {sortFunction: function (a,b) { return Math.floor(Math.random()*10); }});
    $(dishesList.items[0].elm).addClass('highlighted');
  });
});
