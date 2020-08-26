;(function(window,$,document,undefined){
    var a    = [];      //전체공지 2차원
    var s    = [];      //쇼핑공지 2차원
    var b    = [];      //브랜드소식 2차원 
    var filter = 0;     //전체공지임을 구분 변수
    var tot  = 0;       //전체공지200, 쇼핑공지150, 브랜드소식50 전달변수
    var txt  = '';      
    var cnt  = 0;
    var sCnt = 0;
    var bCnt = 0;

    //// Pagenation ///////////////////////////////////////////////////////////////////
    var totalRecord  =  0;                              //전체레코드 개수
    var list         =  5;                               //한화면에 보여질 레코드 개수
    var pageBtnCount = Math.ceil(totalRecord/list);     //한화면에 보여질 레코드 개수
    //페이지버튼의개수(pageBtnCount) = 전체레코드(totalRecord)15 / 한페이지에 보여질 목록(list) 개수5 
    
    var startRecord = 0;                                //시작레코드 startRecord
    var endRecord = startRecord+list;                   //끝 레코드 endRecord


    //그룹페이지
    var groupPage = 1;  //기본 1페이지 그룹
    var groupList = 5; //한화면의 페이지 표시 그룹단위 1 2 3 ... 10 
    var startPage = (groupPage-1)*groupList;
    var endPage = startPage + groupList;






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
                        s[sCnt]=[];
                        s[sCnt][0] = (sCnt+1);
                        s[sCnt][1] = object.구분;
                        s[sCnt][2] = object.제목;
                        s[sCnt][3] = object.날짜;
                        sCnt++;
                    }
                    if( object.구분 == '브랜드'){
                        b[bCnt]=[];
                        b[bCnt][0] = (bCnt+1);
                        b[bCnt][1] = object.구분;
                        b[bCnt][2] = object.제목;
                        b[bCnt][3] = object.날짜;                        
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
                //전체공지
                for(var i=0; i<a.length-1; i++){        //i행 ~ 마지막-1
                    for(var j=i+1; j<a.length; j++){    //i행+1 ~ 마지막
                        if( a[i][0] < a[j][0] ){         //정렬 기준이 번호를 큰거로 비교
                            for(var k=0; k<4; k++){      //칸(열) Column 번호 ~ 날짜
                                imsi    = a[i][k];       //번호,     구분,    제목,    날짜
                                a[i][k] = a[j][k];       //a[i][0], a[i][1], a[i][2], a[i][3]
                                a[j][k] = imsi;
                            }

                        }  //if end
                    } //for j end
                } //for i end


                //쇼핑공지
                for(var i=0; i<s.length-1; i++){      
                    for(var j=i+1; j<s.length; j++){  
                        if( s[i][0] < s[j][0] ){      
                            for(var k=0; k<4; k++){   
                                imsi    = s[i][k];    
                                s[i][k] = s[j][k];    
                                s[j][k] = imsi;                            
                            }
                        }  //if end
                    } //for j end
                } //for i end


                //브랜드소식
                for(var i=0; i<b.length-1; i++){      
                    for(var j=i+1; j<b.length; j++){  
                        if( b[i][0] < b[j][0] ){      
                            for(var k=0; k<4; k++){   
                                imsi    = b[i][k];    
                                b[i][k] = b[j][k];    
                                b[j][k] = imsi;                            
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

                //출력문 최초의실행,  필터링, 페이지버튼 이벤트 실행
                //공용함수
                var $bun = '';
                var $guboon = '';
                var $subject = '';
                var $date = '';

                function outputBindingFn(row){  
                    
                    if( filter==0 ){     //전체공지
                        $bun     = a[row][0];
                        $guboon  = a[row][1];
                        $subject = a[row][2];
                        $date    = a[row][3];
                    }
                    else if( filter==1 ){ //쇼핑공지
                        $bun     = s[row][0];
                        $guboon  = s[row][1];
                        $subject = s[row][2];
                        $date    = s[row][3];                        
                    }
                    else if( filter==2 ){ //브랜드공지
                        $bun     = b[row][0];
                        $guboon  = b[row][1];
                        $subject = b[row][2];
                        $date    = b[row][3];    
                    }
                    


                    txt += "<li class='clearfix'>"; //줄 시작 <tr>
                        txt += "<span>" + $bun + "</span>"; //1칸 <td>  내용 </td>

                        //구분이 '쇼핑'이면 1 , '브랜드'이면 2
                        if( $guboon=='쇼핑' ){ 
                            txt += "<span><img src='./img/icon_notice" + 1 + ".gif' alt=''></span>"; //2칸 <td>  내용 </td>
                        }
                        else if( $guboon=='브랜드' ){
                            txt += "<span><img src='./img/icon_notice" + 2 + ".gif' alt=''></span>"; //2칸 <td>  내용 </td>
                        }

                        txt += "<span><a href='#'>" + $subject + "</a></span>"; //3칸 <td>  내용 </td>
                        txt += "<span>" + $date + "</span>"; //4칸 <td>  내용 </td>
                    txt += "</li>";  //줄 끝 </tr>
                    
                    pageBtnCountCreateFn();

                }








                //3단계 : 필터링
                //////////////////////////////////////////////////////////////////////////
                //필터링
                //전체공지, 쇼핑공지, 브랜드소식 클릭 이벤트 
                //버튼 선택 요소 : $('.noticeBtn').each();
                //////////////////////////////////////////////////////////////////////////

                $('.noticeBtn').each(function(index){
                    $(this).on({
                        click:  function(){
                            
                            switch(index){
                                case 0:
                                    tot = a.length;
                                    break;
                                case 1: //쇼핑 필터링
                                    tot = s.length;
                                    break;
                                case 2: //브랜드 필터링
                                    tot = b.length;

                            } //switch() end 

                            filter = index;      //전체공지0 or 쇼핑공지1 or 브랜드소식2
                            btnNum = 0;          //시작페이지번호 0 기본설정
                            pageBtnCountCreateFn();
                            pageBtnAddClassFn(0);//기본 첫번째 페이지 버튼 설정
                            outputListFn();      //출력

                        } //click() end
                    }); //on() end
                }); //each() end









            
                
                //4단계 : 페이지네이션
                //////////////////////////////////////////////////////////////////////////////
                //페이지버튼 자동 추가하기
                //셀렉터(Selector) $('.pageBtn-wrap')
                //페이지버튼을 몇개를 만들 것인가?
                //페이지버튼의개수(pageBtnCount) = 전체레코드(totalRecord)15 / 한페이지에 보여질 목록(list) 개수5 
                //////////////////////////////////////////////////////////////////////////////
                //// Pagenation ///////////////////////////////////////////////////////////////////
                //4-1    
                tot = a.length;  //로딩시 실행
                pageBtnCountCreateFn(); //로딩시 실행
                function pageBtnCountCreateFn(){
                    totalRecord  = tot;  //15 
                    pageBtnCount = Math.ceil(totalRecord/list);     //한화면에 보여질 레코드 개수
                    //페이지버튼의개수(pageBtnCount) = 전체레코드(totalRecord)15 / 한페이지에 보여질 목록(list) 개수5 
                    $('.pageBtn-wrap').empty();  //이전내용 지우고 새롭게 만든다.
                    
                    groupPage = Math.ceil((endRecord/list)/groupList);
                    startPage = (groupPage-1)*groupList;
                    endPage = startPage + groupList;
    
                    if( endPage > pageBtnCount ){
                        endPage = pageBtnCount;
                    }
                    
                    for(var i=startPage; i<endPage; i++){ //0 1 2  >> 1 2 3
                        $('.pageBtn-wrap').append("<div><span><a href='javascript:' class='pageBtn'>" + (i+1) + "</a></span></div>");
                    }
                }




                


                //4-2
                //로딩시 실행
                //페이지버튼 모양 효과
                pageBtnAddClassFn(0);
                function pageBtnAddClassFn(z){                    
                    $('.pageBtn').removeClass('addCurrent');
                    $('.pageBtn').eq(z).addClass('addCurrent');
                }


                //4-3
                //목록을 한화면에 5개씩 출력
                //버튼 클릭해도 해당 페이지 5개 출력
                //시작레코드 startRecord
                //끝 레코드 endRecord
                //한화면에 보여질 개수 list 5개
                //로딩시 실행
                btnNum = 0;
                outputListFn();
                function outputListFn(){
                    txt='';
                    $('.ajaxBinding').empty();

                    startRecord = btnNum*list;        //버튼번호(0~2)*list 알고리즘                            //시작레코드 startRecord
                    endRecord = startRecord+list;     //끝 레코드 endRecord
                                        
                    //마지막 레코드수가 총레코드수보다 더 크면
                    if( endRecord > totalRecord ){ //나머지 마지막 데이터  처리하는 알고리즘
                        endRecord =  totalRecord;  
                    }


                    for(var i=startRecord; i<endRecord; i++){ //15행 출력 반복
                        outputBindingFn(i); // 0 1 ... 14 호출 실행
                    }
                    $('.ajaxBinding').html( txt );
                }      
              



                //4-4
                //페이지버튼 클릭이벤트
                //추가된 버튼이 클릭인식 안될 때 이벤트
                // $(document) 객체나,     $(window) 객체 또는
                // $(this) 이들은 인용부호로 감싸지 않는다.
                // document 웹문서 내에서 버튼을 인식하게 만들어준다.
                $(document).on('mouseenter','.pageBtn', function(){
                    $('.pageBtn').each(function(index){
                        $(this).on({
                            click:  function(){
                                //해당페이지를 
                                //변수에 넣어 준다.
                                btnNum = index;     //시작페이지번호를 찾아 준다.
                                outputListFn();
                                pageBtnAddClassFn(index);
                            }
                        });
                    });
                });



                //4-5
                //다음페이지버튼 이벤트
                    $('.pageNextBtn').on({
                        click:  function(){
                            btnNum++;
                            if( btnNum > (pageBtnCount-1) ){  // 0 ~ 2
                                btnNum  =  pageBtnCount-1;
                            }
                            else{
                                outputListFn();
                            }
                            
                        }
                    });

                //4-6
                //이전페이지버튼 이벤트
                    $('.pagePrevBtn').on({
                        click:  function(){
                            btnNum--;
                            if( btnNum < 0 ){  // 0 ~ 2
                                btnNum = 0 ;
                            }
                            else{
                                outputListFn();
                            }
                        }
                    });







       },  //success end
       error:   function(){
            alert('AJAX Error!!!');
       }
    });





})(window,jQuery,document);
//faceNotice_AJAX_ARRAY_SORT.js