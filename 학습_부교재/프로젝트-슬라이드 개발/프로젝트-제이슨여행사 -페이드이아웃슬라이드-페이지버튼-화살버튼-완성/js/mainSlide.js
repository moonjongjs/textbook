$(function(){
	var winH = cnt = z = 0;
		
		//창높이 반응형 ///////////////////////////////////////////////////////////
		setTimeout(responseFn,100);
		
		function responseFn(){
			winH  = $(window).innerHeight(); //창높이
			
			$('.main-slide-wrap, .mainSlide, .mainSlide>div').css({ height:winH });
			$('#section2').css({ marginTop:winH });
		}
		
		$(window).resize(function(){
			responseFn();
		});
		///////////////////////////////////////////////////////////////////////
	
	
	
	
		//1-1. 메인 슬라이드 next
		//   메인 슬라이드 : 좌우 이동(animate, left) - 대상 => 슬라이드 랩퍼 .main-slide-wrap (슬라이드3+맨앞+맨뒤=5개)
		//   메인 슬라이드 : 페이드 인/아웃(opacity, zIndex) - 대상 .mainSlide => 슬라이드 각각 총 3개 
		function mainSlideFn(){
			$('.mainSlide')        .css({zIndex:1}).stop().animate({opacity:0},0);   //모두 초기화 opacity:0(불투명도), zIndex:1
			$('.mainSlide').eq(z)  .css({zIndex:2}).stop().animate({opacity:1},0);   //현재슬라이드
			$('.mainSlide').eq(cnt).css({zIndex:3}).stop().animate({opacity:1},1000);//다음슬라이드
			pageBtnEventFn();
		}
		
		
		//2-1. 다음 슬라이드 카운트++ 함수
		function nextSlideCountFn(){
			cnt++;
			if(cnt>2){ cnt=0; }
			z = (cnt==0?2:cnt-1);	//z = (cnt-1, 그러나 cnt==0 인경우 2)
			mainSlideFn();
		}
		
		//2-2. 이전 슬라이드 카운트-- 함수
		function prevSlideCountFn(){
			cnt--;
			if(cnt<0){ cnt=2; }
			z = (cnt==2?0:cnt+1);	//z = (cnt+1, 그러나 cnt==2 인경우 0)
			mainSlideFn();
		}
		
	
	
	
		//3. 자동 타이머 실행 3초 후에 실행 그리고 계속 무한반복
		function autoTimerFn(){
			setId = setInterval(nextSlideCountFn, 3000);
			// setId = setInterval(prevSlideCountFn, 3000);
		}		
		
		autoTimerFn();
		
		
		
	
		//4. 터치(touch) swipe 이벤트  대상  :  슬라이드콘테이너(.main-slide-container)  
		//   다음 슬라이드 카운트 함수 호출 실행
		$('.main-slide-container').swipe({
			swipeLeft:	function(){
				clearInterval(setId);	
				nextSlideCountFn();
			},
			swipeRight:	function(){
				clearInterval(setId);	
				prevSlideCountFn();
			}
		});
	
	
		//5-1. pageBtn 이벤트 함수
		function pageBtnEventFn(){
			$('.pageBtn').removeClass('addPage');
			$('.pageBtn').eq(cnt).addClass('addPage');
		}
		//5-2. pageBtn click 이벤트
		$('.pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					clearInterval(setId);
					z=cnt;      //z  =cnt  : 클릭 이전 슬라이드 번호  
					cnt=index;  //cnt=index: 클릭 슬라이드 번호
					mainSlideFn();
				}
			});
		});
	
		//6-1. 다음 화살버튼 클릭 이벤트
		$('.nextBtn').on({
			click:	function(){
				clearInterval(setId);
				nextSlideCountFn();
			}
		});
	
		//6-2. 이전 화살버튼 클릭 이벤트
		$('.prevBtn').on({
			click:	function(){
				clearInterval(setId);
				prevSlideCountFn();
			}
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
});//mainSlide.js