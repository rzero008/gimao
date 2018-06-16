$(document).ready(function() {
    // CONTACT US UI SCRIPTS
        $(".submit-complete").addClass("hide");

     var x, i, j, selElmnt, a, b, c;
     /*look for any elements with the class "custom-select":*/
     x = document.getElementsByClassName("custom-select");
     for (i = 0; i < x.length; i++) {
       selElmnt = x[i].getElementsByTagName("select")[0];
       /*for each element, create a new DIV that will act as the selected item:*/
       a = document.createElement("DIV");
       a.setAttribute("class", "select-selected");
       a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
       x[i].appendChild(a);
       /*for each element, create a new DIV that will contain the option list:*/
       b = document.createElement("DIV");
       b.setAttribute("class", "select-items select-hide");
       for (j = 1; j < selElmnt.length; j++) {
         /*for each option in the original select element,
         create a new DIV that will act as an option item:*/
         c = document.createElement("DIV");
         c.innerHTML = selElmnt.options[j].innerHTML;
         c.addEventListener("click", function(e) {
             /*when an item is clicked, update the original select box,
             and the selected item:*/
             var y, i, k, s, h;
             s = this.parentNode.parentNode.getElementsByTagName("select")[0];
             h = this.parentNode.previousSibling;
             for (i = 0; i < s.length; i++) {
               if (s.options[i].innerHTML == this.innerHTML) {
                 s.selectedIndex = i;
                 h.innerHTML = this.innerHTML;
                 y = this.parentNode.getElementsByClassName("same-as-selected");
                 for (k = 0; k < y.length; k++) {
                   y[k].removeAttribute("class");
                 }
                 this.setAttribute("class", "same-as-selected");
                 break;
               }
             }
             h.click();
         });
         b.appendChild(c);
       }
       x[i].appendChild(b);
       a.addEventListener("click", function(e) {
           /*when the select box is clicked, close any other select boxes,
           and open/close the current select box:*/
           e.stopPropagation();
           closeAllSelect(this);
           this.nextSibling.classList.toggle("select-hide");
           this.classList.toggle("select-arrow-active");
       });
     }
     function closeAllSelect(elmnt) {
       /*a function that will close all select boxes in the document,
       except the current select box:*/
       var x, y, i, arrNo = [];
       x = document.getElementsByClassName("select-items");
       y = document.getElementsByClassName("select-selected");
       for (i = 0; i < y.length; i++) {
         if (elmnt == y[i]) {
           arrNo.push(i)
         } else {
           y[i].classList.remove("select-arrow-active");
         }
       }
       for (i = 0; i < x.length; i++) {
         if (arrNo.indexOf(i)) {
           x[i].classList.add("select-hide");
         }
       }
     }
     /*if the user clicks anywhere outside the select box,
     then close all select boxes:*/
     document.addEventListener("click", closeAllSelect);

     /*  Accept numbers only. */
     $("#cell_no").keydown(function (e) {
             // Allow: backspace, delete, tab, escape, enter and .
             if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                  // Allow: Ctrl/cmd+A
                 (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                  // Allow: Ctrl/cmd+C
                 (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
                  // Allow: Ctrl/cmd+X
                 (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
                  // Allow: home, end, left, right
                 (e.keyCode >= 35 && e.keyCode <= 39)) {
                      // let it happen, don't do anything
                      return;
             }
             // Ensure that it is a number and stop the keypress
             if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                 e.preventDefault();
             }
         });

     /* check select field */
     function validateForm() {
          'use strict';
          window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);
      }

      /* Accept Character Only */
      $("#custName").keydown(function (e) {
        var key = e.keyCode;
        if (key >= 48 && key <= 57) {
            e.preventDefault();
        }
      });

     /* submit the form */
      $("#btn_send").click(function(e){
        validateForm();
        $(".hideCollapse").removeAttr("style");
        $(".submit-complete").removeClass("hide");
        $(".submit-complete").addClass("show");
      });
    
    
    
    
    
    /* contact us page js scripts */
    
    $(".contacts-region").click(function(){
            $(".region-panel-filter").toggle();
            $(this).toggleClass('close-filter');
    
    });
    $(".close-x-button").click(function(){
        $(".region-panel-filter").toggle();
        $(".contacts-region").toggleClass('close-filter');
    });
});

