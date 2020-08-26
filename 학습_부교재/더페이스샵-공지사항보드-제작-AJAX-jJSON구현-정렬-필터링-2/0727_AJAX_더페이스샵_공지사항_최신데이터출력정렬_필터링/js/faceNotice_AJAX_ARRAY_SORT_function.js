;(function(window,$,document,undefined){
    var a    = [];         //전체에서 사용하도록 전역변수 설정
    var txt  = '';       //전체에서 사용하도록 전역변수 설정
    var cnt  = 0;
    var sCnt = 0;
    var bCnt = 0;


    //////////////////////////////////////////////////////////////////////
    //AJAX(비동기전송방식)으로 외부파일 폴더 data내에 저장된 JSON 객체 데이터를 
    //읽어 들여서 공지사항 게시판에 바인딩 해봅니다.
    //최신글이 맨위에서 차례로 바인딩 합니다.
    //////////////////////////////////////////////////////////////////////
    
    $.ajax({
       url:'./data/notice.json',
       dataType:'JSON',
       success: function(data){
            var imsi = ''; //지역변수 설정 단순히 AJAX 내에서 정렬시에만 사용하기에...
                txt='';
                $('.ajaxBinding').empty();

                //////////////////////////////////////////////////////////           
                //여기는 each() 메소드를 이용하여 배열에  저장 할거예요
                //////////////////////////////////////////////////////////

                //EDPS(Electronic Data Processing System)
                //데이터를 처리(Processing) >> 결과 :  정보(Information) 
                $.each(data.공지사항, function(index, object){
   
                    a[index]=[]; //2차원 배열 선언 : 각 행별로 2차원 선언 이루어 짐
                    
                    a[index][0] = (index+1);  //글번호 1=0+1
                    a[index][1] = object.구분;  //Property구분(key):키값(value)
                    a[index][2] = object.제목;  
                    a[index][3] = object.날짜; 
                    
                    if( object.구분 == '쇼핑'){
                        sCnt++;
                    }
                    if( object.구분 == '브랜드'){
                        bCnt++;
                    }

                    
                }); //each() the end 

                /////////////////////////////////////////////////////////////
                //객체를 모두 반복처리해서 읽어서 배열에 저장이 끝난 상태 이어요^^.
                /////////////////////////////////////////////////////////////




                //1단계 : 전체 기본 출력 오름차순













                //2단계 : 전체 기본 출력 내림차순
                /////////////////////////////////////////////////////////////
                //그리고 여기서 번호를 기준으로 내림차순 할거예요!!!
                /////////////////////////////////////////////////////////////

                //정렬 기분은 오름차순 어쎈딩(Ascendding)으로 되어 출력된다.
                //1 ~ 15

                //최근글 내용을 맨위로 정렬을 해서 출력 한다.
                //내림차순 정렬 디쎈딩 (Descendding)
                //15 ~ 1 
                //정렬 알고리즘
                //선택정렬 : 1행과 1+1행을 비교  ~ 마지막-1(마지막이전행번호) 과 마지막 비교
                for(var i=0; i<a.length-1; i++){ //i행 ~ 마지막-1
                    for(var j=i+1; j<a.length; j++){   //i행+1 ~ 마지막
                        //비교 : 크냐? 작냐?
                        //내림차순 기분 : 나(i)보다 번호 < 너(j)의 번호가 크면 
                        //그러면 : 순서를 바꾸자
                        //i값을 잠시 임시기억장소(imsi)에 보관하고 >> imsi = a[i][0];
                        //i배열에 j배열값을 내용을 저장한다. >> a[i][0] = a[j][0];
                        //그리고 j의 배열에 임시기억장소내용(imsi)을 저장 >>  a[j][0] = imgi;
                        //그러면 바뀐다. 
                        if( a[i][0] < a[j][0] ){ //정렬 기준이 번호를 큰거로 비교
                            for(var k=0; k<4; k++){  //칸(열) Column 번호 ~ 날짜
                                imsi    = a[i][k];   //번호,     구분,    제목,    날짜
                                a[i][k] = a[j][k];   //a[i][0], a[i][1], a[i][2], a[i][3]
                                a[j][k] = imsi;
                            }

                        }  //if end
                    } //for j end
                } //for i end

                /////////////////////////////////////////////////////////////
                //다중 반복문으로 배열 내림차순 정렬이 끝났네요~
                /////////////////////////////////////////////////////////////



  










              
                /////////////////////////////////////////////////////////////
                //정렬결과 웹 요소(Element)에 바인딩 하기
                /////////////////////////////////////////////////////////////


                //배열 내용 행 단위로 변수 txt  출력      
                for(var i=0; i<a.length; i++){ //15행 출력 반복
                    outputBindingFn(i); // 0 1 ... 14 호출 실행
                }

                function outputBindingFn(row){    
                    txt += "<li class='clearfix'>"; //줄 시작 <tr>
                        txt += "<span>" + a[row][0] + "</span>"; //1칸 <td>  내용 </td>

                        //구분이 '쇼핑'이면 1 , '브랜드'이면 2
                        if( a[row][1]=='쇼핑' ){ 
                            txt += "<span><img src='./img/icon_notice" + 1 + ".gif' alt=''></span>"; //2칸 <td>  내용 </td>
                        }
                        else if( a[row][1]=='브랜드' ){
                            txt += "<span><img src='./img/icon_notice" + 2 + ".gif' alt=''></span>"; //2칸 <td>  내용 </td>
                        }

                        txt += "<span><a href='#'>" + a[row][2] + "</a></span>"; //3칸 <td>  내용 </td>
                        txt += "<span>" + a[row][3] + "</span>"; //4칸 <td>  내용 </td>
                    txt += "</li>";  //줄 끝 </tr>
                }







                //3단계 : 전체 기본 출력 오름차순
                //////////////////////////////////////////////////////////////////////////
                //필터링
                //전체공지, 쇼핑공지, 브랜드소식 클릭 이벤트 
                //버튼 선택 요소 : $('.noticeBtn').each();
                //////////////////////////////////////////////////////////////////////////

                $('.noticeBtn').each(function(index){
                    $(this).on({
                        click:  function(){
                            txt='';
                            $('.ajaxBinding').empty();
                            cnt = 0;

                            //$('.ajaxBinding').text('');
                            //$('.ajaxBinding').html('');

                            switch(index){
                                case 0:
                                    for(var i=0; i<a.length; i++){
                                        a[i][0] = (a.length-cnt);    //15-0, 15-1 .... 1 
                                        cnt++;
                                        outputBindingFn(i);
                                    }

                                    break;
                                case 1: //쇼핑 필터링
                                    for(var i=0; i<a.length; i++){
                                        if( a[i][1]=='쇼핑' ){
                                            a[i][0] = (sCnt-cnt);    //10-0, 10-1 .... 1
                                            cnt++;
                                            outputBindingFn(i);
                                        }
                                    }

                                    break;
                                case 2: //브랜드 필터링
                                    for(var i=0; i<a.length; i++){
                                        if( a[i][1]=='브랜드' ){
                                            a[i][0] = (bCnt-cnt);    //5-0, 5-1 .... 1
                                            cnt++;
                                            outputBindingFn(i);
                                        }
                                    }
                            } //switch() end 

                            $('.ajaxBinding').html( txt );

                        } //click() end
                    }); //on() end
                }); //each() end







                $('.ajaxBinding').html( txt );





       },  //success end
       error:   function(){
            alert('AJAX Error!!!');
       }
    });





})(window,jQuery,document);
//faceNotice_AJAX_ARRAY_SORT.js



