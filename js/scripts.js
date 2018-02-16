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



/*LIGHTBOX*/


function openModal() {
	document.getElementById('myModal').style.display = "block";
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}


/*NAVBAR i PRZYCISK DO GÓRY*/

window.onscroll = function () {
	scrollFunction()
	scrollFunction1()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-80px";
	}
}
function scrollFunction1() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
	function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/*ANIMACJA O NAS*/

var bg = document.querySelector("#about");

bg.addEventListener("mouseenter", showTextContainer);

function showTextContainer() {
	var textContainer = document.querySelector(".animatedLeft");
	var textContainer2 = document.querySelector(".animatedRight");
	textContainer.classList.add("text-visible");
	textContainer2.classList.add("text-visible");
	bg.removeEventListener("mouseenter", showTextContainer);
}


/* ANIMACJA OFERTA */


var bg2 = document.querySelector("#oferta");

bg2.addEventListener("mouseenter", showTextContainer3);

function showTextContainer3() {
	var textContainer3 = document.querySelector(".main-text");
	var textContainer4 = document.querySelector(".buttonR");
	var textContainer5 = document.querySelector(".buttonO");
	textContainer3.classList.add("text-visible");
	textContainer4.classList.add("text-visible");
	textContainer5.classList.add("text-visible");
	bg2.removeEventListener("mouseenter", showTextContainer3);
}


/* ANIMACJA VIDEO */


var bg3 = document.querySelector("#video");

bg3.addEventListener("mouseenter", showTextContainer4);

function showTextContainer4() {
	var videoContainer1 = document.querySelector(".yt1");
	var videoContainer2 = document.querySelector(".yt2");
	var videoContainer3 = document.querySelector(".yt3");
	var videoContainer4 = document.querySelector(".yt4");
	var videoContainer5 = document.querySelector(".yt5");
	var videoContainer6 = document.querySelector(".yt6");

	videoContainer1.classList.add("video-visible");
	videoContainer2.classList.add("video-visible");
	videoContainer3.classList.add("video-visible");
	videoContainer4.classList.add("video-visible");
	videoContainer5.classList.add("video-visible");
	videoContainer6.classList.add("video-visible");

	bg3.removeEventListener("mouseenter", showTextContainer4);
}