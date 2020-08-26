(function(window,document,$,undefined){
	var mobileToggle = 0;
	var url;
	
		//스무스 스크롤 이벤트
		//버튼(a 링크 버튼 smoothBtn )을 클릭하면 해당 요소 속성[Attribute; attr] 중 href 속성값을 가져와서
		//해당위치로 포지션을 부드럽게 애니메이션 메소드 이벤트 구현 - 
	
		$('.smoothBtn').on({
			click:	function(event){
				event.preventDefault();	
				
				url = $(this).attr('href');
				$('html,body').stop().animate({ scrollTop: $( url ).offset().top },800);		
			}
		});
		
		
		//상단에서 스크롤 탑값이 10px이상이면 헤더 높이 그리고 배경 모두 변경
		//10px미만이면 해제
		$(window).scroll(function(){
			if( $(this).scrollTop() >=10 ){
				$('#header').addClass('addFixed');
			}
			else{
				$('#header').removeClass('addFixed');
			}
		});
		
		//3선메뉴버튼 클릭 이벤트 Toggle Button
		//모바일메뉴박스 우측에서 좌측으로 부드럽게 슬라이딩 애니멩션
		$('.mobileBtn').on({
			click:	function(){
				
				$(this).toggleClass('addMobile');
				$('#header').toggleClass('addMobile');
				
			}
		});
		
		
		//해상도 1024초과이면 모바일 메뉴박스가 보이는 현상 제거
		$(window).resize(function(){
			if( $(this).innerWidth() > 1024 ){
				$('#header').removeClass('addMobile');
			}
		});
		
		
	
	
	
	
})(window,document,jQuery);
//header.js