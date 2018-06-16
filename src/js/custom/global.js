//global
$(document).ready(function() {
    $("html, body, #wrapper").css({
        height: $(window).height()
    });
});

/**
 * Gets the browser name or returns an empty string if unknown. 
 * This function also caches the result to provide for any 
 * future calls this function has.
 *
 * @returns {string}
 */
var browserCheck = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browserCheck.prototype._cachedResult)
        return browserCheck.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = false;
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
    	isIE = true;
    }else{
    	isIE = false;
    }

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browserCheck.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        isBlink ? 'Blink' :
        "other-browser";
};

var isVideoPlayerVisible = $("#video-player-box").is(":visible");
if(isVideoPlayerVisible == true){
	
	/**
	 * Custom code for Embed Videos
	 */

	var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn, hasAttributeAutoplay, playandpausebtn, playandpauseframe;

	function intializelPlayer(){
		// Set object references
		vid = document.getElementById("my-video");
		playbtn = document.getElementById("playpausebtn");
		seekslider = document.getElementById("seekslider");
		curtimetext = document.getElementById("curtimetext");
		durtimetext = document.getElementById("durtimetext");
		mutebtn = document.getElementById("mutebtn");
		volumeslider = document.getElementById("volumeslider");
		fullscreenbtn = document.getElementById("fullscreenbtn");
		playandpausebtn = document.getElementById("play-pause-btn");
		playandpauseframe = document.getElementById("my-video");
		// Add event listeners
		playbtn.addEventListener("click", playPause, false);
		seekslider.addEventListener("change", vidSeek, false);
		vid.addEventListener("timeupdate", seektimeupdate, false);
		mutebtn.addEventListener("click", vidmute, false);
		volumeslider.addEventListener("change", setvolume, false);
		fullscreenbtn.addEventListener("click", toggleFullScreen, false);
		playandpausebtn.addEventListener("click", playPause, false);
		playandpauseframe.addEventListener("click", playPause, false);

		// has autoplay attribute and show Pause/Play box
		hasAttributeAutoplay = vid.hasAttribute("autoplay");
		showPausePlayBox(hasAttributeAutoplay, '.play-pause-bar' ,'#playpausebtn');

		// To triger the event updatesliderRange onload
		updatesliderRange('#seekslider','webkit');
		updatesliderRange('#volumeslider','webkit');

		// Generate Browser Class
		generateBrowserClass("#video-player-box"); //target parent element

	}

	window.onload = intializelPlayer;

	function playPause(){

		if(vid.paused){
			vid.play();
			// playbtn.innerHTML = "Pause";
			playbtn.classList.remove("play");
			playbtn.classList.remove("pause");
			playbtn.classList.add("pause");

			showPausePlayBox(true, '.play-pause-bar');

		}else{
			vid.pause();
			// playbtn.innerHTML = "Play";
			playbtn.classList.remove("pause");
			playbtn.classList.remove("play");
			playbtn.classList.add("play");


			showPausePlayBox(false, '.play-pause-bar');
		}
	}
	function vidSeek(){
		var seekto = vid.duration * (seekslider.value / 100);
		vid.currentTime = seekto;
	}
	function seektimeupdate(){

		// fix for webkit slider color range issue
		updatesliderRange('#seekslider','webkit');

		var nt = vid.currentTime * (100 / vid.duration);
		seekslider.value = nt;

		var curmins = Math.floor(vid.currentTime / 60);
		var cursecs = Math.floor(vid.currentTime - curmins * 60);
		var durimins = Math.floor(vid.duration / 60);
		var dursecs = Math.floor(vid.duration - durimins * 60);

		if(cursecs < 10){
			cursecs = "0" + cursecs;
		}

		if(dursecs < 10){
			cursecs = "0" + dursecs;
		}

		if(curmins < 10){
			curmins = "0" + curmins;
		}

		if(durimins < 10){
			durimins = "0" + durimins;
		}

		curtimetext.innerHTML = curmins + ":" + cursecs;
		durtimetext.innerHTML = durimins + ":" + dursecs;

	}
	function vidmute(){

		if(vid.muted){
			vid.muted = false;
			mutebtn.innerHTML = "Mute";

		}else{
			vid.muted = true;
			mutebtn.innerHTML = "Unmute";
		}
	}
	function setvolume(){
		// fix for webkit slider color range issue
		updatesliderRange('#volumeslider','webkit');

		vid.volume = volumeslider.value / 100;
	}
	function toggleFullScreen(){
		if (vid.requestFullscreen) {
			vid.requestFullscreen();
		} else if(vid.webkitRequestFullScreen){
			vid.webkitRequestFullScreen();
		} else if(vid.mozRequestFullScreen){
			vid.mozRequestFullScreen();
		} else if(vid.msRequestFullscreen){
			vid.msRequestFullscreen();
		}
	}
	var showPausePlayBox = function(hasAttributeAutoplay, playpausebar, playpausebtn){

		if(hasAttributeAutoplay != true){
			$(playpausebar).removeClass('hide');
			$(playpausebtn).removeClass('pause')
			$(playpausebtn).removeClass('play').addClass('play');
		}else{
			$(playpausebar).removeClass('hide').addClass('hide');
			$(playpausebtn).removeClass('play')
			$(playpausebtn).removeClass('pause').addClass('pause');
		}
	}

	// this function is fix for webkit slider color range issue only
	var updatesliderRange = function(id, webkit){
		var check = browserCheck();

		var eventTriger;
		switch (check) {
		    case 'Firefox':
		        eventTriger = false;
		        break;
		    case 'IE':
		        eventTriger = false;
		        break;
		    case 'Edge':
		        eventTriger = false;
		        break;
		    default:
		        eventTriger = true;
		}
		if(eventTriger == true){
			$(id).removeClass(webkit).addClass(webkit);

			var targetElement = id+'.'+webkit;

			var val = ($(targetElement).val() - $(targetElement).attr('min')) / ($(targetElement).attr('max') - $(targetElement).attr('min'));
		    $(targetElement).css('background-image',
		            '-webkit-gradient(linear, left top, right top, '
		            + 'color-stop(' + val + ', #00bf66), '
		            + 'color-stop(' + val + ', #d4d4d4)'
		            + ')'
		            );
		}else{
			$(id).removeClass(webkit);
		}

	}

	// Generate Browser Class
	var generateBrowserClass = function(id){

		var browserClass = browserCheck();

		$(id).addClass(browserClass);
		$('.video-player').addClass(browserClass);
	}
}