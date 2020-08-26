(function($,window,document,undefined){
	//1. 반응형 스크립트 변수 설정 및 최기값 : 슬라이드의 너비를 자동계산을 콘테이너 박스 너비(기준1570)를 나누기 3으로 슬라이드1개의 너비
	var imgW = $('#TravelLounge .caption').innerWidth()*0.59450414;
	var winW = $(window).innerWidth();  //창 너비
	var conW = $('#TravelLounge .container').innerWidth(); //콘테이너 박스 너비
	var col  = 3;           //슬라이드 갯수(칸수)
	var s4SlideW = conW/col;  //슬라이드 너비
		$('.s4Slide').css({width: s4SlideW })
		$('.s4Slide-wrap').css({width: (s4SlideW*12), marginLeft: -(s4SlideW*3) })	
		$('.s4Slide-content .image').css({ width: imgW, height: imgW });

	var s4Cnt = z = setId4 = 0;	
		
		
	//2. 반응형 함수
		function se4ResizeFn(){
			
			imgW = $('#TravelLounge .caption').innerWidth()*0.59450414;
			winW = $(window).innerWidth();
			conW = $('#TravelLounge .container').innerWidth();
			
			if( winW > 1024 ){
				col  = 3;
			}
			else if( winW > 600 ){ //600 ~ 1024
				col  = 2;
			}
			else{
				col  = 1;
			}
			s4SlideW = conW/col;
			$('.s4Slide').css({width: s4SlideW })
			$('.s4Slide-wrap').css({width: (s4SlideW*12), marginLeft: -(s4SlideW*3) })
			$('.s4Slide-content .image').css({ width: imgW, height: imgW });
			
			//메인슬라이드 함수 호출 반응형 적용
			$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },0);
		
		}
		se4ResizeFn();
		setTimeout(se4ResizeFn,100);
		
		//3. 반응형 구현 이벤트(resize)
		$(window).resize(function(){
			se4ResizeFn();
			setTimeout(se4ResizeFn,100);
		});


		//테두리 애니메이션
		//마우스 오버시 애니메이션
		//마우스 아웃시 사라짐
		$('.slideBtn').on({
			mouseenter:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(1).animate({ height:100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(2).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(3).animate({ height:100+'%'},300,'easeInOutQuint');
			},
			mouseleave:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 0},0);
				$(this).prev().find('i').eq(1).animate({ height:0},0);
				$(this).prev().find('i').eq(2).animate({ width: 0},0);
				$(this).prev().find('i').eq(3).animate({ height:0},0);				
			},
			focusin:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(1).animate({ height:100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(2).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(3).animate({ height:100+'%'},300,'easeInOutQuint');
			},
			focusout:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 0},0);
				$(this).prev().find('i').eq(1).animate({ height:0},0);
				$(this).prev().find('i').eq(2).animate({ width: 0},0);
				$(this).prev().find('i').eq(3).animate({ height:0},0);				
			}
		});
		
		
		
		//섹션4의 메이슬라이드함수
		function s4MainSlideFn(){
			$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },600, function(){
				if( s4Cnt>5 ){ s4Cnt=0 }
				if( s4Cnt<0 ){ s4Cnt=5 }
				$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },0);
			});
			pageEventFn(s4Cnt);
		}
		
		//다음카운트함수
		function nextCountFn(){
			s4Cnt++;
			s4MainSlideFn();
		}	
		//이전카운트함수
		function prevCountFn(){
			s4Cnt--;
			s4MainSlideFn();
		}	
		
		//다음이전슬라이드 터치이벤트
		$('.s4Slide-container').swipe({
			swipeLeft:	function(){

				if( !$('.s4Slide-wrap').is(':animated') ){
					clearInterval(setId4);
					nextCountFn();	
				}
			},
			swipeRight:	function(){
				
				if( !$('.s4Slide-wrap').is(':animated') ){
					clearInterval(setId4);
					prevCountFn();
				}
			}
		});
		
		//페이지이벤트함수
		function pageEventFn(z){
			if(z>5){z=0}
			$('.pageBtn').removeClass('addPages4');
			$('.pageBtn').eq(z).addClass('addPages4');
		}
		
		
		//페이지버튼클릭이벤트 each()
		$('.pageBtn').each(function(idx){
			$(this).on({
				click:	function(){
					clearInterval(setId4);
					s4Cnt = idx;
					s4MainSlideFn();
				}
			});
		});
		
		//자동 타이머
		function autoTimerS4Fn(){
			setId4 = setInterval(nextCountFn,4000)
		}
		autoTimerS4Fn();
		
		
		
	
})(jQuery,window,document);
//TravelLoungeSlide.js