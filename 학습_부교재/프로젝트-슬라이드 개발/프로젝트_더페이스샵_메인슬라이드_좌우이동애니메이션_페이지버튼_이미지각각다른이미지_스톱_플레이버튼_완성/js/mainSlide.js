//mainSlide.js
$(function(){
	var cnt=t=0;
		
		function mainSlideFn(){
			$('.main-slide-wrap').stop().animate({left:-1900*cnt},600, function(){
				if( cnt>2 ){cnt=0;}
				if( cnt<0 ){cnt=2;}
				$('.main-slide-wrap').stop().animate({left:-1900*cnt},0);
			}); 
				if( cnt>2 ){
					pageBtnFn(0);
				}
				else if( cnt<0 ){
					pageBtnFn(2);
				}
				else {
					pageBtnFn(cnt);
				}
		}
		
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		function prevCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		$('.main-slide-nextBtn').on({
			click:	function(){
				if( !$('.main-slide-wrap').is(':animated') ){
					nextCountFn();
				}
				clearInterval(setId);
				t=1;
				$('.main-slide-stopPlayBtn').children().attr('src','./img/intro_indi_play.png');				
			}
		});
		$('.main-slide-prevBtn').on({
			click:	function(){
				if( !$('.main-slide-wrap').is(':animated') ){
					prevCountFn();
				}
				clearInterval(setId);
				t=1;
				$('.main-slide-stopPlayBtn').children().attr('src','./img/intro_indi_play.png');
			}
		});
		
		function autoTimerFn(){
			setId = setInterval(nextCountFn, 4000);
		}
		autoTimerFn();
		
		
		$('.main-slide-container').swipe({
			swipeLeft:	function(){  //next
				if( !$('.main-slide-wrap').is(':animated') ){
					nextCountFn();
				}
				clearInterval(setId);
				t=1;
				$('.main-slide-stopPlayBtn').children().attr('src','./img/intro_indi_play.png');
			},
			swipeRight:	function(){  //prev
				if( !$('.main-slide-wrap').is(':animated') ){
					prevCountFn();
				}
				clearInterval(setId);
				t=1;
				$('.main-slide-stopPlayBtn').children().attr('src','./img/intro_indi_play.png');
			}
		});
		
		
		function pageBtnFn(z){
			$('.main-slide-pageBtn').eq(0).children().attr('src','./img/intro_indi_1.png');
			$('.main-slide-pageBtn').eq(1).children().attr('src','./img/intro_indi_2.png');
			$('.main-slide-pageBtn').eq(2).children().attr('src','./img/intro_indi_3.png');
			$('.main-slide-pageBtn').eq(z).children().attr('src','./img/intro_indi_'+(z+1)+'_on.png');
		}
		
		$('.main-slide-pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					cnt = index;
					mainSlideFn();
					clearInterval(setId);
					t=1;
					$('.main-slide-stopPlayBtn').children().attr('src','./img/intro_indi_play.png');
				}
			});
		});
		
		$('.main-slide-stopPlayBtn').on({
			click:	function(){
				if( t==0 ){
					t=1;
					clearInterval(setId);
					$(this).children().attr('src','./img/intro_indi_play.png');
				}
				else if( t==1 ){
					t=0;
					nextCountFn(); //다음슬라이드 호출실행
					autoTimerFn(); //4초후에 자동반복 실행
					$(this).children().attr('src','./img/intro_indi_pause.png');
				}
			}
		});
		
		
		
		
		
		
		
		
});
