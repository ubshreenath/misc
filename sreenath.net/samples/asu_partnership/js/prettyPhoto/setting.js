(function($) {
	'use strict'; 
	
    var closeZoom = function(){
        $(".img-wrapper").each(function(){
            var capZoomIn = $(".capZoomIn", this),
                capZoomInDown = $(".capZoomInDown", this),
                capRollIn = $(".capRollIn", this),
                capRotateIn = $(".capRotateIn", this),
                capBounceOut = $(".capBounceOut", this);
            
            capZoomIn.addClass("zoomOut");
            capZoomIn.removeClass("zoomIn");
            capZoomInDown.addClass("zoomOutDown");
            capZoomInDown.removeClass("zoomInDown");
            capRollIn.addClass("rollOut");
            capRollIn.removeClass("rollIn");
            capRotateIn.addClass("rotateOut");
            capRotateIn.removeClass("rotateIn");
            capBounceOut.addClass("bounceOut");
            capBounceOut.removeClass("bounceIn");
        });
    }
    
    /*
	prettyPhoto
    =========================== */	
    $(".img-wrapper:first a[data-pretty^='prettyPhoto']").prettyPhoto({
        animation_speed:'normal',
        theme:'pp_default',
        slideshow:3000, 
        autoplay_slideshow: false,
        callback: closeZoom
    });
	$(".img-wrapper:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({
        animation_speed:'fast',
        slideshow:10000, 
        hideflash: true,
        callback: closeZoom
    });
	
})(jQuery);



