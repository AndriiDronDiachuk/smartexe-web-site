$(document).ready(function($) {

    console.log( window.location.pathname );

    if (window.location.pathname.includes('index') || window.location.pathname === '/smartexe-web-site/') {
        $('.carousel').unslider({
            autoplay: true,
            speed: 1000,
            delay: 10000
        });

        $('.marquee').marquee({
            duration: 25000,
            gap: 1,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true
        });
    }

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
});