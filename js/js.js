var listener = new window.keypress.Listener();

listener.sequence_combo("up up down down left right left right b a enter", function() {
	$('#plane-one').css({left: '-1em', bottom: '-1em'});
	$('#plane-one').removeClass('plane-animation');

	setTimeout(function(){
		$('#plane-one').addClass('plane-animation');
	}, 5);
});