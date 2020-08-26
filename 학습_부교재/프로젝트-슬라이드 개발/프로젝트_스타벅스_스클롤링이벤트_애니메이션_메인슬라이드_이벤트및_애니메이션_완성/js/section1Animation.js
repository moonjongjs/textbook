$(function(){
	
	//섹션1 애니메이션
	function s1AniFn(){
		$('.sec1-el-3').stop().delay(600).animate({opacity:1},1000, function(){
			$('.sec1-el-1').stop().animate({opacity:1},1000, function(){
				$('.sec1-el-2').stop().animate({opacity:1},1000, function(){
					$('.sec1-el-4').stop().animate({opacity:1},1000, function(){
						$('.sec1-el-5').stop().animate({opacity:1},1000);
					});
				});
			});
		});
	}
	
	s1AniFn();
	
	
});//section1Animation.js