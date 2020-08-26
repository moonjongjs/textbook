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
			
			if( colS==4 ){ //칸수 4인경우 2줄
				if( btnNum == 0 ){ //ALL 
					h = [];
					s = [0,1,2,3,4,5,6,7];

					$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
					$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
					$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
					$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*3) },300);
					$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
					$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
					$('.gallery-list').eq(s[6]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*2) },300);
					$('.gallery-list').eq(s[7]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*3) },300);
				}
				
				else if( btnNum == 1 ){ //BREAKFAST
					h = [0,2];
					s = [1,3,4,5,6,7];
					
					$('.gallery-list').eq(h[0]).stop().hide();
					$('.gallery-list').eq(h[1]).stop().hide();
					
					$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
					$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
					$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
					$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*3) },300);
					$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
					$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
				}
				else if( btnNum == 2 ){ //LUNCH
					h = [0,1,3,6];					
					s = [2,4,5,7];

					$('.gallery-list').eq(h[0]).stop().hide();
					$('.gallery-list').eq(h[1]).stop().hide();
					$('.gallery-list').eq(h[2]).stop().hide();
					$('.gallery-list').eq(h[3]).stop().hide();
					
					$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
					$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
					$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
					$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*3) },300);
				}
				else if( btnNum == 3 ){ //DINNER
					h = [1,3,4,5];					
					s = [0,2,6,7];
					
					$('.gallery-list').eq(h[0]).stop().hide();
					$('.gallery-list').eq(h[1]).stop().hide();
					$('.gallery-list').eq(h[2]).stop().hide();
					$('.gallery-list').eq(h[3]).stop().hide();
					
					$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
					$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
					$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
					$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*3) },300);
				}
				
				else if( btnNum == 4 ){ //DRINKS
					h = [0,2,5];					
					s = [1,3,4,6,7];
					
					$('.gallery-list').eq(h[0]).stop().hide();
					$('.gallery-list').eq(h[1]).stop().hide();
					$('.gallery-list').eq(h[2]).stop().hide();
					
					$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
					$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
					$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
					$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*3) },300);
					$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
				}
				
				
				
			}
			else if( colS==3 ){ //칸수 3인경우 3줄  .stop().animate
				
				switch(btnNum){
					case 0:  //0 인 경우 
						h = [];
						s = [0,1,2,3,4,5,6,7];
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
						$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*2) },300);
						$('.gallery-list').eq(s[6]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[7]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*1) },300);
						break;
						
					case 1:  //1 인 경우
						h = [0,2];
						s = [1,3,4,5,6,7];		
						
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
						$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*2) },300);
						break;
						
					case 2:  //2 인 경우
						h = [0,1,3,6];					
						s = [2,4,5,7];
					
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						$('.gallery-list').eq(h[3]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						break;

					case 3:  //3 인 경우
						h = [1,3,4,5];					
						s = [0,2,6,7];
					
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						$('.gallery-list').eq(h[3]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						break;
						
					case 4:  //4 인 경우
						h = [0,2,5];					
						s = [1,3,4,6,7];
											
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*2) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
				}	//switch The end!
				
				
			}
			else if( colS==2 ){ //칸수 2인경우 4줄
			
				switch(btnNum){
					case 0:
						h = [];
						s = [0,1,2,3,4,5,6,7];
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*1) },300);
						$('.gallery-list').eq(s[6]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*3), left:(imgW*0) },300);
						$('.gallery-list').eq(s[7]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*3), left:(imgW*1) },300);
						break;
						
					case 1:
						h = [0,2];
						s = [1,3,4,5,6,7];		
					
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*1) },300);

						break;
					case 2:
						h = [0,1,3,6];					
						s = [2,4,5,7];
						
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						$('.gallery-list').eq(h[3]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
						break;
						
					case 3:
						h = [1,3,4,5];					
						s = [0,2,6,7];
						
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						$('.gallery-list').eq(h[3]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
						break;
						
					case 4:
						h = [0,2,5];					
						s = [1,3,4,6,7];
												
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*1) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*1) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);				
				} //switch	
			
			}
			else if( colS==1 ){ //칸수 1인경우 8줄
			
				switch(btnNum){
					case 0:
						h = [];
						s = [0,1,2,3,4,5,6,7];
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*3), left:(imgW*0) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*4), left:(imgW*0) },300);
						$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*5), left:(imgW*0) },300);
						$('.gallery-list').eq(s[6]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*6), left:(imgW*0) },300);
						$('.gallery-list').eq(s[7]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*7), left:(imgW*0) },300);
						break;
						
					case 1:
						h = [0,2];
						s = [1,3,4,5,6,7];		
										
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*3), left:(imgW*0) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*4), left:(imgW*0) },300);
						$('.gallery-list').eq(s[5]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*5), left:(imgW*0) },300);
						break;
						
					case 2:
						h = [0,1,3,6];					
						s = [2,4,5,7];
						
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						$('.gallery-list').eq(h[3]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*3), left:(imgW*0) },300);
						break;
						
					case 3:
						h = [1,3,4,5];					
						s = [0,2,6,7];
						
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						$('.gallery-list').eq(h[3]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*3), left:(imgW*0) },300);

						break;
					case 4:
						h = [0,2,5];					
						s = [1,3,4,6,7];
							
						$('.gallery-list').eq(h[0]).stop().hide();
						$('.gallery-list').eq(h[1]).stop().hide();
						$('.gallery-list').eq(h[2]).stop().hide();
						
						$('.gallery-list').eq(s[0]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*0), left:(imgW*0) },300);
						$('.gallery-list').eq(s[1]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*1), left:(imgW*0) },300);
						$('.gallery-list').eq(s[2]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*2), left:(imgW*0) },300);
						$('.gallery-list').eq(s[3]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*3), left:(imgW*0) },300);
						$('.gallery-list').eq(s[4]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*4), left:(imgW*0) },300);				

				}
			
			}
			
			$('.gallery-list').addClass('addZoom');
			
		}
		
		responseFn();
		setTimeout(responseFn,100);
		
		//반응형 메소드 이벤트
		$(window).resize(function(){
			responseFn();
			setTimeout(responseFn,100);
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
		
	

})(jQuery,window,document);
//section9Gallery.js