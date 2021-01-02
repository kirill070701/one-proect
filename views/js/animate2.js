$(function () {
  var element = $(".temaone"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 100;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 200) ;
  });
});

$(function () {
  var element = $(".tematwo"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 100;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 300) ;
  });
});


$(function () {
  var element = $(".temathree"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 100;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
  });
});

$(function () {
  var element = $(".temafour"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 100;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 500) ;
  });
});

$(function () {
  var element = $(".temafour_mobil"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 100;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 500) ;
  });
});
 