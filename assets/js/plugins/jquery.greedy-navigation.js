/*
GreedyNav.js - https://github.com/lukejacksonn/GreedyNav
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/

$(document).ready(function(){

  var $btn1 = $('nav.greedy-nav button.navsel');
  var $btn2 = $('nav.greedy-nav button.langsel');
  var $vlinks = $('nav.greedy-nav .visible-links');
  var $hlinks1 = $('nav.greedy-nav .hidden-links.links-menu');
  var $hlinks2 = $('nav.greedy-nav .hidden-links.lang-menu');

  var numOfItems = 0;
  var totalSpace = 0;
  var closingTime = 1000;
  var breakWidths = [];

  // Get initial state
  $vlinks.children().outerWidth(function(i, w) {
    totalSpace += w;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });

  var availableSpace, numOfVisibleItems, requiredSpace, timer1, timer2;

  function check() {

    // Get instant state
    availableSpace = $vlinks.width() - 10;
    numOfVisibleItems = $vlinks.children().length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];

    // There is not enough space
    if (requiredSpace > availableSpace) {
      $vlinks.children().last().prependTo($hlinks1);
      numOfVisibleItems -= 1;
      check();
      // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      $hlinks1.children().first().appendTo($vlinks);
      numOfVisibleItems += 1;
      check();
    }
    // Update the button accordingly
    $btn1.attr("count", numOfItems - numOfVisibleItems);
    if (numOfVisibleItems === numOfItems) {
      $btn1.addClass('hidden');
    } else {
      $btn1.removeClass('hidden');
    }
  }

  // Window listeners
  $(window).resize(function() {
    check();
  });

  $btn1.on('click', function() {
    if($hlinks1.is(":visible")){
      $hlinks1.addClass('hidden');
      $(this).removeClass('close');
    } else {
      $hlinks1.removeClass('hidden');
      $(this).addClass('close');
      $hlinks2.addClass('hidden');
      $btn2.removeClass('close');
      clearTimeout(timer2);
    }
  });

  $hlinks1.on('mouseleave', function() {
    // Mouse has left, start the timer1
    timer1 = setTimeout(function() {
      $hlinks1.addClass('hidden');
      $btn1.removeClass('close');
    }, closingTime);
  }).on('mouseenter', function() {
    // Mouse is back, cancel the timer1
    clearTimeout(timer1);
  })

  $btn2.on('click', function() {
    if($hlinks2.is(":visible")){
      $hlinks2.addClass('hidden');
      $(this).removeClass('close');
    } else {
      $hlinks2.removeClass('hidden');
      $(this).addClass('close');
      $hlinks1.addClass('hidden');
      $btn1.removeClass('close');
      clearTimeout(timer1);
    }
  });

  $hlinks2.on('mouseleave', function() {
    // Mouse has left, start the timer2
    timer2 = setTimeout(function() {
      $hlinks2.addClass('hidden');
      $btn2.removeClass('close');
    }, closingTime);
  }).on('mouseenter', function() {
    // Mouse is back, cancel the timer2
    clearTimeout(timer2);
  })

  check();

});
