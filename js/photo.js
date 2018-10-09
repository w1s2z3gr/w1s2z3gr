$(function(){
	"use strict";
	let i=0;
	function pic(){
		i++;
		if(i>$('.listLeft ul li').length-1) i=0;
		console.log(i)
		$('.listLeft ul li').eq(i).addClass('active rotateInDownRight').siblings().removeClass('active rotateInDownRight')	
	}
	var time = setInterval(()=>{pic()},3000)
	$('.listLeft').hover(function(){
		clearInterval(time);
	},function(){
		time = setInterval(()=>{pic()},3000)
	})
})
