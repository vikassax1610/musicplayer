let songIndex=0;
let audioElement= new Audio('./source/songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName('songItem'))


let songs = [
  {songName:"Kohinoor - Divine", filePath:"./source/songs/1.mp3", coverPath:"./source/songs/cover/1.jpg"},
  {songName:"Bewafa - Pav Dharia", filePath:"./source/songs/2.mp3", coverPath:"./source/songs/cover/2.jpg"},
  {songName:"Big scene", filePath:"./source/songs/3.mp3", coverPath:"./source/songs/cover/3.jpg"},
  {songName:"Cartoon on & on", filePath:"./source/songs/4.mp3", coverPath:"./source/songs/cover/4.jpg"},
  {songName:"changa mada time", filePath:"./source/songs/5.mp3", coverPath:"./source/songs/cover/5.jpg"},
  {songName:"Change din", filePath:"./source/songs/6.mp3", coverPath:"./source/songs/cover/6.jpg"},
  {songName:"City slums", filePath:"./source/songs/7.mp3", coverPath:"./source/songs/cover/7.jpg"},
  {songName:"Ja ve mundya", filePath:"./source/songs/8.mp3", coverPath:"./source/songs/cover/8.jpg"},
 
]

songItems.forEach((element, i) =>{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click' , ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity=0;
  }
})

audioElement.addEventListener('timeupdate', ()=>{
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})

const makeAllPlays= ()=>{
  Array.from(document.getElementsByClassName("songPlayItem")).forEach((element)=>{
    
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
  })
}

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName("songPlayItem")).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlays();
    
    songIndex=parseInt(e.target.id);
    e.target.classList.remove(`fa-play`);
    e.target.classList.add(`fa-pause`);
    audioElement.src=`./source/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  })
})
document.getElementById('next').addEventListener('click' , ()=>{
  if(songIndex>=8){
    songIndex=0
  } else{
    songIndex +=1;
  }
  audioElement.src=`./source/songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click' , ()=>{
  if(songIndex<=0){
    songIndex=8
  } else{
    songIndex -=1;
  }
  audioElement.src=`./source/songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');
})