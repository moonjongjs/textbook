<?php

	//PC 아파치 웹서버에서 실행
	//localhost/rest/
	//127.0.0.1/rest/
	//192.168.0.9/rest/
	
	//닷홈 아파치 웹서버에서 실행
	//moonjong2.dothome.co.kr/rest/

	
	
	//DB 설정 연결(CONNECT)
	//서버이름
	//사용자이름
	//비밀번호
	//데이터베이스이름
	/////////////////////////////
	
	$irum = $_POST['irum'];
	$mail = $_POST['mail'];
	$inte = $_POST['interreste'];
	$mess = $_POST['message'];

	//DB 
	//정보 입력 저장(INSERT)
	
	//리터내용 .변수. 변수와 문자열 연결 연산자는 .(dot)
	echo '<p>이름: '.$irum.' 메일: '.$mail.' 흥미있는것: '.$inte.' 메시지: '.$mess.'</p>';
	
	
	
//contactForm.php
?>