// toggleHideShow function for region
var hideShowListCountry = function(event, toggleClass, toggleClassTitle, listRegion, generateSubClass, closeButton){

    var classData = "."+ toggleClass;
    var classTitle = "."+ toggleClassTitle;
    var classRegion = "." + listRegion;
    var genarateClass = "." + generateSubClass;
    var closebtn = "." + closeButton;

    var isVisible = $('.region-area').is(":visible");

    if(isVisible != true){
        $(classTitle).removeClass("hide");
        $(closebtn).removeClass("hide");

        $(genarateClass+":nth-child(1)").removeClass("toggle-hide").addClass("toggle-hide");
        $(genarateClass+":nth-child(2)").removeClass("toggle-hide").addClass("toggle-hide");
        $(genarateClass+":nth-child(3)").removeClass("toggle-hide").addClass("toggle-hide");
        $(genarateClass+":nth-child(4)").removeClass("toggle-hide").addClass("toggle-hide");

        $(genarateClass+":nth-child(8)").removeClass(listRegion).addClass(listRegion);
        $(genarateClass+":nth-child(8)").removeClass("hide");
    }else{
        $(classTitle).removeClass("hide").addClass("hide");
        $(closebtn).removeClass("hide").addClass("hide");
        $(genarateClass+":nth-child(1)").removeClass("toggle-hide");
        $(genarateClass+":nth-child(2)").removeClass("toggle-hide");
        $(genarateClass+":nth-child(3)").removeClass("toggle-hide");
        $(genarateClass+":nth-child(4)").removeClass("toggle-hide");

        $(genarateClass+":nth-child(8)").removeClass(listRegion);
        $(genarateClass+":nth-child(8)").removeClass("hide").addClass("hide");
    }

    $(classData).toggle();

    event.preventDefault();
}

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
//----HOMEPAGE JS-----

//----fullpage JS-----

