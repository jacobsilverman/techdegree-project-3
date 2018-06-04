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

{/* The "T-Shirt Info” section of the form is valid when a selection has been made for each option selector.*/ }
$('select#size, select#design, select#color').change(function (){
    $(this).addClass('validSelection');
    $(this).css('background-color', 'lightgreen');
    $('button[type="submit"]').addClass('emailValid');
    {/* 
        How would you check if the expressions evaluate 
        to true with map and each? Something similar to 
        every but every is not a jQuery Method and does 
        not seem to work for jQuery elements (?).
    */}
    if ( $('select#size').hasClass('validSelection') &&
        $('select#design').hasClass('validSelection')) {
        // eval two expressions
        $('div#colors-js-puns').show();
    }
    register()
});

$(function(){
    {/* Hide the "Color" label and select menu until a T-Shirt design is selected */}
    $('div#colors-js-puns').hide();
});


{/*

$('form select[id="design"]').change(function () {
    $('form fieldset.shirt div#colors-js-puns')
        .show();
});

$('form fieldset.shirt select[id="design"]').change(function () {
    var value = $(this).find("option:selected").attr("value");
    switch (value) {
    case "js puns":*/}
            {/* For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu. eg. If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."  */}
           {/*} $("#color option:contains('Cornflower Blue (JS Puns shirt only)')")
                .prop('selected', true);
            $('form fieldset.shirt div#colors-js-puns').show();
            $("#color option:contains('JS Puns shirt only')")
                .show();
            $("#color option:contains('I ♥ JS shirt only')")
                .hide();
            break;
        case "heart js":
            {/* If the user selects "Theme - I ♥ JS" then the color menu should only
            display "Tomato," "Steel Blue," and "Dim Grey." */}
        {/*}    $("#color option:contains('Tomato (I ♥ JS shirt only)')")
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

*/}