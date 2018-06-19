$.fn.extend({
    animateCss: function (climacon_component-stroke_rain) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + climacon_component-stroke_rain).one(animationEnd, function() {
            $(this).removeClass('animated ' + climacon_component-stroke_rain);
        });
    }
});
