/* If the user enters an invalid email address, an error appears as the user begins to type via the .change() function, the error disappears as soon as the user has entered a complete and correctly formatted email address. */

function isEmail(input) {
    // Email field must be a validly formatted e-mail address
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(input);
}

$('input#mail').keyup(function () {
    if ( $(this).val().trim() && 
        isEmail($(this).val().trim()) ) {
        $(this)    
            .css('borderColor', 'green')
        $('small.mail')
            .prop('innerHTML', '<small class="mail">Valid.</small>')
            .css('color', 'green');
        $('button[type="submit"]').addClass('emailValid');
    } else {
        $(this)
            .css('borderColor', 'red');
        $('small.mail')
            .prop('innerHTML', '<small class="mail">Invalid.</small>');
        $('button[type="submit"]').removeClass('emailValid');
    }
});