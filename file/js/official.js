$(function () {
    var winWidth = window.screen.width+"px"
    var screen = window.screen.width+"px"

    $(".top-bar").css("width",screen)
    $(".top-wrap").css("width",screen)
    $(".content3").css("width",screen)
    var numT=0;
    setInterval(function(){
        numT++;
        if(numT==3){
            $('.advert .scroll ul').css({'margin-top':'0px'});

            numT=1;
        }
        $('.advert .scroll ul').stop().animate({'margin-top':-20*num+'px'},500)
    },1500)

    $(".official").css("width",winWidth)
    $(".official .of_nav ul li").mouseover(function () {
        $(this).children().css("border-right",0)
    })
    $(".official .of_nav ul li").mouseout(function () {
        $(this).children().css("border-right","1px solid #ffffff")
    })

    $('.news_tab ul li').click(function () {
        $(".news_tab ul li").removeClass().children().removeClass()


        if($(this).index() == 0){
            $(this).addClass("clickBtn").children().addClass("clickSpan")
            $(".news_tab ul li").eq(1).addClass("originBtn")
        }
        if($(this).index() == 1){
            $(this).addClass("clickBtn").children().addClass("clickSpan")
            $(".news_tab ul li").eq(0).addClass("originBtn")
        }

    })
    var num=1;
    function next() {
        num++;
        if (num==6){
            $('.news_box .zixun_box ul').css('margin-left','-1040px')
            num=2
        }
        $('.news_box .zixun_box ul').stop().animate({'margin-left':-1040*num+'px'},1000)

    }
    function prev() {
        num--;
        if (num==-1){
            $('.news_box .zixun_box ul').css('margin-left','-4160px')
            num=3
        }
        $('.news_box .zixun_box ul').stop().animate({'margin-left':-1040*num+'px'},1000)

    }
    var timer=setInterval(next,5000)
    $('.n_next_btn').click(function () {
        clearInterval(timer)
        next()
        if(num==4){
            $('.n_next_btn').css('display','none')
        }
        if(num!=1){
            $('.n_pre_btn').css('display','inline-block')
        }
    })
    $('.n_pre_btn').click(function () {
        clearInterval(timer)
        prev()
        if(num==1){
            $('.n_pre_btn').css('display','none')
        }
        if(num!=4){
            $('.n_next_btn').css('display','inline-block')
        }
    })
    $('.n_next_btn').mouseout(function () {
        clearInterval(timer)
        timer=setInterval(next,5000)
    })
    $('.n_pre_btn').mouseout(function () {
        clearInterval(timer)
        timer=setInterval(next,5000)
    })
    $('.word_tab ul li').click(function () {
        $('.word_tab ul li').removeClass()
        $(this).addClass('on')
        $('.world_box').children().css('display','none')
        $('.world_box').children().eq($(this).index()).css('display','block')
    })
    $('.strategy_tab ul li').mouseover(function () {
        $('.strategy_tab ul li').removeClass()
        $('.strategy_tab ul li i').removeClass()
        $(this).addClass('on')
        $('.strategy_tab ul li i').eq($(this).index()).addClass('on')
    })
    $('.strategy_tab ul li').mouseover(function () {
        $('.strategy_con ul').css('display','none')
        $('.strategy_con ul').eq($(this).index()).css('display','block')
    })
    var number=0
    function scrollImg(){
        $('.ban_bb ul li').css('display','none')
        $('.ban_bb ul li').eq(number).css({'display':'block','animation':'mycolor 2s linear forwards'})
        number++
        if(number==3){
            number=0
        }
        $('.ban_num_con span').css('background-position','-657px -657px')
        $('.ban_num_con span').eq(number).css('background-position','-681px -657px')
        $('.ban_bb ul li').eq(number).css({'display':'block','animation':'mycolor2 2s linear forwards'})
    }
    var timer2=setInterval(scrollImg,4000)
    $('.ban_num_con span').click(function () {
        clearInterval(timer2)
        number=$(this).index()-1
        scrollImg()
        $('.ban_num_con span').css('background-position','-657px -657px')
        $('.ban_num_con span').eq($(this).index()).css('background-position','-681px -657px')
        $(this).mouseout(function () {
            timer2=setInterval(scrollImg,4000)
        })
    })
    var number2=0
    function scrollImg2(){
        $('.rm_zp ul li').css('display','none')
        $('.rm_zp ul li').eq(number2).css({'display':'block','animation':'mycolor 2s linear forwards'})
        number2++
        if(number2==3){
            number2=0
        }
        $('.rm_zp ul li').eq(number2).css({'display':'block','animation':'mycolor2 2s linear forwards'})
    }
    var t=setInterval(scrollImg2,6000)

    $('.refresh1 .refresh-right').hover(function () {
        $('.refresh1 .refresh-right i').css('animation','scrollCon .5s linear forwards')
    },function () {
        $('.refresh1 .refresh-right i').css('animation','scrollCon2 .5s linear forwards')
    })
    $('.refresh2 .refresh-right').hover(function () {
        $('.refresh2 .refresh-right i').css('animation','scrollCon .5s linear forwards')
    },function () {
        $('.refresh2 .refresh-right i').css('animation','scrollCon2 .5s linear forwards')
    })
    $('.rm_box .refresh1 .refresh-right').click(function () {
        clearInterval(t)
        scrollImg2()
    })
    $('.part_shiting .st_box .st_btn').hover(function () {
        $('.part_shiting .st_box .st_btn i').css('animation','st_btn_i .5s linear')
    },function () {
        $('.part_shiting .st_box .st_btn i').css('animation','none')
    })
    var banner=0
    $('.fun_btn_right').click(function () {
        banner++
        $('.fun_box ul').stop().animate({'left':-220*banner+'px'},500)
        if(banner==1){
            $('.fun_btn_left').css('display','block')
        }
        if(banner==2){
            $('.fun_btn_right').css('display','none')
            $('.fun_btn_left').css('display','block')
        }
    })
    $('.fun_btn_left').click(function () {
        banner--
        $('.fun_box ul').stop().animate({'left':-220*banner+'px'},500)
        if(banner==1){
            $('.fun_btn_right').css('display','block')
        }
        if (banner==0){
            $('.fun_btn_left').css('display','none')
            $('.fun_btn_right').css('display','block')
        }
    })

    $('.scroll_cursor').mousedown(function (event) {
        event = event ||window.event;
        var offsetLeft = event.offsetX;
        $('.scroll_cursor').mousemove(function (evt) {
            evt = evt || window.event;
            var _left = evt.pageX - offsetLeft - 170;
            if(_left<=840&&_left>=0){
                $('.scroll_cursor').css('margin-left',_left+'px')
                $('.jingdu_box ul').css('margin-left',-_left*5.15+'px')
            }

        })
    })
    $('.scroll_cursor').mouseup(function () {
        $('.scroll_cursor').unbind('mousemove')
    })
    $('.role').mousemove(function (evt) {
        evt = evt ||window.evt;
        if(evt.offsetX>30&&evt.offsetX<50){
            $('.role-wrap').css('background-position','-406px 0px')
        }
        if(evt.offsetX>50&&evt.offsetX<80){
            $('.role-wrap').css('background-position','-609px 0px')
        }
        if(evt.offsetX<30&&evt.offsetX>10){
            $('.role-wrap').css('background-position','-203px 0px')
        }
        if(evt.offsetX>80&&evt.offsetX<120){
            $('.role-wrap').css('background-position','-812px 0px')
        }
        if(evt.offsetX<10&&evt.offsetX>0){
            $('.role-wrap').css('background-position','-0px 0px')
        }
    })
    var flag=true
    $('.role').click(function () {
        if (flag==true){
            var langu=parseInt(Math.random()*6+1)
            console.log(1)
            $('.word-wrap .word-item').eq(langu).animate({'opacity':1},1000,function () {
                setTimeout(function () {
                    $('.word-wrap .word-item').eq(langu).animate({'opacity':0},1000)
                },2000)
            })
        }
        flag=false
        setTimeout(function () {
            flag=true
        },3000)

    })
    $('.bottom_ewm').hover(function () {
        $('.bottom_ewm .month').css({'transform':'scale(1)','opacity':'1'})
        $('.bottom_ewm .black').css('transform','translate(159px,-205px)')
        $('.bottom_ewm .shine1').css('animation','yanhua 1.5s linear infinite')
    },function () {
        $('.bottom_ewm .month').css({'transform':'scale(0.8)','opacity':'0'})
        $('.bottom_ewm .black').css('transform','translate(9px,-55px)')
        $('.bottom_ewm .shine1').css('animation','none')
    })
})