$(document).ready(function() {

  // Search
  $('.search').click(function(event) {
    $('.morphsearch').toggleClass('open');
  });
  $('.morphsearch-close').click(function(event) {
    $('.morphsearch').removeClass('open');
  });

  // Animate numbers 
  $(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 1050) {
            $(window).off("scroll", startCounter);
            $('.jsNum').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }
  
  // Scroll to top
  $('.jsTop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
  });

  // lang selector
  $('.jsLang').click(function(event) {
    $(this).closest('.header__lang').toggleClass('active');
  });
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
  var acordion = $('.jsAcord')
  acordion.navgoco({accordion: true});

  // Bx slider
  var slider1 = $('.bx-slider-1').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000
  });
  var slider2 = $('.bx-slider-2').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000
  });
  var slider3 = $('.bx-slider-3').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000,
    minSlides: 2,
    maxSlides: 7,
    slideWidth: 200,
    slideMargin: 100
  });

  $('#next').click(function(){
    slider1.goToNextSlide();
    slider2.goToPrevSlide();
    return false
  });
  $('#prev').click(function(){
    slider1.goToPrevSlide();
    slider2.goToNextSlide();
    return false
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
  slidesToScroll: 9
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
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

  // Width detect funciton
  function widthDetect(){
    $('.header__responsive-menu').css( 
      'width', $(window).width()
    );
  };
  widthDetect();
  $(window).resize(function(){
    widthDetect();
  });

  // toggle menu
  $('.jsTag').click(function(event) {
    $(this).toggleClass('active')
    $('.header__responsive-menu').toggleClass('active animated fadeIn');
    // $('.menu').toggleClass('active animated fadeInUp');
  });

});

