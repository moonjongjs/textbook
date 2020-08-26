//DesignHotels.js
;(function($, window, document, undefined){

    var DesignHotels = {
            val: {
                //공통 전체 변수 설정 여기에
            },
            init: function(){
                var that = this;
                    that.headerFn();
                    that.mainVideo_sectionFn();
                    that.experiences_section();
                    that.videoGallery_section();
                    that.footerFn();
            },
            headerFn: function(){
                var winW = 0;
                var setId = 0;

                    function resizeFn(){
                        winW = $(window).innerWidth();
                        console.log( winW );    

                        if( winW > 1120 ){
                            $('#header').removeClass('addMobile').css({transition:'all 0s'});
                            $('#mobile_modal').removeClass('addMobile').css({transition:'all 0s'});
                        }
                        else{
                            $('#header').css({transition:'all 1s'});
                            $('#mobile_modal').css({transition:'all 1s'});
                        }
                        
                    }   
                    setTimeout(resizeFn,100);

                    // $(window).load(function(){
                    //     clearTimeout();
                    //     setTimeout(resizeFn,100);
                    // });

                    $(window).resize(function(){
                       clearTimeout(setId);
                       setId = setTimeout(resizeFn,100);
                    });
                    

                    $('.appbarBtn').on({
                        click:  function(){
                            $('#header').addClass('addMobile');
                            $('#mobile_modal').addClass('addMobile');
                        } 
                    });

                    $('.modeal_appbarBtn').on({
                        click:  function(){
                            $('#header').removeClass('addMobile');
                            $('#mobile_modal').removeClass('addMobile');
                        } 
                    });


            },
            mainVideo_sectionFn: function(){

                var winW  = 0;
                var winH  = 0;
                var vidW  = 0;
                var vidH  = 0;
                var marT  = 0;
                var marL  = 0;
                var setId = 0;
                var player = 0;
                var sound = 'off'; //꺼진상태임.
                var videoId = 0;
                    
                    setInterval(resizefn,100);

                    //비디오 반응형 함수
                    function resizefn(){
                        winW = $(window).innerWidth();
                        winH = $(window).innerHeight();
                        vidW = $('.mainVideo').innerWidth();
                        vidH = $('.mainVideo').innerHeight();
                        marT = (winH-vidH)/2;
                        marL = (winW-vidW)/2;

                        $('.mainVideo_container').css({ height: winH });

                        //창너비가 비디오너비보다 크면 : 비디오너비를 창너비로 설정 높이를 'auto'                        
                        if( winW > vidW ){
                            $('.mainVideo').css({ width: winW, height: 'auto' });
                        }
                        //창높이가 비디오높이보다 크면 : 비디오높이를 창높이로 설정 너비는 'auto'
                        if( winH > vidH ){
                            $('.mainVideo').css({ width: 'auto', height: winH });
                        }
                        $('.mainVideo').css({ marginTop: marT, marginLeft: marL });
 
                    }
                    //BOM
                    $(window).resize(function(){
                        clearTimeout(setId);
                        setId = setTimeout(resizefn,10);
                    });


                   

                    ///////////////////////////////////////////////////////////////////////////////////// 
                    //비디오 콘트롤 //////////////////////////////////////////////////////////////////////    
                    /////////////////////////////////////////////////////////////////////////////////////

                    $('.mainVideo').get(0).autoplay = true;
                    $('.mainVideo').get(0).muted = true;     //반드시 초기값 설정 true  소리꺼진상태
                    $('.mainVideo').get(0).loop = false;     //반드시 초기값 설정 true 반복
                    $('.mainVideo').get(0).playbackRate = 1;     //재생 시간 조절
                    $('.mainVideo').get(0).currentTime = 0;      //재생 싯점을 처음으로


                    //중앙에 있는 .sharVideo_watchAgain_wrap 클래스 요소를
                    //37후에 비디오가 종료되면 나타나게 한다.
                    //최초의 로딩시 실행 되었을 때는 이상없다.
                    //디버깅
                    //계속 실행되면서 타이머는 비디오의 실행 상태를 파악한다.
                    function videoTimerFn(){    
                        videoId =  setInterval(function(){  //타이머 동작하지 않은 현재 상태를 체크 할 수 없다.
                        
                            // console.log(  $('.mainVideo').get(0).ended );
                            // console.log(  $('.mainVideo').get(0).currentTime );  //비디오 재생하는 현재 시간 체크
                            // console.log(  $('.mainVideo').get(0).duration );     //비디오의 총 길이 시간 37.44

                            //비디오 끝나지 않으면  $('.mainVideo').get(0).ended  == false
                            if( $('.mainVideo').get(0).currentTime  ==  $('.mainVideo').get(0).duration ){  //비디오가 끝나면 실행 조건문
                            // if( $('.mainVideo').get(0).ended  == true ){  //비디오가 끝나면 실행 조건문
                                $('.sharVideo_watchAgain_wrap').stop().fadeIn(2000);
                                $('.nextSmoothBtn_wrap').stop().fadeIn(2000);
                                //비디오가 종료되면 
                                //아이콘 버튼 모양 변경 되어야 한다. ||(일시정지)   ▷ (재생)
                                $('.playPauseBtn img').attr('src','./img/icon-player-play.png');
                                player = 1; //현재 일시정지 상태임.
                                //타이머 중지
                                clearInterval(videoId);
                            }

                        }, 100 ); //37000
                    }
                    setTimeout(videoTimerFn,10);




                   //watchBtn 버튼 클릭 비디오 재생
                   //토글 버튼 기능
                    $('.watchBtn, .playPauseBtn').on({
                        click:  function(){
                            if( player == 0 ){
                                clearInterval(videoId);                                
                                player = 1;  //일시정지 상태
                                $('.mainVideo').get(0).pause();
                                $('.playPauseBtn img').attr('src','./img/icon-player-play.png');
                            }

                            else{
                                videoTimerFn();
                                player = 0;  //플레이 상태
                                $('.mainVideo').get(0).play();
                                $('.playPauseBtn img').attr('src','./img/icon-player-pause.png');
                                $('.sharVideo_watchAgain_wrap').stop().fadeOut(100);
                                $('.nextSmoothBtn_wrap').stop().fadeOut(2000);
                            }
                        }
                    });


                    //소리켜기 & 끄기
                    //토글기능
                    $('.mutedBtn').on({
                        click:  function(){
                            if( sound == 'on' ){
                                sound='off';  //소리 꺼진 상태임
                                $('.mutedBtn i').attr('class','icon-oe-player-volume-no');
                                $('.mainVideo').get(0).muted = true;  //사운드 끄기
                            }
                            else if( sound == 'off' ) { // 초기값 로딩시 소리꺼진 상태의 조건
                                sound='on';  //소리 켜진 상태임
                                $('.mutedBtn i').attr('class','icon-oe-player-volume');
                                $('.mainVideo').get(0).muted = false;  //사운드 켜기
                            }
                        }
                    });



                    //다음 섹션이동 스무스 스크롤링 버튼 이벤트
                    $('.nextSmoothBtn, .scrollDownBtn').on({
                        click:  function(){
                            $('html,body').stop().animate({ scrollTop: $('#experiences_section').offset().top },600 );
                        }
                    });


                    
                    //SHARE VIDEO 모달 팝업




            },
            experiences_section: function(){
              
                var winW = 0;
                var txtH = 0;
                var setId = 0;

                    function resizeFn(){
                        winW = $(window).innerWidth();
                        if( winW > 1114 ){
                            txtH = $('.left_text_wrap').innerHeight();
                                   $('.right_text_wrap').css({ height: txtH });
                        }
                        else{
                            $('.right_text_wrap').css({ height: 'auto' });
                        }
                    }
                    setInterval(resizeFn,100);

                    $(window).resize(function(){
                        clearTimeout(setId);
                       setId = setTimeout(resizeFn,100);
                    });   

                
            },
            videoGallery_section: function(){

                //버튼 이벤트
                //마우스 오버시 비디오 일시정지 pause()
                //마우스 롤아웃시 비디오 재시작 play()
                $('.videoLinkBtn').on({
                    mouseenter: function(){
                        //조건문 비디오 태그만 인식하게 조건 
                        //video 태그가 아닌 img태그에서 오류 발생 디버깅
                        //'tagName' 합성어 두번째 단어 첫글 대문자 카멜표기법
                        if( $(this).parent().find('video').prop('tagName') === 'VIDEO' ){  //태그 이름은 검색해서 항상 대문자로  출력 한다.
                            $(this).parent().find('video').get(0).pause();
                        }

                    },
                    mouseleave: function(){
                        if( $(this).parent().find('video').prop('tagName') === 'VIDEO' ){
                            $(this).parent().find('video').get(0).play();                        
                        }
                    }
                });


               
               
                //모든 변수 정리
                /////////////////////////////////////////////////                   
                //필터 함수 변수
                var cnt = [-1,-1,-1,-1,-1,-1];  //cnt[0]++, cnt[1]++ ... cnt[5]++ ..
                var all = [];
                var beach = [];
                var city = [];
                var mountain = [];
                var alternative = [];
                var rejuvenate = [];

                //load more 클릭된 상태의 내용
                //more 필터 저장
                var cntMore = [-1,-1,-1,-1,-1,-1];  //cntMoer[0]++, cntMoer[1]++ ... cntMoer[5]++ ..
                var allMore = [];
                var beachMore = [];
                var cityMore = [];
                var mountainMore = [];
                var alternativeMore = [];
                var rejuvenateMore = [];

                //탭버튼(갤러리버튼) 변수
                var z = 0;
                var t = [0,0,0,0,0,0]; //클릭상태를 기억하는 배열 


                //반응형  비디오 갤러리 변수
                var winW = 0;  //창 너비
                var vidW = 0;  //비디오 너비
                var vidH = 0;  //비디오 높이
                var blnW = 0;  //빈공간 너비
                var blnH = 0;  //빈공간 높이
                var blnN = 0;  //빈공간 개수
                var galN = 12;  //갤러리 총개수 =  배열.length;  all.length;...
                var modN = 0;  //나머지 개수
                var colN = 0;  //칸수 해상도별로
                var setId = 0;  //타이머변수




                    //순서 - 1
                    //필터는  로딩시 모든 배열안에 
                    //li 목록(인덱스값) 저장  more 아닌것 저장, all[]     .... rejuvenate[]
                    //li 목록(인덱스값) 저장  more 인것   저장, allMore[] .... rejuvenateMore[]
                    function fillterFn(){

                        for(i=0; i<$('.videoGallery').length; i++){
                            
                            if( $('.videoGallery').eq(i).data('id') !== 'more'  ){
                                cnt[0]++;    //0 1 2 3 4 ... 11    12개 레코드(튜플)=줄=행(row)
                                all[cnt[0]] = i;  //목록 li의 인덱스 번호
                                galN = all.length;  //로딩시 기본값 12 나와야 하기에  
                                //beach
                                if( $('.videoGallery').eq(i).data('class').indexOf('beach') >= 0 ){
                                    cnt[1]++; //0 1 2 3
                                    beach[cnt[1]] = i;
                                    //galN = beach.length;  버튼 클릭시 호출되기때문에 여기에서 필요 없다.
                                }

                                //city
                                if( $('.videoGallery').eq(i).data('class').indexOf('city') >= 0 ){
                                    cnt[2]++; //0 1 2 3
                                    city[cnt[2]] = i;
                                    //galN = city.length; 
                                }

                                //mountain
                                if( $('.videoGallery').eq(i).data('class').indexOf('mountain') >= 0 ){
                                    cnt[3]++; //0 1 2 3
                                    mountain[cnt[3]] = i; 
                                    //galN = mountain.length;                                    
                                }

                                //alternative
                                if( $('.videoGallery').eq(i).data('class').indexOf('alternative') >= 0 ){
                                    cnt[4]++; //0 1 2 3
                                    alternative[cnt[4]] = i; 
                                    //galN = alternative.length;                                     
                                }

                                //rejuvenate
                                if( $('.videoGallery').eq(i).data('class').indexOf('rejuvenate') >= 0 ){
                                    cnt[5]++; //0 1 2 3
                                    rejuvenate[cnt[5]] = i;  
                                    //galN = rejuvenate.length;                                   
                                }
                            } //more가 아닌 데이터
                                   //각 필터 버튼 클릭 후  하단에 more버튼을 클릭하면 
                                   //all 배열에 해당 추가 목록만 추가되게한다.
                                   //그리고 all 을  클릭하면 all목록 12개와 추가목록이 나타나야 된다.
                            else { //more 데이터 : 더보기

                                //0 모든 more 데이터 all 
                                cntMore[0]++; //0 1 2 3 4 5 6   7개
                                allMore[cntMore[0]] = i;

                                
                                //1 beach
                                if( $('.videoGallery').eq(i).data('class').indexOf('beach') >= 0 ){
                                    cntMore[1]++; //0 1 2 3
                                    beachMore[cntMore[1]] = i;
                                }

                                //2 city
                                if( $('.videoGallery').eq(i).data('class').indexOf('city') >= 0 ){
                                    cntMore[2]++; //0 1 2 3
                                    cityMore[cntMore[2]] = i;
                                }

                                //3 mountain
                                if( $('.videoGallery').eq(i).data('class').indexOf('mountain') >= 0 ){
                                    cntMore[3]++; //0 1 2 3
                                    mountainMore[cntMore[3]] = i;
                                }

                                //4 alternative
                                if( $('.videoGallery').eq(i).data('class').indexOf('alternative') >= 0 ){
                                    cntMore[4]++; //0 1 2 3
                                    alternativeMore[cntMore[4]] = i;
                                }

                                //5 rejuvenate
                                if( $('.videoGallery').eq(i).data('class').indexOf('rejuvenate') >= 0 ){
                                    cntMore[5]++; //0 1 2 3
                                    rejuvenateMore[cntMore[5]] = i;
                                }

                            } //if  more 아닌것 end
                        }  
                    }    

                    setTimeout(fillterFn,100);
                    


                    //순서 - 2
                    //반응형 리사이즈
                    function resizeFn(){
                        // alert('resize()함수!!!');
                        // console.log('all 갤러리개수 : ' + all.length );
                        // console.log('beach 갤러리개수 : ' + beach.length );
                        // console.log('city 갤러리개수 : ' + city.length );
                        // console.log('mountain 갤러리개수 : ' + mountain.length );
                        // console.log('alternative 갤러리개수 : ' + alternative.length );
                        // console.log('rejuvenate 갤러리개수 : ' + rejuvenate.length );

                        winW = $(window).innerWidth();   //창 너비
                        winH = $(window).innerHeight();  //창 높이
                        if( winW > 1024 ){
                            colN = 3;
                        }
                        else if( winW > 760 ){
                            colN = 2;
                        }
                        else{
                            colN = 1;
                        }
                        vidW = $(window).innerWidth()/colN;  //비디오 너비
                        vidH = vidW;  //비디오 높이

                        //galN = all.length; //초기값 12개(more제외한 상태)
                        modN = Math.ceil(galN % colN);  //예]나머지 개수(1) = 총개수(13) % 칸수(3)
                        
                        // console.log('반응형 반환된  갤러리 개수 : '  +  galN );
                        // console.log('칸수 개수 : '  +  colN );
                        // console.log('나머지 개수 : '  +  modN );



                        //나머지가 0 이 아닌경우 빈공간 개수 연산
                        if( modN !== 0 ){
                            blnN = colN-modN;  //빈공간 개수(2) = 칸수(3)-나머지(1)
                        }
                        else{
                            blnN = 0;       //나머지가 0 인경우 빈공간 없음
                        }
                        // console.log('빈칸의 개수 : '  +  blnN );                        

                        blnW = blnN*vidW;  //빈공간 너비 = 빈공간개수*비디오너비;
                        blnH = vidW;  //빈공간 높이
                          
                        //요소 반응형 적용 
                        $('.videoGallery').css({ width: vidW, height: vidH });
                        
                        if( blnN == 0  ){  //빈공간이 없으면
                            $('.blank_box').css({ display:'none', width: 0, height: 0 });
                        }
                        else{
                            $('.blank_box').css({ display:'block', width: blnW, height: blnH });
                        }
                        
                    }

                    setTimeout(resizeFn,100);
                    
                    $(window).resize(function(){
                        clearTimeout(setId);
                        setId = setTimeout(resizeFn,100);
                    });


                    
                    
                    

                    //순서 - 3
                    //탭버튼 - 클릭한 후에 버튼 이벤트 안에서 
                    //반응형 호출 실행 연동
                    //갤러리버튼 클릭 이벤트 (테마별 배열 호출)

                    $('.loadMore_wrap').show(); //로드모아 버튼 박스 보이기

                    //갤러리버튼 필터링 버튼
                    $('.galleryBtn').each(function(index){
                        $(this).on({
                            click:  function(){

                                //버튼 이벤트 addClass / removeClass / toggleClass 
                                //추가해야함.
                                $('.galleryBtn').removeClass('addGallery');
                                $(this).addClass('addGallery');

                               

                                z=index; //현재 클릭 버튼 인덱스 번호
                                $('.videoGallery').hide();




                                //로드모어 버튼 0 ~ 5
                                if( t[index]==1 ){//클릭이 된상태라면
                                    $('.loadMore_wrap').hide();
                                   
                                }
                                else{
                                    $('.loadMore_wrap').show();
                                    $('.loadMoreBtn').show();  
                                    $('.loaddingImg').hide();
                                }
                                


                                //all 테마에서 로드모어 버튼을 클릭하면
                                //모든 테마에서 로드모어 버튼 사라지게 할것
                                //모든 테마 목록이 각 테마에 추가된다.
                                //all 테마에 목록에도 모두 추가된다.
                                if( t[0]==1 ){
                                    $('.loadMore_wrap').hide();
                                }




                                if( index == 0 ){
                                    //테마 목록
                                    for(i in all){ //i=0; i<all.length; i++
                                        $('.videoGallery').eq(all[i]).show();
                                    }
                                    // console.log('all 갤러리개수 : ' + all.length );
                                    galN = all.length;

                                    //ALL을 제외한 모든 테마요소에 로드모아 버튼이 
                                    //클릭된 상태라면 t = [0,1,1,1,1,1] 이상태라면
                                    //로드모아 버튼을 hide() 감춘다.

                                    if( t[0]!=1 && (t[1]==0 || t[2]==0 || t[3]==0 ||  t[4]==0 || t[5]==0) ){
                                        $('.loadMore_wrap').show(); //다섯개중에 한개라도 0이 있으면
                                        $('.loadMoreBtn').show();  
                                        $('.loaddingImg').hide();
    
                                    }
                                    else{
                                        $('.loadMore_wrap').hide();
                                    }

                                }
                                else if( index == 1 ){
                                    for(i in beach){
                                        $('.videoGallery').eq(beach[i]).show();
                                    }
                                    //console.log('beach 갤러리개수 : ' + beach.length );
                                    galN = beach.length;
                                }
                                else if( index == 2 ){
                                    for(i in city){
                                        $('.videoGallery').eq(city[i]).show();
                                    }
                                   // console.log('city 갤러리개수 : ' + city.length );
                                    galN = city.length;
                                }
                                else if( index == 3 ){
                                    for(i in mountain){
                                        $('.videoGallery').eq(mountain[i]).show();
                                    }
                                    //console.log('mountain 갤러리개수 : ' + mountain.length );
                                    galN = mountain.length;
                                }
                                else if( index == 4 ){
                                    for(i in alternative){
                                        $('.videoGallery').eq(alternative[i]).show();
                                    }
                                   // console.log('alternative 갤러리개수 : ' + alternative.length );
                                    galN = alternative.length;
                                }
                                else if( index == 5 ){
                                    for(i in rejuvenate){
                                        $('.videoGallery').eq(rejuvenate[i]).show();
                                    }
                                    //console.log('rejuvenate 갤러리개수 : ' + rejuvenate.length );
                                    galN = rejuvenate.length;
                                }

                               resizeFn()//필터버튼 하단에 클릭시 변수 전달 연결

                            } //click end
                        });
                    });


                    //순서 - 4
                    //loadMovre Button Click Event
                    //클릭된 로드모어버튼의 테마에서는 버튼은 사라지고
                    //추가된 로드모어 요소 목록은 all 배열에 추가되고
                    //목록에도 추가된다. 
                    //모든 테마에서 로드모어 버튼이 클릭된 상태라면
                    //all 테마에는 로드모어 버튼이 사라진다. 
                    //그리고 각 테마모든 목록이 all에 추가되며 
                    //all 목록에도 추가된다.

                    //load more 버튼이 클릭이 된상태는 1로 바뀐다.
                    //로딩이미지 이벤트
                    $('.loadMoreBtn').on({
                        click:  function(){
                            t[z]=1;  //예문 t = [0,0,1,0,0,0];                             
                            $('.loadMoreBtn').hide();  
                            $('.loaddingImg').show();
                            
                            //1.5초후에 실행
                            setTimeout(function(){
                                $('.loaddingImg').show();
                                $('.loadMore_wrap').hide();

                                // 현재상태의 테마를 추가한다. more
                                if( z==0 ){ //all 
                                    for(var i in allMore){
                                        $('.videoGallery').eq(allMore[i]).show();
                                        //추가 : 배열 추가 push() 메서드
                                        //push() 메서드는 맨 마지막 위치에 데이터가 추가된다.
                                        all.push(allMore[i]); //클릭시 추가 목록
                                     }
                                     galN = all.length;
                                     //나머지 버튼 5개의 필터도 추가 해줘야 함.
                                     //배열만
                                     //그래야 갤러리버튼 클릭시 배열에 추가된 목록이 나타남.                                    
                                     for(var i in beachMore){ //0
                                        beach.push(beachMore[i]); //beach[]배열에 추가
                                     }
                                     for(var i in cityMore){ //1
                                        city.push(cityMore[i]);                                    
                                     }
                                     for(var i in mountainMore){
                                        mountain.push(mountainMore[i]);  
                                     }
                                     for(var i in alternativeMore){
                                        alternative.push(alternativeMore[i]);                                        
                                     }
                                     for(var i in rejuvenateMore){
                                        rejuvenate.push(rejuvenateMore[i]);                                      
                                     }
                                }
                                else if( z==1 ){
                                    for(var i in beachMore){
                                        $('.videoGallery').eq(beachMore[i]).show(); 
                                        all.push(beachMore[i]); //클릭시 추가 목록
                                        beach.push(beachMore[i]); //beach[]배열에 추가
                                    }
                                    galN = beach.length;
                                }
                                else if( z==2 ){
                                    for(var i in cityMore){
                                        $('.videoGallery').eq(cityMore[i]).show(); 
                                        all.push(cityMore[i]); //클릭시 추가 목록 
                                        city.push(cityMore[i]);
                                     }
                                     galN = city.length;                                   
                                }
                                else if( z==3 ){
                                    for(var i in mountainMore){
                                        $('.videoGallery').eq(mountainMore[i]).show();
                                        all.push(mountainMore[i]); //클릭시 추가 목록                                            
                                        mountain.push(mountainMore[i]);  
                                     }
                                     galN = mountain.length;
                                }
                                else if( z==4 ){
                                    for(var i in alternativeMore){
                                        $('.videoGallery').eq(alternativeMore[i]).show(); 
                                        all.push(alternativeMore[i]); //클릭시 추가 목록  
                                        alternative.push(alternativeMore[i]);                                        
                                     }
                                     galN = alternative.length;
                                }
                                else if( z==5 ){
                                    for(var i in rejuvenateMore){
                                        $('.videoGallery').eq(rejuvenateMore[i]).show(); 
                                        all.push(rejuvenateMore[i]); //클릭시 추가 목록 
                                        rejuvenate.push(rejuvenateMore[i]);                                      
                                     }
                                     galN = rejuvenate.length;
                                } //if end

                                resizeFn();  //로드모어 버튼 반응형 호출

                            },1500);  //원인 1.5초 후에 실행 되어서 셋타임아웃 안에서 
                                      //반응형 호출실행 연동

                        }//click
                    });






                    //보충 설명
                    ////////////////////////////////////////////////////////////////
                    // 정렬(sort()) 메서드 예문
                                //Array(배열) 메서드 
                                
                                //push() 푸슁     : 배열에 맨끝에 데이터(배열인수) 삽입
                                //unshit() 언쉬프팅: 배열에 맨앞에 데이터(배열인수) 삽입
                                //pop() 팝핑      : 배열에 맨끝에 데이터(배열인수) 삭제
                                //shift() 쉬프팅  : 배열에 맨앞에 데이터(배열인수) 삭제

                                // var a = [1,2,3,4,5,6,7,8,9,10];

                                // var imsi;   
                                //     a.push(11);      //맨끝에 삽입  : 푸슁
                                //     console.log(a);  //맨끝에 삽입 후 확인

                                //     imsi = a.pop();   //맨끝에 배열값(배열인수) 삭제 : 팝핑
                                //     console.log(a);   //삭제 후 확인

                                //     a.unshift(imsi);   //맨끝에 삭제된 내용을 맨앞에 삽입
                                //     console.log(a);    //삽입 후 확인

                                
                                //     imsi = a.shift();  //맨앞에 배열값 삭제
                                //     a.push(imsi);       //맨앞값 맨뒤에 삽입
                                //     console.log(a);    //삽입 후 확인 

                                //     imsi = a.shift();  //맨앞에 배열값 삭제
                                //     a.push(imsi);       //맨앞값 맨뒤에 삽입
                                //     console.log(a);    //삽입 후 확인
                
                                //     imsi = a.shift();  //맨앞에 배열값 삭제
                                //     a.push(imsi);       //맨앞값 맨뒤에 삽입
                                //     console.log(a);    //삽입 후 확인
                
                                //     imsi = a.shift();  //맨앞에 배열값 삭제
                                //     a.push(imsi);       //맨앞값 맨뒤에 삽입
                                //     console.log(a);    //삽입 후 확인
                
                                //     imsi = a.shift();  //맨앞에 배열값 삭제
                                //     a.push(imsi);       //맨앞값 맨뒤에 삽입
                                //     console.log(a);    //삽입 후 확인

                                //     a.sort();           //오름차순 Ascendding(어쎈딩)
                                //     console.log(a);    //정렬후 확인

                                //     a.reverse();       //내림차순 Descendding(디쎈딩)
                                //     console.log(a);    //정렬후 확인


                                    //디버깅
                                    //3항연산자 이용 정렬방식
                                    // a.sort(function(i,j){  //i=1 > j=i+1; .....  마지막-1  > 마지막
                                    //     return i > j ? 1: -1;  //1은 오름차순,  -1내림차순
                                    // });        
                                    // console.log(a);    //정렬후 확인
                                    

                                    // a.sort(function(i,j){  //i=1 > j=i+1; .....  마지막-1  > 마지막
                                    //     return i < j ? 1: -1;  //1은 오름차순,  -1내림차순
                                    // });        
                                    // console.log(a);    //정렬후 확인





                                    //~부터 ~까지 방식으로 정렬
                                    // a.sort(function(i,j){  //i=1 > j=i+1; .....  마지막-1  > 마지막
                                    //     return i - j;  // 오름차순 i 부터 j까지 정렬
                                    // });           
                                    // console.log(a);    //정렬후 확인
                                    

                                    // a.sort(function(i,j){  //i=1 > j=i+1; .....  마지막-1  > 마지막
                                    //     return j - i ;  //내림차순 j부터 i까지 정렬
                                    // });           
                                    // console.log(a);    //정렬후 확인

                        // var sungjuk = [
                        //         {irum:'김수철', jumsoo:89},
                        //         {irum:'차분희', jumsoo:80},
                        //         {irum:'이순신', jumsoo:99},
                        //         {irum:'광개토대왕', jumsoo:81},
                        //         {irum:'나어떼', jumsoo:94},
                        //         {irum:'황순복', jumsoo:73},
                        //         {irum:'동수리', jumsoo:65},
                        //         {irum:'문재인', jumsoo:97},
                        //         {irum:'라라미', jumsoo:100}
                        //     ];

                            // sungjuk.sort(function(i,j){
                            //     return i.irum  >  j.irum ? 1 : -1;  //이름 오름차순
                            // });
                            // sungjuk.sort(function(i,j){
                            //     return i.irum  <  j.irum ? 1 : -1;  //이름 내림차순
                            // });

                            // sungjuk.sort(function(i,j){
                            //     return i.jumsoo  <  j.jumsoo ? 1 : -1; //점수 내림차순
                            // });
                            
                            // sungjuk.sort(function(i,j){
                            //     return i.jumsoo  >  j.jumsoo ? 1 : -1;    //점수 오름차순
                            // });

                            // console.log(sungjuk);




            },
            footerFn: function(){

                var winW = 0;
                var setId = 0;
                var setId2 = 0;
                var t = 0;
                
                
                    //반응형
                    function resizeFn(){
                        winW = $(window).innerWidth();
                        if( winW > 1120 ){
                            $('.footSub').stop().slideDown(0); 
                            $('.footNavBtn').off('click');
                            t=0;
                        }
                        else{
                            $('.footSub').stop().slideUp(0); 
                            
                            //사이트맵 메인버튼 클릭 이벤트 함수 호출
                            if(t==0){
                                t=1;
                                $('.footNavBtn').on({
                                    click:  function(){
                                        //토글 슬라이드 (사이트맵 서브메뉴)
                                        $('.footSub').stop().slideUp(300);
                                        $(this).next().stop().slideToggle(300);
        
                                        //아이콘 변경
                                        if( $(this).children('i').hasClass('fa-angle-down') === true ){ //true
                                            $('.footNavBtn').children('i').attr('class','fa  fa-angle-down');  
                                            $(this).children().attr('class','fa fa-angle-up');  
                                        }
                                        else{ //false
                                            $(this).children().attr('class','fa fa-angle-down');  
                                        }
        
                                    }
                                });
                            }

                        }
                    }
                    setTimeout(resizeFn);

                    $(window).resize(function(){
                        clearTimeout(setId);
                        setId = setTimeout(resizeFn,100);
                    });

            } //footerFn end
    }
    
    DesignHotels.init();

})(jQuery, window, document);
