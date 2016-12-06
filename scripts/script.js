$(document).ready(function(){
	$('#menu_button').click(function() {
		$('#side_nav, #overlay').show('slow');
		$('html ,body').css('overflow','hidden');
	});
	$('#close_button, #overlay').click(function(){
		$('#side_nav, #overlay').hide('slow');
		$('html, body').css('overflow', 'auto');
	});
});