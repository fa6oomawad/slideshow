$("#next").on("click",function(){
var activeSlide=$(".slide.active");
var nextslide=activeSlide.next();
    
activeSlide.removeClass("active");
nextslide.addClass("active");
//if its the last active slide , add active class to the first slide and start again
    if (nextslide.length==0){
        $(".slide").first().addClass("active");
    }
});


$("#pre").on("click",function(){

var activeSlide=$(".slide.active");
var prevslide=activeSlide.prev();
    
activeSlide.removeClass("active");
prevslide.addClass("active");

 
    if (prevslide.length==0){
        $(".slide").last().addClass("active");
    }
});





