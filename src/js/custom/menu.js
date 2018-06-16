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
