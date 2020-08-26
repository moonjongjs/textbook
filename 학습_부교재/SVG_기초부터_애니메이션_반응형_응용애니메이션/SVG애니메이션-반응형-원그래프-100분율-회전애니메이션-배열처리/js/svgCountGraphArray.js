(function($){

	// var date = new Date();  //날짜객체생성자
 	// var babo = new Object(); //객체생성자		
	// var babo   = {name:'문종',tel:'01079425305',inte:['피자','빠네스파게티','치킨','닭갈비','삼겹살']}; //객체 리터럴 현실세계의 물리적인 객체 사용
	// var ggoggo = new Array(); //생성자
	// var ggoggo = []; //배열 리터럴

		

	var circleObject  = $('.circle');
	var totalLength   = [0,0,0,0];
	var second 		  = [5,4,6,3];
	var piece 		  = [0,0,0,0];
	var percent 	  = [.90,.80,.95,.70];
	var percentLength = [0,0,0,0];
	var pieceHap      = [0,0,0,0];
	var setId         = [0,0,0,0];
	
		$.each(circleObject, function(idx, obj){
			totalLength[idx] = obj.getTotalLength();
			
			obj.style.strokeDasharray  = totalLength[idx];
			obj.style.strokeDashoffset = totalLength[idx];
			
			percentLength[idx] = totalLength[idx] * percent[idx];
			piece[idx] = (percentLength[idx]/second[idx])/100; 
				
			setId[idx] = setInterval(function(){
				pieceHap[idx] += piece[idx];
				
				if( pieceHap[idx] > percentLength[idx] ){
					clearInterval(setId[idx]);
				}
				else{
					$(obj).css({ strokeDashoffset: totalLength[idx]-pieceHap[idx] });
					$('.num').eq(idx).text( Math.round((pieceHap[idx]/totalLength[idx])*100) + '%' );
				}
			},10);
		});
	
	
})(jQuery);
//svgCountGraph3.js