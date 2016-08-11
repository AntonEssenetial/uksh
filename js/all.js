$(document).ready(function() {

  // Custom scroll

  (function($){
    $(window).load(function(){
      $(".scroll-wrap").mCustomScrollbar({
        scrollInertia:100,
        contentTouchScroll: true,
        autoExpandScrollbar: true
      });
    });
  })(jQuery);

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
  var acordion = $('.jsAcord, .jsNavgoco')
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
  var slider4 = $('.bx-slider-4').bxSlider({
    pager: true,
    controls: true,
    auto: true,
    speed: 1000,
    pause: 7000,
    minSlides: 2,
    maxSlides: 7,
    slideWidth: 282,
    slideMargin: 40,
    responsive: true,
    nextSelector: '.s-next',
    prevSelector: '.s-prev',
    nextText: '',
    prevText: ''
  });
  var slider5 = $('.bx-silder-5').bxSlider({
    pager: false,
    controls: true,
    auto: true,
    speed: 1000,
    pause: 7000,
    minSlides: 6,
    maxSlides: 16,
    slideWidth: 60,
    slideMargin: 5
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

  // Lightgallery
  $(".bx-slider-4, .tab, .lic-gal").lightGallery(); 
  
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
    $('.scroll-wrap').css( 
      'height', $('.section__sl .slide img').height()
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

  // Auto height

  equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {
  
     $el = $(this);
     $($el).height('auto')
     topPostion = $el.position().top;
  
     if (currentRowStart != topPostion) {
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.height();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }
  
  $(window).load(function() {
    equalheight('.section__obj__wrap');
  });
  
  
  $(window).resize(function(){
    equalheight('.section__obj__wrap');
  });

  // CHarts
  AmCharts.makeChart("chartdiv",
    {
  "type": "serial",
  "categoryField": "category",
  "autoMarginOffset": 0,
  "marginBottom": 0,
  "marginLeft": 0,
  "marginRight": 0,
  "marginTop": 0,
  "colors": [
    "#fcc100",
    "#FCD202",
    "#B0DE09",
    "#0D8ECF",
    "#2A0CD0",
    "#CD0D74",
    "#CC0000",
    "#00CC00",
    "#0000CC",
    "#DDDDDD",
    "#999999",
    "#333333",
    "#990000"
  ],
  "startDuration": 1,
  "theme": "default",
  "categoryAxis": {
    "autoRotateAngle": 0,
    "gridPosition": "start",
    "minPeriod": "YYYY",
    "axisAlpha": 0.65,
    "offset": 1
  },
  "trendLines": [],
  "graphs": [
    {
      "balloonText": "[[title]] [[category]]:[[value]]",
      "fillAlphas": 1,
      "id": "AmGraph-2",
      "tabIndex": 3,
      "title": "",
      "type": "column",
      "valueField": "column-2"
    }
  ],
  "guides": [],
  "valueAxes": [
    {
      "id": "ValueAxis-1",
      "title": ""
    }
  ],
  "allLabels": [],
  "balloon": {
    "textAlign": " middle"
  },
  "legend": {
    "enabled": false,
    "marginLeft": 0,
    "marginRight": 0,
    "useGraphSettings": true
  },
  "titles": [
    {
      "id": "Title-1",
      "size": 15,
      "text": ""
    }
  ],
  "dataProvider": [
    {
      "category": "2003",
      "column-2": "8"
    },
    {
      "category": "2004",
      "column-2": "11"
    },
    {
      "category": "2005",
      "column-2": "10"
    },
    {
      "category": "2006",
      "column-2": "9"
    },
    {
      "category": "2007",
      "column-2": "10"
    },
    {
      "category": "2008",
      "column-2": "10"
    },
    {
      "category": "2009",
      "column-2": "15"
    },
    {
      "category": "2010",
      "column-2": "15.5"
    },
    {
      "category": "2011",
      "column-2": "16"
    },
    {
      "category": "2012",
      "column-2": "17"
    }
  ]
}
  );

});

