;(function(jQuery,window,document,undefined){
	
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	var imgW = $('#modal img').innerWidth();
	var imgH = $('#modal img').innerHeight();
 	var _left = (winW-imgW)/2;
	var _top = (winH-imgH)/2;	
	var imgUrl=null;  //imgUrl=''; 또는 imgUrl;
	var cnt=0;  //증가변수는 반드시 초기값 설정
	var setId=0;
	
	
	
		function resizeFn(){
			winW = $(window).innerWidth();
			winH = $(window).innerHeight();
			imgW = $('#modal img').innerWidth();
			imgH = $('#modal img').innerHeight();
			_left = (winW-imgW)/2;
			_top = (winH-imgH)/2;
			
			if( winW > 900 ){
				$('#modal .image').stop().animate({left:_left, top:_top },200);		
			}
			else{
				$('#modal .image').stop().animate({left:0, top:_top },200);
			}
			
		}	
		
		setTimeout(resizeFn,100);
		
		$(window).resize(function(){
			clearTimeout(setId);
			setId = setTimeout(resizeFn,100);
		});
		
		
	
	//갤러리 이미지 박스 클릭이벤트
	$('.gallery-list').each(function(index){
		$(this).on({
			click:	function(){
				cnt = index; //0
				$('#modal .image img').stop().fadeOut(0).fadeIn(1000).attr('src', './img/restaurant-img' + (cnt+25) + '.jpg');
				$('html').addClass('addScroll');
				$('#modal').stop().show();
				setTimeout(resizeFn,100);
			}
		});
	});
	
	//다음 모달 이미지 카운트
	$('.modal-arrowRightBtn, #modal .image').on({
		click:	function(event){
			event.stopPropagation(); //부모창에 전파 차단
			cnt++;
			if(cnt>7){
				cnt=0;
			}
			$('#modal .image img').stop().fadeOut(0).fadeIn(1000).attr('src', './img/restaurant-img' + (cnt+25) + '.jpg');
		}
	});
	//이전 모달 이미지 카운트
	$('.modal-arrowLeftBtn').on({
		click:	function(event){
			event.stopPropagation(); //부모창에 전파 차단
			cnt--;
			if(cnt<0){
				cnt=7;
			}			
			$('#modal .image img').stop().fadeOut(0).fadeIn(1000).attr('src', './img/restaurant-img' + (cnt+25) + '.jpg');
		}
	});
	
	

	//모달창 닫기 버튼 클릭이벤트
	$('.modal-closeBtn').on({
		click:	function(){
			$('html').removeClass('addScroll');
			$('#modal').stop().hide();
		}
	});
	
	//모달 자신 클릭이벤트
	$('#modal').on({
		click:	function(event){
			if( event.target == event.currentTarget ){ //긍정문
				$('html').removeClass('addScroll');
				$('#modal').stop().hide();	
			}
		}
	});

	
	
	

})(jQuery,window,document);
//section9GalleryModal.js