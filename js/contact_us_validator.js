$(document).ready(function ($) {
    $('.input-item .input-text').val('');

    $.validator.methods.phone = function( value, element ) {
        return this.optional( element ) || /^\+?([ ]?([-]|[\(])?[0-9][\)]?)+$/.test( value );
    };

    $('#contact-us-form').validate({
        rules: {
            name: {
                required: true,
                maxlength: 100
            },
            phone: {
                required: true,
                phone: true,
                maxlength: 20,
                minlength: 10
            },
            email: {
                required: true,
                maxlength: 100
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "This field is required"
            },
            phone: {
                required: "This field is required",
                phone: "Please enter a valid phone number",
                maxlength: "Max 20 symbols required",
                minlength: "Min 10 symbols required"
            },
            email: {
                required: "This field is required",
                email: "Please enter a valid email address"
            },
            message: {
                required: "This field is required"
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
                            // sendToEmail = 'contacteu@smartexe.com';
                            sendSubject = 'Smartexe - ContactUs / Europe'
                        }
                    }
                    else {
                        // sendToEmail = 'contact@smartexe.com';
                        sendSubject = 'Smartexe - ContactUs / Other'
                    }

                    sendToEmail = 'vladiknorik@gmail.com'; // <<< TEST EMAIL

                    console.log( sendToEmail, sendSubject );

                    Email.send("vladiknorik@gmail.com",
                        sendToEmail,
                        sendSubject,
                        'Name: ' + dataArr[0].value + '<br>' +
                        'Phone: ' + dataArr[1].value + '<br>' +
                        'Email: ' + dataArr[2].value + '<br>' +
                        'Company name: ' + dataArr[3].value + '<br>' +
                        'Title: ' + dataArr[4].value + '<br>' +
                        'Message: ' + dataArr[5].value,
                        "smtp.elasticemail.com",
                        "vladiknorik@gmail.com",
                        "0965c2d6-f304-457e-b539-8060049df6ee");

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