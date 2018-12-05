
/* Start helper functions vvvvvv */

function removeErrorMessage(jqueryThis){
  if ($(jqueryThis).next().is($('small'))) {
    $(jqueryThis).next().remove();
  }
}

function isEmail(input) {
  // Email field must be a validly formatted e-mail address
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(input);
}

function isNumber(input) {
  // card number must be number
  var regex = /^[0-9]*$/;
  return regex.test(input);
}

function isCreditCardSelected() {
  $('select[id=payment]').css('background-color', 'lightgreen')
  if ($('select[id=payment]').find("option:selected").attr("value").localeCompare('credit card') === 0) {
    return true;
  } else {
    return false;
  }
}

function checkClasses(){
  let result = false;
  if( $('input#name').hasClass('nameValid') &&
    $('input#mail').hasClass('emailValid') &&
    $('select#title').hasClass('jobValid') &&
    $('select#size').hasClass('validSize') &&
    $('select#design').hasClass('validDesign')) {
    if (!isCreditCardSelected()){
      result = true;
    }

    if (isCreditCardSelected() &&
      $('input#cc-num').hasClass('validCc') &&
      $('input#zip').hasClass('validZip') &&
      $('input#cvv').hasClass('validCvv')) {
      result = true;
    }
  }
  return result;
}

/* End helper functions ^^^^^^ Main code vvvvv */

