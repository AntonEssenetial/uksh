$(document).ready(function() {
  // Active tabs
  $(".jsTab").click(function() {
    $(".jsTab").removeClass("active").eq($(this).index()).addClass("active");
    $(".jsCont").hide().eq($(this).index()).fadeIn()
  }).eq(0)

  // popup
  var popup = $('.popup-wrapper')
  $('.js__popup').click(function(event) {
    popup.addClass('jsVisible');
  });
  $('.close').click(function(event) {
    popup.removeClass('jsVisible');
    $(this).closest('.jsVisible').removeClass('jsVisible');
  });

  // Navgoco acordion
  var acordion = $()
  acordion.navgoco({accordion: true});

  // Bx slider
  $().bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000,
    mode: 'fade'
  });
  $().bxSlider({
    pager: true,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 5000,
    pagerCustom: '.bx__pager',
    responsive: true,
    // nextSelector: '.s-next',
    // prevSelector: '.s-prev',
    // nextText: '↽',
    // prevText: '↽'
  });

  // Slick slider
  $().slick({
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: false,
  slidesToShow: 15,
  slidesToScroll: 9,
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  // Custom scroll function
  (function($){
    $(window).load(function(){
      // $().mCustomScrollbar({
      //   scrollInertia:100,
      //   contentTouchScroll: false,
      //   autoExpandScrollbar: true
      // });
      $().mCustomScrollbar({
        scrollInertia:100,
        axis:"x",
        setWidth: false,
        setHeight: false,
        contentTouchScroll: false,
        autoExpandScrollbar: true
      });
    });
  })(jQuery);

  // Scroll to top
  $().click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
  });

  // Height detect funciton
  function heightDetect(){
    $().css( 
      'height', $(window).height()
    );
  };
  heightDetect();
  $(window).resize(function(){
    heightDetect();
  });

});

