/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav #toggle-nav');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links.links-menu');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 80;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children().last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  if($hlinks.is(":visible")){
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
  } else {
    $hlinks.removeClass('hidden');
    $('.lang-menu').addClass('hidden');
    $btn.addClass('close');
    $('.lang-selector').removeClass('close');
  }
});

// Language selector button
$('.lang-selector').on('click', function() {
  if($('.lang-menu').is(":visible")){
    $('.lang-menu').addClass('hidden');
    $('.lang-selector').removeClass('close');
  } else {
    $('.lang-menu').removeClass('hidden');
    $('.lang-selector').addClass('close');
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
  }
});

updateNav();
