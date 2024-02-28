console.log("welcome to spotify")

// initialize the variables
let songIndex=0;
let audioElement=new Audio('spotify/MA_Awesomemusic_ModernInterior.wav');
let masterPlay=document.getElementById('masterplay')
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.form(document.getElementsByClassName('songItems'));
let songs=[
    {songName:"salam-e-ishq",filePath:"C:\Users\Reliance\Desktop\projects for cv\spotify\MA_Awesomemusic_ModernInterior.wav",coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq",filePath:"C:\Users\Reliance\Desktop\projects for cv\spotify\MA_Awesomemusic_ModernInterior.wav",coverPath:"covers/2.jpg"},
    {songName:"salam-e-ishq",filePath:"C:\Users\Reliance\Desktop\projects for cv\spotify\MA_Awesomemusic_ModernInterior.wav",coverPath:"covers/3.jpg"},
    {songName:"salam-e-ishq",filePath:"C:\Users\Reliance\Desktop\projects for cv\spotify\MA_Awesomemusic_ModernInterior.wav",coverPath:"covers/4.jpg"},
    {songName:"salam-e-ishq",filePath:"C:\Users\Reliance\Desktop\projects for cv\spotify\MA_Awesomemusic_ModernInterior.wav",coverPath:"covers/5.jpg"},
    {songName:"salam-e-ishq",filePath:"C:\Users\Reliance\Desktop\projects for cv\spotify\MA_Awesomemusic_ModernInterior.wav",coverPath:"covers/6.jpg"}
]

songItems.forEach((element,i)=>
{
    element.getElementsbyTagName('img')(0).src=songs[i].coverPath;
    element.getElementsbyClassName('songName')(0).InnerText=songs[i].songName;
})

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>
{
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays =()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>(
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.taget.classList.remove('fa-play-circle');
        e.taget.classList.add('fa-pause-circle');
        audioElement.src='songs/$(songIndex+1).mp3';
        masterSongName.innerText=songs[songsIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    ))
})

document.getElementById('next').addEventListener('click',()=>
{
    if(songIndex>=5)
    {
        songIndex=0
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src='songs/$(songIndex+1).mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>
{
    if(songIndex<=0)
    {
        songIndex=0
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src='songs/$(songIndex+1).mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

