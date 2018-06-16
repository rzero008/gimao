'use strict';

//====================
(function () {
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

    // alert(window.orientation);

    $(document).ready(function () {
        alert("Sd");
        renderSlider();

        $(window).resize(function () {
            renderSlider();
            isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? true : false;
            if (!getIsOnlyMobile()) {
                // if (window.innerWidth >= 600) {
                $('.js-footer-home').slideUp('300');
                $('.js-footer-home').removeClass('active');
                $('.js-home-page').removeClass('footer');
            } else if (getIsOnlyMobile()) {
                // } else if (window.innerWidth < 600) {
                $('.js-footer-home').slideDown('300');
                $('.js-footer-home').addClass('active');
                $('.js-home-page').addClass('footer');
            }
        });
    });

    function toggleFooter() {
        if (indexSlideLast === $('#fullpage .section').length) {
            $('.js-footer-home').slideDown('300');
            $('.js-footer-home').addClass('active');
            $('.js-home-page').addClass('footer');
        } else {
            $('.js-footer-home').slideUp('300');
            $('.js-footer-home').removeClass('active');
            $('.js-home-page').removeClass('footer');
        }
    }

    var isFirefox = /Firefox/i.test(navigator.userAgent) ? true : false;

    if (isFirefox) {
        document.addEventListener("DOMMouseScroll", function (e) {
            if (!getIsOnlyMobile() && !isMobile) {
                // if (window.innerWidth >= 600 && !isMobile) {
                toggleFooter();
            }
        }, false);

        document.addEventListener('touchmove', function (e) {
            if (!getIsOnlyMobile() && isMobile) {
                // if (window.innerWidth >= 600 && isMobile) {
                toggleFooter();
            } else if (getIsOnlyMobile()) {
                // } else if (window.innerWidth < 600) {
                $('.js-footer-home').slideDown('300');
                $('.js-footer-home').addClass('active');
                $('.js-home-page').addClass('footer');
            }
        }, false);
    } else {
        $(window).on({
            mousewheel: function mousewheel() {
                if (!getIsOnlyMobile() && !isMobile) {
                    // if (window.innerWidth >= 600 && !isMobile) {
                    toggleFooter();
                }
            },
            touchmove: function touchmove() {
                if (!getIsOnlyMobile() && isMobile) {
                    // if (window.innerWidth >= 600 && isMobile) {
                    toggleFooter();
                } else if (getIsOnlyMobile()) {
                    // } else if (window.innerWidth < 600) {
                    $('.js-footer-home').slideDown('300');
                    $('.js-footer-home').addClass('active');
                    $('.js-home-page').addClass('footer');
                }
            }
        });
    }

    function renderSlider() {
        // var width = window.innerWidth || document.body.clientWidth;
        // if (oldWidth == width) {
        //     if (width < 600) {
        //         initSlick();
        //     } else {
        //         initFullpage();
        //     }
        // } else {
        //     if (oldWidth >=600 && width < 600) {
        //         destroyFullpage();
        //         initSlick();
        //     } else if (oldWidth < 600 && width >= 600) {
        //         destroySlick();
        //         initFullpage();
        //     }

        //     oldWidth = width;
        // }
        // console.log(getIsOnlyMobile());

        if (getIsOnlyMobile()) {
            if (hasFullPage()) {
                destroyFullpage();
            }

            if (!hasSlick()) {
                initSlick();
            }
        } else if (!getIsOnlyMobile()) {
            if (hasSlick()) {
                destroySlick();
            }

            if (!hasFullPage()) {
                initFullpage();
            }
        }
    }

    function initSlick() {
        element.slick({
            arrows: false
        });

        $('.js-slide-link').each(function (i) {
            $('[data-slickindex="slide' + i + '"] a').click(function () {
                element.slick('slickGoTo', i);
            });
        });

        element.on("afterChange", function (event, slick, currentSlide, nextSlide) {
            $('.js-slide-link').removeClass('active');
            $('[data-slickindex="slide' + currentSlide + '"]').addClass('active');
        });
    }

    function destroySlick() {
        element.slick("unslick");
    }

    function hasSlick() {
        if (element.hasClass('slick-initialized')) {
            return true;
        } else {
            return false;
        }
    }

    function initFullpage() {
        element.fullpage({
            //Navigation
            menu: '#fullpage-nav',
            // continuousVertical: true,
            anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'],
            controlArrows: false,
            slidesNavigation: true,
            css3: true,
            scrollingSpeed: 1000,
            autoScrolling: true,
            touchSensitivity: 20,
            normalScrollElements: '.goals-list-wrapper, .home-page-info',
            afterRender: function afterRender() {
                setInterval(function () {
                    $.fn.fullpage.moveSectionDown();
                }, 12000);
            },
            onLeave: function onLeave(index, nextIndex, direction) {
                if (direction == "up") {
                    indexSlideLast = nextIndex;
                }

                toggleFooter();
            },
            afterLoad: function afterLoad(anchorLink, index) {
                indexSlideLast = index;
            }
        });
    }

    function hasFullPage() {
        if (element.hasClass('fullpage-wrapper')) {
            return true;
        } else {
            return false;
        }
    }

    function destroyFullpage() {
        $.fn.fullpage.destroy('all');
    }
})();