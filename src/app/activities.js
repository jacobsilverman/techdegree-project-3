function setData(){
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

$(function(){
    setData()
    let totalCost = 0;
    $('.activities').append("<p id='p2'> Total Cost Will Be: $0 </p>");
    $('input[type="checkbox"]').change(function () {
/* 
    Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available. I use !currentBool when a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
*/
        if ($('.activities').data("checkbox")[$(this).prop('name')].conflict){
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
        

        /* 
            Must select at least one checkbox under the 
            "Register for Activities" section of the form. 
            There should be an error indication for the 
            “Register for Activities” checkboxes.
        */
        if($('.activities').find($('input:checked'))){
            $('button[type="submit"]').addClass('activitiesValid');
        }
    });
});