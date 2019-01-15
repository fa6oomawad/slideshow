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
setTimeout(function(){
    $(".slide.active").attr("src","img2/7.jpg");
    $(".slide:eq(1)").attr("src","img2/1.jpg");
    $(".slide:eq(2)").attr("src","img2/2.jpg");
    $(".slide:eq(3)").attr("src","img2/3.jpeg");
    $(".slide:eq(4)").attr("src","img2/4.jpg");
    $(".slide:eq(5)").attr("src","img2/5.jpg");
    $(".slider").fadeIn(1000);
},1000);


console.log("ola");



});

$("#theoffice").on("click",function(){
    $(".slider").fadeOut(1000);
    setTimeout(function(){
        $(".slide.active").attr("src","img3/1.jpg");
        $(".slide:eq(1)").attr("src","img3/2.jpg");
        $(".slide:eq(2)").attr("src","img3/3.jpg");
        $(".slide:eq(3)").attr("src","img3/4.jpeg");
        $(".slide:eq(4)").attr("src","img3/5.jpg");
        $(".slide:eq(5)").attr("src","img3/6.jpg");
        $(".slider").fadeIn(1000);
    },1000);
   


});

$("#13reasons").on("click",function(){
    $(".slider").fadeOut(1000);
    setTimeout(function(){
        $(".slide.active").attr("src","img4/1.jpg");
        $(".slide:eq(1)").attr("src","img4/2.jpg");
        $(".slide:eq(2)").attr("src","img4/3.jpg");
        $(".slide:eq(3)").attr("src","img4/4.jpg");
        $(".slide:eq(4)").attr("src","img4/5.jpg");
        $(".slide:eq(5)").attr("src","img4/6.jpg");
        $(".slider").fadeIn(1000);
    },1000);
    


});




$("#friends").on("click",function(){
    $(".slider").fadeOut(1000);
    setTimeout(function(){
        $(".slide.active").attr("src","img1/6.gif");
        $(".slide:eq(1)").attr("src","img1/1.jpg");
        $(".slide:eq(2)").attr("src","img1/2.jpg");
        $(".slide:eq(3)").attr("src","img1/3.png");
        $(".slide:eq(4)").attr("src","img1/4.png");
        $(".slide:eq(5)").attr("src","img1/5.jpg");
        $(".slider").fadeIn(1000);
    },1000);
    


});