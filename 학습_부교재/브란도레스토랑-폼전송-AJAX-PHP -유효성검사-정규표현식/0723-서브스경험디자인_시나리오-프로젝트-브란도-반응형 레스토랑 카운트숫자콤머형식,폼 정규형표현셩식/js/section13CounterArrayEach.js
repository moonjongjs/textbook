;(function($){
	var c  = [0,0,0,0];
	var d  = [1780,2987,4500,3929];
	var t  = [5.617977528,3.347840643,2.222222222,2.54517689];
	var id = [0,0,0,0];
	var commaReg = /\B(?=(\d{3})+(?!(\d)))/g; //콤머(Comma) 3자리마다 표기
	//var commaReg = /\B(()(()))/g;  //괄호정리
	//var commaReg = /\B(?=(\d{3})*(?!(\d)))/g;


	
	//간략화 표현식 반복 배열처리
	$('.s13CountNum').each(function(idx){
		
		id[idx] = setInterval(function(){
			Count(idx);  //카운트함수 호출시 매개변수 전달
		},t[idx]);
		
	});
		
	function Count(z){
		c[z]++; //1 2 3...780  수치정보
		if(c[z]<=d[z]){
			$('.s13CountNum').eq(z).text( c[z].toString().replace(commaReg,',') );
		}
		else{
			//타이머 정지
			clearInterval(id[z]); //781
		}
	}	
	

		
})(jQuery);
//section13Counter.js