$(function () {
    var element = $("#info"), display;
    $(window).scroll(function () {
      display = $(this).scrollTop() >= 1000;
      display != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
    });

  });