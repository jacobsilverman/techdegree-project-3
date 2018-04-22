$(document).ready(function () {
    /* When the page loads, give focus to the first text field */
    $('input:text:visible:first').focus();
    /* When the page loads, hide the other-title input field */
    $('div.other-title').hide();
    /* Hide the "Color" label and select menu until a T-Shirt design is selected */
    $('fieldset.shirt div#colors-js-puns').hide();
    let totalCost = 0;
    /* Add the total in javascript because if JS disabled it won't work */
    $('.activities').append("<p id='p2'> Total Cost Will Be: $0 </p>");
    /* hide fields with JS so they appear when JS disabled */
    $('div.credit-card').show();
    $('div.paypal').hide();
    $('div.bitcoin').hide();
    /* If any validation errors exist, prevent the user from submitting the form */
    $('button[type="submit"]').click(function(e){
        let errorElement = $();
        /* required fields */
        if ($('input#name').hasClass('validInput')) {
            $('button[type="submit"]').removeClass('btnDiasabled');
            // console.log($('input#name').hasClass('validInput'), '1')
        } else {
            $('button[type="submit"]').addClass('btnDisable');
            // console.log($('input#name'));
        }
        if ($('.container input[id="mail"]').hasClass('validInput')){
            $('button[type="submit"]').removeClass('btnDiasabled');
            // console.log($('.container input[id="mail"]').hasClass('validInput'), '2')
        } else {
            $('button[type="submit"]').addClass('btnDiasabled');
            // console.log($('.container input[id="mail"]'));
        }
        if ($('select#title').hasClass('validSelection')){
            $('button[type="submit"]').removeClass('btnDiasabled');
            // console.log($('select#title').hasClass('validSelection'), '3');
        } else {
            $('button[type="submit"]').addClass('btnDiasabled');
            // console.log($('select#title'));
        }
        if ($('.container input[id="other-title"]').is(":visible")){
            if ($('.container input[id="other-title"]').hasClass('validInput')){
                $('button[type="submit"]').removeClass('btnDiasabled');
                // console.log($('.container input[id="other-title"]').hasClass('validInput'), '4')
            } else {
                $('button[type="submit"]').addClass('btnDiasabled');
                // console.log($('.container input[id="other-title"]'));
            }
        } else {
            // console.log('skip 4')
        }
        if ($('.container select[id="size"]').hasClass('validSelection')){
            $('button[type="submit"]').removeClass('btnDiasabled');
            // console.log($('.container select[id="size"]').hasClass('validSelection'), '5')
        } else {
            $('button[type="submit"]').addClass('btnDiasabled');
            // console.log($('.container select[id="size"]'));
        }
        if ($('.container select[id="design"]').hasClass('validSelection')) {
            $('button[type="submit"]').removeClass('btnDiasabled');
            // console.log($('.container select[id="design"]').hasClass('validSelection'), '6')
        } else {
            $('button[type="submit"]').addClass('btnDiasabled');
            // console.log($('.container select[id="design"]'));
        }
        if ($('.container select[id="color"]').hasClass('validSelection')) {
            $('button[type="submit"]').removeClass('btnDiasabled');
            // console.log($('.container select[id="color"]').hasClass('validSelection'), '7')
        } else {
            $('button[type="submit"]').addClass('btnDiasabled');
            // console.log($('.container select[id="color"]'));
        }
        if ($('.activities').hasClass('validActivities')){
            $('button[type="submit"]').removeClass('btnDiasabled');
            // console.log($('.activities').hasClass('validActivities'), '8');
        } else {
            $('button[type="submit"]').addClass('btnDiasabled');
            // console.log($('.activities'));
        }
        if ($('.container form fieldset input[id="cc-num"]').is(":visible")) {
            if ($('.container form fieldset input[id="cc-num"]').hasClass('validInput')) {
                // console.log($('.container form fieldset input[id="cc-num"]').hasClass('validInput'), '9');
                $('button[type="submit"]').removeClass('btnDiasabled');
            } else {
                $('button[type="submit"]').addClass('btnDiasabled');
                // console.log($('.container form fieldset input[id="cc-num"]'));
            }
        } else {
            // console.log('skip 9')
        }
        if ($('.container form fieldset input[id="zip"]').is(":visible")) {
            if ($('.container form fieldset input[id="zip"]').hasClass('validInput')) {
                $('button[type="submit"]').removeClass('btnDiasabled');
                // console.log($('.container form fieldset input[id="zip"]').hasClass('validInput'), '10');
            } else {
                $('button[type="submit"]').addClass('btnDiasabled');
                // console.log($('.container form fieldset input[id="zip"]'));
            }
        } else {
            // console.log('skip 10')
        }
        if ($('.container form fieldset input#cvv').is(":visible")) {
            if ($('.container form fieldset input#cvv').hasClass('validInput')) {
                $('button[type="submit"]').removeClass('btnDiasabled');
                // console.log($('.container form fieldset input#cvv').hasClass('validInput'), '11');
            } else {
                $('button[type="submit"]').addClass('btnDiasabled');
                // console.log($('.container form fieldset input#cvv'));
            }
        } else {
            // console.log('skip 11')
        }
        if ($('button[type="submit"]').hasClass('btnDiasabled')){
            e.preventDefault();
        } else {
            // $('button[type="submit"]').addClass('btnEnabled');
            alert('You are registered!')
        }
    });

    $('input#name').change(function(){
        /* There should be an error indication for the name field */
        /* Name field can't be blank */
        if ($('input#name').val().length === 0) {
            $('.container small[class="name-msg"]')
                .prop('innerHTML',
                '<small class="name-msg">Cannot be empty.</small>');
        } else {
            $('input#name')
                .css('borderColor', 'green');
            $('.container small[class="name-msg"]')
                .prop('innerHTML', 
                '<small class="name-msg">Valid.</small>')
                .css('color', 'green');
            $('input#name')
                .addClass('validInput');
        }
        ;
    });    

    function isEmail(email) {
        /* Email field must be a validly formatted e-mail address */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    /* If the user enters an invalid email address, an error appears as the user begins to type via the .change() function, the error disappears as soon as the user has entered a complete and correctly formatted email address. */
    $('.container input[id="mail"]').change(function() {
        if ($('.container fieldset input#mail').val().length === 0) {
            /* There should be an error indication for the email field */
            $('.container small[class="mail-msg"]')
                .prop('innerHTML', '<small class="mail-msg">Cannot be empty.</small>');
            $('.container input[id="mail"]')
                .css('borderColor', 'red');
        } else if (!isEmail($('.container fieldset input#mail').val())) {
            $('.container small[class="mail-msg"]')
                .prop('innerHTML', '<small class="mail-msg">Not a valid email format.</small>');
            $('.container input[id="mail"]')
                .css('borderColor', 'red');
        } else {
            $('.container small[class="mail-msg"]')
                .prop('innerHTML', '<small class="mail-msg">Valid.</small>')
                .css('color', 'green');
            $('.container input[id="mail"]')
                .css('borderColor', 'green')
                .addClass('validInput');
        }
    });

    $('select#title').change(function(){
        $('.container small[class="title-msg"]')
            .prop('innerHTML', '<small class="title-msg">Valid.</small>')
            .css('color', 'green');
        $('select#title')
            .addClass('validSelection');
        if ($(this).find("option:selected").attr("value") === 'other'){
            $('div.other-title').show();
        }
    });

    $('div.other-title').change(function(){
        if ($('.container input[id="other-title"]')
                .val().length === 0) {
            $('.container input[id="other-title"]')
                .css('borderColor', 'red');
            $('.container small[class="other-title-msg"]')
                .prop('innerHTML', '<small class="other-title-msg">Cannot be empty.</small>')
                .css('color', 'red');
        } else if ($('.container input[id="other-title"]')
            .val() === ' ') {
            $('.container input[id="other-title"]')
                .css('borderColor', 'red');
            $('.container small[class="other-title-msg"]')
                .prop('innerHTML', '<small class="other-title-msg">Cannot be just space.</small>')
                .css('color', 'red');
        } else {
            $('.container input[id="other-title"]')
                .css('borderColor', 'green')
                .addClass('validInput');
            $('.container small[class="other-title-msg"]')
                .prop('innerHTML', '<small class="other-title-msg">Valid.</small>')
                .css('color', 'green');
        }
    });

    /* The "T-Shirt Info” section of the form is valid when a selection has been made for each option selector. The register button can only be pressed when all sections are validated. */

    $('fieldset.shirt').change(function(){
        if ( ($('form select[id="size"]').find(":selected").text() !== 'Select Size')
            && ($('form select[id="design"]').find(":selected").text() !== 'Select Theme')
            && ($('form select[id="color"]').find(":selected").text() !== 'Select Color') ){
            $('.container select[id="size"]')
                .addClass('validSelection');
            $('.container select[id="design"]')
                .addClass('validSelection');
            $('.container select[id="color"]')
                .addClass('validSelection');
            $('.container small.shirt-msg')
                .prop('innerHTML', '<small class="shirt-msg">Valid.</small>')
                .css('color', 'green');
        } else {
            $('.container small[class="shirt-msg"]')
                .prop('innerHTML', '<small class="shirt-msg">Make another selection.</small>')
                .css('color', 'red');
        }
        
    });

    $('form select[id="design"]').change(function(){
        $('form fieldset.shirt div#colors-js-puns')
            .show();
    });

    $('form fieldset.shirt select[id="design"]').change(function () {
        var value = $(this).find("option:selected").attr("value");
        switch (value) {
            case "js puns":
            /* For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu. eg. If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."  */
                $("#color option:contains('Cornflower Blue (JS Puns shirt only)')")
                    .prop('selected', true);
                $('form fieldset.shirt div#colors-js-puns').show();
                $("#color option:contains('JS Puns shirt only')")
                    .show();
                $("#color option:contains('I ♥ JS shirt only')")
                    .hide();
                break;
            case "heart js":
            /* If the user selects "Theme - I ♥ JS" then the color menu should only
            display "Tomato," "Steel Blue," and "Dim Grey." */
                $("#color option:contains('Tomato (I ♥ JS shirt only)')")
                    .prop('selected', true);
                $('form fieldset.shirt div#colors-js-puns').show();
                $("#color option:contains('JS Puns shirt only')")
                    .hide();
                $("#color option:contains('I ♥ JS shirt only')")
                    .show();
                break;
            default:
                
        }
    });

    /* There should be an error indication for the “Register for Activities” checkboxes */
    $('.activities input[type="checkbox"]').change(function (event) {
        /* Must select at least one checkbox under the 
        "Register for Activities" section of the form. */
        if ($('.activities input[type=checkbox]:checked').length === 0) {
            $('.activities small[class="activity-msg"]')
            .prop('innerHTML', 
                '<small class="activity-msg">You must select at least one.' +
                ' Uncheck checkbox to clear all selection(s).</small>')
                .css('color', 'red');
            $('.activities').removeClass('validActivities');
        } else {
            $('.activities').addClass('validActivities');
            $('.activities small[class="activity-msg"]')
            .prop('innerHTML', 
                '<small class="activity-msg">Valid.</small>')
                .css('color', 'green');
        }
        /* When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled. */
        if (!$(event.target).is(':checked')) {
            $('.activities').removeClass('validActivities');
            if ($(event.target).prop('name') === 'all'){
                totalCost -= 200;
            } else {
                totalCost -= 100;
            }
            abilityArray = [false, false, false, false, false, false, false];
        } else if ($(event.target).is(':checked')){
            /* As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300. */
            switch ($(event.target).prop('name')) {
                case 'all':
                    totalCost += 200;
                    abilityArray = [false, false, false, false, false, false, false];
                    break;
                case 'js-frameworks':
                    totalCost += 100;
                    abilityArray = [false, false, false, true, false, false, false];
                    break;
                case 'js-libs':
                    totalCost += 100;
                    abilityArray = [false, false, false, false, true, false, false];
                    break;
                case 'express':
                    totalCost += 100;
                    abilityArray = [false, true, false, false, false, false, false];
                    break;
                case 'node':
                    totalCost += 100;
                    abilityArray = [false, false, true, false, false, false, false];
                    break;
                case 'build-tools':
                    totalCost += 100;
                    abilityArray = [false, false, false, false, false, false, false];
                    break;
                case 'npm':
                    totalCost += 100;
                    abilityArray = [false, false, false, false, false, false, false];
                    break;
                default:
                    totalCost += 100;
                    abilityArray = [false, false, false, false, false, false, false];
                    break;
            }
        }

        /* Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available. */

        $(".activities input[name=all]")
            .prop('disabled', abilityArray[0])
            .parent()
            .css('text-decoration', abilityArray[0] ? 'line-through' : 'none');
        $(".activities input[name=js-frameworks]")
            .prop('disabled', abilityArray[1])
            .parent()
            .css('text-decoration', abilityArray[1] ? 'line-through' : 'none');;
        $(".activities input[name=js-libs]")
            .prop('disabled', abilityArray[2])
            .parent()
            .css('text-decoration', abilityArray[2] ? 'line-through' : 'none');
        $(".activities input[name=express]")
            .prop('disabled', abilityArray[3])
            .parent()
            .css('text-decoration', abilityArray[3] ? 'line-through' : 'none');
        $(".activities input[name=node]")
            .prop('disabled', abilityArray[4])
            .parent()
            .css('text-decoration', abilityArray[4] ? 'line-through' : 'none');
        $(".activities input[name=build-tools]")
            .prop('disabled', abilityArray[5])
            .parent()
            .css('text-decoration', abilityArray[5] ? 'line-through' : 'none');
        $(".activities input[name=npm]")
            .prop('disabled', abilityArray[6])
            .parent()
            .css('text-decoration', abilityArray[6] ? 'line-through' : 'none');
        $('.activities > p[id=p2]')
            .replaceWith("<p id='p2'> Total Cost Will Be: $" + totalCost + "</p>")
        
    });

    /* There should be an error indication for the credit card number */
    $('.container form fieldset input[id="cc-num"]').change(function(){
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
    $('.container form fieldset input[id="zip"]').change(function(){
        /* The zipcode field should accept a 5-digit number */
        if ($(this).val().length === 5) {
            $('.container small.zip-msg')
                .prop('innerHTML',
                '<small class="zip-msg">Valid.</small>')
                .css('color', 'green');
            $('.container form fieldset input[id="zip"]')
                .addClass('validInput');
        } else {
            $('.container small.zip-msg')
                .prop('innerHTML',
                '<small class="zip-msg">Must be 5-digits.</small>')
                .css('color', 'red');
        }
    });

    /* There should be an error indication for the CVV */
    $('.container form fieldset input#cvv').change(function(){
        /* The CVV should only accept a number that is exactly 3 digits long */
        if ($(this).val().length === 3) {
            $('.container small.cvv-msg')
            .prop('innerHTML', '<small class="zip-msg">Valid.</small>')
            .css('color', 'green');
            $('.container form fieldset input#cvv')
                .addClass('validInput');
            console.log($(this), 'cvv check length val.length is 3');
        } else {
            $('.container small.cvv-msg')
            .prop('innerHTML', '<small class="zip-msg">Must be 3-digits.</small>')
            .css('color', 'red');
            console.log($(this), 'cvv check check');
        }  
    })

    /* Display payment sections based on the payment option chosen in the select menu */
    $('.container fieldset select[id=payment]').change(function () {
        /* The "Credit Card" payment option is selected by default in html. */
        var value = $(this).find("option:selected").attr("value");
        switch (value){
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

    /* When JavaScript is switched off or unavailable, the user has access to all form fields and payment information because those fields and information are built into the html. */
    
});