$(function () {

  /* focus name input on page load */
  $('input#name').focus();
  /* hide or show field(s) */
  $('div.other-title').hide();
  $('div.credit-card').show();
  $('div.paypal').hide();
  $('div.bitcoin').hide();

  /* validate input name */
  $('input#name').keyup(function () {
    removeErrorMessage($(this));
    if ($(this).val().trim().length > 0) {
      /* everything is valid */
      $(this)
        .css('background-color', 'lightgreen')
        .addClass('nameValid');
    } else {
      $(this)
        .css('background-color', 'salmon')
        .removeClass('nameValid');
    }
  });
  $('input#mail').keyup(function () {
    removeErrorMessage($(this));

    if ($(this).val().trim().length > 0 &&
      isEmail($(this).val().trim())) {
      $(this)
        .css('background-color', 'lightgreen')
        .addClass('emailValid');
    } else {
      $(this)
        .css('background-color', 'salmon')
        .removeClass('emailValid');
    }
  });
  /* handle title field */
  $('select#title').change(function () {
    removeErrorMessage($(this));
    $(this).css('background-color', 'lightgreen');
    if ($(this).find("option:selected").attr("value") === 'other') {
      $('div.other-title').show();
      $(this).removeClass('jobValid');
    } else {
      $('div.other-title').hide();
      $(this).addClass('jobValid');
    }
  });

  $('input#other-title').keyup(function () {
    removeErrorMessage($(this));
    if ($(this).val().trim()) {
      $(this)
        .css('background-color', 'lightgreen')
        .addClass('jobValid');
    } else {
      //empty string will eval to false
      $(this)
        .css('background-color', 'salmon')
        .removeClass('jobValid');
    }
  });
  /* Hide the "Color" label and select menu until a T-Shirt design is selected */
  $('div#colors-js-puns').hide();
  /* hide fields with JS so they appear when JS disabled */
  $('select#design').change(function () {
    removeErrorMessage($(this));
    var value = $(this).find("option:selected").attr("value");
    switch (value) {
      case "js puns":
        /* For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu. eg. If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."  */
        $('#color').css('background-color', 'lightgreen')
        $("#color option:contains('Cornflower Blue (JS Puns shirt only)')")
          .prop('selected', true);
        $('div#colors-js-puns').show();
        $("#color option:contains('JS Puns shirt only')")
          .show();
        $("#color option:contains('I ♥ JS shirt only')")
          .hide();
        break;
      case "heart js":
        /* If the user selects "Theme - I ♥ JS" then the color menu should only
            display "Tomato," "Steel Blue," and "Dim Grey." */
        $('#color').css('background-color', 'lightgreen');
        $("#color option:contains('Tomato (I ♥ JS shirt only)')")
          .prop('selected', true);
        $('form fieldset.shirt div#colors-js-puns').show();
        $("#color option:contains('JS Puns shirt only')")
          .hide();
        $("#color option:contains('I ♥ JS shirt only')")
          .show();
        break;
      default:
        break;
    }
  });
  /* The "T-Shirt Info” section of the form is valid when a selection has been made for each option selector.*/
  $('select#size').change(function () {
    removeErrorMessage($(this));
    $(this)
      .addClass('validSize')
      .css('background-color', 'lightgreen');
  });

  $('select#design').change(function () {
    removeErrorMessage($(this));
    $(this)
      .addClass('validDesign')
      .css('background-color', 'lightgreen');
  });

  $('select#color').change(function () {
    removeErrorMessage($(this));
    $(this)
      .addClass('validColor')
      .css('background-color', 'lightgreen');
  });

  $('select#size, select#design').change(function () {
    if ($('select#size').hasClass('validSize') &&
      $('select#design').hasClass('validDesign')) {
      // eval two expressions
      $('div#colors-js-puns').show();
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

  /*
    Must select at least one checkbox under the
    "Register for Activities" section of the form.
    There should be an error indication for the
    “Register for Activities” checkboxes.
*/
  setData();
  let totalCost = 0;
  $('.activities').append("<p id='p2'> Total Cost Will Be: $0 </p>");
  $('input[type="checkbox"]').change(function () {
    removeErrorMessage($('.activities'));

    if ($('input[type="checkbox"]:checked').length > 0) {
      $('.activities').addClass('activitiesValid');
    } else {
      $('.activities').removeClass('activitiesValid');
    }

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
  /* Display payment sections based on the payment option chosen in the select menu */
  $('select[id=payment]').change(function () {
    removeErrorMessage($(this));
    /* The "Credit Card" payment option is selected by default in html. */
    var value = $(this).find("option:selected").attr("value");

    switch (value) {
      /* When the "Credit Card" payment option is selected display the #credit-card div, and hide the "Paypal" and "Bitcoin information. */
      case 'credit card':
        $('div.credit-card').show();
        $('div.paypal').hide();
        $('div.bitcoin').hide();
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

  /* There should be an error indication for the credit card number */
  $('input#cc-num').keyup(function () {
    removeErrorMessage($(this));
    /* If the selected payment option is "Credit Card," the user must supply a credit card number, a zip code, and a 3 number CVV value before the form can be submitted. If the user doesn't submit all three then one of them will not be 'valid' and the register button has preventDefault. */
    if ($(this).val().length === 0) {
      /* If the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.”*/
      $(this)
        .css('background-color', 'salmon')
        .removeClass('validCc');
    } else if ($(this).val().length < 13) {
      /* If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is between 13 and 16 digits long.” */
      $(this)
        .css('background-color', 'salmon')
        .removeClass('validCc');
    } else if ($(this).val().length > 16) {
      $(this)
        .css('background-color', 'salmon')
        .removeClass('validCc');
    } else {
      /* Credit card field should only accept a number between 13 and 16 digits */
      if (isNumber($(this).val())) {
        $(this)
          .css('background-color', 'lightgreen')
          .addClass('validCc');
      }
    }
  });
  /* There should be an error indication for the zip code */
  $('input#zip').keyup(function () {
    removeErrorMessage($(this));
    /* The zipcode field should accept a 5-digit number */
    if ($(this).val().length === 5) {
      if (isNumber($(this).val())) {
        $(this)
          .css('background-color', 'lightgreen')
          .addClass('validZip');
      }
    } else {
      $(this)
        .css('background-color', 'salmon')
        .removeClass('validZip');
    }
  });

  /* There should be an error indication for the CVV */
  $('input#cvv').keyup(function () {
    removeErrorMessage($(this));
    /* The CVV should only accept a number that is exactly 3 digits long */
    if ($(this).val().length === 3) {
      if (isNumber($(this).val())) {
        $(this)
          .css('background-color', 'lightgreen')
          .addClass('validCvv');
      }
    } else {
      $(this)
        .css('background-color', 'salmon')
        .removeClass('validCvv');
    }
  });

  /* The register button can only be pressed when all sections are validated. */
  $(document).on('click', 'button:submit', function (e) {

    if (checkClasses()) {
        console.log('COMPLETE');
    } else {
      e.preventDefault();
      if (!$('input#name').hasClass('nameValid')){
        if (!$('input#name').next().is($('small'))){
          $('input#name')
            .after($('<small>Invalid name field.</small>').css('color','red'));
        }
      }
      if (!$('input#mail').hasClass('emailValid')){
        if (!$('input#mail').next().is($('small'))){
          $('input#mail')
            .after($('<small>Invalid email field.</small>').css('color','red'));
        }
      }
      if (!$('select#title').hasClass('jobValid')){
        if($('select#title').find("option:selected").attr("value") === 'other'){
          if (!$('input#other-title').next().is($('small'))) {
            $('input#other-title')
              .after($('<small>Input job role.</small>').css('color','red'));
          }
        } else {
          if (!$('select#title').next().is($('small'))){
            $('select#title')
              .after($('<small>Make a title selection.</small>').css('color','red'));
          }
        }
      }
      if (!$('select#size').hasClass('validSize')){
        if (!$('select#size').next().is($('small'))){
          $('select#size')
            .after($('<small>Make any size selection.</small>').css('color','red'));
        }
      }
      if (!$('select#design').hasClass('validDesign')){
        if (!$('select#design').next().is($('small'))){
          $('select#design')
            .after($('<small>Make any design selection.</small>').css('color','red'));
        }
      }
      if (!$('.activities').hasClass('activitiesValid')){
        if (!$('.activities').next().is($('small'))){
          $('.activities')
            .after($('<small>Check one.</small>').css('color','red'));
        }
      }

      if(isCreditCardSelected()){
        if (!$('input#cc-nums').hasClass('validCc')){
          if (!$('input#cc-num').next().is($('small'))){
            $('input#cc-num')
              .after($('<small>Invalid number.</small>').css('color','red'));
          }
        }
        if (!$('input#zip').hasClass('validZip')){
          if (!$('input#zip').next().is($('small'))){
            $('input#zip')
              .after($('<small>Invalid Zip.</small>').css('color','red'));
          }
        }
        if (!$('input#cvv').hasClass('validCvv')){
          if (!$('input#cvv').next().is($('small'))){
            $('input#cvv')
              .after($('<small>Invalid Cvv.</small>').css('color','red'));
          }
        }
      }
      console.log('INCOMPLETE');
    }
  });
});