$(function(){
	var s9T=0;
	
	//섹션6 offset().top-200
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section8').offset().top-200 ){
			if(s9T==0){
				s9T=1;
				sec9AniFn();
			}		
		}
		else{ 
			s9T=0;
			sec9AniFormatFn();
		}
		
	});
	
	
	
	
	//스크롤이벤트
	//우측 타이틀 우측에서 좌측으로 부드럽게 이동 
	function sec9AniFormatFn(){	
		$('.sec9-right-title-1').stop().animate({ left:800, opacity:0 },2000);
		$('.sec9-right-title-2').stop().animate({ left:800, opacity:0 },2500);
		$('.sec9-viewBtn-wrap') .stop().animate({ left:800, opacity:0 },3000);
		$('.fadeIn-img')        .stop().animate({           opacity:0 },3000);
	}

	//애니메이션
	function sec9AniFn(){	
		$('.sec9-right-title-1').stop().animate({ left:0, opacity:1 },2000);
		$('.sec9-right-title-2').stop().animate({ left:0, opacity:1 },2500);
		$('.sec9-viewBtn-wrap') .stop().animate({ left:0, opacity:1 },3000);
		$('.fadeIn-img')        .stop().animate({         opacity:1 },3000);
	}


});
//section9Ani.js