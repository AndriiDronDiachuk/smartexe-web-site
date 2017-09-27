function initMap() {
    var uluru = {lat: 32.0940677, lng: 34.82323829999996};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru,
        disableDefaultUI: true
        /*draggable: false,
        zoomControl: false,
        scrollwheel: false,*/
        /*disableDoubleClickZoom: true*/
    });
    var marker = new google.maps.Marker({
        clickable: true,
        position: new google.maps.LatLng(32.0940677,34.82323829999996),
        map: map
    });
    var contentString = '<div class="marker-content">'+
        '<h3>ISRAEL</h3>'+
        '<p>23, Bar Kochva st., 7th Floor, Bney Brak, Israel</p>'+
        '<p>+972-3-6133886</p>'+
        '<a>info@smartexe.com</a>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.setIcon({url:'../images/map_marker.png', size: new google.maps.Size(55, 70)});
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    /*var image = {
        url: '../images/map_marker.svg',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(55, 70),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 70),
        //scale,
        scaledSize: new google.maps.Size(55, 70)
    };*/

}