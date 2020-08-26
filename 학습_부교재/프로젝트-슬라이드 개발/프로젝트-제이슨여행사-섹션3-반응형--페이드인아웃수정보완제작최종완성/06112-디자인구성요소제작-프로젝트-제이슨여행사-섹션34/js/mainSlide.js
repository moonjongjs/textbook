(function($, window, document, undefined){ //IIFE:즉시실행함수
	
	var cnt = winW = winH = z = setId = setId2 = count = 0;
		
		function resizeFn(){
			winW = $(window).innerWidth();
			winH = $(window).innerHeight();
			
			$('.slide').css({ width:winW, height:winH });
			$('#moripCollection').css({ marginTop:winH });
			
			//리사이즈 변화시 left 값 애니메이션 시간을 0으로 설정
			$('.mainSlide-wrap').stop().animate({ left: -(winW*cnt) },0);
		}
	
		setTimeout(resizeFn,100);
		
		$(window).resize(function(){
			resizeFn();
		});
		
		//메인슬라이드 함수
		function mainSlideFn(){	
			$('.mainSlide-wrap').stop().animate({ left: -(winW*cnt) },800,'easeInOutExpo', function(){
				if( cnt > 2 ){ cnt=0; }
				if( cnt < 0 ){ cnt=2; }
				$('.mainSlide-wrap').stop().animate({ left: -(winW*cnt) },0);
			});
			cnt>2?z=0:z=cnt;
			pageEventFn();
		}
		
		//페이지 이벤트 함수
		function pageEventFn(){			
			$('.mainSlidePageBtn').removeClass('addPage');
			$('.mainSlidePageBtn').eq(z).addClass('addPage');
		}
		
		//페이지 버튼 클릭 이벤트
		$('.mainSlidePageBtn').each(function(idx){
			$(this).on({
				click:	function(){
					cnt=idx;
					mainSlideFn();
					pauseTimerFn();
				}
			});
		});
		

		//카운트 다음
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		//카운트 이전
		function prevCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		//다음슬라이드 버튼 클릭 이벤트
		$('.mainSlideNextBtn').on({
			click:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					nextCountFn();
					pauseTimerFn();
				}
			}
		});
		
		//이전슬라이드 버튼 클릭 이벤트
		$('.mainSlidePrevBtn').on({
			click:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					prevCountFn();
					pauseTimerFn();
				}
			}
		});

		//터치 이벤트
		$('.mainSlide-view').swipe({
			swipeLeft:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					nextCountFn();
					pauseTimerFn();
				}
			},
			swipeRight:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					prevCountFn();
					pauseTimerFn();
				}
			}			
		});
		
		//자동타이머 함수
		function autoTimerFn(){
			setId = setInterval(nextCountFn, 4000);
		}
		autoTimerFn();
		
		//일시정지 함수 5초간 이벤트 없으면 자동 재실행
		function pauseTimerFn(){
			count=0;
			clearInterval(setId2);
			clearInterval(setId);

			setId2 = setInterval(function(){
				count++;
				if( count >= 5 ){ 
					 nextCountFn();
					 autoTimerFn();
					 clearInterval(setId2);
				}
			},1000);
		}
		
		
})(jQuery, window, document);
//mainSlide.js


//$사용을 막는다 충돌 피할려고
// $.noConflict();
// jQuery(function($){
	
// });

//$사용을 막는다 충돌 피할려고
// j = $.noConflict();
// jq(function(){
	 
// });


//즉시실행함수  ECMA SCRIPT 5
//(function($, window, document, undefined){
	 
//})(jQuery, window, document); //아그먼트













