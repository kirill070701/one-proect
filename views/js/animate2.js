
var isMobile = false;
// проверка на размер экрана (размер я брал вроде с Bootstrap-а)
$(document).ready( function() {
    if ($('body').width() <= 400) {
        isMobile = true;
    }
    // и потом если нужен код только для телефона:
    if (isMobile) {
      let x = document.querySelector(".temaone")
      setTimeout(function(){
        x.style.animation = "fade 1s";
        x.style.opacity = "1"
      },500)

      let y = document.querySelector(".tematwo")
      setTimeout(function(){
        y.style.animation = "fade 1s";
        y.style.opacity = "1"
      },500)

      let z = document.querySelector(".temathree")
      setTimeout(function(){
        z.style.animation = "fade 1s";
        z.style.opacity = "1"
      },500)

      let t = document.querySelector(".temafour_mobil")
      setTimeout(function(){
        t.style.animation = "fade 1s";
        t.style.opacity = "1"
      },500)





      $(function () {
        var element = $(".ferst_selection"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 300;
          displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 450) ;
        });
      });
      
      $(function () {
        var element = $(".second_selection"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 450;
          displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 450) ;
        });
      });
      
      $(function () {
        var element = $(".third_selection"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 750;
          displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 450) ;
        });
      });
      
      $(function () {
        var element = $(".fourth_selection"), displayq;
        $(window).scroll(function () {
          displayq = $(this).scrollTop() >= 850;
          displayq != element.css('opacity') && element.stop().animate({  'opacity': 1  }, 450) ;
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
