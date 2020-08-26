;(function($,window,document,undefined){
	
	
	var objSlideS10 = {
					cnt:0,
					$nextBtn : $('.s10NextBtn'),
					$prevBtn : $('.s10PrevBtn'),
					$slideWrap : $('.s10Slide-wrap'),
					$slide : $('.s10Slide'),	
					$winW : $(window).innerWidth(),
					$conW : $('.s10Slide-container').innerWidth(),
					setId : 0,
					$slideW : 975,
					
					init:	function(){
						var that = this;
						
						objSlideS10.resizeFn();
						objSlideS10.winResizeFn();
						objSlideS10.mainSlideFn();
						objSlideS10.nextCountFn();
						objSlideS10.prevCountFn();
						objSlideS10.buttonEventFn();
						objSlideS10._swipe();
							
					},
					resizeFn: function(){
						var that = this;
						
						objSlideS10.$nextBtn = $('.s10NextBtn');
						objSlideS10.$prevBtn = $('.s10PrevBtn');
						objSlideS10.$slideWrap = $('.s10Slide-wrap');
						objSlideS10.$slide = $('.s10Slide');	
						objSlideS10.$winW = $(window).innerWidth();
						objSlideS10.$conW = $('.s10Slide-container').innerWidth();
						
						if(objSlideS10.$winW > 1024){
							objSlideS10.$slideW = 975;
						}
						else{
							objSlideS10.$conW = $('.s10Slide-container').innerWidth();
							objSlideS10.$slideW = objSlideS10.$conW;	
						}
						
						objSlideS10.$slide.css({width: (objSlideS10.$slideW) });
						objSlideS10.$slideWrap.css({ width: (objSlideS10.$slideW*3) });
						objSlideS10.$slideWrap.stop().animate({ left:-(objSlideS10.$slideW*objSlideS10.cnt) },0);
					
					},
					winResizeFn:	function(){
						
						setTimeout(objSlideS10.resizeFn,100);
						
						$(window).resize(function(){
							clearTimeout(objSlideS10.setId);
							objSlideS10.setId=setTimeout(objSlideS10.resizeFn,100);
						});
					},
					mainSlideFn:	function(){
						var that = this;
						
						objSlideS10.$slideWrap.stop().animate({ left:-(objSlideS10.$slideW*objSlideS10.cnt) },600);
					},
					nextCountFn:	function(){
						var that = this;
						
						objSlideS10.cnt++;
						if(objSlideS10.cnt>2){objSlideS10.cnt=2}
						objSlideS10.mainSlideFn();
						
					},
					prevCountFn:	function(){
						var that = this;
						
						objSlideS10.cnt--;
						if(objSlideS10.cnt<0){objSlideS10.cnt=0}
						objSlideS10.mainSlideFn();	
							
					},
					buttonEventFn:	function(){
						var that = this;
						
						objSlideS10.$nextBtn.on({
							click:	function(){
								if( !objSlideS10.$slideWrap.is(':animated') ){
									objSlideS10.nextCountFn();					
								}
							}
						});
						
						objSlideS10.$prevBtn.on({
							click:	function(){
								if( !objSlideS10.$slideWrap.is(':animated') ){
									objSlideS10.prevCountFn();
								}
							}
						});		
							
					},
					_swipe:	function(){
						var that = this;
						
						objSlideS10.$slideWrap.swipe({
							swipeLeft:	function(){
								if( !objSlideS10.$slideWrap.is(':animated') ){
									objSlideS10.nextCountFn();					
								}
							},
							swipeRight:	function(){
								if( !objSlideS10.$slideWrap.is(':animated') ){
									objSlideS10.prevCountFn();
								}
							}			
						});
						
					}
					
					
	}
	
	objSlideS10.init();
	
	
	
		
})(jQuery,window,document);
//section10Slide.js