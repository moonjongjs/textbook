<?php 

    //php는 변수 설정 앞에 접두어가 $가 반드시 사용된다.
    $servername     = 'localhost';
    $username       = 'root';
    $userpassword   = 'autoset';
    $databasename   = 'ec';

    $conn = new mysqli($servername, $username, $userpassword, $databasename);  //DB 접속
    mysqli_set_charset($conn, 'utf8');  //인코딩

    if(!$conn){
        die('Connection failed 접속 실패!!');
    }
    else{
        echo 'Connection successefully  접속 성공!!';
    }

    //입력전 데이터베이스 인증 
    //ajax 로 전송된 데이터
    //변수에 저장
    $name    = $_POST['name'];
    $tel     = $_POST['tel'];
    $addr    = $_POST['addr'];

    //테이블에 데이터 입력
    //외부데이터는 반드시 변수 양쪽에 작은 ''따옴표 표기
    $sql = "insert into address (name, tel, addr) values ('$name', '$tel', '$addr' )";
    mysqli_multi_query($conn, $sql); //쿼리실행

    echo '축하합니다. 회원 가입이 완료 되었습다.' . $name . ', ' .  $tel . ', ' . $addr; 
    

    //데이터베이스 닫기
    mysqli_close($conn);

?>
<!-- inputForm.php -->

