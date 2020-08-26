(function($,window,document,undefined){
	
	var winW = 0;
	var imgW = 0;
	var imgH = 0;
	var galH = 0;
	var rowS = 0;
	var colS = 0;
	var imgHRate = 600/800; //0.75 높이 비율
	var n = $('.gallery-list').length;
	var btnNum = 0;
	var s = [];
	var h = [];
	var setId = 0;
	
		//반응형 함수
		function responseFn(){
			winW = $(window).innerWidth();
			if( winW > 1170 ){        //1170초과 ~
				colS=4;
			}
			else if( winW > 980 ){   //900초과 ~ 1170까지
				colS=3;				
			}
			else if(  winW > 600 ){  //600초과 ~ 980까지
				colS=2;				
			}
			else{  //600이하
				colS=1;				
			}
			imgW = winW/colS;
			imgH = imgW*imgHRate;
			
			switch(btnNum){
				case 0:
					n=8;
					break;
				case 1:
					n=6;
					break;
				case 2:
					n=4;
					break;
				case 3:
					n=4;
					break;
				case 4:
					n=5;
			}
			
			rowS = Math.ceil(n/colS); //예] 8/2=4
			galH = imgH * rowS;  //이미지 높이 * 줄수

			$('.gallery').css({ height: galH });
			$('.gallery-list').removeClass('addZoom');
			
			switch(btnNum){
				case 0:
					h = [];
					s = [0,1,2,3,4,5,6,7]; // 0 ~ 7					
					break;
				case 1:
					h = [0,2];
					s = [1,3,4,5,6,7];	// 0 ~ 5	
					break;					
				case 2:
					h = [0,1,3,6];					
					s = [2,4,5,7]; //0 1 2 3
					break;						
				case 3:
					h = [1,3,4,5];					
					s = [0,2,6,7]; //0 1 2 3
					break;
				case 4:
					h = [0,2,5];					
					s = [1,3,4,6,7]; //0 1 2 3 4
			}
		
			
			
			
			//HIDE 제어문 - 반복문 FOR
			for(var i=0; i<h.length; i++){
				$('.gallery-list').eq(h[i]).stop().hide();
			}
			
			
			//SHOW 제어문 - 반복문 FOR
			var k=-1;
			for(var i=0; i<rowS; i++){
				for(var j=0; j<colS; j++){
					k++; //0 1 2 ... 배열인덱스
					
					//0 1 2 3 4 5
					if( k>=s.length){ //배열 이미지 갯수가 4개이면 4개만 출력 종료 
						break;
					}
					//0 1 2 3 4 
					$('.gallery-list').eq(s[k]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*i), left:(imgW*j) },300);
				}
			}

			
			$('.gallery-list').addClass('addZoom');
			
		}  //반응형 메인함수 끝
	
		setTimeout(responseFn,100);
		
		//반응형 메소드 이벤트
		$(window).resize(function(){
			clearTimeout(setId);			
			setId = setTimeout(responseFn,100);
		});
	
		//갤러리 메인버튼 클릭 이벤트 : 갤러리 포지션 및 애니메이션 구현
		$('.galMainBtn').each(function( index ){
			$(this).on({
				click:	function(){
					btnNum = index;
					responseFn();
					$('.galMainBtn').removeClass('addGalBtn');
					$(this).addClass('addGalBtn');
				}
			});
		});	
		
		//갤러리 이미지버튼 클릭 이벤트 : 모달창 슬라이드 구현
		//버튼 이벤트 제한 구현
		
	
	
	
	//줄수가 2(0,1)줄, 칸수 4칸 인경우 반복문
	// for(var i=0; i<2; i++){  //외부 반목문 1번 실행할 때 안쪽 반복문은 4회 실행
		// for(var j=0; j<4; j++){
			// console.log(i + '  ' + j);
		// }
	// }
	
	
	// for(var i=2; i<10; i++){  //외부 반목문 1번 실행할 때 안쪽 반복문은 4회 실행
		// for(var j=1; j<10; j++){
			// console.log(i + ' * ' + j + ' = ' + (i*j));
		// }
	// }
	
	// var k=-1;
	// for(var i=0; i<rowS; i++){  //갤러리 줄수 top
		// for(var j=0; j<colS; j++){  //갤러리 칸수 left
			// k++;					//show()  배열 인덱스값 0, 1, 2... 
			// console.log('배열:' + s[k], '줄:' + i, '칸' + j  );
		// }
	// }
	//100 9 8 7 6 ... 0
	// for(i=10; i>=0; i-=1){
		// console.log(i);
	// }
	
	
	// for(i=1; i<=100; i+=2){ //1 3 5 ... 99
		// console.log( i );
	// }
	
	// for(i=2; i<=100; i++){
		// 짝수만 출력
		// if( i%2==0 ){
			// console.log( i );
		// }
	// }
	
	
	// for(i=1; i<=100; i++){
		//짝수만 출력
		// if( i%2!=0 ){
			// console.log( i );
		// }
	// }
	//1씩증가하여 홀수만 출력하라 
	//수치범위는 1~100 사이
	//변수는 i
	// i=-1;
	// while( i<99 ){  //100 미만은 101 출력 그래서 종료는 < 99
		// i+=2;
		// console.log(i);
	// }
	
	//while문 이용하여 구구단 2~9단까지 출력 2*1=2 ....  9*9=81
	// i=1;
	// while(i<9){
		// i++; //2 ... 9

		// j=0;
		// while(j<9){
			// j++;  //1 2 .. 9
			// console.log( i + '*' + j + '=' + (i*j) );
		// }
	// }
	
	

})(jQuery,window,document);
//section9Gallery.js