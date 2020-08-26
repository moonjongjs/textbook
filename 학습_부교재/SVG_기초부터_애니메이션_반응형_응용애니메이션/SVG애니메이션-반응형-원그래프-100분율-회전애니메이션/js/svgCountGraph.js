(function($){
	//0. 변수설정 : cnt,piece, svgCircle, totalLength, percentLength, percentText
	//1. svg객체를 로딩 변수 svgCircle = $('#circle1')에 대입
	//2. svg객체의 totalLength=전체길이(getTotalLength())
	//3. percentLength = totalLength * 0.9(90%)
	//4. 퍼센트 숫자 카운트 화면에 중앙에 나오게 한다. percentText
	//5. piece(피:스) 초당 길이 조각 [예, 총길이 1600/4 = 400]
	
	var cnt=0;
	var second=4;
	var percent=0.9;
	var svgCircle=0;
	var totalLength=0; 
	var percentLength=0; 
	var piece=0;
	
		svgCircle = $('#circle1');
		
		$.each(svgCircle, function(index, obj){
			//전체길이
			totalLength = obj.getTotalLength();
			//90% 길이
			percentLength = totalLength*percent;
			//1초(1000밀리초)초 길이
			piece = (percentLength/second)/100;
			
			obj.style.strokeDasharray  = totalLength;
			obj.style.strokeDashoffset = totalLength;
			
			setId = setInterval(countFn,10);
			
			function countFn(){
				cnt+=piece;
				if( cnt > percentLength ){
					clearInterval( setId );
				}
				else{
					$(obj).css({ strokeDashoffset: totalLength-cnt });
					$('.num').eq(0).text( Math.round((cnt/totalLength)*100) + '%' );               
				}
			}
			
		});
	
	
	
})(jQuery);
//svgCountGraph.js