$(document).ready(function() {
    
 //AEM fix    
  var xTcount = 10;

  var aemInitialHeightFix= function(){
    var adjustHeight = $('.homepage-quick-views-wrapper .quick-views-list .view-list').height();
    $('.view-list img').height(adjustHeight);
  };

    $('.homepage-quick-views-wrapper .quick-views-list .view-list').ready(function(){
      for(var i = 0; i < xTcount; i++) {
          aemInitialHeightFix();
      }
    });
    // indicate homepage only for carousel footer slide up
    if (window.matchMedia('(min-width: 1200px)').matches) {

        if ($('.slider').is(':visible')) {
            $('body').addClass('home-indicator');
        }
        if ($("body").hasClass("home-indicator")) {
            $('footer').addClass('hidden');
        }
    }
    $('.home-indicator .slider').removeClass('busy');


    // EXTRA FUNCTIONS FOR REUSABILITY
    var oldWidth = window.innerWidth || document.body.clientWidth;
    var element = $('#fullpage');
    var indexSlideLast = 0;
    var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? true : false;



    function getIsOnlyMobile() {
        if (window.innerWidth >= 600 && window.innerHeight >= 600) {
            return false;

        } else if (window.innerWidth < 600 || window.innerHeight < 600) {
            return true;

        }

    }


    // for object fit image compatibility
    $(function() {
        var $someImages = $('.js-activation-object-fit');
        objectFitImages($someImages);
    });









    var carouselSlideInterval = $('.slider').attr("data-carouselinterval");
    console.log(carouselSlideInterval);

    // SLICK CAROUSEL FOR MOBILE - Horizontal slide since Jquery Fullpage dont have horizontal
    function initSlick() {
        var $slick = $('.home-page-horizontal-mobile');
        var initialisation;
        var width = window.innerWidth || document.body.clientWidth;

        clearTimeout(initialisation);
        initialisation = setTimeout(function() {

            if ($slick.hasClass('slick-initialized')) {
                $slick.slick('unslick');
            }

            if (width < 760) {
                $('#slider').css('display', 'none');

                $slick.on('init', function() {}).slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 1,
                    autoplaySpeed: carouselSlideInterval,
                    slidesToScroll: 1,

                    draggable: true,
                    customPaging: function(slider, i) {
                        var thumb = $(slider.$slides[i]).data();
                        return '<a>0' + (i + 1) + '</a>';
                    },
                    // centerMode: true,
                    // centerPadding: '100px'
                });
            }
        }, 150);

    }








    // Desktop Carousel and medium device
    if (width > 759) {
      var mouseWheel = function($slider) {
          $(window).on('wheel', {
              $slider: $slider
          }, mouseWheelHandler);
      };

      var mouseWheelHandler = function(event) {
          event.preventDefault();
          var $slider = event.data.$slider;
          var delta = event.originalEvent.deltaY;
          if (delta > 0) {
              $slider.slick('slickNext');
              if (window.matchMedia('(min-width: 1200px)').matches) {
                  if ($('.slider').hasClass('busy')) {

                      $('footer').slideDown(function() {
                          $(this).css('display', 'block');
                      });
                  }
              }


          } else {
              $slider.slick('slickPrev');

          }
      };

        var $slider = $("#slider");
        $slider.on('init', function() {
            mouseWheel($slider);
        }).slick({
            dots: true,
            vertical: true,
            arrows: false,
            autoplay: true,
            infinite: false,
            initialSlide: 0,
            autoplaySpeed: carouselSlideInterval,
            slidesToScroll: 1,
            slidesToShow: 1,
            draggable: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            verticalSwiping: false,
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a>0' + (i + 1) + '</a>';
            }
        }).on("afterChange", function(e, slick) {


            var circle = new ProgressBar.Circle('.slick-dots .slick-active', {
                color: '#00bf66',
                strokeWidth: 6,
                duration: 7000,
//                trailWidth: 2,
//                trailColor: '#FFF',
                shapeRendering: 'svg',
                easing: 'easeOut',
                svgStyle: null
            });
            circle.animate(-0.75); // Number from 0.0 to 1.0

            var notActiveTarget = $('.slick-dots li:not(.slick-active)');
            notActiveTarget.find('svg').remove();

            var curr = slick.currentSlide;
            var numItems = $('.slick-slide').length - 1;

            if (window.matchMedia('(min-width: 1200px)').matches) {
                if (curr == numItems) {
                    // set busy status when listening
                    $('.slider').addClass('busy');
                } else {
                    $('.slider').removeClass('busy');

                    $('footer').slideUp(function() {

                        $(this).css('display', 'none');
                    });
                }
            }

        });


        $(window).bind('keydown', function(event) {
            if (event.which === 33) {

                $("#slider").slick('slickPrev');
                if ($('.slider').hasClass('busy')) {
                    $('.slider').removeClass('busy');
                    $('footer').slideUp(function() {
                        $(this).css('display', 'none');
                    });
                }
            } // end of 333

            if (event.which === 34) {
                $("#slider").slick('slickNext');
                if ($('.slider').hasClass('busy')) {
                    if (window.matchMedia('(min-width: 1200px)').matches) {
                        $('footer').slideDown(function() {
                            $(this).css('display', 'block');
                        });
                    }
                }

            } // end of 34




        });



    }


    if (width < 760) {
        $('#slider').css('display', 'none');
        initSlick();
    } else {
        $('.home-page-horizontal-mobile').css('display', 'none');
    }


    //var onPlayerReady = function(event) {
    //      event.target.playVideo();
    //};

    // The first argument of YT.Player is an HTML element ID. YouTube API will replace my <div id="player"> tag with an iframe containing the youtube video.

    //

    var video = $("#playerid").attr("src");
    $("#playerid").attr("src", "");
    $("#playerid").attr("src", video);

    $('.slider .content .button-area img').click(function(e) {
        if ($(this).parent().next('.video-wrapper').length) {
            $("#slider").slick('slickPause');
            var pointIframe = $(this).parent().next('.video-wrapper').find('.yt-player');
            var vidValue = pointIframe.attr('alt');
            pointIframe.attr("src", vidValue);
            $('.slider .content').addClass('open-video');
            $('.slick-dots, .homepage-quick-links-container').css('z-index', '-1');

            $(this).parent().next().find('.yt-player').css({
                "opacity": "0",
                "display": "block",
            }).show().animate({
                opacity: 1
            });
            $(this).parent().next().find('.yt-close').css('display', 'block');
            $('.ytp-large-play-button.ytp-button').click();
            $('.slick-active .yt-player').css('position', 'absolute');
        }

    });

    $('.home-page-horizontal-mobile .mobile-content .goals-button img').click(function(e) {
        if ($(this).parent().next('.video-wrapper').length) {

            var pointIframe = $(this).parent().next('.video-wrapper').find('.yt-player');
            var vidValue = pointIframe.attr('alt');
            pointIframe.attr("src", vidValue);
            $('.home-page-horizontal-mobile .mobile-content').addClass('open-video');
            $('.slick-dots, .homepage-quick-links-container').css('z-index', '-1');

            $(this).parent().next().find('.yt-player').css({
                "opacity": "0",
                "display": "block",
            }).show().animate({
                opacity: 1
            });
            $(this).parent().next().find('.yt-close').css('display', 'block');
            $('.ytp-large-play-button.ytp-button').click();
            $('.slick-active .yt-player').css('position', 'absolute');
            $('.home-page-horizontal-mobile').slick('slickSetOption', 'autoplay', false).slick('slickPause');

        }

    });




    $('.yt-close').click(function() {
        var pointCloseSrc = $(this).next('.yt-player');
        pointCloseSrc.attr('src', '');

        $('.yt-close').next().css('display', 'none');
        $('.yt-close').css('display', 'none');
        $('.slick-dots').css('z-index', 'auto');
        $('.homepage-quick-links-container').css('z-index', '1');
        $('.slider .content').removeClass('open-video');

        if (jQuery(window).width() > 759) {
            $("#slider").slick('slickPlay');
        } else {
            $(".home-page-horizontal-mobile").slick('slickPlay');
        }

    });





    // initialize progressbar circle on page load
