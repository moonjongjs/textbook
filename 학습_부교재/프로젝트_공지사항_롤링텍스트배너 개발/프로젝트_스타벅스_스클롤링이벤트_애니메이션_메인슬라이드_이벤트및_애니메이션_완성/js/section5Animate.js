$(function(){
	var s5T=0;
	
	//$(window).scrollTop(), $(window).scrollTop()
	$(window).scroll(function(){
		//scrollTop() 값이 300px에 도달하면 애니메이션 실행
		if( $(window).scrollTop()>=300 ){ //300이상인경우 계속 실행하라는 조건문
			if( s5T==0 ){  //토글변수 값이 0인 경우 1회 실행하고
				s5T=1;        //s5T=1 설정
				sec5AnimationFn();
			}
		}
		else{ //스크롤탑값이 300미만으로 올라가면 초기화 format
			s5T=0;  
			sec5AnimationFormatFn();
		}
		
	});	
	
	
	
	//섹션1의 상단에서 스크롤 탑값이 300px에 도달하면 애니메이션 호출 실행
	function sec5AnimationFormatFn(){
		$('.sec5-ani1').stop().animate({ left:-800, opacity:0 },2000);
		$('.sec5-ani2').stop().animate({ right:-800, opacity:0 },2000);		
	}	
	
	function sec5AnimationFn(){
		$('.sec5-ani1').stop().animate({ left:0, opacity:1 },2000);
		$('.sec5-ani2').stop().animate({ right:0, opacity:1 },2500);		
	}	
	
	

});//section5Animate.js