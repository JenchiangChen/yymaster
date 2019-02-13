$(function () {
    var screen = window.screen.width+"px";
    $(".top-bar").css("width",screen)
    $(".top-wrap").css("width",screen)
    $(".content3").css("width",screen)
    var num=0;
    setInterval(function(){
        num++;
        if(num==3){
            $('.advert .scroll ul').css({'margin-top':'0px'});

            num=1;
        }
        $('.advert .scroll ul').stop().animate({'margin-top':-20*num+'px'},500)
    },1500)

    $(".top-wrap").css({"width":screen,"height":"954px"})
    $(".bot-wrap").css({"width":screen,"height":"2246px"})

    $(".content1 ul li").on({
        mouseover:function () {
            $(this).stop().animate({
                'margin-top':'-30px'
            },200)
        },
        mouseout:function () {
            $(this).stop().animate({
                'margin-top':'0'
            },200)
        }
    })
    $('.content-part.part-tese').addClass('show');
    $('.gallery_container').gallery_slider({imgNum: 4});
    var wheight = $(window).height()/2-95
    $(".shadow").css({"top":wheight+'px'})
    $(window).resize(function () {
        var num1 = $(window).height()/2-95
        var num2 = $(window).scrollTop()
        $(".shadow").css({"top":(num1+num2)+'px'})

    })
    $(window).scroll(function () {
        var num1 = $(window).height()/2-95
        var num2 = $(window).scrollTop()
        $(".shadow").css({"top":(num1+num2)+'px'})
    })

})


