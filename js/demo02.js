var box=document.getElementById("box");
var mark=document.getElementById("mark");

box.onmouseenter=function(){
	mark.style.display="block";
}
box.onmouseleave=function(){
	mark.style.display="none";
}
