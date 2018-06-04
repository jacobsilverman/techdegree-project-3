$('input#name').keyup(function () {
    if ($(this).val().trim()) {
        $(this)
            .css('borderColor', 'green');
        $('small.name')
            .prop('innerHTML', '<small.name-msg>Valid.</small>')
            .css('color', 'green');
        $('button[type="submit"]').addClass('nameValid');
    } else {
        //empty string will eval to false
        $(this)
            .css('borderColor', 'red');
        $('small.name')
            .prop('innerHTML', '<small.name-msg>Invalid.</small.name-msg>')
            .css('color', 'red');
        $('button[type="submit"]').removeClass('nameValid');
    }
});

$(function () {
    $('input#name').focus();
});