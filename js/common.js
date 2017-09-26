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

    new WOW().init();
});