
var isMobile = false;
// проверка на размер экрана (размер я брал вроде с Bootstrap-а)
$(document).ready( function() {
    if ($('body').width() <= 400) {
        isMobile = true;
    }
    // и потом если нужен код только для телефона:
    if (isMobile) {
      $(function () {
        var element = $(".temaone"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 150;
          displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 200) ;
        });
      });
      
      $(function () {
        var element = $(".tematwo"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 150;
          displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 300) ;
        });
      });
      
      
      $(function () {
        var element = $(".temathree"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 150;
          displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
        });
      });
      
      $(function () {
        var element = $(".temafour"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 150;
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

    }
    // или для остальных
    if (!isMobile) {

    




$(function () {
  var element = $(".temaone"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 150;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 200) ;
  });
});

$(function () {
  var element = $(".tematwo"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 150;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 300) ;
  });
});


$(function () {
  var element = $(".temathree"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 150;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
  });
});

$(function () {
  var element = $(".temafour"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 150;
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

$(function () {
  var element = $(".ferst_selection"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 1100;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
  });
});

$(function () {
  var element = $(".second_selection"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 1400;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
  });
});

$(function () {
  var element = $(".third_selection"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 2000;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
  });
});

$(function () {
  var element = $(".fourth_selection"), displayq;
  $(window).scroll(function () {
    displayq = $(this).scrollTop() >= 2500;
    displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 400) ;
  });
});

}
} );
