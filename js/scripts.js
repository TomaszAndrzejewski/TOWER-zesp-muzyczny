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


/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map

$(document).ready(function(){
 
		$('*[data-animate]').addClass('hide').each(function(){
      $(this).viewportChecker({
        classToAdd: 'show animated ' + $(this).data('animate'),
        classToRemove: 'hide',
        offset: '10%'
      });
    });
 
	});


/* ANIMACJA OFERTA */

/*
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

*/
/* ANIMACJA VIDEO */
/*

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
}*/