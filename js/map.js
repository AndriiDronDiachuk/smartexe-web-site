var mapId, lat, lng, contentString;
var mapIsraelVis = false, mapNorthAmericaVis = false, mapEuropelVis = false;

function initMap() {
    var uluru = {lat: lat, lng: lng};

    var latlng = new google.maps.LatLng(lat, lng);
    var map = new google.maps.Map(document.getElementById(mapId), {
        zoom: 17,
        center: uluru,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        clickable: true,
        position: new google.maps.LatLng(lat, lng),
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.setIcon({url: '../../images/map_marker.png', size: new google.maps.Size(55, 70)});
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}

$('.div-region').on('click', function () {
    var mapRegion = $(this).attr('id');

    if (mapRegion === 'region-israel') {
        if(!mapIsraelVis){
            mapId = 'map';
            lat = 32.0940677;
            lng = 34.82323829999996;
            contentString = '<div class="marker-content">' +
                '<h3>ISRAEL</h3>' +
                '<p>VTower, Floor 7,</p>' +
                '<p>23, Bar Kochva st.,</p>' +
                '<p>Bney Brak 5126002, Israel</p>' +
                '<p>+972 52-8713624</p>' +
                '<strong><a class="marker-mail" href="mailto:contacteu@smartexe.com" target="_blank" style="color: #000;">contacteu@smartexe.com</a></strong>';

            $('.map').css('display', 'block');
            $('.map').removeClass('submenu');
            initMap();
            $('html, body').animate({
                scrollTop: $(".category-google-map").offset().top
            });
            mapIsraelVis = true;
        } else {
            $('.map').addClass('submenu');
            mapIsraelVis = false;
        }

        mapNorthAmericaVis = false;
        mapEuropelVis = false;

    } else if (mapRegion === 'region-north-america') {
        if(!mapNorthAmericaVis) {
            mapId = 'map';
            lat = 40.170080;
            lng = -75.287200;
            contentString = '<div class="marker-content">' +
                '<h3>USA</h3>' +
		'<p>716 Dekalb Pike, Suite 235,</p>' +
		'<p>Blue Bell, PA 19422, USA</p>' +
                '<p>+1 (215) 565-6150</p>' +
                '<strong><a class="marker-mail" href="mailto:contact@smartexe.com" target="_blank" style="color: #000;">contact@smartexe.com</a></strong>';

            $('.map').css('display', 'block');
            $('.map').removeClass('submenu');
            initMap();
            $('html, body').animate({
                scrollTop: $(".category-google-map").offset().top
            });
            mapNorthAmericaVis = true;
        } else {
            $('.map').addClass('submenu');
            mapNorthAmericaVis = false;
        }
        mapEuropelVis = false;
        mapIsraelVis = false;

    } else {
        if(!mapEuropelVis) {
            mapId = 'map';
            lat = 56.162939;
            lng = 10.203921;
            contentString = '<div class="marker-content">' +
                '<h3>EUROPE</h3>' +
                '<p>Aarhus, Denmark</p>' +
                '<p>+45-30-48-56-40</p>' +
                '<strong><a class="marker-mail" href="mailto:contacteu@smartexe.com" target="_blank" style="color: #000;">contacteu@smartexe.com</a></strong>';

            $('.map').css('display', 'block');
            $('.map').removeClass('submenu');
            initMap();
            $('html, body').animate({
                scrollTop: $(".category-google-map").offset().top
            });
            mapEuropelVis = true;
        } else {
            $('.map').addClass('submenu');
            mapEuropelVis = false;
        }

        mapNorthAmericaVis = false;
        mapIsraelVis = false;
    }
});
/*
$.getJSON('https://freegeoip.net/json/',
    function (data) {
        if (data !== undefined) {
            if (data.country_code === 'IL') {
                $('.IL').css('display', 'block');
            }
        }
    });*/