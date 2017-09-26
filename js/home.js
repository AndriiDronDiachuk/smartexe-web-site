$(document).ready(function ($) {

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

    var homePageId = ['#home-product-management', '#home-project-management', '#home-development', '#home-graphic-design', '#home-cloud-it', '#home-quality-assurance'];

    homePageId.forEach(function(item)  {
        $(item).on('click', function () {

            if (!$(this).hasClass('active')) {
                $('.areas-button').removeClass('active');
                $('.areas-text').slideUp();
            }

            $(item).toggleClass('active');
            $( item + '-text').slideToggle();
        });
    });

    new WOW().init();
});