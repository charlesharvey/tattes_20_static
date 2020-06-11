
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




        var $sections = $('section');
        $sections.addClass('invisible');


        setInvisibleSections($window, $sections);

        $window.on('scroll', function (e) {

            setInvisibleSections($window, $sections);
        })
    });


    function setInvisibleSections($window, $sections) {
        let $scrollPos = 0;
        let $windowHeight = $window.height()
        $scrollPos = $window.scrollTop() + ($windowHeight * 0.65);
        for (let i = 0; i < $sections.length; i++) {
            const $section = $sections[i];
            if ($section.offsetTop < $scrollPos) {
                $($section).removeClass('invisible');
            } else {
                $($section).addClass('invisible');
            }
        }
    }

})(jQuery, this);
