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
