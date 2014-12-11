var listener = new window.keypress.Listener();

listener.sequence_combo('up up down down left right left right b a enter', function() {
	// Make something funky here!
});

$(document).ready(function(){
	$('section').snapPoint({
		scrollSpeed: 200
	});
});
