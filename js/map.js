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
                '<p>23, Bar Kochva st., 7th Floor, Bney Brak, Israel</p>' +
                '<p>+972-3-6133886</p>' +
                '<strong><a class="marker-mail" href="mailto:info@smartexe.com" target="_blank" style="color: #000;">info@smartexe.com</a></strong>';

            $('.map').css('display', 'block');
            $('.map').removeClass('submenu');
            initMap();
            $('html, body').animate({
                scrollTop: $(".category-google-map").offset().top
            });
            mapIsraelVis = true;
        } else {
            $('.map').addClass('submenu');
            mapNorthAmericaVis = false;
            mapEuropelVis = false;
            mapIsraelVis = false;
        }

    } else if (mapRegion === 'region-north-america') {
        if(!mapNorthAmericaVis) {
            mapId = 'map';
            lat = 39.955780;
            lng = -75.181968;
            contentString = '<div class="marker-content">' +
                '<h3>NORTH AMERICA</h3>' +
                '<p>Cira Centre - Connected to Amtrak 30th Street Station</p>' +
                '<p>2929 Arch Street, Suite 1740, Philadelphia, PA 19104, USA</p>' +
                '<p>+1 (215) 948-8178</p>' +
                '<strong><a class="marker-mail" href="mailto:info@smartexe.com" target="_blank" style="color: #000;">info@smartexe.comm</a></strong>';

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
            mapEuropelVis = false;
            mapIsraelVis = false;
        }
    } else {
        if(!mapEuropelVis) {
            mapId = 'map';
            lat = 56.162939;
            lng = 10.203921;
            contentString = '<div class="marker-content">' +
                '<h3>WEST EUROPE</h3>' +
                '<p>Aarhus, Denmark</p>' +
                '<p>+45-30-48-56-40</p>' +
                '<strong><a class="marker-mail" href="mailto:info@smartexe.com" target="_blank" style="color: #000;">info@smartexe.com</a></strong>';

            $('.map').css('display', 'block');
            $('.map').removeClass('submenu');
            initMap();
            $('html, body').animate({
                scrollTop: $(".category-google-map").offset().top
            });
            mapEuropelVis = true;
        } else {
            $('.map').addClass('submenu');
            mapNorthAmericaVis = false;
            mapEuropelVis = false;
            mapIsraelVis = false;
        }
    }
});

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var latlong = latitude + ',' + longitude;

        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlong + '&key=AIzaSyBHLAF4f2qD4OxWrpZJWLGtTADiRlsCGjA',
            function (data) {
                var country = data.results[5].formatted_address;
                if (country === 'Israel') {
                    $('.IL').css('display', 'block');
                }
            })
    })
}