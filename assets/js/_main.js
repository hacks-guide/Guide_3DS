/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {

  // external links should open in a new tab
  var host = location.hostname
  var allLinks = document.querySelectorAll('a')
  for (var i = 0; i < allLinks.length; ++i) {
    if (allLinks[i].hostname !== host && allLinks[i].hostname !== '') {
      allLinks[i].target = '_blank'
    }
  }

  // FitVids init
  $("#main").fitVids();

  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
    } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });

  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });

  // Smooth scrolling
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 20,
    speed: 400,
    speedAsDuration: true,
    durationMax: 500
  });

  // Gumshoe scroll spy init
  if($("nav.toc").length > 0) {
    var spy = new Gumshoe("nav.toc a", {
      // Active classes
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content

      // Nested navigation
      nested: false, // if true, add classes to parents of active link
      nestedClass: "active", // applied to the parent items

      // Offset & reflow
      offset: 20, // how far from the top of the page to activate a content area
      reflow: true, // if true, listen for reflows

      // Event support
      events: true // if true, emit custom events
    });
  }

  // add lightbox class to all image links
  $(
    "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']"
  ).addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Add anchors for headings
  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function() {
    var id = $(this).attr('id');
    if (id) {
      var anchor = document.createElement("a");
      anchor.className = 'header-link';
      anchor.href = '#' + id;
      anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fas fa-link\"></i>';
      anchor.title = "Permalink";
      $(this).append(anchor);
    }
  });

  // Custom sidebar, guide-specific

  if((window.location.href.indexOf("/he_IL/") > -1) || (window.location.href.indexOf("/ar_SA/") > -1)) {
    $("body").css("direction", "rtl");

    $("nav.greedy-nav .nav-selector").css("left", "2.5rem");
    $("nav.greedy-nav .lang-selector").css("left", ".2rem");

    $("nav.greedy-nav .links-menu").css("right", "auto");
    $("nav.greedy-nav .lang-menu").css("right", "auto");

    $("nav.greedy-nav .links-menu").css("left", "2.5rem");
    $("nav.greedy-nav .lang-menu").css("left", ".2rem");

    $("nav.greedy-nav .visible-links").css("padding-right", "0");
    $("nav.greedy-nav .visible-links").css("padding-left", "2rem");

    $("nav.greedy-nav .visible-links li:first-child a").css("margin-right", "0");
    $("nav.greedy-nav .visible-links li:first-child a").css("margin-left", "1rem");

    $("nav.greedy-nav .visible-links li:first-child").css("padding-right", "0");
    $("nav.greedy-nav .visible-links li:first-child").css("padding-left", "2em");

    $("nav.greedy-nav .visible-links li:last-child a").css("margin-right", "1rem");
    $("nav.greedy-nav .visible-links li:last-child a").css("margin-left", "0");

    // for some reason js cannot directly modify :before and :after pseudo-elements' css
    $('nav.greedy-nav').prepend('<style>.hidden-links:before{right:inherit !important;}</style>');
    $('nav.greedy-nav').prepend('<style>.hidden-links:before{left:5px !important;}</style>');

    $('nav.greedy-nav').prepend('<style>.hidden-links:after{right:inherit !important;}</style>');
    $('nav.greedy-nav').prepend('<style>.hidden-links:after{left:5px !important;}</style>');
  }

  var sidebar_shown = true;
  var sidebar_hidden_pages = ["404", "a9lh-to-b9s", "credits", "donations", "dumping-titles-and-game-cartridges",
                              "f3-(linux)", "f3xswift-(mac)", "faq", "file-extensions-(windows)",
                              "godmode9-usage", "h2testw-(windows)", "region-changing", "site-navigation", "troubleshooting",
                              "uninstall-cfw","updating-b9s", "why-ads", "privacy-policy", "checking-for-cfw"];

  for(var i = 0; i < sidebar_hidden_pages.length; i++){
    if(window.location.href.indexOf(sidebar_hidden_pages[i]) > -1) {
      sidebar_shown = false;
    }
  }

  var devices = {
    "get-started-(old-3ds)": "0",
    "get-started-(new-3ds)": "1",
  };

  // The pages used to lookup which route to display
  // parsed from the location of the url
  // the value is the key to the displayed route in the device_common/old/new variable below
  // 
  var methods = {
    "installing-boot9strap-(soundhax)": "0",
    "ntrboot": "1",
    "flashing-ntrboot-(3ds-single-system)": "2",
    "flashing-ntrboot-(3ds-multi-system)": "3",
    "flashing-ntrboot-(dsi)": "4",
    "flashing-ntrboot-(nds)": "5",
    "installing-boot9strap-(hardmod)": "6",
    "seedminer": "7",
    "installing-boot9strap-(fredtool)": "8",
    "bannerbomb3": "9",
    "installing-boot9strap-(usm)": "10",
    "installing-boot9strap-(kartdlphax)": "11",
    "bannerbomb3-fredtool-(twn)": "12",
    "installing-boot9strap-(ssloth-browser)": "13",
    "key-information": "14",
    "seedminer-(twn)": "15",
    "installing-boot9strap-(frogtool)": "16",
    "installing-boot9strap-(hbl-usm)": "17",
    "homebrew-launcher-(super-skaterhax)": "18",
    "dumping-movable-(nimhax)": "19",
    "installing-boot9strap-(safecerthax)": "20",
    "updating-firmware-(twn)": "21",
    "updating-firmware-(kor)": "22",
    "updating-firmware-(new-3ds)": "23",
    "seedminer-(mii)": "24",
    "bannerbomb3-(legacy)": "25",
    "installing-boot9strap-(menuhax)": "26",
    "alternate-exploits": "27",
    "homebrew-launcher-(ninjhax2-dx)": "28",
    "homebrew-launcher-(smilehax-iie)": "29",
    "seedminer-(alternate)": "30",
    "homebrew-launcher-(pichaxx)": "31",
    "homebrew-launcher-(steelhax)": "32",
    "homebrew-launcher-(freakyhax)": "33",
    "dumping-eshop-dsiware": "34",
    "installing-boot9strap-(fredtool-inject)": "35"
  };

  for(var device in devices){
    if(window.location.href.indexOf("/" + device) > -1) {
      localStorage.setItem('device', devices[device]);
    }
  }

  for(var method in methods){
    if(window.location.href.indexOf("/" + method) > -1) {
      localStorage.setItem('method', methods[method]);
    }
  }

  var device, method;
  if(!(method = localStorage.getItem('method'))){
    sidebar_shown = false;
  }
  if (!(device = localStorage.getItem('device'))) {
    device = "-1";
  }
  if(sidebar_shown){
    var unhide = [];

    // Common paths for navigation. Added to both routes.
    // These values of the array will be mapped to the _data/navigation/country_lang.yml files
    // be sure to add the relevent values to it, in the order of display. (finalizing setup last, for instance)
    // 
    // The key/propery name must match the value associated with the page in the methods variable above
    //
    var device_common = {
      "0": ["installing-boot9strap-(soundhax)", "finalizing-setup"],
      "1": ["ntrboot", "multiple-options", "installing-boot9strap-(ntrboot)", "finalizing-setup"],
      "2": ["ntrboot", "flashing-ntrboot-(3ds-single-system)", "installing-boot9strap-(ntrboot)", "finalizing-setup"],
      "3": ["ntrboot", "flashing-ntrboot-(3ds-multi-system)", "installing-boot9strap-(ntrboot)", "finalizing-setup"],
      "4": ["ntrboot", "flashing-ntrboot-(dsi)", "installing-boot9strap-(ntrboot)", "finalizing-setup"],
      "5": ["ntrboot", "flashing-ntrboot-(nds)", "installing-boot9strap-(ntrboot)", "finalizing-setup"],
      "6": ["installing-boot9strap-(hardmod)", "finalizing-setup"],
      "7": ["seedminer", "bannerbomb3", "multiple-options", "finalizing-setup"],
      "8": ["seedminer", "bannerbomb3", "installing-boot9strap-(fredtool)", "finalizing-setup"],
      "9": ["seedminer", "bannerbomb3", "multiple-options", "finalizing-setup"],
      "10": ["multiple-options", "installing-boot9strap-(usm)", "finalizing-setup"],
      "11": ["installing-boot9strap-(kartdlphax)", "finalizing-setup"],
      "12": ["seedminer-(twn)", "bannerbomb3-fredtool-(twn)", "finalizing-setup"],
      "13": ["installing-boot9strap-(ssloth-browser)", "finalizing-setup"],
      "14": ["multiple-options", "finalizing-setup"],
      "15": ["seedminer-(twn)", "bannerbomb3-fredtool-(twn)", "finalizing-setup"],
      "16": ["multiple-options", "installing-boot9strap-(frogtool)", "finalizing-setup"],
      "17": ["multiple-options", "installing-boot9strap-(hbl-usm)", "finalizing-setup"],
      "18": ["homebrew-launcher-(super-skaterhax)", "multiple-options", "finalizing-setup"],
      "19": ["multiple-options", "dumping-movable-(nimhax)", "installing-boot9strap-(frogtool)", "finalizing-setup"],
      "20": ["installing-boot9strap-(safecerthax)", "finalizing-setup"],
      "21": ["updating-firmware-(twn)", "seedminer-(twn)", "bannerbomb3-fredtool-(twn)", "finalizing-setup"],
      "22": ["updating-firmware-(kor)", "seedminer", "bannerbomb3", "multiple-options", "finalizing-setup"],
      "23": ["updating-firmware-(new-3ds)", "homebrew-launcher-(super-skaterhax)", "multiple-options", "finalizing-setup"],
      "24": ["seedminer-(mii)", "bannerbomb3-(legacy)", "multiple-options", "finalizing-setup"],
      "25": ["seedminer-(mii)", "bannerbomb3-(legacy)", "multiple-options", "finalizing-setup"],
      "26": ["seedminer-(mii)", "bannerbomb3-(legacy)", "installing-boot9strap-(menuhax)", "finalizing-setup"],
      "27": ["alternate-exploits", "multiple-options", "finalizing-setup"],
      "28": ["alternate-exploits", "homebrew-launcher-(ninjhax2-dx)", "multiple-options", "finalizing-setup"],
      "29": ["alternate-exploits", "homebrew-launcher-(smilehax-iie)", "multiple-options", "finalizing-setup"],
      "30": ["alternate-exploits", "seedminer-(alternate)", "multiple-options", "finalizing-setup"],
      "31": ["alternate-exploits", "seedminer-(alternate)", "homebrew-launcher-(pichaxx)", "multiple-options", "finalizing-setup"],
      "32": ["alternate-exploits", "seedminer-(alternate)", "homebrew-launcher-(steelhax)", "multiple-options", "finalizing-setup"],
      "33": ["alternate-exploits", "homebrew-launcher-(freakyhax)", "multiple-options", "finalizing-setup"],
      "34": ["alternate-exploits", "seedminer-(alternate)", "dumping-eshop-dsiware", "installing-boot9strap-(fredtool-inject)", "finalizing-setup"],
      "35": ["alternate-exploits", "seedminer-(alternate)", "dumping-eshop-dsiware", "installing-boot9strap-(fredtool-inject)", "finalizing-setup"],
    }
    // Can add custom routing if necessary but currently both routes are identical
    var device_old =  Object.assign({}, device_common,{
      // custom routing here
      // example: "24": ["seedminer", "multiple-options", "installing-boot9strap-(pichaxx)", "finalizing-setup"],
    });
    var device_new = Object.assign({}, device_common,{
      // custom routing here
    });
    var route = {
      "-1": device_common,
      "0": device_old,
      "1": device_new,
    }
    unhide = unhide.concat(route[device][method]);
    if(typeof unhide !== 'undefined' && unhide.length > 0){
      unhide.push("key-information")
      unhide.push("get-started");
      var ol = $('.sidebar.sticky .nav__list .nav__items ol');
      for (var i = 0; i < unhide.length; i++){
        ol.children('li[data-name="' + unhide[i] + '"]').css("display", "");
      }
      ol.children().each(function(idx, li) {
        var link = $(li).find("a").attr('href');
        var name = $(li).attr('data-name');
        if((window.location.href.endsWith(link) ||
            window.location.href.endsWith(link + "/") ||
            window.location.href.indexOf(link + "#") > -1 ||
            window.location.href.indexOf(link + ".html") > -1)
            && name !== "home"){
          $(li).addClass("active");
          return false;
        }
        $(li).addClass("completed");
      });
      if (ol.children(".active").css("display") != "none"){
        $('.sidebar.sticky').css("display", "inherit");
      }
    }
  }
});
