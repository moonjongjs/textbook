(function($,window,document,undefined){
		var cnt = 0;
		var winW = $(window).innerWidth();
		var n = 5;
		var slideW = winW / n;
			$('.slide').css({ width:slideW });
			$('.slide-wrap').css({ width:(slideW*15), marginLeft:-(slideW*5) });
	
		function s6Resize(){
			winW = $(window).innerWidth();
			if( winW >= 1200 ){
				n=5;
			}
			else if( winW >= 1024 ){
				n=4;
			}
			else if( winW >= 800 ){
				n=3;
			}
			else if( winW >= 500 ){
				n=2;
			}
			else {
				n=1;
			}
			slideW = winW / n;
			$('.slide').css({ width:slideW });
			$('.slide-wrap').css({ width:(slideW*15), marginLeft:-(slideW*5) });
			
			//메인슬라이드 left:반응형결정
			$('.slide-wrap').stop().animate({ left:-(slideW*cnt) },0);
			
		}
		setTimeout(s6Resize, 100);
		
		$(window).resize(function(){
			s6Resize();
		});
		
		
		
		//메인 슬라이드
		function mainSlideFn(){
			$('.slide-wrap').stop().animate({ left:-(slideW*cnt) },600, function(){
				if(cnt>4){cnt=0}
				if(cnt<0){cnt=4}
				$('.slide-wrap').stop().animate({ left:-(slideW*cnt) },0);
			});
		}

		//next 카운트
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}		
		//prev 카운트
		function prevCountFn(){
			cnt--;
			mainSlideFn();
		}		
		
		//next버튼 클릭 이벤트
		$('.nextBtn').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					nextCountFn();	
				}
			}
		});	
		
		//next버튼 클릭 이벤트
		$('.prevBtn').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					prevCountFn();	
				}
			}
		});	
		
		
		
		
	
})(jQuery,window,document);
//section6Slide.js
