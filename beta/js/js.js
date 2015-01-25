var listener = new window.keypress.Listener();

var phrases = ['P. Sherman, 42, Sidney.', 'Zhu Li, do the thing!', 'To infinity, and beyond!', 'I like to move it, move it', '42', 'Gotta catch\'em all!'];

listener.sequence_combo('up up down down left right left right b a enter', function() {
	// Make something funky here!
});

$(document).ready(function(){
	$('#postit').text(phrases[~~(Math.random() * phrases.length)]);

	// $('section').snapPoint({
	// 	scrollSpeed: 150
	// });
	
	// $('#fullpage').fullpage({
	// 	verticalCentered: false,
	// 	scrollingSpeed: 400
	// });
});

//window.sr = new scrollReveal({
	// reset : true
//});