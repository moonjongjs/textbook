$(function(){
	var s2Cnt = 0;
	
		function noticeMainFn(){
			$('.notice').animate({top:29},0).css({zIndex:2});
			$('.notice').eq( s2Cnt===0?4:s2Cnt-1 ).animate({top:0},0).css({zIndex:1});
			$('.notice').eq( s2Cnt ).animate({top:29},0).animate({top:0},600);
		}
	
		function noticeCountFn(){
			s2Cnt++; //1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ...  
			if( s2Cnt > 4  ){
				s2Cnt=0;
			}
			         //1, 2, 3, 4, 0, 1, 2, 3, 4, 0 ... 
			noticeMainFn();
		}
		
		setInterval(noticeCountFn, 3000);
	
});//section2Event.js


/*  보충 설명 주석 처리내용

$(function(){
	//0. 변수설정
	var s2Cnt = 0;
	
		//1. 공지사항 메인함수
		function noticeMainFn(){
			//2. 모든 슬라이드는 처음에 반드시 초기화 해서 모두 아래(29px)에 배치, 글구 zIndex:2로 설정
			$('.notice').animate({top:29},0).css({zIndex:2});
			//3. 현재 슬라이드는 맨위에 설정 zIndex:1로 설정
			//6. 3항연산자
			//6. 카운트변수값이 s2Cnt == 0 이면 마지막 슬라이드 번호 4로 변경 설정
			//6. :그렇지 않으면 s2Cnt-1 로 설정한다.
			$('.notice').eq( s2Cnt==0?4:s2Cnt-1 ).animate({top:0},0).css({zIndex:1});
			//4. 다음 슬라이드는 top:29px 아래에서 top:0 위로 부드럽게 올라는 애니메이션 zIndex:2로 설정
			$('.notice').eq(s2Cnt).animate({top:29},0).animate({top:0},600);
		}
	
		//5. 공지사항 슬라이드 다음카운트변수(s2Cnt) ++  1씩 증가하는 함수
		function noticeCountFn(){
			s2Cnt++;
			if( s2Cnt > 4  ){  // s2Cnt >= 5
				s2Cnt=0;
			}
			noticeMainFn();
		}
		
		//7. 자동타이머 3초간격 실행
		setInterval(noticeCountFn, 3000);
	
});//section2Event.js
*/
