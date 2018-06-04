export default $(function(){
    /* hide fields with JS so they appear when JS disabled */
    $('div.credit-card').show();
    $('div.paypal').hide();
    $('div.bitcoin').hide();
});



/* There should be an error indication for the credit card number */
$('.container form fieldset input[id="cc-num"]').keyup(function () {
    /* If the selected payment option is "Credit Card," the user must supply a credit card number, a zip code, and a 3 number CVV value before the form can be submitted. If the user doesn't submit all three then one of them will not be 'valid' and the register button has preventDefault. */
    if ($(this).val().length === 0) {
        /* If the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.”*/
        $('.container small.cc-msg')
            .prop('innerHTML',
                '<small class="cc-msg">Please enter a credit card number.</small>')
            .css('color', 'red');
    } else if ($(this).val().length < 13) {
        /* If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is between 13 and 16 digits long.” */
        $('.container small.cc-msg')
            .prop('innerHTML',
                '<small class="cc-msg">Please enter a number that is between 13 and 16 digits long.</small>')
            .css('color', 'red');
    } else if ($(this).val().length > 16) {
        $('.container small.cc-msg')
            .prop('innerHTML',
                '<small class="cc-msg">Too long <16-digits.</small>')
            .css('color', 'red');
    } else {
        /* Credit card field should only accept a number between 13 and 16 digits */
        $('.container small.cc-msg')
            .prop('innerHTML',
                '<small class="cc-msg">Valid.</small>')
            .css('color', 'green');
        $('.container form fieldset input[id="cc-num"]')
            .addClass('validInput');
    }
});
/* There should be an error indication for the zip code */
$('.container form fieldset input[id="zip"]').keyup(function () {
    /* The zipcode field should accept a 5-digit number */
    if ($(this).val().length === 5) {
        $('.container small.zip-msg')
            .prop('innerHTML',
                '<small class="zip-msg">Valid.</small>')
            .css('color', 'green');
        $('.container input[id="zip"]')
            .addClass('validInput');
    } else {
        $('.container small.zip-msg')
            .prop('innerHTML',
                '<small class="zip-msg">Must be 5-digits.</small>')
            .css('color', 'red');
    }
});

/* There should be an error indication for the CVV */
$('.container form fieldset input#cvv').keyup(function () {
    /* The CVV should only accept a number that is exactly 3 digits long */
    if ($(this).val().length === 3) {
        $('.container small.cvv-msg')
            .prop('innerHTML',
                '<small class="cvv-msg">Valid.</small>')
            .css('color', 'green');
        $('.container form fieldset input#cvv')
            .addClass('validInput');
    } else {
        $('.container small.cvv-msg')
            .prop('innerHTML',
                '<small class="cvv-msg">Must be 3-digits.</small>')
            .css('color', 'red');
    }
})

/* Display payment sections based on the payment option chosen in the select menu */
$('.container fieldset select[id=payment]').change(function () {
    /* The "Credit Card" payment option is selected by default in html. */
    var value = $(this).find("option:selected").attr("value");
    switch (value) {
        /* When the "Credit Card" payment option is selected display the #credit-card div, and hide the "Paypal" and "Bitcoin information. */
        case 'credit card':
            $('div.credit-card').show();
            $('div.paypal').hide();
            $('div.bitcoin').hide();
            // $('#credit-card div:after').hide();
            break;
        /* When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden. */
        case 'paypal':
            $('div.credit-card').hide();
            $('div.paypal').show();
            $('div.bitcoin').hide();
            break;
        /* When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.*/
        case 'bitcoin':
            $('div.credit-card').hide();
            $('div.paypal').hide();
            $('div.bitcoin').show();
            break;
    }
});