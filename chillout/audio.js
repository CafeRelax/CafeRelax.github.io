
 var songs=[""];
 var songname=document.getElementsByClassName("songname")[0];
 var song= new Audio();
 var playto=document.getElementsByClassName("playto");
 var b1=document.getElementsByClassName("stoporplay")[0];
 var b2= document.getElementsByClassName("next")[0];
 var b3=document.getElementsByClassName("pre")[0];
 var display=document.getElementsByClassName("player")[0];
 var timekrug=document.getElementsByClassName("timekrug")[0];
 var playimg= document.getElementById("playimg");
 var time=document.getElementsByClassName("time")[0];
 var volume=1;
 var procent=document.getElementsByClassName("procent")[0];
 var minus=document.getElementsByClassName("minus")[0];
 var plus=document.getElementsByClassName("plus")[0];
 var currentsong=0;
 


  

function play(){   
      song.src=songs[currentsong];
      if (j=1) {
      songname.textContent=songs[currentsong].replace("/","");
}else{
  songname.textContent=songs[currentsong].replace("/","");
}
      display.style.visibility="visible";
      display.style.opacity=1;
      song.play(songs[currentsong+1]); 
      song.addEventListener('ended',nextsong);          
  }

  b1.onclick= playorpause;

  function playorpause(){
    
       if (song.paused) {
       	   song.play();
       	   playimg.src="../img/pause.png"
       	   
       }
        else {song.pause();
        playimg.src="../img/play.png"
    }
  }
  
  b2.onclick=nextsong;

function nextsong(){
	currentsong++;
	if (currentsong>13) {
		currentsong=0
	}
	play();
    playimg.src="../img/pause.png"
}
  b3.onclick=presong;

  function presong(){
  	currentsong--;
  	 if (currentsong<0) {
  	 	currentsong=13;
  	 }
  	 	play();
  	 	playimg.src="../img/pause.png"
  }
  song.addEventListener("timeupdate",function(){
  	 var position=song.currentTime/ song.duration;
  	 timekrug.style.left=position*100+"%"
  	 convertTime(Math.round(song.currentTime));
  });
   function convertTime(seconds){
   	 var min= Math.floor(seconds/60);
   	 var sec = seconds % 60;
   	  min = (min<10) ? "0" + min : min;
   	  sec = (sec<10) ? "0" + sec : sec;
   	  time.textContent=min+":"+sec;
   	  totalTime(Math.round(song.duration));
   }
   function totalTime(seconds){
   	var min= Math.floor(seconds/60);
   	 var sec = seconds % 60;
   	  min = (min<10) ? "0" + min : min;
   	  sec = (sec<10) ? "0" + sec : sec;
   	  time.textContent+="/"+min+":"+sec;
   }




(function(){
   var down=document.getElementsByClassName("player")[0];
   var downorup=document.getElementsByClassName("downorup")[0];
   var flag=true;

  downorup.onclick = function(){
  	if(flag==true){
      down.style.transform="translateY(100%)";
      downorup.style.transform="rotate(270deg)";
      downorup.style.top="-85%";
      flag=false;
 }else{
      down.style.transform="translateY(0%)";
      downorup.style.transform="rotate(90deg)";
      downorup.style.top="-5%";
      flag=true;
  }
  };
  minus.onclick= volumeminus;
  plus.onclick=volumeplus;
  
  
  function volumeminus(){
    song.volume-=0.1;
     volume=volume-0.1;
     procent.textContent=volume.toFixed(2)*100+"%";
 }
  
 function volumeplus(){
     song.volume+=0.1;
     volume=volume+0.1;
     if (volume<100) {
     procent.textContent=volume.toFixed(2)*100+"%";
 }else{
 	volume=100+"%";
 }
  } 
}());

 
 playto[0].onclick=function(){
  currentsong=0;
  play();
 }
 playto[1].onclick=function(){
  currentsong=1
  play();
 }
 playto[2].onclick=function(){
  currentsong=2
  play();
 }
 playto[3].onclick=function(){
  currentsong=3
  play();
 }
 playto[4].onclick=function(){
  currentsong=4
  play();
 }
 playto[5].onclick=function(){
  currentsong=5
  play();
 }
 playto[6].onclick=function(){
  currentsong=6
  play();
 }
 playto[7].onclick=function(){
  currentsong=7
  play();
 }
 playto[8].onclick=function(){
  currentsong=8
  play();
 }
 playto[9].onclick=function(){
  currentsong=9
  play();
 }
 playto[10].onclick=function(){
  currentsong=10
  play();
 }
 playto[11].onclick=function(){
  currentsong=11
  play();
 }
 playto[12].onclick=function(){
  currentsong=12
  play();
 }
 playto[13].onclick=function(){
  currentsong=13
  play();
 }

 