$(function(){
	//전역변수 : 전체영역 범위 변수 
	//전역변수 다른함수, 버튼내에서도 모두 사용 가능하다.
	//지역변수는 변수 선언한 함수 또는 버튼 내에서만 사용할 수 있다.
	var c = cnt = setId = setId2 = 0;
	var n = $('.slide').length-3; //5 = 앞뒤 2개 제외 실제 슬라이드 갯수 -1( index 0~5)
		
		//버튼 클릭 이벤트 발생시 중지된 자동 타이머를
		//다시 재실행 하기 위해
		//카운트 프로그램 함수 제작
		//7초동안 클릭또는 터치등 이벤트가 없으면 자동타이머가 재시작 하도록 
		//프로그램 제작 한다.
		//이유는 정지 재시작 버튼이 없기 때문에 
		//8. 일시정지 함수
		function pauseFn(){
			clearInterval( setId );	//자동타이머 중지
			
			c=0;  //일시정지 순간 초기화 다시 처음부터 카운트 하기위해서	
			clearInterval( setId2 );  //일시정지 순간 초기화	

			//일시정지상태에서 시간을 카운트 7초동안 아무 이벤트 없으면 자시 자동 실행 하기 위해서
			//setInterval(카운트콜백함수,1000);  //1초간격으로 카운트 시작
			//setInterval(function(){ 엔터 },1000);
			//콜백함수 이용
			setId2 = setInterval(function(){
						c++;      //1,2,3,4,5,6,7초
						if( c >=7 ){ //7초 이상이면
						    nextSlideCountFn();    //7초후 즉시 다음슬라이드 실행 
							autoSlideTimerFn();    //3초간격으로 자동타이머 호출 실행하고
							clearInterval(setId2); //자신의(7초카운트) 타이머 중지시킨다.
							c=0;  //초기화 : 다음에 또 카운트를 해야 하니까
						}
					},1000);  //1초간격으로 카운트 시작
	
		}
	
	
		//7. 자동 슬라이드 타이머 함수
		function autoSlideTimerFn(){
			setId = setInterval(nextSlideCountFn,3000);
			console.log('setId : ' + setId );

		}
		autoSlideTimerFn();

		
		
		//6. swipe : 슬라이드콘테이너 터치 이벤트
		$('.main-slide-container').swipe({
			swipeLeft:	function(){ //Next Count
				if( !$('.main-slide-wrap').is(':animated') ){ //참
					nextSlideCountFn();
				}
				pauseFn();
			},
			swipeRight:	function(){ //Preview Count
				if( !$('.main-slide-wrap').is(':animated') ){ //참
					prevSlideCountFn();
				}
				pauseFn();
			}
		});
		
		
		//5. 페이지버튼 객체 배열(each()) 
		//   클릭 이벤트
		$('.main-slide-pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					cnt=index;
					mainSlidefn();
					pauseFn();
				}
			});
		});
		
		
		//4. 페이지버튼 이벤트 함수
		function pageBtnEventFn(){
			var z=0;  //지역변수 : 이 함수 범위(Scope;스코프) 안에서만 사용 가능한 변수
				if(cnt>n){ //마지막번호보다크면 
					z=0; //처음으로
				}
				else if(cnt<0){ //처음이전이면
					z=n;  //마지막번호
				}
				else{
					z=cnt;  //현재슬라이드 그대로
				}			
			$('.main-slide-pageBtn-wrap li').removeClass('addRollingBtn');
			$('.main-slide-pageBtn-wrap li').eq(z).addClass('addRollingBtn');
		}
	
	
		//3-1. 다음 슬라이드 버튼 클릭 이벤트
		$('.main-slide-arrow-rightBtn').on({
			click:	function(){           //is() 참 : 거짓
				if( !$('.main-slide-wrap').is(':animated') ){ //참
					nextSlideCountFn(); //카운트 함수 호출 실행
				}
				pauseFn();
			}
		});
		//3-2. 이전 슬라이드 버튼 클릭 이벤트
		$('.main-slide-arrow-leftBtn').on({
			click:	function(){
				if( !$('.main-slide-wrap').is(':animated') ){
					prevSlideCountFn(); //카운트 함수 호출 실행
				}
				pauseFn();
			}
		});
		
	
		//2-1. 다음(next) 슬라이드 카운트함수
		function nextSlideCountFn(){
			cnt++;
			mainSlidefn();
		}
		//2-2. 이전(prev) 슬라이드 카운트함수
		function prevSlideCountFn(){
			cnt--;
			mainSlidefn();
		}
		
	
		//1. 메인슬라이드 함수
		function mainSlidefn(){
			$('.main-slide-wrap').stop().animate({left:-1920*cnt},600, function(){
				//cnt>5?cnt=0:cnt;
				//n=5(슬라이드 마지막번호) 총갯수는 6개 인덱스번호는 0,1,2,3,4,5 이기때문에
				if(cnt>n){cnt=0}
				if(cnt<0){cnt=n}
				$('.main-slide-wrap').stop().animate({left:-1920*cnt},0);
			});
			pageBtnEventFn();
		}
	
	
});//mainSlide.js