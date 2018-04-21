$(document).ready(function () {

    function checkBoxInitial() {
        $('.activities label')
            .css('borderColor', 'blue');
        $('.activities legend')
            .append($('<span>', {
                text: ' make at least one selection',
                class: 'initial'
            }).css('color', 'blue'));
    }

    function onPageLoad(){
        /* STEP 1: Set focus on the first text field */ 
        /* 1.1 When the page loads, give focus to the first text field */
        $('input:text:visible:first').focus();
        checkBoxInitial();
        $('select[id=payment] option:contains("Credit Card")').prop('selected', true);
        $('credit-card').show();
        $('#credit-card').next().hide();
        $('#credit-card').next().next().hide();
        let totalCost = 0;
        $('.activities').append("<p id='p2'> Total Cost Will Be: $0 </p>");
        nameFieldInitial();
        emailFieldInitial();
        addCardNumberWarningInitial();
        addZipWarningInitial();
        addCvvWarningInitial();
        $('form fieldset[class="shirt"] div[id="colors-js-puns"]').hide();
        return totalCost;
    }

    $("#title").change(function () {
        var value = $(this).find("option:selected").attr("value");
        switch (value) {
            case "other":
                $(this).parent().append(
                    $('<input>', {
                        type: 'text',
                        id: 'other-title',
                        placeholder: 'Your Job Role',
                        val: $('#div1').text()
                    }).css('borderColor', 'blue')
                );
                break;
            default:
                $(this).parent().children('input#other-title').remove();
                
        }
    });

    $('form fieldset[class="shirt"] select[id="design"]').change(function () {
        var value = $(this).find("option:selected").attr("value");
        
        switch (value) {
            /* Step 3: "T-Shirt Info” section of the form: */

            /* 3.1 For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu. */
            case "js puns":
            /* STEP 3.2 If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."  */
                $("#color option:contains('Cornflower Blue (JS Puns shirt only)')")
                    .prop('selected', true);
                $('form fieldset[class="shirt"] div[id="colors-js-puns"]').show();
                $("#color option:contains('JS Puns shirt only')")
                    .show();
                $("#color option:contains('I ♥ JS shirt only')")
                    .hide();
                break;
            case "heart js":
            /* STEP 3.3 If the user selects "Theme - I ♥ JS" then the color menu should only
            display "Tomato," "Steel Blue," and "Dim Grey." */
                $("#color option:contains('Tomato (I ♥ JS shirt only)')")
                    .prop('selected', true);
                $('form fieldset[class="shirt"] div[id="colors-js-puns"]').show();
                $("#color option:contains('JS Puns shirt only')")
                    .hide();
                $("#color option:contains('I ♥ JS shirt only')")
                    .show();
                break;
            default:
                $('form fieldset[class="shirt"] div[id="colors-js-puns"]').hide();
        }
    });

    /* STEP 4: ”Register for Activities” section of the form: */

    /* 4.1 Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available. */

    /* 4.2 When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled. */

    /* 4.3 As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300. */

    $('.activities > label > input[type=checkbox]').change(function () {
        let label = $('.activities legend');
        removeWarnings(label);
        if ($('.activities > label > input[type=checkbox]:checked').length === 0) {
            $('.activities')
                .css('borderColor', 'red');
            $('.activities')
                .append($('<span>', {
                    text: ' select at least one',
                    class: 'warning'
                })).css('color', 'red');
        }
        // explain the unchecking behaviour
        if ($(".activities > legend").prop('innerHTML').indexOf('uncheck') === -1) {
            $(".activities > legend").append(
                $('<span>', {
                    text: ' - uncheck checkbox to clear selection(s)'
                })
            );
        }

        if (!$(this).is(':checked')) {
            if ($(this).attr('name')==='all'){
                totalCost -= 200;
            } else {
                totalCost -= 100;
            }
            abilityArray = [false, false, false, false, false, false, false];
        } else if ($(this).is(':checked')){
            switch ($(this).attr('name')) {
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

        $(".activities > label > input[name=all]")
            .prop('disabled', abilityArray[0])
            .parent()
            .css('text-decoration', abilityArray[0] ? 'line-through' : 'none');
        $(".activities > label > input[name=js-frameworks]")
            .prop('disabled', abilityArray[1])
            .parent()
            .css('text-decoration', abilityArray[1] ? 'line-through' : 'none');;
        $(".activities > label > input[name=js-libs]")
            .prop('disabled', abilityArray[2])
            .parent()
            .css('text-decoration', abilityArray[2] ? 'line-through' : 'none');
        $(".activities > label > input[name=express]")
            .prop('disabled', abilityArray[3])
            .parent()
            .css('text-decoration', abilityArray[3] ? 'line-through' : 'none');
        $(".activities > label > input[name=node]")
            .prop('disabled', abilityArray[4])
            .parent()
            .css('text-decoration', abilityArray[4] ? 'line-through' : 'none');
        $(".activities > label > input[name=build-tools]")
            .prop('disabled', abilityArray[5])
            .parent()
            .css('text-decoration', abilityArray[5] ? 'line-through' : 'none');
        $(".activities > label > input[name=npm]")
            .prop('disabled', abilityArray[6])
            .parent()
            .css('text-decoration', abilityArray[6] ? 'line-through' : 'none');
        $('.activities > p[id=p2]')
            .replaceWith("<p id='p2'> Total Cost Will Be: $" + totalCost + "</p>")
    });

    function getCardNumberInput(){
        let input = $('.container form fieldset input[id="cc-num"]');
        return input;
    }

    function getCardNumberLabel(){
        let label = $('.container form fieldset label[for="cc-num"]');
        return label;
    }

    /* Remove Warnings Universal */

    function removeWarnings(label) {
        if (!($(label).children('span.initial').length === 0)) {
            $(label).children('span.initial').remove();
        }
        if (!($(label).children('span.warning').length === 0)) {
            $(label).children('span.warning').remove();
        }
        if (!($(label).children('span.valid').length === 0)) {
            $(label).children('span.valid').remove();
        }
    }

    /* Card Number Field */

    function addCardNumberWarningInitial(){
        let input = getCardNumberInput();
        let label = getCardNumberLabel();
        $(input).css('border', '1px solid blue');
        $(label).append($('<span>', {
            text: ' enter card number.',
            class: 'initial'
        })).css('color', 'blue');
    }

    function addCardNumberWarningEmpty( input, label ){
        removeWarnings(label);
        $(input).css('border', '1px solid red');
        $(label).append($('<span>', {
            text: ' cannot be empty',
            class: 'warning'
        })).css('color', 'red');
    }

    function addCardNumberWarningShort(input, label) {
        removeWarnings(label);
        $(input).css('border', '1px solid red');
        $(label).append($('<span>', {
            text: ' short 13 < 16',
            class: 'warning'
        })).css('color', 'red');
    }

    function addCardNumberWarningLong(input, label){
        removeWarnings(label);
        $(input).css('border', '1px solid red');
        $(label).append($('<span>', {
            text: ' long 13 < 16',
            class: 'warning'
        })).css('color', 'red');
    }

    function cardNumberValid(input, label){
        removeWarnings(label);
        $(input).css('border', '1px solid green');
        $(label).append($('<span>', {
            text: ' valid',
            class: 'valid'
        })).css('color', 'green');
    }

    function validateCardNumber(input, label){
        if ($(input).val().length === 0) {
            addCardNumberWarningEmpty(input, label);
        } else if ($(input).val().length < 12) {
            addCardNumberWarningShort(input, label);
        } else if ($(input).val().length > 15) {
            addCardNumberWarningLong(input, label);
        } else {
            cardNumberValid(input, label);
        }
    }

    /* ZIP FIELD */

    function getZipInput() {
        let input = $('.container form fieldset input[id="zip"]');
        return input;
    }

    function getZipLabel() {
        let label = $('.container form fieldset label[for="zip"]');
        return label;
    }


    function addZipWarningInitial(){
        let input = getZipInput();
        let label = getZipLabel();
        $(".container form fieldset input[id=zip]")
        .css('border', '1px solid blue');
        $(".container form fieldset label[for=zip]")
        .append($('<span>', {
            text: ' enter zip.',
            class: 'initial'
        })).css('color', 'blue');
    }

    function addZipWarningEmpty(input, label) {
        removeWarnings(label);
        $(input).css('border', '1px solid red');
        $(label).append($('<span>', {
            text: ' Enter Number',
            class: 'warning'
        })).css('color', 'red');
    }

    function addZipWarningLength(input, label) {
        removeWarnings(label);
        $(input).css('border', '1px solid red');
        $(label).append($('<span>', {
            text: ' 5 digit#',
            class: 'warning'
        })).css('color', 'red');
    }

    function zipValid(input, label) {
        removeWarnings(label);
        $(input).css('border', '1px solid green');
        $(label).append($('<span>', {
            text: ' valid',
            class: 'valid'
        })).css('color', 'green');
    }

    function validateZip(input, label){
        if ($(input).val().length === 0) {
            addZipWarningEmpty(input, label);
        } else if ($(input).val().length != 4) {
            addZipWarningLength(input, label);
        } else {
            zipValid(input, label);
        }
    }

    /* CVV FIELD */

    function getCvvInput() {
        let input = $('.container form fieldset input[id="cvv"]');
        return input;
    }

    function getCvvLabel() {
        let label = $('.container form fieldset label[for="cvv"]');
        return label;
    }

    function addCvvWarningInitial(){
        let input = getCvvInput();
        let label = getCvvLabel();
        removeWarnings(label);
        $(input).css('border', '1px solid blue');
        $(label).append($('<span>', {
            text: ' enter card cvv',
            class: 'initial'
        })).css('color', 'blue');
    }

    function addCvvWarningEmpty(input, label){
        removeWarnings(label);
        $(input).css('border', '1px solid red');
        $(label).append($('<span>', {
            text: ' Enter Number',
            class: 'warning'
        })).css('color', 'red');
    }

    function addCvvWarningOther(input, label){
        removeWarnings(label);
        $(input).css('border', '1px solid red');
        $(label).append($('<span>', {
            text: ' 3 digit#',
            class: 'warning'
        })).css('color', 'red');
    }

    function cvvValid(input, label){
        removeWarnings(label);
        $(input)
            .css('border', '1px solid green');
        $(label)
            .append($('<span>', {
                text: ' valid',
                class: 'valid'
            })).css('color', 'green');
    }

    function validateCvv(input, label){
        if ($(input).val().length === 0) {
            addCvvWarningEmpty(input, label);
        } else if ($(input).val().length != 2) {
            addCvvWarningOther(input, label);
        }  else {
            cvvValid(input, label);
        }
    }

    $(".container form fieldset div[id='credit-card'] input[id='cc-num']").change(function(){
        let input = getCardNumberInput();
        let label = getCardNumberLabel();
        /* Credit card field should only accept a number between 13 and 16 digits */
        validateCardNumber(input, label);
    });
    $(".container form fieldset  div[id='credit-card'] input[id='zip']").change(function () {
        let input = getZipInput();
        let label = getZipLabel();
        /* The zipcode field should accept a 5-digit number */
        validateZip(input, label);
    });

    $(".container form fieldset  div[id='credit-card'] input[id='cvv']").change(function () {
        let input = getCvvInput();
        let label = getCvvLabel();
        /* The CVV should only accept a number that is exactly 3 digits long */
        validateCvv(input, label);
    });

    /* STEP 5: Payment Info section of the form: */
    /* 5.1 Display payment sections based on the payment option chosen in the select menu */
    /* 5.2 The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information. */
    /* 5.3 When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden. */
    /* 5.4 When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.*/

    $('.container fieldset select[id=payment]').change(function () {
        var value = $(this).find("option:selected").attr("value");
        switch (value){
            case 'credit card':
                $('#credit-card').show();
                $('#credit-card').next().hide();
                $('#credit-card').next().next().hide();
                // $('#credit-card div:after').hide();
                break;
            case 'paypal':
                $('#credit-card').hide();
                $('#credit-card').next().show();
                $('#credit-card').next().next().hide();
            break;
            case 'bitcoin':
                $('credit-card').hide();
                $('#credit-card').next().hide();
                $('#credit-card').next().next().show();
            break;
            default:
                $('credit-card').hide();
                $('#credit-card').next().hide();
                $('#credit-card').next().next().hide();
            break;
        }
    });

    function submitButtonDisable(){
        $('.container form button[type="submit"]')
            .prop('disabled', true)
            .prop('textContent', 'Form Incomplete')
            .css('border', '1px solid red');
    }

    /* STEP 6: Form validation */
    /* 6.1 If any of the following validation errors exist, prevent the user from submitting the form: */
    /* 6.2 Name field can't be blank */
    /* 6.3 Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example. */
    /* 6.4 Must select at least one checkbox under the "Register for Activities" section of the form. */
    /* 6.5 If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted. */
    /* 6.5.1 Credit card field should only accept a number between 13 and 16 digits */
    /* 6.5.2 The zipcode field should accept a 5-digit number */
    /* 6.5.3 The CVV should only accept a number that is exactly 3 digits long */

/* STEP 7: Form validation messages: */
/* 7.1 Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or a message could appear near the field or at the top of the form */
/* 7.2 There should be an error indication for the name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV */

    function getNameFieldInput(){
        let input = $('.container form fieldset input[id=name]');
        return input;
    }

    function getNameFieldLabel(){
        let label = $('.container form fieldset label[for=name]');
        return label;
    }

    function nameFieldAddWarning(input, label){
        removeWarnings(label);  
        $('.container form fieldset input[id=name]')
            .css('borderColor', 'red');
        $('.container form fieldset label[for=name]')
            .append($('<span>', {
                text: ' field cannot be empty',
                class: 'warning'
            })).css('color', 'red');
    }

    function nameFieldRemoveWarning(input, label){
        removeWarnings(label);       
        $(input)
            .css('borderColor', 'green');
        $(label)
            .append($('<span>', {
                text: ' valid',
                class: 'valid'
            })).css('color', 'green');
    }

    function nameFieldInitial(){
        let input = getNameFieldInput();
        let label = getNameFieldLabel();
        $(input).css('borderColor', 'blue');
        $(label).append($('<span>', {
                text: ' type your name',
                class: 'initial'
            })).css('color', 'blue');
    }

    function validateNameField(input, label){
        if ($(input).val().length === 0) {
            nameFieldAddWarning(input, label);
        } else {
            nameFieldRemoveWarning(input, label);
        }
    }

    $('.container fieldset input[id="name"]').change(function(){
        let input = getNameFieldInput();
        let label = getNameFieldLabel();
        validateNameField(input, label);
    });

    function getEmailFieldInput(){
        let input = $('.container fieldset input[id="mail"]');
        return input;
    }
    function getEmailFieldLabel(){
        let label = $('.container fieldset label[for="mail"]');
        return label;
    }

    function emailFieldInitial() {
        let input = getEmailFieldInput();
        let label = getEmailFieldLabel();
        $(input)
            .css('borderColor', 'blue');
        $(label)
            .append($('<span>', {
                text: ' type your email',
                class: 'initial'
            })).css('color', 'blue');
    }

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function emailFieldAddWarningEmpty(input, label){
        removeWarnings(label);
        $(input)
            .css('borderColor', 'red');
        $(label)
            .append($('<span>', {
                text: ' field cannot be empty',
                class: 'warning'
            })).css('color', 'red');
    }

    function emailFieldAddWarningInvalid(input, label){
        removeWarnings(label);
        $(input)
            .css('borderColor', 'red');
        $(label)
            .append($('<span>', {
                text: ' invalid email address',
                class: 'warning'
            })).css('color', 'red');
    }

    function emailFieldRemoveWarning(input, label){
        removeWarnings(label);
        $(input)
            .css('borderColor', 'green');
        $(label)
            .append($('<span>', {
                text: ' valid',
                class: 'valid'
            })).css('color', 'green');
    }

    function validateEmailField(){
        if (!$('.container fieldset input#mail').val()) {
            emailFieldAddWarningEmpty();
        } else if (!isEmail($('.container fieldset input#mail').val())) {
            emailFieldAddWarningInvalid();
        } else {
            emailFieldRemoveWarning();
        }   
    }

    $('.container fieldset input#mail').change(function () {
        let input = getEmailFieldInput();
        let label = getEmailFieldLabel();
        validateEmailField(input, label);
    });

    /* STEP 8: When JavaScript is switched off or unavailable, the user should still have access to all form fields and payment information. For example, the “Other” text field in the "Job Role" menu should be visible on the page when JavaScript is switched off, and all information for Bitcoin, Paypal or Credit Card payments should be visible. */

    /* EXTRA 1: Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu. */

    /* EXTRA 2: Program at least one of your error messages so that more information is provided depending on the error. For example, if the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.” If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is between 13 and 16 digits long.” */

    /* EXTRA 3: Program your form so that it provides a real-time validation error message for at least one text input field. Rather than providing an error message on submit, your form should check for errors and display messages as the user begins typing inside a text field. For example, if the user enters an invalid email address, the error appears as the user begins to type, and disappears as soon as the user has entered a complete and correctly formatted email address. Please accomplish this will your own JavaScript code. Do not rely on HTML5's built-in email validation. */

    let totalCost = onPageLoad();

});