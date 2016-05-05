

(function($) {
	'use strict';	
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
    });
    
    // Caption Height
    var imgWrapperHeight = function(){
        $(".img-wrapper").each(function(){
            var getHeight = $("img", this).height() - 1;
            $(this).css("height", getHeight + "px");
        });
        
        if( ie <= 9 ){
            $(".img-wrapper").each(function(){
                $(".img-caption", this).fadeOut();
                $(this).on("mouseenter", function() {
                    $(".img-caption", this).stop().fadeIn();
                    return false;
                });
                $(this).on("mouseleave", function() {
                    $(".img-caption", this).stop().fadeOut();
                    return false;
                });
            });
        }
    }
    $('.flexslider1').flexslider({
        animation: "slide",
        slideshowSpeed: 9000,
        start: imgWrapperHeight
    });
})(jQuery);

