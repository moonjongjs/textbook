(function($, window, document, undefined){  //Vertical
	//클래스 .section 에서 마우스 휠(wheelDelta)을 아래로 돌리면 다음 섹션탑값 위치로 스무스스므롤링 이벤트
	//마우스 휠(wheelDelta)을 위로  돌리면 이전 섹션탑값 위치로 스무스 스크롤링(smooth Scrolling) 이벤트
	var delta;  //마우스 휠 델타 변수
    var brows;  //브라우저 변수
	
		$('.section').each(function(index){ //0 ~ 9 (10개)
			$(this).on('mousewheel DOMMouseScroll', function(event){
				event.preventDefault();
				
				//브라우저(Browser) BOM객체 중에서 파이어폭스를 판별하고 델타값을 설정
				brows = window.navigator.userAgent.toLowerCase().indexOf('firefox');
				//찾으면 firefox 글자의 시작위치 인덱스번호(0 1 2 ... ) >=0
				//찾지 못하면 -1
				// if( brows !== -1 ){ // 파이어폭스 firefox
				// if( brows >= 0 ){ // 파이어폭스
				
				//파이어폭스DOMMouseScroll(아래로 3, 위로 -3)와 
				//다른 브라우저mousewheel(아래로 -120, 위로 120)는 반대 
				if( brows !== -1 ){ // 파이어폭스 >= 0   3(아래), -3(위)   3=-3*-1 // -3=3*-1 
					delta = (event.detail*-1)*40;  //부호를 변경 * 40 방향 바꾸기 -120, 120
				}	
				else{ // 그외 브라우저(익스, 크롬, 사파리 ...)
					delta = event.originalEvent.wheelDelta; //-120, +120
				}

				console.log( delta );	
				
				if( delta < 0 ){ //-120
					//다음 섹션위치 탑값으로 부드럽게 이동
					if( index < $('.section').length-1 ){ //0 ~ 8 9
						$('html,body').stop().animate({ scrollTop: $(this).next().offset().top },500,'easeInOutSine');
					}
				}
				else { //120
					//이전 섹션위치 탑값으로 부드럽게 이동 
					if( index >= 1 ){ //9 8 7 6 5 4 3 2 1
						$('html,body').stop().animate({ scrollTop: $(this).prev().offset().top },500,'easeInOutSine');
					}
				}
				
			});
		});
	
})(jQuery, window, document);
//mouseWheelEvent.js