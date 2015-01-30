// var listener = new window.keypress.Listener();
var current = 0, size = 1, loader = 0;
var timer = null, speed = 8000;
var transitioning = false;

var phrases = ['P. Sherman, 42, Sidney.', 'Zhu Li, do the thing!', 'To infinity, and beyond!', 'I like to move it, move it', 'The answer is 42', 'Gotta catch\'em all!', 'Brain, what you wanna do tonight?', 'Go, Appa! Yip yip!', 'Azarath metrion zinthos', 'Evaaa, WALL-EEEEE', 'Luke, I am your father'];

var colours = [['#315714', '#60a928'], ['#172b62', '#5578d7'], ['#000000', '#a5d302'], ['#363435', '#FF6600']];

// listener.sequence_combo('up up down down left right left right b a enter', function() {
//     // Make something funky here!
// });

function mod (n, m) {
    return ((n % m) + m) % m;
}

function load () {
    if (transitioning) {
        timer = setInterval(load, speed + 5);
        return;
    }

    $('#bar').animate({width: '100%'}, speed, function(){
        $('#bar').css('width', '0');
        slide(+1);
    });
}

function slide (n) {
    if (transitioning)
        return;

    transitioning = true;

    clearTimeout(timer);
    $('#bar').stop().css('width', '0');

    $('#prj-' + current).fadeOut('slow', function(){
        current = mod(current + n, size);
        
        $('.block-4 h1').css('color', colours[current][0]);
        $('.block-4, .block-4 b').css('background', colours[current][1]);

        $('#prj-' + current).fadeIn('slow', function () {
            transitioning = false;
            timer = setInterval(load, speed + 5);
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

    $('.left').click(function(){
        slide(-1);
    });

    $('.right').click(function(){
        slide(+1);
    });

    window.addEventListener('focus', function() {
        timer = setInterval(load, speed + 5);
    });

    window.addEventListener('blur', function() {
        clearTimeout(timer);
        $('#bar').css('width', '0');
    });

    $('#postit').text(phrases[~~(Math.random() * phrases.length)]);

    $('#fullpage').fullpage({
        verticalCentered: false,
        resize: false,
        loopBottom: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        menu: '#menu',

        onLeave: function(index, nextIndex, direction) {
            $('#menu li:nth-child(' + index + ') i').removeClass().addClass('icon-circle-thin');
            $('#menu li:nth-child(' + nextIndex + ') i').removeClass().addClass('icon-circle');
        },

        afterRender : function () {
            load();

            $('#mask').fadeOut();
            $('.loader span').stop().stop();
        }
    });
});