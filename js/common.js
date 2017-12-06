$(document).ready(function($) {

    $('#nav-bar').click(function() {
        $('#nav-menu').toggle( 'slide', {direction: 'right'}, 250 );
        $('body').toggleClass('body-shadow');
        $('header').toggleClass('header-shadow');
    });

    $('#nav-bar-close').click(function() {
        $('#nav-menu').toggle( 'slide', {direction: 'right'}, 250 );
        $('body').toggleClass('body-shadow');
        $('header').toggleClass('header-shadow');
    });

    var searchInput = $('#search-input');

    $('#search-icon').on('click', function () {
        if (searchInput.val() === '') {
            $('#search-input').toggleClass('active');
        }
        else {
            localStorage.setItem('searchPhrase', searchInput.val());
            window.location.href = "/smartexe-web-site/html/search/search.html";
        }
    });

    $("#search-input").keyup(function(event) {
        if (event.keyCode === 13) {
            $('#search-icon').click();
        }
    });

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var latlong = latitude + ',' + longitude;

            $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlong + '&key=AIzaSyBHLAF4f2qD4OxWrpZJWLGtTADiRlsCGjA',
                function (data) {

                    var country, phoneNumber;
                    if(data.results[5]) {
                        country = data.results[5].formatted_address;
                    }
                    else {
                        country = data.results[4].formatted_address;
                    }

                    if (country === 'Israel') {
                        phoneNumber = 'Call Us: +972-3-6133886'; // Israel
                    }
                    else if (country === 'United States' || country === 'Canada') {
                        phoneNumber = 'Call Us: +1 (215) 948-8178'; // America or Canada
                    }
                    else {
                        phoneNumber = 'Call Us: +45-30-48-56-40'; // Europe
                    }

                    $('#phoneNumber').text(phoneNumber);
                })
        });
    }
});