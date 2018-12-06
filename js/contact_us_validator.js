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
            /*
            $.getJSON('http://api.ipstack.com/176.241.129.174?access_key=64b71bed33865fc7ad097f982fa579e5',
                function (data) {*/
                    /*var sendToEmail;
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

                    if (data.country_name === undefined || data.country_name === '') {
                        data.country_name = '-';
                    }*/

                    if (dataArr[1].value === '') {
                        dataArr[1].value = '-';
                    }

                    if (dataArr[3].value === '') {
                        dataArr[3].value = '-';
                    }

                    dataArr.push({
                        name: 'country',
                        value: '-'
                    },{
                        name: 'sendToEmail',
                        value: 'contacteu@smartexe.com'
                    },{
                        name: 'sendSubject',
                        value: 'Smartexe - ContactUs / Other'
                    });

                    $.ajax({
                        url: 'https://mailer-for-smartexe.herokuapp.com/',
                        type: 'post',
                        data: dataArr,
                        success: function () {

                        },
                        error: function (err) {
                            console.error(err);

                            showErrorSendMessage();
                            sendErrorMails();

                        }
                    });

                    // $('#name').val('').blur();
                    // $('#phone').val('').blur();
                    // $('#email').val('').blur();
                    // $('#company_name').val('').blur();
                    // $('#title').val('').blur();
                    // $('#message').val('').blur();

                    $(this)[0].reset();

                    showSuccessSendMessage();
                // });
        }
    });

    function sendErrorMails() {
        $.get("/js/send_mail_gmail.php");
        $.get("/js/send_mail_smartexe.php");

        return false;
    }

    var successMessage = $('#success-message');

    successMessage.css('left', ($(window).width() - $('#success-message').width()) / 2);

    $('#close-success-message').on('click', function () {
        successMessage.css('bottom', '-125%');
    });

    function showSuccessSendMessage() {
        successMessage.css('bottom', ($(window).height() - $('#success-message').height()) / 2);
        setTimeout(function () {
            successMessage.css('bottom', '-125%');
        }, 5000)
    }

    var errorsMessage = $('#error-message');

    errorsMessage.css('left', ($(window).width() - $('#error-message').width()) / 2);

    $('#close-error-message').on('click', function () {
        errorsMessage.css('bottom', '-125%');
    });

    function showErrorSendMessage() {

        successMessage.css('bottom', '-125%');

        errorsMessage.css('bottom', ($(window).height() - $('#error-message').height()) / 2);
        setTimeout(function () {
            errorsMessage.css('bottom', '-125%');
        }, 5000)
    }
});