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
                window.location.href = "/html/search/search.html";
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
                    phoneNumber += '+1 (215) 565-6150'; // America or Canada
                    email = 'contact@smartexe.com'; // America or Canada
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

    var FBModalParams = "width=560, height=660, scrollbars=no, left=" + (($(window).width() - 560) / 2) + ', top=' + ((($(window).height() - 660) / 2) + 50);
    $("#facebookShareLink").on("click",function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.smartexe.com/html/articles/articles-items/7_reasons_why_every_company_must_consider_a_nearshore_development_team.html", "pop", FBModalParams);
        return false;
    });

    var TwitterModalParams = "width=700, height=460, scrollbars=no, left=" + (($(window).width() - 700) / 2) + ', top=' + ((($(window).height() - 460) / 2)  + 50);
    $("#twitterShareLink").on("click",function(){
        window.open("https://twitter.com/share?text=7%20reasons%20why%20every%20company%20must%20consider%20a%20nearshore%20development%20team&url=http://www.smartexe.com/html/articles/articles-items/7_reasons_why_every_company_must_consider_a_nearshore_development_team.html&via=Smartexe", "pop", TwitterModalParams);
        return false;
    });

    var LinkedinModalParams = "width=1000, height=750, scrollbars=no, left=" + (($(window).width() - 1000) / 2) + ', top=' + ((($(window).height() - 750) / 2) + 50);
    $("#linkedinShareLink").on("click",function(){
        window.open("http://www.linkedin.com/shareArticle?mini=true&url=http://www.smartexe.com/html/articles/articles-items/7_reasons_why_every_company_must_consider_a_nearshore_development_team.html&title=7%20reasons%20why%20every%20company%20must%20consider%20a%20nearshore%20development%20team", "pop", LinkedinModalParams);
        return false;
    });

});