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

    $.getJSON("https://ip-api.com/json/?fields=timezone,countryCode", function (data) {
        var phoneNumber;

        try {
            var countryCode = data.countryCode,
                timezone = data.timezone.split('/')[0];

            if (timezone === 'Europe' && countryCode === 'IL') {
                phoneNumber = 'Call Us: +972-3-6133886'; // Israel
            }
            else if (timezone === 'America') {
                phoneNumber = 'Call Us: +1 (215) 948-8178'; // America
            }
            else {
                phoneNumber = 'Call Us: +45-30-48-56-40'; // Europe
            }

        } catch (err) {
            phoneNumber = 'Call Us: +45-30-48-56-40'; // Europe
        }

        $('#phoneNumber').text(phoneNumber);
    })
        .fail(function (err) {
            $('#phoneNumber').text('Call Us: +45-30-48-56-40'); // Europe
        });
});