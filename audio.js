
var songs=["heizzah_it_s_ok_to_be_sad_.mp3","steve_roe_x_hurry_k_it_s_complicated_.mp3"];
 var img=["img/14.jpg","img/6.jpg"];
 var songname=document.getElementsByClassName("songname")[0];
 var currentsong=0;
 var song= new Audio();
 var pl=document.getElementsByClassName("pl")[0];
 var img1=document.getElementById('img1');
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
 

    pl.onclick = play;


    function play(){
      img1.src=img[currentsong];
      song.src=songs[currentsong];
      songname.textContent=songs[0].replace(".mp3");
      display.style.visibility="visible"
      display.style.opacity=0.7;
      song.play(songs[currentsong+1]); 
      song.addEventListener('ended',nextsong);          
  }
  
 
  
  b1.onclick= playorpause;

  function playorpause(){
    
       if (song.paused) {
       	   song.play();
       	   playimg.src="img/pause.png"
       	   
       }
        else {song.pause();
        playimg.src="img/play.png"
    }
  }
  b2.onclick=nextsong;
function nextsong(){
	currentsong++;
	if (currentsong>1) {
		currentsong=0
	}
	play();
    playimg.src="img/pause.png"
}
  b3.onclick=presong;

  function presong(){
  	currentsong--;
  	 if (currentsong<0) {
  	 	currentsong=1;
  	 }
  	 	play();
  	 	playimg.src="img/pause.png"
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
      downorup.style.top="-55%";
      flag=false;
 }else{
      down.style.transform="translateY(0%)";
      downorup.style.transform="rotate(90deg)";
      downorup.style.top="-30%";
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