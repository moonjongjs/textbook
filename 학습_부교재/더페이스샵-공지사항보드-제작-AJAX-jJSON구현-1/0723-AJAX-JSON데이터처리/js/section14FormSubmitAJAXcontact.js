(function(jQuery,window,document,undefined){
	var timeOutId=0;

	
	$('#submit').on({
		click:	function(e){
			e.preventDefault();
			
			$('.ajax-loader').addClass('addLoader');
			timeOutId = setTimeout(function(){
				$('.ajax-loader').removeClass('addLoader');
				clearTimeout(timeOutId);
			},1000);
			
			var txtIrum = $('#irum').val().trim();	
			var txtMail = $('#mail').val().trim();	
			var txtIntr = $('#interreste').val(); //select 	
			var txtMesg = $('#message').val().trim();	

			
			console.log(txtIrum);
			console.log(txtMail);
			console.log(txtMesg);
			
			
			
			spaceDelRag = /(^\s*)|(\s*$)/g;
			resultIrum = txtIrum.replace(spaceDelRag,'');
			resultMail = txtMail.replace(spaceDelRag,'');
			resultMesg = txtMesg.replace(spaceDelRag,'');
			
			console.log(resultIrum);
			console.log(resultMail);
			console.log(resultMesg);
			
			irumReg = /^[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ]{2,50}$/g;  
			emailReg = /^[a-zA-Z0-9]+([\_\-\.]?[A-Za-z0-9])*@[a-zA-Z0-9]+([\_\-\.]?[0-9a-zA-Z])*\.[a-zA-Z0-9]+$/g;
			messageReg = /^[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ]{2,50}$/g; 
			
			//이메일 형식에 맞는지 검사 test() true false	
			
			
				//유효성검사 빈값이 전송을 막을려고
				if(  !irumReg.test(resultIrum) ){
					$('#irum').addClass('addError');
				}
				else{
					$('#irum').removeClass('addError');
				}

				if( !emailReg.test(resultMail) ){
					$('#mail').addClass('addError');
				}
				else{
					$('#mail').removeClass('addError');
				}

				if(  !messageReg.test(resultMesg) ) {
					$('#message').addClass('addError');
				}
				else{
					$('#message').removeClass('addError');
				}
				
				if(  !irumReg.test(resultIrum) || !emailReg.test(resultMail) || !messageReg.test(resultMesg)  ){
					$('.errors').addClass('addError');
					return false;					
				}
				else{
					//정보 전송 AJAX
					$.ajax({
						url:'./contactForm.php',
						type:'POST',
						data:{
							irum		: txtIrum,
							mail		: txtMail,
							interreste	: txtIntr,
							message		: txtMesg
						},
						success: function(data){
							$('.errors').removeClass('addError');
							$('.success').addClass('addSuccess');
							
							$('.success div').append(data);
							
							$('#irum').val('');	
							$('#mail').val('');	
							$('#interreste').val('');	  //Property:속성 또는 Attribute(어트리뷰트):속성 
							$('#interreste option').eq(0).prop('selected', true);
							// $('#interreste option').eq(0).attr('selected', true);
							$('#message').val('');	
							
						},
						error:	function(){
							alert('AJAX 지원이 안됩니다. SERVER에서 전송하세요!!!');
						}
					});
					
				}
		}
	});	

	
})(jQuery,window,document);
//section14FormSubmitAJAXcontact.js