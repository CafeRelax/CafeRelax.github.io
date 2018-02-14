
(function(){
   var slides=document.getElementsByClassName("slides")[0];
   var  button=document.getElementsByClassName("button");
   var flag=true;
   var bleft=document.getElementById('left-button');
   var bright=document.getElementById('right-button');
   var x=-17;
   var numberslide=0;
   button[0].style.background="#256160";

if(document.documentElement.clientWidth>1024){
    time=setInterval(function silk(){
    	if ((numberslide<=2)&&(flag==true)) {
        slides.style.transform="translateX("+x+"%)";
        button[numberslide+1].style.background="#256160";
        x=x-17;
        numberslide=numberslide+1; 
        button[numberslide-1].style.background="#fff";
    } 
    else{

    	slides.style.transform="translateX(0%)";
    	button[3].style.background="#fff";
    	button[0].style.background="#256160";
    	numberslide=0; 
    	x=-17; 	
    }

    },3000)
   
     button[0].onclick=function(){
     	slides.style.transform="translateX(0%)";
     	flag=false;
     	button[1].style.background="#fff";
     	button[2].style.background="#fff";
     	button[3].style.background="#fff";
     	button[0].style.background="#256160";
     	clearInterval(time);
     }
     button[1].onclick=function(){
     	slides.style.transform="translateX(-17%)";
     	flag=false;
     	button[numberslide].style.background="#fff";
     	button[1].style.background="#256160";
     	button[0].style.background="#fff";
     	button[2].style.background="#fff";
     	button[3].style.background="#fff";
     	clearInterval(time);
     }
     button[2].onclick=function(){
     	slides.style.transform="translateX(-34%)";
     	flag=false;
     	button[numberslide].style.background="#fff";
     	button[2].style.background="#256160";
     	button[3].style.background="#fff";
     	button[0].style.background="#fff";
     	button[1].style.background="#fff";
     	clearInterval(time);
     }
     button[3].onclick=function(){
     	slides.style.transform="translateX(-51%)";
     	flag=false;
     	button[numberslide].style.background="#fff";
     	button[3].style.background="#256160";
     	button[0].style.background="#fff";
     	button[1].style.background="#fff";
     	button[2].style.background="#fff";
     	clearInterval(time);
     }
 }
  

}());

