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


$("#himym").on("click",function(){
$(".slider").fadeOut(1000);
$(".slide active").attr("src","img2/6.jpg");
$(".slide:eq(1)").attr("src","img2/1.jpg");
$(".slide:eq(2)").attr("src","img2/2.jpg");
$(".slide:eq(3)").attr("src","img2/3.jpeg");
$(".slide:eq(4)").attr("src","img2/4.jpg");
console.log($(".slide:eq(5)").attr("src","img2/5.jpg"));
$(".slider").fadeIn(1000);

console.log("ola");



})


