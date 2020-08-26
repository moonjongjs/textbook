(function($,window,document,undefined){
	//1.  변수설정
	var s4conH = $('#section4 .container').innerHeight();
	var s4titH = $('#section4 .title').innerHeight();
	var s4titT = (s4conH-s4titH)/2;
	    $('#section4 .title').css({ top: s4titT });
	
	//2. 함수 만들기
	function s4ResizeFn(){
	    s4conH = $('#section4 .container').innerHeight();
	    s4titH = $('#section4 .title').innerHeight();
	    s4titT = (s4conH-s4titH)/2;
	    $('#section4 .title').css({ top: s4titT });
	}
	
	
	//3. 반응형 리사징
	$(window).resize(function(){
		s4ResizeFn();
	});
	
	//4. 구현
	setTimeout(s4ResizeFn,100);
	
	
	
})(jQuery,window,document);
//section4.js