if ($("body").hasClass("home-indicator")) {
    if (jQuery(window).width() > 759) {
        var circle = new ProgressBar.Circle('.slick-dots .slick-active', {
            color: '#00bf66',
            strokeWidth: 6,
            duration: 7000,
//            trailWidth: 2,
//            trailColor: '#FFF',
            shapeRendering: 'svg',
            easing: 'easeOut',
            svgStyle: null
        });
        circle.animate(-0.75); // Number from 0.0 to 1.0

        var notActiveTarget = $('.slick-dots li:not(.slick-active)');
        notActiveTarget.find('svg').remove();
    }
}



}); //----END OF HOMEPAGE JS-----

// Store locator with customisations
// - custom marker
// - custom info window (using Info Bubble)
// - custom info window content (+ store hours)
$(document).ready(function(){
var ICON = new google.maps.MarkerImage('medicare.png', null, null,
    new google.maps.Point(14, 13));

var SHADOW = new google.maps.MarkerImage('medicare-shadow.png', null, null,
    new google.maps.Point(14, 13));

google.maps.event.addDomListener(window, 'load', function() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(-28, 135),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var panelDiv = document.getElementById('panel');

  var data = new MedicareDataSource;

  var view = new storeLocator.View(map, data, {
    geolocation: false,
    features: data.getFeatures()
  });

  view.createMarker = function(store) {
    var markerOptions = {
      position: store.getLocation(),
      icon: ICON,
      shadow: SHADOW,
      title: store.getDetails().title
    };
    return new google.maps.Marker(markerOptions);
  }

  var infoBubble = new InfoBubble;
  view.getInfoWindow = function(store) {
    if (!store) {
      return infoBubble;
    }

    var details = store.getDetails();
    var html = ['<div class="branches"><div class="fulltitle">', details.fulltitle,'</div><div class="address">', details.address, '</div><div class="schedule">', details.schedule, '</div><div class="phone">', details.phone, '</div><div class="fax">', details.fax, '</div></div>'].join('');

    infoBubble.setContent($(html)[0]);
    return infoBubble;
  };

  new storeLocator.Panel(panelDiv, {
    view: view
  });
});

    
});
$(function() {
    // set path for the image


    //Goal list on desktop
    //Disable Goal list on Mobile view
     if(jQuery(window).width() >= 759){
      //Goal list on desktop
         $("nav#menu2").mmenu({
         "extensions": [

             "position-front"
             ],
             "counters": true
            },{



             // configuration
             offCanvas: {
                pageSelector: ".quick-goal-list"
             }

            });
     }
        //main navigation here
				$('nav#menu').mmenu({
					extensions	:  {
                    "all": ["theme-dark"],
                    "(max-width: 759px)": ["fullscreen"]
                    },

					setSelected	: true,
					counters	: false,
					searchfield : {
						placeholder		: 'Search menu items'
					},

					sidebar		: {
						collapsed		: {
							use 			: 760,
							size			: 60,
							hideNavbar		: true,
							blockMenu		: true
						}
//						expanded		: {
//							use 			: '(min-width: 3000px)',
//							size			: 35
//						}
					},
                     navbar: {
                            title: ""
                        },
					navbars		: [
//						{
//							content		: [ 'searchfield' ]
//						},
//                        {
//							type		: 'tabs',
//							content		: [
//								'<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Menu</span></a>'
//							]
//						},

//                        {
//							content		: [ 'prev', 'breadcrumbs', 'close' ]
//						},
//
//                        {
//                            use 		: '(max-width: 420px)',
//							position	: 'bottom',
//							content		: [ '<div class="footer-mobile"></div>' ]
//						}
					]
				}, {
					searchfield : {
						clear 		: true
					},
					navbars		: {
						breadcrumbs	: {
							removeFirst	: true
						}
					}
				});
                // Appending Footer Content to Mobile Device Navigation
                $("#listLinks-bottom").append($('footer').clone());

			}); // end of jquery mmenu declaration



                   //---On Document Normal Adjust Scenario---
                   $(document).ready(function(){

                 var icon_light_path =  "../img/menu/icon_white";
                var icon_dark_path = "../img/menu/icon_dark";

                       //goal list custom
                       var getAsideCategoryWidth = $('.aside-category-links').width();
                       $('nav#menu2').css('width', getAsideCategoryWidth + 'px');
                          // **More than 420 device width**
                         if(jQuery(window).width() >= 759){
                              var API = $("#menu").data( "mmenu" );

                             API.bind( "closed", function() {
                                API.openPanel($('li.mm-selected').closest('.mm-panel'));
                            });

                             $('.mm-menu__blocker').attr('href', '').css({'cursor': 'pointer', 'pointer-events' : 'none'});
                                $('#menu').removeClass("mm-menu_opened");
                                     $('nav#menu:not(.mm-panels a)').click(function(e){
                                     $('#menu').removeClass("mm-menu_opened");
                                     e.stopPropagation();
                                   });
                                    //for desktop the toggle effect is set to off
                                    $('.listitem.mm-listitem a').click(function(e){
                                          $('#menu').removeClass("mm-menu_opened");
                                          e.stopPropagation();
                                   });

                                   //switch to white icon when turned to desktop and medium device view
                                   $(".listLinks img.menu-icon:not(.login)").each(function(index){
                                       var src = $(this).attr("src");
                                         //console.log(src + "source");
                                        var photoName = src.substr(src.lastIndexOf("/"));
                                         //console.log(photoName + "photoName");
                                        $(this).attr("src", icon_light_path +photoName);

                                    });



                             $('.listLinks ul li a img').each(function(){
                                var altval = $(this).attr("alt");
                                    $("<span class='altval'>" + altval+ "</span>").insertAfter( $(this).closest(".listLinks ul li a") );
                                });
                                    //display text on desktop view

                          }

                            // **Toggle effect set to turn on during 420 small device**
                           else{

//                               $('.special-close').click(function(){
//
//                               });

                               // hamburger icon
                                if($('.special-close').hasClass("mm-btn_close")){
                                    $('.special-close.mm-btn_close').removeClass('mm-btn_close');
                                    $('.special-close').addClass("burg");

                                }
//                                      if($('#menu').hasClass("mm-menu_opened")){
//                                           $('#menu').css('height', 'auto');
//                                        }
//                                        else{
//                                             $('#menu').css('height', '60px');
//
//                                        }
                               $('a[href = "#menu"]').click(function(){
                                   if($('.special-close').hasClass("mm-btn_close")){
                                      $('.special-close.mm-btn_close').removeClass('mm-btn_close');
                                        $('.special-close').addClass("burg");
                                   }else{
                                   $('.special-close').addClass('mm-btn_close');
                                        $('.special-close').removeClass("burg");
                                   }


                                     var API = $("#menu").data( "mmenu" );
                                    API.close();
                               });

                                    //switch to dark icon when turned to mobile view
                                   $(".listLinks img.menu-icon:not(.login)").each(function(index){
                                       var src = $(this).attr("src");
                                         //console.log(src + "source");
                                        var photoName = src.substr(src.lastIndexOf("/"));
                                        // console.log(photoName + "photoName");
                                        $(this).attr("src", "../img/menu/icon_dark"+photoName);

                                    });





                           }
                    });

