(function($,window,document,undefined){ //Parameter(파라메터;매개변수)
	var svgRect = $('#rect');
	var pathLength;
	
		svgAniFn();
		setInterval(svgAniFn,15000);
		
		function svgAniFn(){
			$.each(svgRect, function(index, svgObj){
				pathLength = svgObj.getTotalLength();
				
				svgObj.style.strokeDasharray  = pathLength;
				svgObj.style.strokeDashoffset = pathLength;
				
				$(svgObj).stop().animate({ strokeDasharray:pathLength, strokeDashoffset:0 }, 5000, function(){
					$(svgObj).stop().animate({ strokeDasharray:0, strokeDashoffset:0 }, 5000, function(){
						$(svgObj).stop().animate({ strokeDasharray:pathLength, strokeDashoffset:pathLength }, 5000);
					});
				});
				
			});
		}
	
	
})(jQuery,window,document); //Agument(아규먼트)
//section1SVGanimation.js