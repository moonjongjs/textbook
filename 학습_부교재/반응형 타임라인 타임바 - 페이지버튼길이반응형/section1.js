(function($, window, document, undefined ){
	
	var pageBarLength = $('.pageBtn').innerWidth();	
		
		function resizeS1Fn(){
			pageBarLength = $('.pageBtn').innerWidth();
		}
		
		resizeS1Fn();
		setTimeout(resizeS1Fn,100 );	
		

		$(window).resize(function(){
			resizeS1Fn();
			setTimeout(resizeS1Fn,100 );
		});
		
		

		//타임바버튼
		function timerFn(){
			
			bar+=(pageBarLength/4)/100;
			
			if(bar>pageBarLength){
				bar=(pageBarLength/4)/100;
				nextCountS1Fn();
			}
			pageEventBtnFn();
			
		}
		
	

	
})(jQuery, window, document );