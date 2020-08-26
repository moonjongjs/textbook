$(function(){
	
	$('.mainBtn').on({
		mouseenter:	function(){ //마우스 오버시
			$('.sub').stop().slideUp(0); //초기화
			$(this).next().stop().slideDown(400); //1개만
			
			$('.mainBtn').removeClass('addMainBtn'); //초기화
			$(this).addClass('addMainBtn'); //1개만
		},
		focusin:		function(){  //focus
			$('.sub').stop().slideUp(0); //초기화
			$(this).next().stop().slideDown(400); //1개만
			
			$('.mainBtn').removeClass('addMainBtn'); //초기화
			$(this).addClass('addMainBtn'); //1개만
		}
	});
	
	$('nav').on({
		mouseleave:	function(){ //마우스 아웃
			$('.sub').slideUp(400);
			$('.mainBtn').removeClass('addMainBtn');
		}
	});
	
	
	$('.link-1').on({
		focusin:	function(){
			$('.sub').slideUp(400);
			$('.mainBtn').removeClass('addMainBtn');
		}
	});
	
	
	
});
//header.js