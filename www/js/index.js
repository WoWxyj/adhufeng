$(function(){
    var oTop = $("#nav").offset().top;
    var sTop = 0;
    $(window).scroll(function(){
        sTop = $(this).scrollTop();
        if(sTop >= oTop){
        $("#nav").css({
            "position":"fixed",
            "top":"0",
            "z-index":"9999",
            "border-bottom":"1px #e5e5e5 solid"
        })}else{
            $("#nav").css({"position":"static","border-bottom":"none"});
        }
    });
})