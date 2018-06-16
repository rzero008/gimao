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
