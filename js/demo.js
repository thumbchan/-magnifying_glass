var box=document.getElementById("box");


//以下代码会出现事件冒泡，鼠标进入mark触发mouseover，事件冒泡导致盒子不断被创建。


//box.onmouseover=function(e){
//	e=e||window.event;
//	
//	var mark=document.createElement("div");
//	mark.id="mark";
//	this.appendChild(mark);
//	mark.style.left=e.clientX-this.offsetLeft+5+"px";
//	mark.style.top=e.clientY-this.offsetTop+5+"px";
//	
//	mark.onmouseover=function(e){
//		e=e||window.event;
//		e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
//	};
//	mark.onmouseout=function(e){
//		e=e||window.event;
//		e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
//	}
//	
//};
//box.onmousemove=function(e){
//	e=e||window.event;
//	
//	var mark=document.getElementById("mark"); 
//	if(mark){
//		mark.style.left=e.clientX-this.offsetLeft+5+"px";
//	    mark.style.top=e.clientY-this.offsetTop+5+"px";
//	}
//}
//box.onmousemout=function(e){
//	e=e||window.event;
//	var mark=document.getElementById("mark"); 
//	if(mark){
//		this.removeChild(mark);
//	}
//}
box.onmouseenter=function(e){
	e=e||window.event;
	
	var mark=document.createElement("div");
	mark.id="mark";
	this.appendChild(mark);
	mark.style.left=e.clientX-this.offsetLeft+5+"px";
	mark.style.top=e.clientY-this.offsetTop+5+"px";
	
	
};
box.onmousemove=function(e){
	e=e||window.event;
	
	var mark=document.getElementById("mark"); 
	if(mark){
		mark.style.left=e.clientX-this.offsetLeft+5+"px";
	    mark.style.top=e.clientY-this.offsetTop+5+"px";
	}
}
box.onmouseleave=function(e){
	e=e||window.event;
	var mark=document.getElementById("mark"); 
	if(mark){
		this.removeChild(mark);
	}
}


//onmouseover和onmouseenter都是鼠标进入的行为，但是后者默认阻止事件冒泡。同理onmouseleave也默认阻止时间冒泡。
 










