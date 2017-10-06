$(document).ready(function ($) {
    $('.input-item .input-text').val('');
    $.validate({
        form: '',
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
            $(label).parent().addClass('be-blue');
            if ($(this).val().length === 0) {
                $(label).css('top', '-20px');
            }
        })
        .on('focusout', function () {
            var label = "label[for=" + $(this).attr('id') + "]";
            $(label).parent().removeClass('be-blue');
            if ($(this).val().length === 0) {
                $(label).css('top', '0');
            }
        });
});