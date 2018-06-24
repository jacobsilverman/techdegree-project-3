import '../style/style.css';
import './validation';

$(function () {
    $('input#name').focus();
    $('div.other-title').hide();
    {/* Hide the "Color" label and select menu until a T-Shirt design is selected */ }
    $('div#colors-js-puns').hide();
    /* hide fields with JS so they appear when JS disabled */
    $('div.credit-card').show();
    $('div.paypal').hide();
    $('div.bitcoin').hide();

    $('button[type="submit"]').click(function (e) {
        if ($('button[type="submit"]').hasClass('nameValid, tshirtValid, emailValid, activitiesValid, paymentValid ')){
            console.log('COMPLETE')
            e.preventDefault();
        } else {
            console.log('INCOMPLETE');
            e.preventDefault();
        }
    });
});

$('select#design').change(function () {
    var value = $(this).find("option:selected").attr("value");
    switch (value) {
        case "js puns":
            {/* For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu. eg. If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."  */ }
            $("#color option:contains('Cornflower Blue (JS Puns shirt only)')")
                .prop('selected', true);
            $('div#colors-js-puns').show();
            $("#color option:contains('JS Puns shirt only')")
                .show();
            $("#color option:contains('I ♥ JS shirt only')")
                .hide();
            break;
        case "heart js":
            {/* If the user selects "Theme - I ♥ JS" then the color menu should only
            display "Tomato," "Steel Blue," and "Dim Grey." */}
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

/* Display payment sections based on the payment option chosen in the select menu */
$(' fieldset select[id=payment]').change(function () {
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



function setData() {
    $('.activities').data("checkbox", {
        'all': {
            price: 200,
        },
        'js-frameworks': {
            price: 100,
            conflict: 'express'
        },
        'js-libs': {
            price: 100,
            conflict: 'node'
        },
        'express': {
            price: 100,
            conflict: 'js-frameworks'
        },
        'node': {
            price: 100,
            conflict: 'js-libs'
        },
        'build-tools': {
            price: 100,
        },
        'npm': {
            price: 100,
        }
    });
}

$(function () {
    setData()
    let totalCost = 0;
    $('.activities').append("<p id='p2'> Total Cost Will Be: $0 </p>");
    $('input[type="checkbox"]').change(function () {
        /* 
            Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available. I use !currentBool when a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
        */
        if ($('.activities').data("checkbox")[$(this).prop('name')].conflict) {
            const inputName = $('.activities').data("checkbox")[$(this).prop('name')].conflict;
            const currentBool = $('input[name=' + inputName + ']').prop('disabled');
            $('input[name=' + inputName + ']').prop('disabled', !currentBool);
        }
        /* 
            As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300. I also add the total in javascript because if JS is disabled the totalCost will not work (and therefore it shouldn't show).
        */

        if ($(this).prop('checked')) {
            totalCost += $('.activities').data("checkbox")[$(this).prop('name')].price;
        } else {
            totalCost -= $('.activities').data("checkbox")[$(this).prop('name')].price;
        }
        $('.activities > p[id=p2]')
            .replaceWith("<p id='p2'> Total Cost Will Be: $" + totalCost + "</p>")



    });
});