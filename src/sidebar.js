$(document).ready(function () {
  var trigger = $('.hamburger'),
    // overlay = $('.overlay'),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      trigger.removeClass('fa fa-caret-square-o-right fa-4x');
      trigger.addClass('fa fa-caret-square-o-left fa-4x');
      isClosed = false;
    } else {
      isClosed = true;
    }


  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
});