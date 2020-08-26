(function(window,document,$,undefined){
	
	var winW     = $(window).innerWidth();
	var winHs234 = $(window).innerHeight();
	var conWidth = $('.section234 .container').innerWidth();
	var boxWs234 = $('.section234 .content').innerWidth();
	var contentL = (conWidth-boxWs234)/2;
	var boxHs234 = boxWs234*1.222222222;
	var boxTs234 = (winHs234-boxHs234)/2;
	var boxIs234 = $('.section234 .content > div > div').innerWidth();
	var fonSh4 = boxIs234*0.096416741; //h4 font-size:28px; Rate 
	var fonSh5 = boxIs234*0.037878005; //h5 font-size:11px; Rate 
	var fonSp  = boxIs234*0.04820837;  //p  font-size:14px; Rate 

		//창높이가 박스높이보다 작으면 박스높이로 섹션2의 높이를 설정
		//그리고 박스탑값을 = 0으로 설정
		if( winHs234 < boxHs234 ){
			boxTs234=0;
			$('.section234').css({height: boxHs234 });
		}
		else{
			$('.section234').css({height: winHs234 });
		}
		
		
		
		$('.section234 h4').css({fontSize: fonSh4 });
		$('.section234 h5').css({fontSize: fonSh5 });
		$('.section234 p') .css({fontSize: fonSp, lineHeight: (fonSp*1.785714286)+'px' });
		

		function s234ResponseFn(){
			winW     = $(window).innerWidth();
			winHs234 = $(window).innerHeight();
			conWidth = $('.section234 .container').innerWidth();
			boxWs234 = $('.section234 .content').innerWidth(); //박스 너비
			
			boxHs234 = boxWs234*1.222222222;  //박스 높이
			boxTs234 = (winHs234-boxHs234)/2;   //박스 탑
			boxIs234 = $('.section234 .content > div > div').innerWidth();
			fonSh4 = boxIs234*0.096416741; //h4 font-size:28px; Rate 
			fonSh5 = boxIs234*0.037878005; //h5 font-size:11px; Rate 
			fonSp  = boxIs234*0.04820837;  //p  font-size:14px; Rate 

			//콘텐츠 박스 너비 확인	
			if( winW <= 1170 ){
				contentL = (conWidth-boxWs234)/2;  //345px
			}
			else{
				contentL = 0;
			}
			
			

			if( winHs234 < boxHs234 ){
				boxTs234=0;
				$('.section234').css({ height: boxHs234, minHeight: boxHs234 });
			}
			else{
				$('.section234').css({height: winHs234 });
			}
		
			$('.section234 .content').css({ left: contentL, top: boxTs234, height: boxHs234, outlineWidth:(boxWs234*0.017777778), outlineOffset:-(boxWs234*0.066666667) });
			$('.section234 h4').css({fontSize: fonSh4 });
			$('.section234 h5').css({fontSize: fonSh5 });
			$('.section234 p') .css({fontSize: fonSp, lineHeight: (fonSp*1.785714286)+'px' });

		}
		
		s234ResponseFn();
		setTimeout(s234ResponseFn,100);
		
		$(window).resize(function(){
			s234ResponseFn();
			setTimeout(s234ResponseFn,100);
		});
		
	
})(window,document,jQuery);
//section2.js













