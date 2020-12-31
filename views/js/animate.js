$(function () {
    var element = $("#hid"), display;
    $(window).scroll(function () {
      display = $(this).scrollTop() >= 600;
      display != element.css('opacity') && element.stop().animate({  'opacity': 0.5  }, 400) ;
    });

  });




