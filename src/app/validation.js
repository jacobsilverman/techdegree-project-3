$(function () {
    /* 
        Must select at least one checkbox under the 
        "Register for Activities" section of the form. 
        There should be an error indication for the 
        “Register for Activities” checkboxes.
    */
    if ($('.activities').find($('input:checked'))) {
        $('button[type="submit"]').addClass('activitiesValid');
    }
});

$('input#name').keyup(function () {
    if ($(this).val().trim()) {
        $(this).css('background-color', 'lightgreen');
        $('li.name')
            .prop('innerHTML', '<li.name-msg>Valid name field.</li>')
            .css('color', 'green');
        $('button:submit').addClass('nameValid');
    } else {
        $(this).css('background-color', 'salmon');
        $('li.name')
            .prop('innerHTML', '<li.name-msg>Invalid name field.</li.name-msg>')
            .css('color', 'salmon');
        $('button:submit').removeClass('nameValid');
    }
});

$('input#mail').keyup(function () {

    function isEmail(input) {
        // Email field must be a validly formatted e-mail address
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(input);
    }

    if ($(this).val().trim() &&
        isEmail($(this).val().trim())) {
        // $(this)
        //     .css('borderColor', 'green')
        $(this).css('background-color', 'lightgreen');
        $('li.mail')
            .prop('innerHTML', '<li class="mail">Valid email field.</li>')
            .css('color', 'green');
        $('button:submit').addClass('emailValid');
    } else {
        $(this).css('background-color', 'salmon');
        $('li.mail')
            .prop('innerHTML', '<li class="mail">Invalid email field.</li>');
        $('button:submit').removeClass('emailValid');
    }
});

$('select#title').change(function () {
    $('li.title')
        .prop('innerHTML', '<li.title>Valid title selection.</li.other-title>')
        .css('color', 'green');
    $(this).css('background-color', 'lightgreen');
    if ($(this).find("option:selected").attr("value") === 'other') {
        $('div.other-title').show();
        $('button:submit').removeClass('jobValid');
    } else {
        $('div.other-title').hide();
        $('button:submit').addClass('jobValid');
    }
    {/* 
        How would you check if the expressions evaluate 
        to true with map and each? Something similar to 
        every but every is not a jQuery Method and does 
        not seem to work for jQuery elements (?).
    */}
    // if ( $('select#size').hasClass('validSelection') &&
    //     $('select#design').hasClass('validSelection')) {
    //     // eval two expressions
    //     $('div#colors-js-puns').show();
    // }
    // register()
});

$('input#other-title').keyup(function () {
    if ($(this).val().trim()) {
        $(this)
            .css('background-color', 'green');
        $('li.other-title')
            .prop('innerHTML', '<li.other-title>Valid other title.</li.other-title>')
            .css('color', 'lightgreen');
        $('button:submit').addClass('jobValid');
    } else {
        //empty string will eval to false
        $(this)
            .css('background-color', 'salmon');
        $('li.other-title')
            .prop('innerHTML', '<li.other-title>Invalid other title.</li.other-title>')
            .css('color', 'salmon');
        $('button:submit').removeClass('jobValid');
    }
});

{/* The "T-Shirt Info” section of the form is valid when a selection has been made for each option selector.*/ }
$('select#size, select#design, select#color').change(function () {
    $(this).addClass('validSelection');
    $(this).css('background-color', 'lightgreen');
    $('button[type="submit"]').addClass('emailValid');
    {/* 
        How would you check if the expressions evaluate 
        to true with map and each? Something similar to 
        every but every is not a jQuery Method and does 
        not seem to work for jQuery elements (?).
    */}
    if ($('select#size').hasClass('validSelection') &&
        $('select#design').hasClass('validSelection')) {
        // eval two expressions
        $('div#colors-js-puns').show();
    }
    register()
});

{/* The register button can only be pressed when all sections are validated. */ }
function register() {
    if ($('select#size').hasClass('validSelection') &&
        $('select#design').hasClass('validSelection') &&
        $('select#color').hasClass('validSelection')) {
        // eval three expressions
        $('small.shirt-msg')
            .prop('innerHTML', '<small class="shirt-msg">Valid.</small>')
            .css('color', 'green');
        $('button[type="submit"]').addClass('tshirtValid');
    } else {
        $('small[class="shirt-msg"]')
            .prop('innerHTML', '<small class="shirt-msg">Make another selection.</small>')
            .css('color', 'red');
        $('button[type="submit"]').removeClass('tshirtValid');
    }
}

/* There should be an error indication for the credit card number */
$('input#cc-num').keyup(function () {
    /* If the selected payment option is "Credit Card," the user must supply a credit card number, a zip code, and a 3 number CVV value before the form can be submitted. If the user doesn't submit all three then one of them will not be 'valid' and the register button has preventDefault. */
    if ($(this).val().length === 0) {
        /* If the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.”*/
        $('li.cc-msg')
            .prop('innerHTML',
                '<li.cc-msg>Please enter a credit card number.</li>')
            .css('color', 'salmon');
    } else if ($(this).val().length < 13) {
        /* If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is between 13 and 16 digits long.” */
        $('li.cc-msg')
            .prop('innerHTML',
                '<li.cc-msg>Please enter a number that is between 13 and 16 digits long.</li>')
            .css('color', 'salmon');
    } else if ($(this).val().length > 16) {
        $('li.cc-msg')
            .prop('innerHTML',
                '<li.cc-msg>Too long <16-digits.</li>')
            .css('color', 'salmon');
    } else {
        /* Credit card field should only accept a number between 13 and 16 digits */
        $('li.cc-msg')
            .prop('innerHTML',
                '<li.cc-msg>Valid.</li>')
            .css('color', 'green');
        $('input#cc-num')
            .addClass('validInput');
    }
});
/* There should be an error indication for the zip code */
$(' form fieldset input[id="zip"]').keyup(function () {
    /* The zipcode field should accept a 5-digit number */
    if ($(this).val().length === 5) {
        $('li.zip-msg')
            .prop('innerHTML',
                '<li class="zip-msg">Valid.</li>')
            .css('color', 'green');
        $(' input[id="zip"]')
            .addClass('validInput');
    } else {
        $(' li.zip-msg')
            .prop('innerHTML',
                '<li class="zip-msg">Must be 5-digits.</li>')
            .css('color', 'salmon');
    }
});

/* There should be an error indication for the CVV */
$('input#cvv').keyup(function () {
    /* The CVV should only accept a number that is exactly 3 digits long */
    if ($(this).val().length === 3) {
        $('li.cvv-msg')
            .prop('innerHTML',
                '<li.cvv-msg>Valid.</li>')
            .css('color', 'green');
        $('input#cvv')
            .addClass('validInput');
    } else {
        $(' li.cvv-msg')
            .prop('innerHTML',
                '<li class="cvv-msg">Must be 3-digits.</li>')
            .css('color', 'salmon');
    }
})