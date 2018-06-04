import '../style/style.css';
import './name';
import './email';
import './job';
import './tshirt';
import './activities';
// import './payment';

$(function () {
    $('button[type="submit"]').click(function (e) {
        if ($('button[type="submit"]').hasClass('tshirtValid, nameValid, emailValid, activitiesValid')){
            console.log('COMPLETE')
            e.preventDefault();
        } else {
            console.log('INCOMPLETE');
            e.preventDefault();
        }
    });
});

