// QUnit.test("name input empty", function (assert) {
//     assert.ok(1 == "1", "Passed!");
// });

// import setFocus from './index';

QUnit.test("name input focused", function (assert) {
    // $(document).ready(function () {
    //     setFocus();
    // });
    // assert.ok(1 == "1", "Passed!");
    // // collect all the fields
    // // check that there is one with id=name
    // // if true then test PASS
    // var $aWithId = $('.parent a[id]'); 
    assert($('input#name'), 'input with id=name exists');
});