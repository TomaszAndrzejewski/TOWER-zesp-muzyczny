/*PRZYCISKI PLAY/PAUSE*/
var vid = document.getElementById("myVideo"); 

function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 

/*PRZYCISKI MUTE*/


function enableMute() { 
    vid.muted = true;
} 

function disableMute() { 
    vid.muted = false;
}


