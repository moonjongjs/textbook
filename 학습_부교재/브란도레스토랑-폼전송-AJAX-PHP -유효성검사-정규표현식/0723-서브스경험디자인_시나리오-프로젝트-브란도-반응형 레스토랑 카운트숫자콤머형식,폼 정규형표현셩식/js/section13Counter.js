;(function($){
	
	var c0=0; //증가변수
	var c1=0; //증가변수
	var c2=0; //증가변수
	var c3=0; //증가변수
	
	var d0=1780; //카운터 종료변수
	var d1=2987; //카운터 종료변수
	var d2=3350; //카운터 종료변수
	var d3=1166; //카운터 종료변수
	
	var t0=12.82051282; //10초동안 처리할 반복 타이머 간격
	var t1=10.13171226; //10초동안 처리할 반복 타이머 간격
	var t2=28.57142857; //10초동안 처리할 반복 타이머 간격
	var t3=60.24096386; //10초동안 처리할 반복 타이머 간격
	
	var reg6 = /\B(?=(\d{3})+(?!\d))/g;

	id0 = setInterval(Count0,t0);	
		
	function Count0(){
		c0++; //1 2 3...780
		if(c0<=d0){
			$('.s13CountNum').eq(0).text(c0).replace(reg6, ',');
		}
		else{
			//타이머 정지
			clearInterval(id0); //781
		}
	}	

	

	id1 = setInterval(Count1,t1);	
		
	function Count1(){
		c1++; //1 2 3...
		if(c1<=d1){
			$('.s13CountNum').eq(1).text(c1).replace(reg6, ',');
		}
		else{
			//타이머 정지
			clearInterval(id1);
		}
	}	
	
	
	

	id2 = setInterval(Count2,t2);	
		
	function Count2(){
		c2++; //1 2 3...
		if(c2<=d2){
			$('.s13CountNum').eq(2).text(c2).replace(reg6, ',');
		}
		else{
			//타이머 정지
			clearInterval(id2);
		}
	}	
	
	

	id3 = setInterval(Count3,t3);	
		

	
	function Count3(){
		c3++; //1 2 3...
		if(c3<=d3){
			$('.s13CountNum').eq(3).text(c3).replace(reg6, ',');
		}
		else{
			//타이머 정지
			clearInterval(id3);
		}
	}	
	
	$('.s13CountNum').eq(0).text('2388').replace(reg6, ',');
	$('.s13CountNum').eq(1).text('3388').replace(reg6, ',');
	$('.s13CountNum').eq(2).text('4448').replace(reg6, ',');
	$('.s13CountNum').eq(3).text('3388').replace(reg6, ',');
	
		
})(jQuery);
//section13Counter.js