;(function($,window,document,undefined){
	
	//전송성공하고 
	//다시 메시지를 보내고자 할 때
	//이름을 선택하면 
	//성공메시지를 removeClass();
	$('#irum').on({
		focusin:	function(){
			$('.success').removeClass('addSuccess');
		}
	});
	
	
	
	//전송버튼 클릭 이벤트
	$('#submit').on({
		click:	function(event){
			event.preventDefault();	
			
			//입력폼의 모든 입력값을 변수에 저장
			var irum = $('#irum').val();
			var mail = $('#mail').val();
			var inte = $('#interreste').val();
			var mess = $('#message').val();

			/*	
				if( irum == '' ){
					alert('이름을 입력하세요!!!');
					$('#irum').addClass('addError');  //입력 위치로 이동 포커스 위치한다.
					$('#irum').focus();  //입력 위치로 이동 포커스 위치한다.
					return false;
				}else{
					$('#irum').removeClass('addError');
				}
				
				if( mail == '' ){
					alert('메일을 입력하세요!!!');
					$('#mail').addClass('addError');  //입력 위치로 이동 포커스 위치한다.					
					$('#mail').focus();  //입력 위치로 이동 포커스 위치한다.					
					return false;
				}else{
					$('#mail').removeClass('addError');
				}
				
				if( mess == '' ){
					alert('메시지를 입력하세요!!!');
					$('#message').addClass('addError');  //입력 위치로 이동 포커스 위치한다.						
					$('#message').focus();  //입력 위치로 이동 포커스 위치한다.						
					return false;
				}else{
					$('#message').removeClass('addError');
				}
			
				//폼이름.submit();
				contactForm.submit();
			
			*/
			
			//입력 정보를 모두 체크해서 입력 오류가 있는 요소만 클래스 추가
			//그리고 전송 취소
			
			
			
			if( irum=='' ){
				$('#irum').addClass('addError'); 
			}
			else{
				$('#irum').removeClass('addError'); 
			}
			
			if( mail=='' ){
				$('#mail').addClass('addError'); 
			}
			else{
				$('#mail').removeClass('addError'); 
			}
			
			if( mess=='' ){
				$('#message').addClass('addError'); 
			}
			else{
				$('#message').removeClass('addError'); 
			}
			
			if( irum=='' || mail=='' || mess=='' ){
				$('.errors').addClass('addError');
				return false;
			}
			else{
				
				//비동기 전송방식 
				//AJAX
				$.ajax({
					url:'./contactForm.php',
					type:'POST',
					data:{
						//전송데이터;
						//입력폼 name field : 입력변수 
						irum		: irum,
						mail		: mail,
						interreste	: inte,
						message	 	: irum
						
					},
					success:function(data){
						$('.errors').removeClass('addError');
						$('.success').addClass('addSuccess');
						
						//성공메시지 아래에 데이터 전송내용추가	
						$('.success div').append(data);
						
						
						$('#irum').val('');
						$('#mail').val('');
						$('#interreste').val('');
						$('#message').val('');
						
					},
					error:	function(){
						alert('AJAX Error!! Message^^');
					}
				});
				
			}
			
			
			
			
			
		}	
	});
	
	
})(jQuery,window,document);
//section14FormSubmitAJAX.js