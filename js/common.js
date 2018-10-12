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

    /*$.getJSON('http://api.ipstack.com/176.241.129.174?access_key=64b71bed33865fc7ad097f982fa579e5',
        function (data) {
            var  phoneNumber = '<span>Call Us: </span>';
            var  email;

            if (data !== undefined) {
                if (data.country_code === 'IL') {
                    phoneNumber += '+972 52-8713624'; // Israel
                    email = 'contacteu@smartexe.com'; // Israel

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
                phoneNumber += '+45 30485640';
                email = 'contacteu@smartexe.com';
            }

            $('#footer-phone').html(phoneNumber);
            $('#footer-email').html(email);


            $('#header-phone')
                .html(phoneNumber)
                .css('opacity', 1);
        });*/

    $('#contact-mobile').on('click', function () {
        $('.footer-1').toggleClass('active');
    });

    var FBModalParams = "width=560, height=660, scrollbars=no, left=" + (($(window).width() - 560) / 2) + ', top=' + ((($(window).height() - 660) / 2) + 50);
    $("#facebookShareLink1").on("click",function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.smartexe.com/html/articles/articles-items/7_reasons_why_every_company_must_consider_a_nearshore_development_team.html", "pop", FBModalParams);
        return false;
    });
    $("#facebookShareLink2").on("click",function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.smartexe.com/html/articles/articles-items/access_is_the_new_ownership.html", "pop", FBModalParams);
        return false;
    });
    $("#facebookShareLink3").on("click",function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.smartexe.com/html/articles/articles-items/in_house_vs_outsource.html", "pop", FBModalParams);
        return false;
    });

    var TwitterModalParams = "width=700, height=460, scrollbars=no, left=" + (($(window).width() - 700) / 2) + ', top=' + ((($(window).height() - 460) / 2)  + 50);
    $("#twitterShareLink1").on("click",function(){
        window.open("https://twitter.com/share?text=7%20reasons%20why%20every%20company%20must%20consider%20a%20nearshore%20development%20team&url=http://www.smartexe.com/html/articles/articles-items/7_reasons_why_every_company_must_consider_a_nearshore_development_team.html&via=Smartexe", "pop", TwitterModalParams);
        return false;
    });
    $("#twitterShareLink2").on("click",function(){
        window.open("https://twitter.com/share?text=access%20is%20the%20new%20ownership&url=http://www.smartexe.com/html/articles/articles-items/access_is_the_new_ownership.html&via=Smartexe", "pop", TwitterModalParams);
        return false;
    });
    $("#twitterShareLink3").on("click",function(){
        window.open("https://twitter.com/share?text=In-house%20vs.%20outsource:%20how%20to%20make%20the%20right%20choice&url=http://www.smartexe.com/html/articles/articles-items/in_house_vs_outsource.html&via=Smartexe", "pop", TwitterModalParams);
        return false;
    });

    var LinkedinModalParams = "width=1000, height=750, scrollbars=no, left=" + (($(window).width() - 1000) / 2) + ', top=' + ((($(window).height() - 750) / 2) + 50);
    $("#linkedinShareLink1").on("click",function(){
        window.open("http://www.linkedin.com/shareArticle?mini=true&url=http://www.smartexe.com/html/articles/articles-items/7_reasons_why_every_company_must_consider_a_nearshore_development_team.html&title=7%20reasons%20why%20every%20company%20must%20consider%20a%20nearshore%20development%20team", "pop", LinkedinModalParams);
        return false;
    });
    $("#linkedinShareLink2").on("click",function(){
        window.open("http://www.linkedin.com/shareArticle?mini=true&url=http://www.smartexe.com/html/articles/articles-items/access_is_the_new_ownership.html&title=access%20is%20the%20new%20ownership", "pop", LinkedinModalParams);
        return false;
    });
    $("#linkedinShareLink3").on("click",function(){
        window.open("http://www.linkedin.com/shareArticle?mini=true&url=http://www.smartexe.com/html/articles/articles-items/in_house_vs_outsource.html&title=In-house%20vs.%20outsource:%20how%20to%20make%20the%20right%20choice", "pop", LinkedinModalParams);
        return false;
    });

});