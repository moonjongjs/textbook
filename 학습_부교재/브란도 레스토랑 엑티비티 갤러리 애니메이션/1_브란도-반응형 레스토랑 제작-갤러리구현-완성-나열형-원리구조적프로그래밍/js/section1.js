(function(window,document,$,undefined){
	//창높이로 섹션1(메인이미지).main-content 높이 반응형
	var winHeight = $(window).innerHeight();
		$('.main-content').css({height: winHeight });
	
		function sec1ResponseFn(){
			winHeight = $(window).innerHeight();			
			$('#section1, .main-content').css({height: winHeight });
		}
		sec1ResponseFn();
		setTimeout(sec1ResponseFn,100);
		
		$(window).resize(function(){
			sec1ResponseFn();
			setTimeout(sec1ResponseFn,100);
		});
	
	
})(window,document,jQuery);
//section1.js