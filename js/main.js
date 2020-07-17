

var heroSlider = function(){
    $('.owl-slider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        margin:0,
        loop:true,
        stagePadding:0,
        smartSpeed:450,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        URLhashListener:true
})
}

var showNav = function(){
    $('#main #about').waypoint(function(direction){
        
       if(direction == 'down'){
        $('.nav-bar').addClass('fadeInLeft')
        //$('.nav-bar .hero-menu a').addClass('slideInLeft')
       }
       else{
        $('.nav-bar').removeClass('fadeInLeft')
       }
    },{
        offset : '30%'
    })
}
var showEduTabs = function(){
    var flag = 0;
    var flag1 = 0;
    $('.edu-tabs #e1').click(function(){
        if(flag == 0){
            $('.edu-tabs #et1').css('display','flex');
            $('#e1 .sign h1').text('-');
            $('#e1').css('background-color','#9eaaff')
            flag = 1
        }
        else{
            $('.edu-tabs #et1').css('display','none');
            $('#e1 .sign h1').text('+');
            $('#e1').css('background-color','rgba(0,0,0,0.2)')
            flag = 0
        }
        
    })
    $('.edu-tabs #e2').click(function(){
        if(flag1 == 0){
            $('.edu-tabs #et2').css('display','flex');
            $('#e2 .sign h1').text('-');
            $('#e2').css('background-color','#9eaaff')
            flag1 = 1
        }
        else{
            $('.edu-tabs #et2').css('display','none');
            $('#e2 .sign h1').text('+');
            $('#e2').css('background-color','rgba(0,0,0,0.2)')   
            flag1 = 0
        } 
    })
}

var contentWaypoints1 = function(){
    $('#main .about').waypoint(
        function(){
            $('.about .first-text').addClass('fadeInUp')
            $('.about .second-text').addClass('fadeInUp')
            $('.about .third-text').addClass('fadeInUp')
            $('.icons-tray .block').addClass('fadeInRight')
            $('.icons-trayp .blockp').addClass('fadeInRight')
        },{
            offset: '80%'
        })
}
var contentWaypoints2 = function(){
    $('.services').waypoint(function(){
        $('.services .first-text').addClass('fadeInUp')
            $('.services .second-text').addClass('fadeInUp')
            $('.services .block').addClass('fadeInRight')
            $('.services .contentp .rowp').addClass('fadeInRight')
    },{
        offset:'80%'
    })
}
var contentWaypoints3 = function(){
    $('.skills').waypoint(function(){
        $('.skills .first-text').addClass('fadeInUp')
            $('.skills .second-text').addClass('fadeInUp')
            $('.skills .skill-flex').addClass('fadeInRight')
            $('.skills .skill-flexp').addClass('fadeInLeft')

    },{
        offset:'80%'
    })
}
var contentWaypoints4 = function(){
    $('.education').waypoint(function(){
        $('.education .first-text').addClass('fadeInUp')
            $('.education .second-text').addClass('fadeInUp')
            $('.education .edu-tab').addClass('fadeInRight')
            //$('.education .edu-tab:nth-child(1)').addClass('fadeInDown')

    },{
        offset:'80%'
    })
}
var contentWaypoints5 = function(){
    $('.contact').waypoint(function(){
        $('.contact .first-text').addClass('fadeInUp')
            $('.contact .second-text').addClass('fadeInUp')
            $('.contact .content').addClass('fadeInRight')
            //$('.education .edu-tab:nth-child(1)').addClass('fadeInDown')

    },{
        offset:'80%'
    })
}

var navigation = function(){
    
    var flag3 = 0;
    $('.nav-btn').click(function(){
        console.log('catch')
        if(flag3 == 0){
            $('.nav-bar').css('display','grid')
            $('.nav-btn #c1').addClass('rotateDown')
            $('.nav-btn #c2').addClass('fadeOut')
            $('.nav-btn #c3').addClass('rotateUp')
            $('#main').css('filter','blur(5px)')
            flag3 = 1
        }
        else{
            $('.nav-bar').css('display','none')
            $('.nav-btn #c1').removeClass('rotateDown')
            $('.nav-btn #c2').removeClass('fadeOut')
            $('.nav-btn #c3').removeClass('rotateUp')
            $('#main').css('filter','none')
            flag3 = 0
        }
    })
}

