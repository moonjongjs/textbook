$(function(){
	var se6T = 0;
	//스크롤이벤트에서 위에서 특정 섹션까지의 간격 탑값 찾는걸 공부
	//섹션1의 탑값
	/*
	console.log('섹션1탑값'+ $('#section1').offset().top );	
	console.log( $('#section1').offset().left );	
	
	console.log('섹션2탑값'+ $('#section2').offset().top );	
	console.log('섹션3탑값'+ $('#section3').offset().top );	
	console.log('섹션4탑값'+ $('#section4').offset().top );	
	console.log('섹션5탑값'+ $('#section5').offset().top );	
	console.log('섹션6탑값'+ $('#section6').offset().top );	
	*/
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= $('#section4').offset().top ){
			if( se6T==0 ){
				se6T=1;
				sec6AniFn();	
			}
		}
		else{ //섹션4미만이면: 위로 올라가면 초기화
			se6T=0;
			sec6AniFormatFn();
		}
	});
	
	//스크롤이벤트
	//초기화
	//섹션4의 탑값 도달시 부드럽게 사라진다 애니메이션(페이드아웃 효과) fadeOut
	function sec6AniFormatFn(){
		$('.sec6-ani').stop().animate({ opacity:0 },1000);	
	}

	//섹션4의 탑값 도달시 부드럽게 보이는 애니메이션(페이드인 효과)	  fadeIn
	function sec6AniFn(){
		$('.sec6-ani').stop().animate({ opacity:1 },2000);	
	}

	
});
//section6Animate.js