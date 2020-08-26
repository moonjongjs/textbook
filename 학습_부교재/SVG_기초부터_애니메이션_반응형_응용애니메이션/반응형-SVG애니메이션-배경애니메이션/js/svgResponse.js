(function($, window, document, undefined){
	//0. 창너비구하기 winW = $(window).innerWidth();
	//1. 400픽셀의 전체너비에서 비율계산(boxRate) = 비율구하기
	//1-2 10px의 테두리두께비율계산(strokeRate) = 비율구하기 = 10/400 //0.025
	//1-3 stroke-width:테두리비율*박스너비
    //2. #section1 ul li : 너비(boxW) = 창너비*비율	
	//3. #section1 ul li : css({width:너비(boxW), height:너비(boxW)})
	//4. 반응형 함수제작
	//5. 반응형 적용 : window .resize() 이벤트에 적용
	//6. 스타일의 속성(Attribute)중 cx:50%, cy:50% 설정변경 백분율로 반드시
		
	
	var winW     = $(window).innerWidth();
	var boxRate  = 400/1903; //제작당시 최적화 너비의 고정값으로 비율계산 0.21019443(약 21.02%)
	var strokeRate  = 10/400; //제작당시 최적화 너비의 고정값으로 비율계산 0.025(약 2.5%)
	var boxWidth = winW * boxRate;
	var strokeWidth = boxWidth*strokeRate;
	
		$('#section1 div ul li').css({ width:boxWidth, height:boxWidth });
		$('circle').css({ r:((boxWidth*0.5)-(strokeWidth*0.5)), cx:(boxWidth*0.5), cy:(boxWidth*0.5), strokeWidth:(strokeWidth) });


		function svgResizeFn(){
			winW     = $(window).innerWidth();
			boxRate  = 400/1903; //제작당시 최적화 너비의 고정값으로 비율계산 0.21019443
			strokeRate  = 10/400;
			boxWidth = winW * boxRate;
			strokeWidth = boxWidth*strokeRate;

			$('#section1 div ul li').css({ width:boxWidth, height:boxWidth });
			$('circle').css({ r:((boxWidth*0.5)-(strokeWidth*0.5)), cx:(boxWidth*0.5), cy:(boxWidth*0.5), strokeWidth:(strokeWidth) });
		}
		svgResizeFn();
		setTimeout(svgResizeFn,100);
		
		
		$(window).resize(function(){
			svgResizeFn();
			setTimeout(svgResizeFn,100);
		});
		
		
	
})(jQuery, window, document);
//svgResponse.js