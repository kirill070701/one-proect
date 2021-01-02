$(function () {
    var element = $("#hid"), displayl;
    $(window).scroll(function () {
      displayl = $(this).scrollTop() >= 1200;
      displayl != element.css('opacity') && element.stop().animate({  'opacity': 0.5  }, 300) ;
    });
  });


  



