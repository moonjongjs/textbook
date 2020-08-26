;(function(jQuery,window,document,undefined){
	
	var imgUrl=null;  //imgUrl=''; 또는 imgUrl;
	var cnt=0;  //증가변수는 반드시 초기값 설정
	
	//갤러리 이미지 박스 클릭이벤트
	$('.gallery-list').each(function(index){
		$(this).on({
			click:	function(){
				cnt = index; //0
				$('#modal .image img').stop().fadeOut(0).fadeIn(1000).attr('src', './img/restaurant-img' + (cnt+25) + '.jpg');
				$('html').addClass('addScroll');
				$('#modal').stop().show();
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