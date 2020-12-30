$(function () {
    var element = $("#hid"), display;
    $(window).scroll(function () {
      display = $(this).scrollTop() >= 1350;
      display != element.css('opacity') && element.stop().animate({ 'opacity': display }, 350);
    });

  });