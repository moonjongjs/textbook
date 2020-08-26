//객체지향 프로그래밍
//Object Programming
// var restaurant = new Object(); 객체 생성자
// var restaurant = {} //권장방식 객체 리터럴

// var restaurant = new Array(); 배열 생성자
// var restaurant = []; //권장방식 배열 리터럴

// 객체 모듈화 프로그래밍 방식
// var restaurant = {
				// cnt:0,
				// imgHeight:0,
				// imgWidth:0,
				// winWidth:0,
				// food:{
					// korea:[0,43,5,6],
					// china:[1,2,3,4],
					// american:[1,2,3,4],
					// etc:'대한민국음식',
					// info: function(){
						// '나는 스파게티가 좋아';
					// }
				// },
				// init:	function(){
					// restaurant.winWidth;
					// console.log(this.food);
					// console.log(this.food.american);
					// console.log(this.food.info);
				// }
// }
// restaurant.init();
			
			
;(function($,window,document,undefined){
		
		var gallery = {
				winW : 0,
				imgW : 0,
				imgH : 0,
				galH : 0,
				rowS : 0,
				colS : 0,
				imgHRate : 600/800,
				n : $('.gallery-list').length,
				btnNum : 0,
				s : [],
				h : [],
				setId : 0,
				init:	function(){
					gallery.responseFn();
					gallery.buttonEvent();
					gallery.timer();
				},
				responseFn: function(){
						gallery.winW = $(window).innerWidth();
						if( gallery.winW > 1170 ){        //1170초과 ~
							gallery.colS=4;
						}
						else if( gallery.winW > 980 ){   //900초과 ~ 1170까지
							gallery.colS=3;				
						}
						else if( gallery.winW > 600 ){  //600초과 ~ 980까지
							gallery.colS=2;				
						}
						else{  //600이하
							gallery.colS=1;				
						}
						gallery.imgW = gallery.winW/gallery.colS;
						gallery.imgH = gallery.imgW*gallery.imgHRate;
						
						switch(this.btnNum){
							case 0:
								gallery.n=8;
								break;
							case 1:
								gallery.n=6;
								break;
							case 2:
								gallery.n=4;
								break;
							case 3:
								gallery.n=4;
								break;
							case 4:
								gallery.n=5;
						}
						
						gallery.rowS = Math.ceil(gallery.n/gallery.colS); //예] 8/2=4
						gallery.galH = gallery.imgH * gallery.rowS;  //이미지 높이 * 줄수

						$('.gallery').css({ height: gallery.galH });
						$('.gallery-list').removeClass('addZoom');
						
						switch(gallery.btnNum){
							case 0:
								gallery.h = [];
								gallery.s = [0,1,2,3,4,5,6,7]; // 0 ~ 7					
								break;
							case 1:
								gallery.h = [0,2];
								gallery.s = [1,3,4,5,6,7];	// 0 ~ 5	
								break;					
							case 2:
								gallery.h = [0,1,3,6];					
								gallery.s = [2,4,5,7]; //0 1 2 3
								break;						
							case 3:
								gallery.h = [1,3,4,5];					
								gallery.s = [0,2,6,7]; //0 1 2 3
								break;
							case 4:
								gallery.h = [0,2,5];					
								gallery.s = [1,3,4,6,7]; //0 1 2 3 4
						}
						
						//HIDE 제어문 - 반복문 FOR
						for(var i=0; i<gallery.h.length; i++){
							$('.gallery-list').eq(gallery.h[i]).stop().hide();
						}
						
						
						//SHOW 제어문 - 반복문 FOR
						var k=-1;
						for(var i=0; i<gallery.rowS; i++){
							for(var j=0; j<gallery.colS; j++){
								k++; //0 1 2 ... 배열인덱스
								
								//0 1 2 3 4 5
								if( k>=gallery.s.length){ //배열 이미지 갯수가 4개이면 4개만 출력 종료 
									break;
								}
								//0 1 2 3 4 
								$('.gallery-list').eq(gallery.s[k]).stop().show().animate({ width:(gallery.imgW), height:(gallery.imgH), top:(gallery.imgH*i), left:(gallery.imgW*j) },300);
							}
						}

						
						$('.gallery-list').addClass('addZoom');
						
					},  //반응형 메인함수 끝
					timer:	function(){
					
						setTimeout(gallery.responseFn,100);
						
						//반응형 메소드 이벤트
						$(window).resize(function(){
							clearTimeout(gallery.setId);			
							gallery.setId = setTimeout(gallery.responseFn,100);
						});						
					},
					buttonEvent:	function(){
	
						//갤러리 메인버튼 클릭 이벤트 : 갤러리 포지션 및 애니메이션 구현
						$('.galMainBtn').each(function( index ){
							$(this).on({
								click:	function(){
									gallery.btnNum = index;
									gallery.responseFn();
									$('.galMainBtn').removeClass('addGalBtn');
									$(this).addClass('addGalBtn');
								}
							});
						});	
												
					}
					
		}; 

		gallery.init();

})(jQuery,window,document);
//section9Gallery.js





		







