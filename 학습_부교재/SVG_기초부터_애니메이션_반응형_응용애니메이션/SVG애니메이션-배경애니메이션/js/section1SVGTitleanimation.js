(function($,window,document,undefined){
	var svgPath = $('#svgTitle').find('path');
	var pathLen = [];
	
		svgAniFn();
		setInterval(svgAniFn, 10000);
			
		function svgAniFn(){				
			$.each(svgPath, function(index, object){
				$(object).css({ fill:'rgba(50,200,230, 0)', transition:'fill 2s' });
				pathLen[index] = object.getTotalLength();
				object.style.strokeDasharray  = pathLen[index];
				object.style.strokeDashoffset = pathLen[index];
				
				$(object).animate({ strokeDashoffset:0 }, 3000, function(){
					$(object).animate({ strokeDashoffset:pathLen[index] }, 3000, function(){
						$(object).css({ fill:'rgba(50,200,230, .3)', transition:'fill 2s' });
					});
				});
			});
		}
	
})(jQuery,window,document);
//section1SVGTitleanimation.js



//기억장소 작은단위 : array new array();
	//많은 변수를 한개의 변수 이름으로 지정하고 반복처리해서 기억장소 내용을 인덱스값을 이용 처리하는 방식
	//var a = new array(); //배열객체 변수선언
	/*
	var a = [];          //배열객체 변수선언
	    //a[배열첨자==배열인덱스번호] = 대입연산자(우측내용을 좌측변수(인덱스)에 저장) '배열값지정';
		a = ['강아지','야옹이', .... '문종바보'];
		a[0]='문종바보';
		a[1]='강아지';
		a[2]='야옹이';
		a[3]='멍멍이';
		a[4]='가래떡볶이';
		a[5]='쌀떡볶이';
		a[6]='밤식빵';
		a[7]='캬레멜마끼야또';
		a[8]='오리지날크리스피';
		

		// console.log( a[0] );
		// console.log( a[1] );
		// console.log( a[2] );
		// console.log( a[3] );
		// console.log( a[4] );
		// console.log( a[5] );
		// console.log( a[6] );
		// console.log( a[7] );
		// console.log( a[8] );
		
		//제어문( 반복문(for, while, do~while), 조건문(if, 삼항연산자, switch) )

		for(변수=시작번호,변수<=끝번호,증감변수){ 
			반복문 내용 
		}
		
		for(i=0,i<=8,i++){ 
			반복문 내용 
		}
			

		
		for(i=0; i<=8; i++){ //0 ~ 8
			console.log('a['  +  i  +  ']'  +  ' : '  +  a[i]);	
		}
				
				
				
	*/
		
		
		
	
	
