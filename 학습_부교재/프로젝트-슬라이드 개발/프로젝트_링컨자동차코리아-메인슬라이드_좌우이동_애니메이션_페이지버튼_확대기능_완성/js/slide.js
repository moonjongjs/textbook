$(function(){
	var cnt=0;
		$('.slide-wrap').css({width:1438*7});
	
	
		function slideFn(){
			$('.slide-wrap').stop().animate({left:-1438*cnt},600 ,function(){
				if(cnt>4){
					cnt=0;
				}
				if(cnt<0){
					cnt=4;
				}
				$('.slide-wrap').stop().animate({left:-1438*cnt},0); 
			});	
			if(cnt>4){
				pageBtnFn(0);	
			}
			else{
				pageBtnFn(cnt);	
			}
		}
	
		function nextCountFn(){
			cnt++;
			slideFn();
		}

		function prevCountFn(){
			cnt--;
			slideFn();
		}

		//버튼Click 다음슬라이드
		$('.arrowNext').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					nextCountFn();	
				}
				clearInterval(setId);
			}
		});
		
		//버튼Click 이전슬라이드
		$('.arrowPrev').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					prevCountFn();
				}
				clearInterval(setId);				
			}
		});
		
		function autoPlayFn(){
			setId = setInterval(nextCountFn, 4000);
		}
		autoPlayFn();
		
		
		function pageBtnFn(z){
			$('.pageBtn-wrap li').removeClass('addPageBtn');
			$('.pageBtn-wrap li').eq(z).addClass('addPageBtn');
		}
		
		$('.pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					cnt = index;
					slideFn();
					clearInterval(setId);
				}
			});
		});
		
		//터치이벤트(Touch Event)
		$('.slide-container').swipe({
			swipeLeft:	function(){  //다음슬라이드
				if( !$('.slide-wrap').is(':animated') ){
					nextCountFn();
				}
				clearInterval(setId);
			},
			swipeRight:	function(){  //이전슬라이드
				if( !$('.slide-wrap').is(':animated') ){
					prevCountFn();	
				}
				clearInterval(setId);
			}
		});
		
		
		

});
//slide.js