//Slide Reveal Desktop and Mobile Adjustments for the submenu
$("nav#menu").ready(function(){

        $(".listLinks .listview li").each(function(){
           //$(this).find(".no-aside-content").prev("a").hide(); 
           
        });

        if (window.matchMedia('(max-width: 760px)').matches) {
            $(".no-aside-content").prev().prev(".mm-btn_next").hide();
        }
 });


// adjust navigation width when string puts up more than 60 px in width or 10 length
 var width = jQuery(window).width();
    //console.log(width);


    $(document).ready(function(){
        // text string length adjust nav width by adding class exceed
        if (width > 1599 ) {

            $('li .altval').each(function(){
                if($(this).text().length >= 10)
                {
                    $('nav#menu').addClass('exceed');
                     $('nav#menu .listitem .mm-btn_next').remove();
                }
            });

        } // end of width condition


        // set to 100 default
        if (width >= 2560 ){
             $('nav#menu').addClass('exceed');
            $('nav#menu .listitem .mm-btn_next').remove();


        }
                //desktop remove unecessary extra link on each items
                if(jQuery(window).width() >= 1600){
                            //$('.listitem.mm-listitem a.mm-btn_next').remove();
                        }
    });


// submenu Desktop

if (window.matchMedia('(min-width: 760px)').matches) {
$('nav#menu').ready(function(){
//     var hashHtml = $("#mm-1").html();
//     $('.submenu').html(hashHtml);$('.sub-menu-list').removeClass('hide');



	$('.mm-listitem  a, .mm-btn_next').hover(function(){

             $(".sub-menu-list").removeClass("hide");
        
        //check aside main link if exist if not we push the slidereveal
        var checkAsideMainLink = $(".aside-category-main-links").length;
        if( checkAsideMainLink === 0){
           var sliderz = $('.sub-menu-list').slideReveal(); // slideReveal return $('#slider')
            var submenuWidth = $(".sub-menu-list").width();
            sliderz.slideReveal("show");
            sliderz.css("left",-submenuWidth);
            
        }else{
            $(".aside-category-main-links").addClass("hide");
            $(".aside-category-links .sub-menu-list").addClass("show");
        }
    

           var valueHash =  $(this).attr('href');
           var hashHtml = $(valueHash).html();
           $('.submenu').html(hashHtml);

            //disable 2nd tree
            $(".submenu .mm-listview  li .mm-btn_next").hover(function(){
              $(this).attr("href","");
            });
            //styling for the last li
            $('.submenu .label.mm-listitem').each(function(){
              $(this).nextUntil('.submenu .label.mm-listitem').next('.listitem').last().css('padding-bottom','8px');
            });
            //hover state submenu
             $(".submenu .label.mm-listitem").hover(function(){
                $(this).addClass("active");
                 $('.submenu .label.mm-listitem.active').each(function(){
                    $(this).nextUntil('.submenu .label.mm-listitem').addClass("subs");
                });
             }, function() {
                 $(this).removeClass("active");
                     $('.submenu .label.mm-listitem').each(function(){
                      $(this).nextUntil('.submenu .label.mm-listitem').removeClass("subs");
                    });
             });

	});// end of hover btn-next

        // mobile click
    	$('.mm-listitem  a, .mm-btn_next').click(function(){
        $('.sub-menu-list').removeClass('hide');
            var checkAsideMainLink = $(".aside-category-main-links").length;
        if( checkAsideMainLink === 0){
         var sliderz = $('.sub-menu-list').slideReveal();
            var submenuWidth = $(".sub-menu-list").width();
            sliderz.slideReveal("show");
            sliderz.css("left", -submenuWidth);
        }

           var valueHash =  $(this).attr('href');
        //if(valueHash == '#mm-3'){
           var hashHtml = $(valueHash).html();
           $('.submenu').html(hashHtml);
       // }

	});


});
 //mobile tablet hover touch event for submenu and scenario close //
    $('.submenu').mouseleave(function() {
           var checkAsideMainLink = $(".aside-category-main-links").length;
        if( checkAsideMainLink === 0){
            var sliderz = $('.sub-menu-list').slideReveal(); 
            sliderz.slideReveal("hide");
            $('.sub-menu-list').addClass('hide');
            $('.submenu').empty();
        }
        else{
            $('.submenu').empty();
            $(".aside-category-main-links").removeClass("hide");
            $(".aside-category-links .sub-menu-list").removeClass("show");
            $('.sub-menu-list').addClass('hide');
        }
    });

    $('#slider').click(function(){
        $('.submenu').empty();
        $('.sub-menu-list').addClass('hide');

        var checkAsideMainLink = $(".aside-category-main-links").length;
        if( checkAsideMainLink === 0){
         var sliderz = $('.sub-menu-list').slideReveal();
        sliderz.slideReveal("hide");
        }
    });


    $('#slider').on({ 'touchstart' : function(){
    $('.submenu').empty();
            $('.sub-menu-list').addClass('hide');
    } });

/* mobile tablet click event for submenu */
 $(document).on('click', '.submenu a', function(e) {
       var valueHash =  $(this).attr('href');
        var hashHtml = $(valueHash).html();
       $('.submenu').html(hashHtml);
     var as = $('.submenu .mm-navbar a').attr('href');

     if(as !== '#panel-menu'){
         $('.submenu .mm-navbar').addClass('show');
     }
    //$(".submenu .label.mm-listitem").hover(function(){ $(this).addClass("active"); });


             $(".submenu .label.mm-listitem").hover(function(){
                $(this).addClass("active");
                 $('.submenu .label.mm-listitem.active').each(function(){
                    $(this).nextUntil('.submenu .label.mm-listitem').addClass("subs");
                });
             }, function() {
                 $(this).removeClass("active");
                     $('.submenu .label.mm-listitem').each(function(){
                      $(this).nextUntil('.submenu .label.mm-listitem').removeClass("subs");
                    });
             });


 });
}

