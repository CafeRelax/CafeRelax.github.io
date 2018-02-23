
window.onscroll=function(){

var scroll = window.pageYOffset || document.documentElement.scrollTop;
var krug=document.getElementById("bigkrug");
var content=document.getElementById("content1");
var flag=true

if ((scroll>450)&&(flag==true)) {
        krug.style.animation="button 1s ease-in-out";
		krug.style.position="fixed";
		krug.style.width="150px";
		krug.style.height="150px"
		krug.style.marginRight="1%";
		krug.style.marginTop="-1%";
		flag=false;
} else {
 	krug.style.position="absolute";
 	krug.style.marginTop="0";
 	krug.style.animation="none";
 	krug.style.width="250px";
    krug.style.height="250px";
    krug.style.marginRight="0%";
 	flag=true;
 }
}