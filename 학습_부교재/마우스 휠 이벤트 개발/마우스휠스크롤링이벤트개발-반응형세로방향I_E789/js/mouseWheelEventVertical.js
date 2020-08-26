(function($, window, document, undefined){
	var wheelDelta; //undefined
	var broweser;
	var wheelMove=0;
	var sectionW = $(window).innerWidth();	
	var sectionH = $(window).innerHeight();	
	var idx = 0;	
	var fontS = sectionW*0.078822911;
	
		function wheelFesizeFn(){
			sectionW = $(window).innerWidth();
			sectionH = $(window).innerHeight();	
			fontS    = sectionW*0.078822911;
			$('.section').css({ 
				width: sectionW,
				height: sectionH,
				fontSize: fontS, 	
				lineHeight: sectionH+'px' //반드시 px단위 표기
			});	
			$('html,body').stop().animate({ scrollTop: sectionH*idx  }, 0);
		}
		
		wheelFesizeFn();
		setTimeout(wheelFesizeFn,100);
		
		$(window).resize(function(){
			wheelFesizeFn();
		});

			$('.section').each(function(index){
				$(this).on('mousewheel DOMMouseScroll', function(event){
					event.preventDefault();
					
					//2. 브라우저별 판별
					// broweser = window.navigator.userAgent.toLowerCase();  

					if(  event.detail  ){ //firefox
						wheelDelta = event.detail*-1  //-3, +3
					}
					else { //그외 브라우저 chrome, safari, trident....,  msie 10.0 9.0 8.0 7.0 
						wheelDelta = event.originalEvent.wheelDelta;  //-120, +120
					}

					

					//3.  
					if( wheelDelta < 0){ //다음섹션 우측이동
						 if( index < $('.section').length-1 ){ //섹션10개-1까지만 수행
							 wheelMove = $(this).next().offset().top;
							 //wheelMove = $('.section').eq(index).next().offset().left;
							 $('html,body').stop().animate({ scrollTop: wheelMove }, 600);						
							 idx = index+1;							 
						 }		
					}
					else{                //이전섹션 우측이동
						if( index > 0 ){ //처음섹션 이전까지
							wheelMove = $(this).prev().offset().top;
							//wheelMove = $('.section').eq(index).prev().offset().left;
							$('html,body').stop().animate({ scrollTop: wheelMove }, 600);
							idx = index-1;
						}
					}
					
					
					
				});
			});


		


})(jQuery, window, document);
//mouseWheelEventVertical.js