$(document).ready(function() {
    $('#menu_button').on('click', function() {
        $('body').addClass('overlay_visible').removeClass('overlay_hidden');
    });
    $('#close_button, .overlay').on('click', function() {
        $('body').removeClass('overlay_visible').addClass('overlay_hidden');
    });
});
