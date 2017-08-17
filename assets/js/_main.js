/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){

  // Sticky footer
  var bumpIt = function() {
      $('body').css('margin-bottom', $('.page__footer').outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper #toggle-nav").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper #toggle-nav").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper #toggle-nav").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper #toggle-nav").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper #toggle-nav").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  if((window.location.href.indexOf("/he_IL/") > -1) || (window.location.href.indexOf("/ar_SA/") > -1)) {
    $(".nav-selector").css("left", "3rem");
    $(".lang-selector").css("left", "0");
    $(".links-menu").css("right", "auto");
    $(".lang-menu").css("right", "auto");
    $(".links-menu").css("left", "3rem");
    $(".lang-menu").css("left", "0");
    $('.greedy-nav').prepend('<style>.hidden-links:before{right:auto !important;}</style>');
    $('.greedy-nav').prepend('<style>.hidden-links:after{right:auto !important;}</style>');
    $('.greedy-nav').prepend('<style>.hidden-links:before{left:14px !important;}</style>');
    $('.greedy-nav').prepend('<style>.hidden-links:after{left:14px !important;}</style>');
    $(".masthead__menu-item--lg").css("padding-right", "inherit");
    $(".masthead__menu-item--lg").css("padding-left", "2em");
    document.body.style.direction = "rtl";
  }

});
