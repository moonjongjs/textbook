$(function(){
	
	//분석
	//버튼을 클릭하면 해당 버튼 인덱스 번호 index 를 이용 
	//.iconBtnOn의 icon 배경 이미지를 on상태로 보여지기 위해 
	//파란색 벼경 아이콘 이미지로 배경 포지션 변경 
	//css({})메소드 backgroundPosition:(-118*index)+ 'px 0', transition:'all 1s';
	//그리고 iconBtnOn 클래스의 left값을 이용한 애니메이션 animate()메소이용 구현
	
	
	//순서(Order)
	// 0. when 언제? 아이콘 버튼을 클릭할 때
	// 1. iconBtnOn left:118*index animate()
	// 2. animate다음 콜백함수 처리
	//    backgroundPosition:(-118*index)+ 'px 0', transition:'all 1s';

	$('.iconBtn').each(function(index){
		$(this).on({
			click:	function(){
				$('.iconBtnOn').stop().animate({ left: 118*index },0, function(){
					$('.iconBtnOn').css({ backgroundPosition:(-118*index)+'px 0px', transition:'all .6s' });
				});
				$('.iconBtn').removeClass('addIconOn');
				$(this).addClass('addIconOn');
			}
		});
	});
	
	
});
//iconBtnAnimation.js