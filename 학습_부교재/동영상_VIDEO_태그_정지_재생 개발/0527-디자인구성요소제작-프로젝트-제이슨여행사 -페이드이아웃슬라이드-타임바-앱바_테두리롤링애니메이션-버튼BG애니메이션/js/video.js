$(function(){
	var video = 0;
	
	
	$('.section2-video').get(0).currentTime = 0;
	$('.section2-video').get(0).play(); 		
	
	//비디오를 클릭하면 정지 
	// 한번더 클릭하면 재시작
	$('.section2-video').on({
		click:	function(){
			if( video == 0 ){
				video=1;
				$('.section2-video').get(0).pause(); 
				$('.section2-video').get(0).muted = false;//sound off
			}
			else{
				video=0;
				$('.section2-video').get(0).play();
				$('.section2-video').get(0).muted = true; //sound on
			}
		}
	});
	
	
	
	
	
});
//video.js