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
