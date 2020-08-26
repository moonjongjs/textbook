;(function($,window,document,undefined){
	
	var cnt=0;
	var $nextBtn = $('.s10NextBtn');
	var $prevBtn = $('.s10PrevBtn');
	var $slideWrap = $('.s10Slide-wrap');
	var $slide = $('.s10Slide');	
	var $winW = $(window).innerWidth();
	var $conW = $('.s10Slide-container').innerWidth();
	var setId = 0;
	var $slideW = 975;
	
		function resizeFn(){
			
			$winW = $(window).innerWidth();
			if($winW > 1024){
				$slideW = 975;
			}
			else{
				$conW = $('.s10Slide-container').innerWidth();				
				$slideW = $conW;	
			}
			
			$slide.css({width: ($slideW) });
			$slideWrap.css({ width: ($slideW*3) });
			$slideWrap.stop().animate({ left:-($slideW*cnt) },0);
			
		}
		setTimeout(resizeFn,100);
		
		$(window).resize(function(){
			clearTimeout(setId);
			setId=setTimeout(resizeFn,100);
		});
			
		
		function mainSlideFn(){
			$slideWrap.stop().animate({ left:-($slideW*cnt) },600);
		}
		
		function nextCountFn(){
			cnt++;
			if(cnt>2){cnt=2}
			mainSlideFn();
		}

		function prevCountFn(){
			cnt--;
			if(cnt<0){cnt=0}
			mainSlideFn();			
		}
		
		$nextBtn.on({
			click:	function(){
				if( !$slideWrap.is(':animated') ){
					nextCountFn();					
				}
			}
		});
		
		$prevBtn.on({
			click:	function(){
				if( !$slideWrap.is(':animated') ){
					prevCountFn();
				}
			}
		});

		$slideWrap.swipe({
			swipeLeft:	function(){
				if( !$slideWrap.is(':animated') ){
					nextCountFn();					
				}
			},
			swipeRight:	function(){
				if( !$slideWrap.is(':animated') ){
					prevCountFn();
				}
			}			
		});
		
		
		
		
		
		
		
		

		
})(jQuery,window,document);
//section10Slide.js