(function($){
	
	var circleObject3 = $('#circle3');
	var totalLength3 = 0;
	// var circleObject3 = document.querySelector('#circle3');
	// var circleObject = document.getElementById('#circle3');
	var second3 = 4;
	var piece3 = 0;
	var percent3 = 0.95;
	var percentLength3 = 0;
	var pieceHap3 = 0;
	var setId3 = 0;	
		$.each(circleObject3, function(index, obj){
			totalLength3 = obj.getTotalLength();
			
			obj.style.strokeDasharray = totalLength3;
			obj.style.strokeDashoffset = totalLength3;
			
			percentLength3 = totalLength3 * percent3;
			piece3 = (percentLength3/second3)/100; 
				
			setId3 = setInterval(function(){
				pieceHap3 += piece3;
				console.log(  pieceHap3 );
				if( pieceHap3 > percentLength3 ){
					clearInterval(setId3);
				}
				else{
					$(obj).css({ strokeDashoffset: totalLength3-pieceHap3 });
					$('.num').eq(2).text( Math.round((pieceHap3/totalLength3)*100) + '%' );
				}
			},10);
		});
	
	
})(jQuery);
//svgCountGraph3.js