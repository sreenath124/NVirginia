$(document).ready(function() {
    $('#menu_button').on('click', function() {
        $('body')
            .addClass('overlay_visible')
            .removeClass('overlay_hidden');
    });
    $('#close_button, .overlay').on('click', function() {
        $('body')
            .removeClass('overlay_visible')
            .addClass('overlay_hidden');
    });
    $('#subscribe_button').on('click', function(event) {
        event.preventDefault();
        validateEmail();
    });

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 400,
        itemMargin: 0,
        slideshow: true,
        slideshowSpeed: 6000,
        controlNav: false,
        directionNav: false
    });

    function validateEmail() {
        var email = $('#email').val(),
            email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!!email) {
            if (!email_regex.test(email)) {
                $('#email').before('<p class="error_msg">please enter valid email</p>');
                return false;
            }
        } else {
            $('#email').before('<p class="error_msg">please enter valid email</p>');
            return false;
        }
    }
});
