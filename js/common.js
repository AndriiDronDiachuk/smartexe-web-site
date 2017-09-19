$(document).ready(function($) {
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