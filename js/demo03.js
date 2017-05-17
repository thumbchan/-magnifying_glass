var box=document.getElementById("box");
var mark=document.getElementById("mark");
var boxR=document.getElementById("boxRight");

function setPotion(e){
	var top=e.clientY-box.offsetTop-mark.offsetHeight/2;
	var left=e.clientX-box.offsetTop-mark.offsetWidth/2;
	
	//边界判断
	var tempL=0;var tempT=0;
	var minL =0,maxL=box.offsetWidth-mark.offsetWidth,minT=0,maxT=box.offsetHeight-mark.offsetHeight;
	if(left<minL){
		mark.style.left=minL+"px";
		tempL=minL;
	}else if(left>maxL){
		mark.style.left=maxL+"px";
		tempL=maxL;
	}else{
		mark.style.left=left+"px";
		tempL=left;
	}
	
	if(top<minT){
		mark.style.top=minT+"px";
		tempT=minT;
	}else if(top>maxT){
		mark.style.top=maxT+"px";
		tempT=maxT;
	}else{
		mark.style.top=top+"px";
		tempT=top;
	}
	
	//获取右侧图片，并且让它跟随运动2倍的数值于左侧
	var oImg=boxR.getElementsByTagName("img")[0];
	oImg.style.left=-tempL*2+"px";
	oImg.style.top=-tempT*2+"px";
	
	
}

box.onmouseenter=function(e){
	e=e||window.event;
	mark.style.display="block";
	setPotion(e);
	boxR.style.display="block"
}
box.onmousemove=function(e){
	e=e||window.event;
	setPotion(e);
}
box.onmouseleave=function(e){
	e=e||window.event;
	mark.style.display="none";
	boxR.style.display="none"
}
