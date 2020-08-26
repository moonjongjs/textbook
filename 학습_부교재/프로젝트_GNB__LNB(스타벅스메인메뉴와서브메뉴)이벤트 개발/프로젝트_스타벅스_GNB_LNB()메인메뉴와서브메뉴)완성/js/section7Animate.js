$(function(){
	var s7T=0;
	
	$(window).scroll(function(){
		
		//섹션6의 -200px 이전에 도달하면. 애니메이션
		if( $(window).scrollTop()>=$('#section6').offset().top-200 ){
			
			if( s7T==0 ){
				s7T=1;
				sec7AniFn();	//애니메이션함수
			}
			
		}
		else{
			s7T=0;
			sec7AniFormatFn();  //초기화함수
		}
		
	});
	
	
	
	
	
	//스크롤이벤트
	//초기화
	function sec7AniFormatFn(){
		$('.sec7-ani1').stop().animate({left:-1000},2000,'easeOutCirc');	
		$('.sec7-ani2').stop().animate({left:-1000},2500,'easeOutCirc');	
		$('.sec7-ani3').stop().animate({opacity:0},2500);	
	}
	//애니메이션	
	function sec7AniFn(){
		$('.sec7-ani1').stop().animate({left:0},2000,'easeOutCirc');	
		$('.sec7-ani2').stop().animate({left:0},2500,'easeOutCirc');	
		$('.sec7-ani3').stop().animate({opacity:1},2500);	
	}
	

	
});
//section7Animate.js