$(document).ready(function() {

    $(".article-wrapper").each(function() {
        if ($(this).hasClass("hidden")) {
          $(".article-wrapper.hidden").next().children().toggleClass("active-toggle close-toggle");
          $(".article-wrapper.hidden").next().children().text("See More Products");
        }
    });

    $(".toggle-article-page").click(function(e) {
        e.preventDefault();

        var articlePage = $(this);

        articlePage.children().toggleClass("close-toggle active-toggle");

        articlePage.prev(".article-wrapper").slideToggle(200, function() {
            if (articlePage.prev(".article-wrapper").is(":visible")) {
                articlePage.prev(".article-wrapper").removeClass("hidden");

                articlePage.children().text("Hide Products");
            } else {
                articlePage.children().text("See More Products");
            }
        });
    });

    $(".thumbnail-content.collapse").prev().parent().parent().parent().click(function(e) {
        document.getElementById("contact-form").reset();
        e.preventDefault();
        if($(".submit-complete").hasClass("show")) {
            $(".submit-complete").removeClass("show");
            $(".submit-complete").addClass("hide");
        }
        $("form").slideToggle(200);
    });

    $(".brochure").click(function(e) {
        e.preventDefault();

        var brochure = $(this);
        var options = $(".brochure-options");

        brochure.children(":first-child").toggleClass("brochure-title-active brochure-title");

        options.slideToggle(200);
    });

    $('.active-product-category li a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });







    var $relatedSlider = $(".related-products");
        $relatedSlider.slick({
              dots: true,
              infinite: false,
              speed: 300,
              arrows: true,
              slidesToShow: 4,
              slidesToScroll: 4,

              responsive: [
                {
                  breakpoint: 1601,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                      arrows: true
                  }
                },
                {
                  breakpoint: 1025,
                  settings: {

                      infinite: false,
                    slidesToScroll: 2,
                       dots: true,
                      slidesToShow: 2,
                       arrows: true
                  }
                },
                    {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 2,
                      infinite: false,
                      dots: true,
                    slidesToScroll: 2,
                       arrows: false

                  }
                },

                   {
                  breakpoint: 377,
                  settings: {
                    slidesToShow: 1,
                      infinite: false,
                      dots: true,
                    slidesToScroll: 1,
                       arrows: false,
                       centerMode: true,
                        focusOnSelect: true
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            }).on("afterChange", function(e, slick) {
            if( $(".slick-track .related-item:first-child()").hasClass("slick-current") ){
                 $(".related-slide .slick-track").addClass("first");
                $(".related-products .slick-track").addClass("first");
            }
            else{
                $(".related-slide .slick-track").removeClass("first");
                $(".related-products .slick-track").removeClass("first");
            }
        });

        var $relatedSliderTwo = $(".related-slide");
        $relatedSliderTwo.slick({
              dots: true,
              infinite: false,
              speed: 300,
              arrows: true,
              slidesToShow: 4,
              slidesToScroll: 4,
              responsive: [
                {
                  breakpoint: 1601,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                      arrows: true
                  }
                },
                {
                  breakpoint: 1025,
                  settings: {

                      infinite: false,
                    slidesToScroll: 2,
                       dots: true,
                      slidesToShow: 2,
                       arrows: true
                  }
                },
                    {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 2,
                      infinite: false,
                      dots: true,
                    slidesToScroll: 2,
                       arrows: false

                  }
                },

                   {
                  breakpoint: 377,
                  settings: {
                    slidesToShow: 1,
                      infinite: false,
                      dots: true,
                    slidesToScroll: 1,
                       arrows: false,
                       centerMode: true,
                        focusOnSelect: true
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            }).on("afterChange", function(e, slick) {
            if( $(".slick-track .related-item:first-child()").hasClass("slick-current") ){
                 $(".related-slide .slick-track").addClass("first");
                $(".related-products .slick-track").addClass("first");
            }
            else{
                $(".related-slide .slick-track").removeClass("first");
                $(".related-products .slick-track").removeClass("first");
            }
        });

//fix resolution
$relatedSlider.slick('resize');
    $relatedSliderTwo.slick('resize');


        //check img exist
     $(".related-slide .related-item").each(function(){
               if( $(this).find(".thumbnail img").length ) { $(this).addClass("has-img"); } else { $(this).addClass("no-img"); }

             });
       if( $(".slick-track .related-item:first-child()").hasClass("slick-current") ){
          $(".related-products .slick-track").addClass("first");
           $(".related-slide .slick-track").addClass("first");
     }





     // aem attribute color for related product and article
    if($(".related-products")){
        $(".related-products .related-item .related-product-title").each(function(){
            if($(this).attr("data-color")){
                var color = $(this).attr("data-color");
                $(this).css("border-left", "solid 6px"+ color);
            }
        });
    }

    // video
    $("iframe.article-video").each(function(){

        var linkYoutube = $(this).attr("data-link-youtube");

        var videoid = linkYoutube.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

        if(videoid != null) {
           $(this).attr("src", "https://www.youtube.com/embed/" + videoid[1]);
        } else {
            alert("The youtube url is not valid.");
        }

        });

//        $(".article-video").load(function(){
//        $(".article-video").contents().find()
//
//
//        var frame = $(".article-video");
//        var contents = frame.contents();
//
//        contents.find('body').css("border","solid 1px red !important");
//
//
//        });

});
