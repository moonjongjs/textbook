;(function($,window,document,undefined){
	
	var $cntNum = $('.s13CountNum');
	var num   = [780,987,350,166];
	var timer = [12.82051282,10.13171226,28.57142857,60.24096386];	
	var cnt   = [];  //var cnt = new Array();
		for(i=0; i<=3; i++){ cnt[i]=0; }  //cnt = [0,0,0,0];
	var setId = [];
		for(i=0; i<=3; i++){ setId[i]=null; }  //cnt = [null,null,null,null];
	
		$('.s13CountNum').each(function(idx){
			setId[idx] = setInterval(function(){
				countFn(idx);
			},timer[idx]);
		});
	
		function countFn(z){ //함수는 배열처리방식을 매개변수로 처리하면 된다.
			cnt[z]++;
			if( cnt[z]<=num[z] ){
				$cntNum.eq(z).text(cnt[z]);
			}
			else{
				clearInterval(setId[i]);
			}
		}
		
		

		
})(jQuery,window,document);
//section13.js