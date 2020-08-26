;(function($,window,document,undefined){

	var txt = '';
	var t=0;
	
	$('.selectBtn').on({
		click:	function(){
			if(t==0){
				t=1;
				$(this).next().show();	
			}
			else{
				t=0;
				$(this).next().hide();
			}
			
		}
	});
	

	$.ajax({
		url:'./data/notice.json',
		type:'POST',
		dataType:'JSON',
		success:function(data){
			
			//data 반복처리
			$.each(data.공지사항, function(idx, obj){
				// console.log( idx, obj.구분, obj.제목, obj.날짜 ); //행(row) == 줄 = 레코드(Record == 튜플(Tuple))		
				
				txt += "<li  class='clearfix'>";
				txt += "<span>" + (idx+1)  + "</span>";
				txt += "<span>" + obj.구분 + "</span>";
				txt += "<span><a href='#'>" + obj.제목 + "</a></span>";
				txt += "<span>" + obj.날짜 + "</span>";
				txt += "</li>";
				
				
			});  //반복처리 끝
		
			$('.noticeBoard').html( txt ); //데이터 바인딩
		
		},
		error:	function(event){
			console.log('실패', event);
		}
	});
	

})(jQuery,window,document);
//noticeAjax.js