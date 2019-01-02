var slides = $(".slide");

$("#next").on("click",function(){
    slides=$(".slide");
    var activeSlide=$(".active");
    
 activeSlide.removeClass('active').next('.slide').addClass('active');
});

$("#pre").on("click",function(){
    slides=$(".slide");
    var activeSlide=$(".active");
    
 activeSlide.removeClass('active').prev('.slide').addClass('active');
});




