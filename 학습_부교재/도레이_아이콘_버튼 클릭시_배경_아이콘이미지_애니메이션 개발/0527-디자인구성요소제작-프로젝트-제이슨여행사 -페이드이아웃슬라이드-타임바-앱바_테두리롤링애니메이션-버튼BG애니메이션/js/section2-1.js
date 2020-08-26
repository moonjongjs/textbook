$(function(){
	var id;
	var z=0;
	
	
	//초기화
	function borderFormatFn(){
		$('.border0').stop().animate({ height:0 },0);
		$('.border1').stop().animate({ width:0 },0);
		$('.border2').stop().animate({ height:0 },0);
		$('.border3').stop().animate({ width:0 },0);
	}
	borderFormatFn();
	
	
	//테두리 롤링 애니메이션
	function borderAniFn(){
		$('.border-wrap').eq(z).find('.border0').stop().animate({ height:100+'%' },150,'easeInExpo', function(){
			$('.border-wrap').eq(z).find('.border1').stop().animate({ width:100+'%' },150,'easeInExpo', function(){
				$('.border-wrap').eq(z).find('.border2').stop().animate({ height:100+'%' },150,'easeInExpo', function(){
					$('.border-wrap').eq(z).find('.border3').stop().animate({ width:100+'%' },150,'easeInExpo');
				});
			});
		});
	}
	
	$('.border-wrap').each(function(idx){ 
		$(this).on({
			mouseenter:	function(){
				z=idx;
				borderAniFn();
			},
			mouseleave:	function(){
				borderFormatFn();
			}
		});
	});
		


	
	
});
//section2-1.js