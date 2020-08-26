(function($){
	var svgObject2 = $('#circle2'); //SVG 객체 	
	//var circle2 =  document.querySelector('#circle2');         //자바스크립트 DOM 요소 ID와 CLASS 가져오기
	//var cir2 =     document.getElementById('#circle2');        //자바스크립트 DOM 요소 ID만 가져오기
	//var cir2 =     document.getElementsByClass('.circle2')[0]; //자바스크립트 DOM 요소 CLASS만 가져오기

    var totalLength2 = 0; //총 길이
	var second2 = 4;  //초
	
	var percentLength2 = 0; //퍼센트 길이 =  총길이*퍼센트
	var piece2 = 0; //단위길이
	var pieceHap2 = 0; //단위길이 누적 합 변수	
	
		
		$.each(svgObject2,function(index, obj){
			
			totalLength2 = obj.getTotalLength();
			
			obj.style.strokeDasharray = totalLength2;  //자바스크립트
			obj.style.strokeDashoffset= totalLength2;  //자바스크립트
			
			// $(cir2).css({
				// strokeDasharray:  totalLength,    //제이퀴리
				// strokeDashoffset: totalLength,    //제이쿼리
			// });

			// $(obj).animate({ strokeDashoffset: 0 },4000);

			percentLength2 = totalLength2*0.8;
			piece2 = (percentLength2/second2)/100;
			
			
			setId2 = setInterval( function(){
				pieceHap2 += piece2;
				
				if( pieceHap2 > percentLength2 ){
					clearInterval(setId2);
				}
				else{
					$(obj).css({ strokeDashoffset : totalLength2-pieceHap2 });
					$('.num').eq(1).text( Math.round((pieceHap2/totalLength2)*100) + '%' );
				}
				
			}, 10);
			
			
		});
	
	
	
})(jQuery);
//svgCountGraph2.js