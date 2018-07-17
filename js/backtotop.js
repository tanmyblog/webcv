$(function(){
    $(window).scroll(function(){
        $(this).scrollTop()>600 ? $(".backtotop").addClass('btn-backtotop') 
            : $(".backtotop").removeClass('btn-backtotop')
    });
    $(".backtotop").click(function(){
        return $("html,body").animate({scrollTop:0});
    });
});