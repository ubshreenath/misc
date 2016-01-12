window.addEventListener("load",function(){
	startAnimation("box1",2);
});

window.addEventListener("resize",function(){
	setDimensions();
});

var singleton = { clientH:0, clientW:0, box:"", timer:null, hdirection:1, vdirection:1, step:1, offset:50};

function startAnimation(id, s){
	setDimensions();
	singleton.box = document.getElementById(id);
	singleton.box.style.left = "1px";
	singleton.box.style.top = "1px";
	singleton.step = s;
	singleton.timer = setInterval(animate, 10);
}


function animate(){
	var l = parseInt(singleton.box.style.left);
	var t = parseInt(singleton.box.style.top);
	if((singleton.hdirection == 1) && ((l+singleton.offset) > singleton.clientW))
	{
		singleton.hdirection = -1;
		vibrate();
	}
	else if((singleton.hdirection == -1)&&(l<=0))
	{
		singleton.hdirection = 1;
		vibrate();
	}
	if((singleton.vdirection==1) && ((t+singleton.offset) > singleton.clientH))
	{	
		singleton.vdirection = -1;
		vibrate();
	}
	else if((singleton.vdirection == -1)&&(t<=0))
	{
		singleton.vdirection = 1;
		vibrate();
	}
	
	if(singleton.hdirection==1) l+=singleton.step;
	else l-=singleton.step;
	
	if(singleton.vdirection==1) t+=singleton.step;
	else t-=singleton.step;
	
	singleton.box.style.left = l+"px";
	singleton.box.style.top = t+"px";
	//window.scrollTo(0, document.body.scrollHeight);
}


function vibrate(){
	if(navigator.vibrate){
		navigator.vibrate(100);
	}
}
function setDimensions(){	
	if (window.innerWidth) {
		singleton.clientW = window.innerWidth-10;
		singleton.clientH = window.innerHeight-10;
	}
	else if (document.body.clientWidth) {
		singleton.clientW = document.body.clientWidth-10;
		singleton.clientH = document.body.clientHeight-10;
	}
}




