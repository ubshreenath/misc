(function($) {
	'use strict'; 
    
    // Caption Height
    var imgWrapperHeight = function(){
        $(".img-wrapper").each(function(){
            var getHeight = $("img", this).outerHeight() - 1;
            $(this).css("height", getHeight + "px");
        });
    } 
    
	$("#recent-column5").owlCarousel({
		autoPlay: 3000,
		items : 5,
		navigation : true,
		pagination : false,
		itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		itemsTablet : [768, 3],
        afterUpdate : imgWrapperHeight
	});
	
	$("#recent-column4").owlCarousel({
		autoPlay: 3000,
		items : 4,
		navigation : true,
		pagination : false,
		itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		itemsTablet : [768, 3],
        afterUpdate : imgWrapperHeight
	});
	
	$("#recent-column3").owlCarousel({
		autoPlay: 3000,
		items : 3,
		navigation : true,
		pagination : false,
		itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		itemsTablet : [768, 1],
        afterUpdate : imgWrapperHeight
	});
	
	$("#owl-services").owlCarousel({
		autoPlay: false,
		items : 3,
		navigation : true,
		pagination : false,
		itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		itemsTablet : [768, 1],
	});
	
	$("#team").owlCarousel({
		autoPlay: false,
		items : 5,
		navigation : true,
		pagination : false,
		itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		itemsTablet : [768, 3],
	});
	
	$("#testimoni").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		navigation : false,
		pagination : true,
	});

	$("#phone-slide").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		navigation : true,
		pagination : false,
	});

	$("#testimoni-column3").owlCarousel({
		autoPlay: 3000,
		items : 3,
		navigation : true,
		pagination : false,
		itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],
		itemsTablet : [768, 1],
	});
	
	$("#clients").owlCarousel({
		autoPlay: false,
		items : 6,
		navigation : true,
		pagination : false,
		itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,4],
		itemsTablet : [768,3],
	});
	
	$("#recent-comments").owlCarousel({
		autoPlay: 5000,
		singleItem : true,
		navigation : true,
		pagination : false,
	});
})(jQuery);