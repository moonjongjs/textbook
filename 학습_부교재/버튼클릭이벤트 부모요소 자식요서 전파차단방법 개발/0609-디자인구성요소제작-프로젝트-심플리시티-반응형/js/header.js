(function($,window,document,undefined){ //매개변수
	
	//앱바버튼(3선메뉴버튼)을 클릭하여 좌측에 숨겨있는
	//모바일메뉴박스를 좌측에서 우측으로 부드럽게 이동시킨다.
	//그리고 헤더 영역은 우측으로 부드럽게 이동한다.
	//모바일메뉴박스(mobile)를 클릭하여 다시 원위치 시킨다.
	$('.appBarBtn').on({
		click:	function(){
			$('#header').stop().animate({ left: 100+'%', marginLeft:-50 },300);
			$('.mobile').stop().animate({ left:   0+'%' },300);
		}
	});
	
	
	$('.mobile').on({ //event.target 부모만 클릭하게 한다. 자식요소 제외
		click:	function(event){
			
			//부정문
			// if( event.target !== event.currentTarget ){
				// return false;  //버튼 클릭 이벤트를 취소
			// }
			// else{
				// $('#header').stop().animate({ left: 0+'%', marginLeft:0 },0);
				// $('.mobile').stop().animate({ left: -100+'%' },300);				
			// }

			//긍정문
			if( event.target === event.currentTarget ){
				$('#header').stop().animate({ left: 0+'%', marginLeft:0 },0);
				$('.mobile').stop().animate({ left: -100+'%' },300);
			}
			else{
				return false;
			}
			
		}
	});
	
	//$('.mobile') 자식요소 이벤트 전파 사황
	$('.mobile>div').on({
		click:	function(){
			alert('.mobile > div 자식요소 ');
		}
	});

	
	
	$('.mLogoBtn').on({
		click:	function(event){ //자식요소만 클릭이벤트 부모요소로 전파 차단
			event.stopPropagation(); //스톱 프 로 퍼 게 이션
			alert('.mobile > div  a 버튼 자손요소 ');
		}
	});
	

	$('.mLoginBtn').on({
		click:	function(event){ //자식요소만 클릭이벤트 부모요소로 전파 차단
			event.stopPropagation(); //스톱 프 로 퍼 게 이션
			alert('.mobile > div  a 버튼 자손요소 ');
		}
	});
	
	
	
	
	$('#search').on({
		click:	function(event){
			event.stopPropagation();
			alert('.mobile > div  input 폼요소중 텍스트입력상자 자손요소 ');
		}
	});
	
	

	$('.mNavBtn').on({
		click:	function(event){
			event.stopPropagation();
			alert('.mobile > div  a 링크버튼 자손요소 ');
		}
	});
	
	
	
	
	
	
	
	
	
	
})(jQuery,window,document); //아그먼트
//header.js