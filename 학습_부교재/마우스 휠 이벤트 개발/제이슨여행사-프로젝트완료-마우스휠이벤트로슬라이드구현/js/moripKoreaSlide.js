(function($,window,document,undefined){
	
	//1. 변수설정
	var s3Cnt = 0;
	var s3z   = 0;
	var winW3 = 1360;	//기준값
	var conH3 = winW3*0.411764706;	//비율
	var pagW  = $('.pageImageBtn-wrap').innerWidth();
	var pagH  = pagW*0.421875;
		$('.pageImageBtn-wrap').css({height: pagH });
	    $('#moripKorea .content').css({ height: conH3 });
	
	
	//2. 반응형 함수와 계산식
	function s3ResizeFn(){
		
		if( $(window).innerWidth() <= 1360 ){
			winW3 = $(window).innerWidth();	//기준값 이하이면 창너비			
		}
		else{
			winW3 = 1360;	//기준값
		}

		conH3 = winW3*0.411764706;	//비율계산
		$('#moripKorea .content').css({ height: conH3 });
		
	    pagW = $('.pageImageBtn-wrap').innerWidth();
		pagH = pagW*0.421875;
		$('.pageImageBtn-wrap').css({height: pagH });
		
	}
	
	
	//3. 로드시 실행 함수
	setTimeout(s3ResizeFn,100);
	
	//4. window객체 resize리사이즈
	$(window).resize(function(){
		s3ResizeFn();
	});
	
	
	//섹션3 슬라이드 구현
	//1-1) 다음메인슬라이드 함수
	function nextS3MainSlideFn(){
		imagePageEventFn();
		$('.s3Slide')                            .css({zIndex:1}).animate({opacity:0},0);
		$('.s3Slide').eq( (s3Cnt-1)<0?2:s3Cnt-1 ).css({zIndex:2}).animate({opacity:1},0);
		$('.s3Slide').eq(  s3Cnt )               .css({zIndex:3}).animate({opacity:0},0).animate({opacity:1},1000);
	}
	//1-2) 이전메인슬라이드 함수
	function prevS3MainSlideFn(){
		imagePageEventFn();
		$('.s3Slide')                            .css({zIndex:1}).animate({opacity:0},0);
		$('.s3Slide').eq( s3Cnt )                .css({zIndex:2}).animate({opacity:1},0);
		$('.s3Slide').eq( (s3Cnt+1)>2?0:s3Cnt+1 ).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},1000);		
	}
	
	
	//2-1) 다음카운트슬라이드 함수
	function nextS3CountSlideFn(){
		s3Cnt++;
		if(s3Cnt>2){
			s3Cnt=0;
		}
		nextS3MainSlideFn()
	}
	//2-2) 이전카운트슬라이드 함수
	function prevS3CountSlideFn(){
		s3Cnt--;
		if(s3Cnt<0){
			s3Cnt=2;
		}		
		prevS3MainSlideFn();
	}
	
	//3-1) 다음버튼클릭이벤트 - 다음카운트
	$('.arrRBtn').on({  
		click:	function(){
			nextS3CountSlideFn();
		}
	});
	//3-2) 이전버튼클릭이벤트	- 이전카운트
	$('.arrLBtn').on({
		click:	function(){
			prevS3CountSlideFn()
		}
	});
	
	//4-1) 이미지페이지이벤트함수 - 이전,다음 메인함수 연동
	function imagePageEventFn(){
		if( s3Cnt==0 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide1.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
		}
		else if( s3Cnt==1 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
		}
		else if( s3Cnt==2 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide1.jpg)'});
		}
	}
	
	//4-2) 이미지페이지버튼클릭이벤트 each(); - 이전,다음 메인함수 연동
	$('.pageImageBtn').each(function(index){
		$(this).on({
			click:	function(){
				
				if( s3Cnt==0 ){           //첫번째 슬라이드 실행중이고(이면서) and &&
					if( index==0 ){       //두번째 슬라이드 클릭한 경우 
						s3Cnt=1;
						nextS3MainSlideFn();
					}
					else{                 //세번째 슬라이드 클릭한 경우
						s3Cnt=2;
						nextS3MainSlideFn();
					}
				}
				else if( s3Cnt==1 ){      //두번째 슬라이드 실행중이고(이면서) and &&
					if( index==0 ){       //첫번째 슬라이드 클릭한 경우
						s3Cnt=0;
						prevS3MainSlideFn();
					}
					else {                //세번째 슬라이드 클릭한 경우
						s3Cnt=2;
						nextS3MainSlideFn();
					}
				}
				else if( s3Cnt==2 ){      //세번째 슬라이드 실행중이고(이면서) and &&
					if( index==0 ){
						s3Cnt=0;		  //첫번째 슬라이드 클릭한 경우
						prevS3MainSlideFn();
					}
					else {
						s3Cnt=1;		  //두번째 슬라이드 클릭한 경우	
						prevS3MainSlideFn();
					}
				}
			}
		});
	});
	
	
	

})(jQuery,window,document);
//moripKoreaSlide.js