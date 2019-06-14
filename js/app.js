'use strict';

$(document).ready(function () {

    if ($(window).outerWidth() > 767) {
        fullPage();
    }

    $(window).resize(function () {
        if ($(window).outerWidth() < 768) {
            if ($('html').hasClass('fp-enabled')) {
                $.fn.fullpage.destroy('all');
            }
        } else {
            if (!$('html').hasClass('fp-enabled')) {
                fullPage();
            }
        }
    });

});


function fullPage() {
    let $isAnimatedFirst = $('.section-1 .is-animated'),
        $isAnimatedFirstOpacity = $('.section-1 .is-animated-opacity'),
        $isAnimatedFirstSvg = $('.section-1 .is-svg-animated path'),
        $isAnimatedSecondSvg = $('.section-2 .is-svg-animated path'),
        $isAnimatedSecond = $('.section-2 .is-animated'),
        $isAnimatedSecondLeft = $('.section-2 .is-animated-left'),
        $isAnimatedThird = $('.section-3 .is-animated'),
        $isAnimatedThirdLeft = $('.section-3 .is-animated-left'),
        $isAnimatedFourth = $('.section-4 .is-animated'),
        $isAnimatedFourthLeft = $('.section-4 .is-animated-left'),
        $isAnimatedFifth = $('.section-5 .is-animated'),
        $isAnimatedFifthLeft = $('.section-5 .is-animated-left'),
        $isAnimatedSixthLeft = $('.section-6 .is-animated-left'),
        $isAnimatedSixth = $('.section-6 .is-animated');
    $('#fullPage').fullpage({
        afterLoad: function afterLoad(anchorLink, index) {
            if (index === 1) {
                $isAnimatedFirstOpacity.addClass('animated fadeIn');
                $isAnimatedFirstOpacity.css('animation-delay', '.1s');
                $isAnimatedFirst.addClass('animated fadeInUp');
                $isAnimatedFirst.css('animation-delay', '.5s');
                $isAnimatedFirstSvg.addClass('animated dash');
            }
        },
        onLeave: function onLeave(index, nextIndex, direction) {
            if (nextIndex === 2 && direction === 'down') {
                $isAnimatedSecondLeft.addClass('animated fadeInLeft');
                $isAnimatedSecondLeft.css('animation-delay', '.1s');
                $isAnimatedSecond.addClass('animated fadeInUp');
                $isAnimatedSecond.css('animation-delay', '.5s');
                $isAnimatedSecondSvg.addClass('animated dash');
            } else if (nextIndex === 3 && direction === 'down') {
                $isAnimatedThirdLeft.addClass('animated fadeInLeft');
                $isAnimatedThirdLeft.css('animation-delay', '.1s');
                $isAnimatedThird.addClass('animated fadeInUp');
                $isAnimatedThird.css('animation-delay', '.5s');
            } else if (nextIndex === 4 && direction === 'down') {
                $isAnimatedFourthLeft.addClass('animated fadeInLeft');
                $isAnimatedFourthLeft.css('animation-delay', '.1s');
                $isAnimatedFourth.addClass('animated fadeInUp');
                $isAnimatedFourth.eq(0).css('animation-delay', '.3s');
                $isAnimatedFourth.eq(1).css('animation-delay', '.6s');
            } else if (nextIndex === 5 && direction === 'down') {
                $isAnimatedFifthLeft.addClass('animated fadeInLeft');
                $isAnimatedFifthLeft.css('animation-delay', '.1s');
                $isAnimatedFifth.addClass('animated fadeInUp');
                $isAnimatedFifth.eq(0).css('animation-delay', '.3s');
                $isAnimatedFifth.eq(1).css('animation-delay', '.6s');
            } else if (nextIndex === 6 && direction === 'down') {
                $isAnimatedSixthLeft.addClass('animated fadeInLeft');
                $isAnimatedSixthLeft.css('animation-delay', '.1s');
                $isAnimatedSixth.addClass('animated fadeIn');
                $isAnimatedSixth.css('animation-delay', '.5s');
            }
        }
    })
}

