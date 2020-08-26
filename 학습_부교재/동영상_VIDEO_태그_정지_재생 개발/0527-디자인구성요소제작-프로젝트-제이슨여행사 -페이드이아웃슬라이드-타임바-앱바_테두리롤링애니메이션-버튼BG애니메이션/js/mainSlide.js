$(function(){
	var winH = cnt = z = bar = 0;
		
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
		
	
	
		
	
		//4. 터치(touch) swipe 이벤트  대상  :  슬라이드콘테이너(.main-slide-container)  
		//   다음 슬라이드 카운트 함수 호출 실행
		$('.main-slide-container').swipe({
			swipeLeft:	function(){
				nextSlideCountFn();
				bar=0;
			},
			swipeRight:	function(){
				prevSlideCountFn();
				bar=0;
			}
		});
	
	
		//5-1. pageBtn 이벤트 함수
		function pageBtnEventFn(){
			$('.pageBar').css({width: 0 });  //막대 바 모두 초기화
			$('.pageBar').eq(cnt).css({ width: bar });
		}
		//5-2. pageBtn click 이벤트
		$('.pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					
					//현재슬라이드 와 클릭한 인덱스index 값이 같으면 클릭 안되게 하라
					if( cnt != index ){
						z=cnt;      //z  =cnt  : 클릭 이전 슬라이드 번호  
						cnt=index;  //cnt=index: 클릭 슬라이드 번호
						mainSlideFn();
						
						bar=0;
					}	
					
				}
			});
		});
	
		//6-1. 다음 화살버튼 클릭 이벤트
		$('.nextBtn').on({
			click:	function(){
				nextSlideCountFn();
				bar=0;
			}
		});
	
		//6-2. 이전 화살버튼 클릭 이벤트
		$('.prevBtn').on({
			click:	function(){
				prevSlideCountFn();
				bar=0;
			}
		});
	
	
	
	

	
		//7. 타이머 막대(바) 함수 
		//   1초간격으로 웹페이지 로딩시 자동실행한다. 
		function timerBarFn(){
			bar += 0.5;  //bar = bar + 50   초당 증가하는 길이

			// if( bar % 200 == 0 ){ //200으로 나누어 나머지가 0이면 4초 200 400 600 800 1000 ....
			if( bar > 200 ){ //길이가 200을 초과하면 4초
				bar=0.5;            //1초 길이를 초기화     50px        5px       0.5px     0.05px   
				nextSlideCountFn(); //4초마다 다음슬라이드 호출
			}
			pageBtnEventFn();   //페이지버튼 바 이벤트 함수
		}


	
		//3. 자동 타이머 실행 3초 후에 실행 그리고 계속 무한반복
		function autoTimerFn(){
			setId = setInterval( timerBarFn , 10);  //1000(1)  100(0.1)   10(0.01)   1(0.001) 
			// setId = setInterval(prevSlideCountFn, 4000);
		}		
		
		autoTimerFn();
		
	
	
	
	
	
	
	
});//mainSlide.js