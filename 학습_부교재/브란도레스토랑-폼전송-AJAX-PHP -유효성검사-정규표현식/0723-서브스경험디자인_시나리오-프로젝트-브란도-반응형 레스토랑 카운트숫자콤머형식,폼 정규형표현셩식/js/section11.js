;(function($,window,document,undefined){
	
	var imgW = $('.s11Image').innerWidth();
	var txtH = imgW;
	var txtW = $('.s11Text').innerWidth();
	var fontH3 = txtW*0.056628057;
	var fontP  = txtW*0.092664093;
	var decoW  = txtW*0.154440154;
	var padd   = txtW*0.077220077;
	var setId = 0;

	
	

	//반응형 함수
	function resizeFn(){
		
		imgW = $('.s11box>li').innerWidth();
		txtH = parseInt(imgW);
		txtW = $('.s11Text').innerWidth();
		fontH3 = txtW*0.056628057;
		fontP  = txtW*0.092664093;
		decoW  = txtW*0.154440154;
		padd   = txtW*0.077220077;
		
		$('.s11Text-wrap')   	  .animate({ height: txtH },0);
		$('.s11Text-wrap h3')	  .animate({ fontSize: fontH3 },0);
		$('.s11Text-wrap p') 	  .animate({ fontSize: fontP, paddingTop: padd, paddingBottom: padd },0);
		$('.s11Text-wrap span i') .animate({ width: decoW },0);

	}
	setTimeout(resizeFn,10);
	
	$(window).resize(function(){
		clearTimeout(setId);
		setId = setTimeout(resizeFn,10);
	});
	
	
	
})(jQuery,window,document);
//section11.js