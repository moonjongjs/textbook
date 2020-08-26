$(function(){
	//스클롤시 상단 고정메뉴 addClass()/removeClass()

	var offsetHeight=0;
		offsetHeight=$('.sub-warp').offset().top;
		
	$(window).scroll(function(){

		if($(document).scrollTop()>offsetHeight){
			$('.sub-warp').addClass('fixedSubmenu');
		}
		else{
			$('.sub-warp').removeClass('fixedSubmenu');
		}
		
	});
	
});