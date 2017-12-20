$(document).ready(function ($) {
    $('.input-item .input-text').val('');

    $.validator.methods.phone = function( value, element ) {
        return this.optional( element ) || /^\+?([ ]?([-]|[\(])?[0-9][\)]?)+$/.test( value );
    };

    $('#contact-us-form').validate({
        rules: {
            name: {
                required: true,
                maxlength: 50
            },
            phone: {
                phone: true,
                maxlength: 20,
                minlength: 10
            },
            email: {
                required: true,
                maxlength: 75
            },
            message: {
                required: true,
                maxlength: 500
            }
        },
        messages: {
            name: {
                required: "This field is required",
                maxlength: "Max 50 symbols required"
            },
            phone: {
                phone: "Please enter a valid phone number",
                maxlength: "Max 20 symbols required",
                minlength: "Min 10 symbols required"
            },
            email: {
                required: "This field is required",
                email: "Please enter a valid email address",
                maxlength: "Max 75 symbols required"
            },
            message: {
                required: "This field is required",
                maxlength: "Max 500 symbols required"
            }
        }
    });

    $('.input-item .input-text')
        .on('focus', function () {
            var label = "label." + $(this).attr('id');
            $(label).parent().addClass('be-blue');
            if ($(this).val().length === 0) {
                $(label).css('top', '-20px');
            }
        })
        .on('focusout', function () {
            var label = "label." + $(this).attr('id');
            $(label).parent().removeClass('be-blue');
            if ($(this).val().length === 0) {
                $(label).css('top', '0');
            }
        });

    $('#contact-us-form').on('submit', function (event) {
        event.preventDefault();

        var dataArr = $(this).serializeArray();

        if ($(this).valid()) {
            $.getJSON('https://freegeoip.net/json/',
                function (data) {
                    var sendToEmail;
                    var sendSubject;

                    if (data !== undefined) {
                        if (data.time_zone.includes('Europe')) {
                            sendToEmail = 'contacteu@smartexe.com';
                            sendSubject = 'Smartexe - ContactUs / Europe'
                        }
                        else {
                            sendToEmail = 'contact@smartexe.com';
                            sendSubject = 'Smartexe - ContactUs / Other'
                        }
                    }
                    else {
                        sendToEmail = 'contact@smartexe.com';
                        sendSubject = 'Smartexe - ContactUs / Other'
                    }

                    if (dataArr[1].value === '') {
                        dataArr[1].value = '-';
                    }
                    if (dataArr[3].value === '') {
                        dataArr[3].value = '-';
                    }
                    if (data.country_name === undefined || data.country_name === '') {
                        data.country_name = '-';
                    }

                    // sendToEmail = 'vladiknorik@gmail.com'; // <<< TEST EMAIL
                    // console.log( 'Name: ' + dataArr[0].value + '\n' +
                    //     'Phone: ' + dataArr[1].value + '\n' +
                    //     'Email: ' + dataArr[2].value + '\n' +
                    //     'Company name: ' + dataArr[3].value + '\n' +
                    //     'Country: ' + data.country_name + '\n' +
                    //     'Message: ' + dataArr[4].value );

                    Email.send("smartexe.contactus@gmail.com",
                        sendToEmail,
                        sendSubject,
                        'Name: ' + dataArr[0].value + '<br>' +
                        'Phone: ' + dataArr[1].value + '<br>' +
                        'Email: ' + dataArr[2].value + '<br>' +
                        'Company name: ' + dataArr[3].value + '<br>' +
                        'Country: ' + data.country_name + '<br>' +
                        'Message: ' + dataArr[4].value,
                        "smtp.elasticemail.com",
                        "smartexe.contactus@gmail.com",
                        "e5c570a6-ba49-4d8f-807f-6f0015a7b22c");

                    $('#name').val('').blur();
                    $('#phone').val('').blur();
                    $('#email').val('').blur();
                    $('#company_name').val('').blur();
                    $('#title').val('').blur();
                    $('#message').val('').blur();

                    showSuccessSendMessage();
                });
        }
    });

    var successMessage = $('#success-message');

    successMessage.css('left', ($(window).width() - $('#success-message').width()) / 2);

    $('#close-success-message').on('click', function () {
        successMessage.css('bottom', '-125%');
    });

    function showSuccessSendMessage() {
        successMessage.css('bottom', ($(window).height() - $('#success-message').height()) / 2);
    }
});