// var listener = new window.keypress.Listener();
var current = 0, size = 1, loader = 0;
var timer = null, speed = 8000;
var transitioning = false;
var modifier = '';
var last = -1;

var phrases = [
  'P. Sherman, 42, Sidney.',
  'Zhu Li, do the thing!',
  'To infinity, and beyond!',
  'I like to move it, move it',
  'The answer is 42',
  'Gotta catch\'em all!',
  'Brain, what you wanna do tonight?',
  'Go, Appa! Yip yip!',
  'Azarath metrion zinthos',
  'Evaaa, WALL-EEEEE',
  'Luke, I am your father'
];

var colours = [
  ['#000000', '#E7E737'],
  ['#324F36', '#60a928'],
  ['#172b62', '#5578d7'],
  ['#000000', '#a5d302']
];

// listener.sequence_combo('up up down down left right left right b a enter', function() {
//     // Make something funky here!
// });

function mod (n, m) {
  return ((n % m) + m) % m;
}

function load () {
  if (transitioning) {
    return;
  }

  $('#bar').animate({width: '100%'}, speed, function(){
    $('#bar').css('width', '0');
    slide(+1);
  });
}

function change_postit () {
  var die = last;

  while (die === last) {
    die = ~~(Math.random() * phrases.length);
  }

  last = die;

  $('#postit').animate({top: '+=3%', opacity: 0}, 'fast', function () {
    $('#postit').text(phrases[die]);
    $('#postit').css('top', '77%').animate({top: '+=3%', opacity: 1}, 'fast');
  });
}

function slide (n) {
  if (transitioning) {
    return;
  }

  transitioning = true;

  clearTimeout(timer);
  $('#bar').stop().css('width', '0');

  $('#prj-' + current + modifier).fadeOut('slow', function(){
    current = mod(current + n, size);

    $('.block-4 h1').css('color', colours[current][0]);
    $('.block-4, .block-4 b').css('background', colours[current][1]);

    $('#prj-' + current + modifier).fadeIn('slow', function () {
        transitioning = false;
        timer = setTimeout(load, 5);
    });
  });
}

$(document).ready(function(){
  function loop () {
    $('.loader span')
        .animate({opacity: 0.5}, 'slow')
        .animate({opacity: 1}, 'slow', loop);
  }

  loop();

  size = $('.panel > div').length;

  $('.block-4 h1').css('color', colours[current][0]);
  $('.block-4, .block-4 b').css('background', colours[current][1]);

  $('.left').click(function(){
    slide(-1);
  });

  $('.right').click(function(){
    slide(+1);
  });

  modifier = ($('.smaller').css('display') === 'block') ? 's' : '';

  window.addEventListener('focus', function() {
    load();
  });

  window.addEventListener('blur', function() {
    clearTimeout(timer);
    transitioning = false;
    $('#bar').stop().css('width', '0');
  });

  $('#postit').click(change_postit);
  change_postit();

  $('#fullpage').pagepiling({
    verticalCentered: false,
    anchors: ['hello', 'me', 'services', 'awards', 'work', 'contact'],
    css3: true,
    navigation: {
      'position': 'left'
    },

    afterRender : function () {
      load();
      $('#mask').fadeOut();
      $('.loader span').stop().stop();
    }
  });
});
