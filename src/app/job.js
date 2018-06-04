{/* $('select#title').change(function () {
    $('.container small[class="title-msg"]')
        .prop('innerHTML', '<small class="title-msg">Valid.</small>')
        .css('color', 'green');
    $('select#title')
        .addClass('validSelection');
    if ($(this).find("option:selected").attr("value") === 'other') {
        $('div.other-title').show();
    }
});

function validateOtherTitle() {
    if ($('.container input[id="other-title"]')
        .val().length === 0) {
        $('.container input[id="other-title"]')
            .css('borderColor', 'red');
        $('.container small[class="other-title-msg"]')
            .prop('innerHTML', '<small class="other-title-msg">Cannot be empty.</small>')
            .css('color', 'red');
        return false;
    } else if ($('.container input[id="other-title"]')
        .val() === ' ') {
        $('.container input[id="other-title"]')
            .css('borderColor', 'red');
        $('.container small[class="other-title-msg"]')
            .prop('innerHTML', '<small class="other-title-msg">Cannot be just space.</small>')
            .css('color', 'red');
        return false;
    } else {
        $('.container input[id="other-title"]')
            .css('borderColor', 'green')
            .addClass('validInput');
        $('.container small[class="other-title-msg"]')
            .prop('innerHTML', '<small class="other-title-msg">Valid.</small>')
            .css('color', 'green');
        return true;
    }
}
$('div.other-title').keyup(function () {
    validateOtherTitle();
}); */}

$('input#other-title').keyup(function(){
    if ($(this).val().trim()) {
        $(this)
            .css('borderColor', 'green');
        $('small.other-title')
            .prop('innerHTML', '<small.other-title>Valid.</small.other-title>')
            .css('color', 'green');
        $('button[type="submit"]').addClass('jobValid');
    } else {
        //empty string will eval to false
        console.log('invalid ', $(this).val())
        $(this)
            .css('borderColor', 'red');
        $('small.other-title')
            .prop('innerHTML', '<small.other-title>Invalid.</small.other-title>')
            .css('color', 'red');
        $('button[type="submit"]').removeClass('jobValid');
    }
})

$('select#title').change(function (){
    $('small.title')
            .prop('innerHTML', '<small.title>Valid.</small.other-title>')
            .css('color', 'green');
    if ($(this).find("option:selected").attr("value") === 'other'){
        $('div.other-title').show();
        $('button[type="submit"]').removeClass('jobValid');
    } else {
        $('button[type="submit"]').addClass('jobValid');
    }
    // if ($(this)){
    // } else { 
        
    // }
    // 
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


$(function () {
    /* When the page loads, hide the other-title input field */
    $('div.other-title').hide();
})