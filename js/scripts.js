
(function ($, root, undefined) {

    $(function () {

        'use strict';

        var $window = $(window);
        var $body = $('body');




        // mobile menu button
        var $menu_button = $('#menu_button');
        var $nav = $('nav');
        $menu_button.on('click', function (e) {
            e.preventDefault();
            $nav.toggleClass('menu_visible');
        });

        // if press escape key, hide menu
        $(document).on('keydown', function (e) {
            if (e.keyCode == 27) {
                $nav.removeClass('menu_visible');
            }
        })

        $('#main').on('click', function () {
            $nav.removeClass('menu_visible');
        });




        // SLIDER
        // SLIDER

        $('.slick_slider').slick({
            dots: false,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 1000,
            cssEase: 'ease-in-out',
            pauseOnHover: false
        });
        // SLIDER
        // SLIDER










    });

})(jQuery, this);
