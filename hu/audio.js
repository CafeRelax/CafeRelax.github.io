
 var songs=["Five/california dreaming.mp3","Five/whatever it takes.mp3","Five/bad moon.mp3","five/ghost beach.mp3","five/broken record.mp3","five/nobodys watching.mp3","five/renegade.mp3","five/black cadillac (feat. b-real).mp3","five/pray (put em in the dirt).mp3","five/cashed out.mp3","five/riot.mp3","five/we own the night.mp3","five/bang bang.mp3","five/your life.mp3"];
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
 var pict=document.getElementsByClassName("pict");
 var picts=document.getElementsByClassName("pict");
 var p=document.getElementsByClassName("musicp");
 var    ul=document.getElementsByClassName("allmusic")[0];
 var    li1create=document.createElement("li");
 var    div1create=document.createElement("div");
 var    div11create=document.createElement("div");
 var    img1create=document.createElement("img");
 var    pcreate=document.createElement("p");
 var  j=1;


  picts[0].onclick=function(){

   p[0].innerHTML="California Dreaming";
   p[1].innerHTML="Whatever It Takes";
   p[2].innerHTML="Bad Moon";
   p[3].innerHTML="Ghost Beach";
   p[4].innerHTML="Broken Record";
   p[5].innerHTML="Nobody's Watching";
   p[6].innerHTML="Renegade";
   p[7].innerHTML="Black Cadillacfeat. B-Real";
   p[8].innerHTML="Prayput em in the dirt";
   p[9].innerHTML="Cashed Out";
   p[10].innerHTML="Riot";
   p[11].innerHTML="We Own The Night";
   p[12].innerHTML="Bang Bang";
   p[13].innerHTML="Your Life";
   ul.removeChild(li1create);
   songs=["five/california dreaming.mp3","five/whatever it takes.mp3","five/bad moon.mp3","five/ghost beach.mp3","five/broken record.mp3","five/nobodys watching.mp3","five/renegade.mp3","five/black cadillac (feat. b-real).mp3","five/pray (put em in the dirt).mp3","five/cashed out.mp3","five/riot.mp3","five/we own the night.mp3","five/bang bang.mp3","five/your life.mp3"]
  j=1;
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
  
  }
 picts[1].onclick=function(){
  
  var   content=document.createTextNode("Let Go");
        ul.appendChild(li1create); 
    
    li1create.appendChild(div1create);
    li1create.classList.add("musicname");
    div1create.appendChild(div11create);
    div11create.appendChild(img1create);
    div11create.classList.add("playto");
    div11create.appendChild(img1create);
    img1create.src="playto.png";
    div1create.appendChild(pcreate);
    pcreate.classList.add("musicp");
    pcreate.appendChild(content);
        
  
   p[0].innerHTML="Usual Suspects";
   p[1].innerHTML="Day Of The Dead";
   p[2].innerHTML="How We Roll";
   p[3].innerHTML="War Child";
   p[4].innerHTML="Dark Places";
   p[5].innerHTML="Take Me Home";
   p[6].innerHTML="Gravity";
   p[7].innerHTML="Does Everybody In The World Have To Die";
   p[8].innerHTML="Disease";
   p[9].innerHTML="Party By Myself";
   p[10].innerHTML="Live Forever";
   p[11].innerHTML="Save Me";
   p[12].innerHTML="Guzzle, Guzzle";
   p[13].innerHTML="I'll Be There";
   songs=["five/Usual Suspects.mp3","five/Day Of The Dead.mp3","five/How We Roll .mp3","five/War Child.mp3","five/Dark Places.mp3","five/Take Me Home .mp3","five/Gravity.mp3","five/Does Everybody In The World Have To Die .mp3","five/Disease .mp3","five/Party By Myself .mp3","five/Live Forever .mp3","five/Save Me.mp3","five/Guzzle, Guzzle.mp3","five/I'll Be There .mp3","five/Let Go.mp3"]
 j=2;
  b2.onclick=nextsong;

function nextsong(){
  currentsong++;
  if (currentsong>14) {
    currentsong=0
  }
  play();
    playimg.src="../img/pause.png"
}
b3.onclick=presong;
function presong(){
    currentsong--;
     if (currentsong<0) {
      currentsong=14;
     }
      play();
      playimg.src="../img/pause.png"
  }
playto[14].onclick=function(){
  currentsong=14
  play();
 }
 
 }
  

 


function play(){   
      song.src=songs[currentsong];
      if (j=1) {
      songname.textContent=songs[currentsong].replace("five/","");
}else{
  songname.textContent=songs[currentsong].replace("dod/","");
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

 