$(document).ready(function ($) {

    $.validate({
        form: '#contact-us-form',
        scrollToTopOnError: false,
        onError: function ($form) {
        },
        onSuccess: function ($form) {
        },
        onValidate: function ($form) {
        },
        onElementValidate: function (valid, $el, $form, errorMess) {
        }
    });
    $('input')
        .on('beforeValidation', function (value, lang, config) {
        })
        .on('validation', function (evt, valid) {
        });

    $('.input-item .input-text')
        .on('focus', function () {
            var label = "label[for=" + $(this).attr('id') + "]";
            $(label).css('top', '-20px');

        })
        .on('focusout', function () {
            if ($(this).val().length === 0) {
                var label = "label[for=" + $(this).attr('id') + "]";
                $(label).css('top', '0');
            }
        })

});