/* 
//////////////////////////////////////////////
배열(Array) 이해하기
//////////////////////////////////////////////


//1차원배열 - 행
//10(n-1)행  배열첨자 인덱스번호(0~9)인 경우
a[배열첨자]

a[0];
a[1];
a[2];
a[3];
:
:
a[9];


//2차원배열 - 행,열 
//10행 4열인 경우
//10,4

a[0][0]
a[0][1]
a[0][2]
a[0][3]

a[1][0]
a[1][1]
a[1][2]
a[1][3]

:

a[9][0]
a[9][1]
a[9][2]
a[9][3]





//3차원 배열
//4면 10행 4열인 경우
//4,10,4

a1[0][0][0] 
a1[0][0][1] 
a1[0][0][2] 
a1[0][0][3] 

a1[0][1][0] 
a1[0][1][1] 
a1[0][1][2] 
a1[0][1][3] 

a1[0][2][0] 
a1[0][2][1] 
a1[0][2][2] 
a1[0][2][3] 

:

a1[0][9][0] 
a1[0][9][1] 
a1[0][9][2] 
a1[0][9][3] 

a1[1][0][0] 
a1[1][0][1] 
a1[1][0][2] 
a1[1][0][3] 
:
a1[2][0][0] 
a1[2][0][1] 
a1[2][0][2] 
a1[2][0][3] 
:
a1[3][0][0] 
a1[3][0][1] 
a1[3][0][2] 
a1[3][0][3] 





//4차원배열
a[학년][반][학생인원수][과목]
a[학년][반][학생인원수][과목]

//5차원배열
a[고등학교명][학년][반][번호][과목수] 

 //6차원배열
a[초,중,고,대학,특수학교][고등학교명][학년][반][번호][과목수]

 //7차원배열
a[국가명][초,중,고,대학,특수학교][고등학교명][학년][반][번호][과목수]

:

//////////////////////////////////////////////////////////////////
 */