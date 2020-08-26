$(function(){
	var cnt = t = p = 0; //숫자 증가 또는 감소하는 변수는 반드시 초기값 변수 설정한다.

		//9 스와이프(swipe) 터치이벤트		
		$('.section3-slide-wrap').swipe({  //반드시 on() 대신 swipe()
			swipeLeft:	function(){ //  스와이프레프트(swipeLeft) : 슬라이드를 우측에서 좌측으로 당긴다.(손가락과 마우스) :  다음슬라이드
				nextSlideCoutFn();
				t=1;
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);			
			},
			swipeRight:	function(){ //  스와이프롸이트(swipeRight) : 슬라이드를 좌측에서 우측으로 당긴다.(손가락과 마우스) :  이전슬라이드
				prevSlideCoutFn();
				t=1;
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);				
			}
		});
		
				
				
		//8.프로모션 버튼 클릭 이벤트 슬라이드가 노출이되면 : 자동타이머 함수를 실행함.
		//섹션3 전체를 슬라이드 다운&업
		$('.promotionBtn').on({
			click:	function(){
				
				if( p === 0 ){  //슬라이드가 열린상태(Open) slideDown();
					$(this).addClass('addPromotion');  //버튼 배경이미지를 Up으로 변경
					// 스타일 직접 변경 가능
					// $(this).css({backgroundImage:'url(../img/btn_prom_up.png)'});
					$('#section3').stop().slideDown(300);
					p=1;
					autoTimerFn(); //프로모션 클릭시 실행1번 : 타이머 작동 	
				}
				else{  //닫힌상태(Close) slideUp();
					$(this).removeClass('addPromotion');  //버튼 배경이미지를 Down으로 변경					
					// 스타일 직접 변경 가능
					// $(this).css({backgroundImage:'url(../img/btn_prom_down.png)'});
					
					$('#section3').stop().slideUp(300);				
					cnt = t = p = 0;  //모두 초기화
					clearInterval(setId); //자동타이머 일시중지
					//animate의 값 left:0   초기화
					$('.section3-slide-wrap').stop().animate({left:-819*cnt},0);   
					//첫번째 슬라이드의 opacity:1 초기화 
					$('.section3-slide-wrap li').removeClass('addCurrent');
					$('.section3-slide-wrap li').eq(cnt+1).addClass('addCurrent');					
					//일시중지 플레이버튼 초기화 ||
					$('.pausePlayBtn').children().attr('src','./img/main_prom_stop.png'); //   ||
					//페이지버튼 첫번째로 설정 초기화
					pageBtnEventFn(cnt);
				}
				
			}
		});		
			
			
		//7. 정지(stop==pause)그리고 재시작(Play) 버튼 클릭이벤트
		$('.pausePlayBtn').on({
			click:	function(){
				
				if( t===0 ){  //== === 같은가?  비교연산 > 초과(크다) < 미만(작다)  != or !== 같지않다  == or === 같다 
 					t=1;
					$(this).children().attr('src','./img/main_prom_play.png');
					clearInterval(setId); //7
				}
				else {
					t=0;  //변수 t에 0(Zero) 기억(저장) 대입
					$(this).children().attr('src','./img/main_prom_stop.png');
					nextSlideCoutFn();//즉시실행하고자할때
					autoTimerFn();
					
				}
				
			}
		});

		//6. 자동 타이머 함수 : 4초간격 
		//setId = setInterval(다음슬라이드카운트,4000);
		function autoTimerFn(){
			setId = setInterval(nextSlideCoutFn,4000); //7
		}
		
		
		
		//5 페이지버튼 클릭 이벤트 - 페이지버튼 표시(Mark) 이벤트 함수 호출
		$('.pageBtn').each(function(index){
		
			$(this).on({  //첫번째 슬라이드 호출
				click:	function(){
					cnt = index;  //슬라이드 번호
					mainSlideFn();
					
					//페이지버튼 클릭시 일시중지	
					t=1;
					$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
					clearInterval(setId);				
					
				}
			});

		});
		
		
		
		
		//4 페이지버튼 표시(Mark) 이벤트 함수 - 현재 슬라이드 번호에 녹색버튼으로 표시 
		// 메인슬라이드 함수에서 - 함수호출
		// 페이지버튼 클릭 - 함수호출
		//페이지버튼 자식요소(children())인 이미지 src 속성(attr)을 변경 표시	
		//       부모요소(parent())
		function pageBtnEventFn(z){  //0 이나 또는 cnt 값이 전달 받는다. z변수로 
			$('.pageBtn').children().attr('src','./img/main_prom_off.png');  //버튼 자식요소 모두 초기화 off
			$('.pageBtn').eq(z).children().attr('src','./img/main_prom_on.png');  //현재 슬라이드번호 만 on
		}
		
	
	
		//3-1. 다음슬라이드 화살이미지 버튼(선택자) 사용(on) 클릭(click) 이벤트 -> 다음슬라이드 카운트 함수호출()
		$('.nextBtn').on({
			click:	function(){
				//부정문!: 애미메이션이 진행중이 아닐 때 다음슬라이드카운트함수 호출 - 조건문 과거형 animated
				if( !$('.section3-slide-wrap').is(':animated') ){
					nextSlideCoutFn();	
				}
				//다음버튼 클릭시 일시중지	
				t=1;
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);				
			}
		});
		//3-2. 이전슬라이드 화살이미지 버튼(선택자) 사용(on) 클릭(click) 이벤트 -> 이전슬라이드 카운트 함수호출()
		$('.prevBtn').on({
			click:	function(){		
				if( !$('.section3-slide-wrap').is(':animated') ){
					prevSlideCoutFn();
				}
				//이전버튼 클릭시 일시중지	
				t=1;  //중지된상태
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval(setId);				
			}
		});
		
	
		//2-1. 다음슬라이드(nextSlide) 카운트(cnt++) 함수 : 우측에서 좌측으로 이동(좌측으로당긴효과)
		function nextSlideCoutFn(){
			cnt++; //다음 1씩증가  cnt+=1  cnt=cnt+1
			mainSlideFn();
		}
		//2-2. 이전슬라이드(prevSlide) 카운트(cnt--) 함수 : 좌측에서 우측으로 이동(우측으로당긴효과)
		function prevSlideCoutFn(){
			cnt--;
			mainSlideFn();
		}
		
		
		//1. 메인슬라이드 함수(Fn; Function)
		function mainSlideFn(){
			$('.section3-slide-wrap').stop().animate({left:-819*cnt},500, function(){
				if( cnt>1 ){ cnt=0; }  //>=2 
				if( cnt<0 ){ cnt=1; }
				$('.section3-slide-wrap').stop().animate({left:-819*cnt},0);
				$('.section3-slide-wrap li').removeClass('addCurrent');
				$('.section3-slide-wrap li').eq(cnt+1).addClass('addCurrent');
			});
			if( cnt > 1 ){ // cnt >= 2
				pageBtnEventFn(0); 
			}			
			else{
				pageBtnEventFn(cnt);  //매개변수 값 전달	
			}
		}
		
	
});
//slide.js