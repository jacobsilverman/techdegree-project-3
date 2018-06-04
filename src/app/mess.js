function checkClass(fieldName) {

    if ($(fieldName).hasClass('validInput') ||
        $(fieldName).hasClass('validSelection')) {
        $('button[type="submit"]').removeClass('btnDisabled');
        return;
    } else {
        $('button[type="submit"]').addClass('btnDisabled');
        return;
    }

    if ($(fieldName).is(":visible") &&
        $(fieldName).hasClass('validInput')) {
        $('button[type="submit"]').removeClass('btnDisabled');
        return;
    } else {
        $('button[type="submit"]').addClass('btnDisabled');
        return;
    }

    if ($(fieldName).hasClass('validActivities')) {
        $('button[type="submit"]').removeClass('btnDisabled');
        return;
    } else {
        $('button[type="submit"]').addClass('btnDisabled');
        return;
    }

    if ($(fieldName).hasClass('btnDisabled')) {
        $('.container small.submit-msg')
            .prop('innerHTML',
                '<small class="submit-msg">Form incomplete.</small>')
            .css('color', 'red');
        $('button[type="submit"]').css('border', '1px solid red');
        e.preventDefault();
        return;
    } else {
        $('button[type="submit"]').css('border', '1px solid green');
        alert('You are registered!')
        return;
    }

}
    /* When JavaScript is switched off or unavailable, the user has access to all form fields and payment information because those fields and information are built into the html. */