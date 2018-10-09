/*
    update:2018/8/4
    author:李霆
*/
"use strict";
$(function(){
    init();
    function init(){
       pic();
       txt();
    };
    var i=0,len=$('.dott ol li').length;
    function pic(){
        $('.dott ol li').click(function(){
        	var ind =$(this).index();
            $(this).addClass('active').siblings().removeClass('active');
           $('.pic ol li').eq(ind).addClass('active').siblings().removeClass('active').stop(true,true);
            i=ind;
        })
    };
    function setTimeB(){
    	i++;
    	if(i>len-1){
    		i=0;
    	}
    	$('.dott ol li').eq(i).addClass('active').siblings().removeClass('active');
    	$('.pic ol li').eq(i).addClass('active').siblings().removeClass('active').stop(true,true);
    };
    var time = setInterval(()=>{setTimeB()},4000);
    $('.pic').hover(function(){
    	clearInterval(time)
    },function(){
    	time = setInterval(()=>{setTimeB()},4000);
    });
    $('.dott').hover(function(){
    	clearInterval(time)
    },function(){
    	time = setInterval(()=>{setTimeB()},4000);
    });
    function txt(){
    	$('.banLeft ol li').click(function(){
    		$(this).addClass('active').siblings().removeClass('active');
    		let index = $(this).index();
    		$('.txtList li').eq(index).show().siblings().hide()
    	})
    };
})