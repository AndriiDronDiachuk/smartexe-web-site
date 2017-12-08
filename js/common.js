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
            if (searchInput.val() === '' && !searchInput.hasClass('active')) {
                searchInput
                    .addClass('active')
                    .focus();
            }
            else if (searchInput.val() !== '' && searchInput.hasClass('active')) {
                localStorage.setItem('searchPhrase', searchInput.val());
                window.location.href = "/smartexe-web-site/html/search/search.html";
            }
    });

    searchInput.on('blur', function () {
        setTimeout(function () {
            searchInput.val('');
            searchInput.removeClass('active');
        }, 100);

    });

    searchInput.keyup(function(event) {
        if (event.keyCode === 13) {
            $('#search-icon').click();
        }
    });


    $.getJSON('https://freegeoip.net/json/',
        function (data) {
            var  phoneNumber = '<span>Call Us: </span>';

            if (data !== undefined) {
                if (data.country_code === 'IL') {
                    phoneNumber += '+972-3-6133886'; // Israel

                }
                else if (data.country_code === 'US' || data.country_code === 'CA') {
                    phoneNumber += '+1 (215) 948-8178'; // America or Canada
                }
                else {
                    phoneNumber += '+45-30-48-56-40'; // Europe
                }
            }
            else {
                phoneNumber += '+45-30-48-56-40';
            }

            $('#phoneNumber').html(phoneNumber);
            $('#header-phone')
                .html(phoneNumber)
                .css('opacity', 1);
        })

});