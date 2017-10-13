$(document).ready(function ($) {
    $('.input-item .input-text').val('');

    $('#contact-us-form').validate({
        rules: {
            name: {
                required: true,
                maxlength: 100
            },
            phone: {
                required: true,
                number: true,
                maxlength: 10,
                minlength: 10
            },
            email: {
                required: true,
                maxlength: 100
            }
        },
        messages: {
            name: {
                required: "This field is required"
            },
            phone: {
                required: "This field is required",
                number: "Please enter a valid number",
                maxlength: "Please enter 10 characters",
                minlength: "Please enter 10 characters"
            },
            email: {
                required: "This field is required",
                email: "Please enter a valid email address"
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
});