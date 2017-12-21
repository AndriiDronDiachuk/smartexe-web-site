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
            var  email;

            if (data !== undefined) {
                if (data.country_code === 'IL') {
                    phoneNumber += '+972-3-6133886'; // Israel
                    email = 'info@smartexe.com'; // Israel

                }
                else if (data.country_code === 'US' || data.country_code === 'CA') {
                    phoneNumber += '+1 (215) 948-8178'; // America or Canada
                    email = 'info@smartexe.com'; // America or Canada
                }
                else {
                    phoneNumber += '+45 30485640'; // Europe
                    email = 'contacteu@smartexe.com'; // Europe
                }
            }
            else {
                phoneNumber += '+45-30-48-56-40';
                email = 'contacteu@smartexe.com';
            }

            $('#footer-phone').html(phoneNumber);
            $('#footer-email').html(email);


            $('#header-phone')
                .html(phoneNumber)
                .css('opacity', 1);
        });

    $('#contact-mobile').on('click', function () {
        $('.footer-1').toggleClass('active');
    });

    document.getElementById('shareBtn').onclick = function() {
        FB.ui({
            method: 'share',
            mobile_iframe: true,
            message: 'Test message',
            href: 'https://andriidrondiachuk.github.io/smartexe-web-site/html/articles/articles-items/article_item_1.html'
        }, function(response){});
    }

});