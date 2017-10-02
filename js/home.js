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

    var numbers = document.querySelector('.layer-5'),
        numberTop = numbers.getBoundingClientRect().top;

    window.addEventListener('scroll', function onScroll() {
        if(window.pageYOffset > numberTop - window.innerHeight * 0.5) {
            this.removeEventListener('scroll', onScroll);

            $("#spincrement-project-completed").spincrement({
                from: 0,
                to: 500,
                duration: 2000,
                leeway: 1
            });

            $("#spincrement-years-of-experience").spincrement({
                from: 0,
                to: 13,
                duration: 2000,
                leeway: 1
            });

            $("#spincrement-clients").spincrement({
                from: 0,
                to: 184,
                duration: 2000,
                leeway: 1
            });
        }
    });
});