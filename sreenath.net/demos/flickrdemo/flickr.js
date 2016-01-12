$(function(){
	$("#btnLoad").click(loadPics);
	//loadPics();
	
});

function loadPics(){
	$(":text").each(function(){
		if(this.value){
			setTimeout(getPics, 100, this.value);
		}
	});
	//$("div.panel").slideUp();
	//var tags = ["people", "faces", "portrait", "biking", "monochrome", "beach"];
	
	
	/*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsonFlickrFeed=?", 
				{format:"json", tags:"people faces", tagmode:"any"});*/
}

function getPics(tag){
	$.ajax({
		url:"http://api.flickr.com/services/feeds/photos_public.gne?callback=?",
		dataType:"json",
		type:"GET",
		success:gotPics,
		data:{format:"json", tags:tag, tagmode:"any"},
		jsonpCallback:"jsonFlickrFeed"
	});
}

function gotPics(data){
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var $body = $("body");
	//$("#btnLoad").remove();
	var items = data.items;
	var imgHeight = winHeight / 4;
	var imgWidth= winWidth / 12;
	var str = "";
	for(var i in items){
		var src = items[i].media.m;
		var alt = items[i].title;
		var url = items[i].link;
		str += "<a href='" + url + "' target='_blank'><img src = '" + src + "' alt='" + alt +"' title='" + alt +"' /></a>";
	}
	$body.prepend(str);
}