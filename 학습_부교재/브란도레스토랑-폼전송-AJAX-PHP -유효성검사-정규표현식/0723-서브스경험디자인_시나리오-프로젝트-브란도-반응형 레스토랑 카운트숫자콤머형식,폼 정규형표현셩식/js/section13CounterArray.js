;(function($){
	var c=[0,0,0,0];
	var d=[780,987,305,166];
	var t=[12.82051282,10.13171226,28.57142857,60.24096386];
	var id=[0,0,0,0];
	

	id[0] = setInterval(function(){
		Count0(0);  //카운트함수 호출시 매개변수 전달
	},t[0]);	
		
	function Count0(z){
		c[z]++; //1 2 3...780
		if(c[z]<=d[z]){
			$('.s13CountNum').eq(z).text(c[z]);
		}
		else{
			//타이머 정지
			clearInterval(id[z]); //781
		}
	}	

	

	id[1] = setInterval(function(){
		Count1(1);
	},t[1]);	
		
	function Count1(x){
		c[x]++; //1 2 3...
		if(c[x]<=d[x]){
			$('.s13CountNum').eq(x).text(c[x]);
		}
		else{
			//타이머 정지
			clearInterval(id[x]);
		}
	}	
	
	
	

	id[2] = setInterval(function(){
		 Count2(2);
	},t[2]);	
		
	function Count2(z){
		c[z]++; //1 2 3...
		if(c[z]<=d[z]){
			$('.s13CountNum').eq(z).text(c[z]);
		}
		else{
			//타이머 정지
			clearInterval(id[z]);
		}
	}	
	
	id[3] = setInterval(function(){
		 Count3(3);
	},t[3]);	
		
	function Count3(z){
		c[z]++; //1 2 3...
		if(c[z]<=d[z]){
			$('.s13CountNum').eq(z).text(c[z]);
		}
		else{
			//타이머 정지
			clearInterval(id[z]);
		}
	}	
	
	
		
})(jQuery);
//section13Counter.js