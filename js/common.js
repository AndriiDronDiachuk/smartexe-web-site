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

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            $.getJSON('https://ws.geonames.org/countryCode', {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                type: 'JSON',
                username: 'smartexeDron'
            }, function (result) {

                var country = result.countryName, phoneNumber;

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
            });
        });
    }
});