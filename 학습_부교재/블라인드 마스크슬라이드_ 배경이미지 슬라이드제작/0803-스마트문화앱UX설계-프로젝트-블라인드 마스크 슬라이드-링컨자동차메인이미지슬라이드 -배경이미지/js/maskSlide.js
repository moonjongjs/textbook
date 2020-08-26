(function($, window, document, undefined){
     
    var setId     = 0;
    var setIdMain = 0;
    var winW = 0;
    var imgW = 0;
    var imgH = 0;
    var posL = 0;
    var imgWRate = 1440/1903; //창 너비(1903)의 대한 이미지의 너비(1440) 비율 값
    var imgHRate = 720/1440;  //이미지 너비의 대한 높이의 비율 값
    var cnt = 0;



        setInterval(maskSlideResizeFn, 100);

        function maskSlideResizeFn(){
            winW = $(window).innerWidth();
            imgW = winW * imgWRate;  //이미지너비
            imgH = imgW * imgHRate;  //이미지높이
            posL = (winW - imgW)/2;  //배경이미지의 좌측 포진션 위치

            //설정 적용 - 반응형
            $('.slide_container').css({ width: imgW, height: imgH });
            $('.slide_image')    .css({ backgroundPosition : posL + 'px  ' + 0,  backgroundSize: imgW + 'px ' + 'auto'  });
        }

        $(window).resize(function(){
            clearInterval(setId);
            setId = setInterval(maskSlideResizeFn, 100);
        });



        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        //블라인드 마스크 
        //next메인슬라이드 함수
        function nextMainSlideFn(){
            console.log(cnt);
            $('.slide')                    .css({ zIndex: 1 }).find('li').stop().animate({ width: (25*1)+'%'},0);
            $('.slide').eq(cnt==0?3:cnt-1) .css({ zIndex: 2 }).find('li').stop().animate({ width: (25*1)+'%'},0);
            $('.slide').eq(cnt)            .css({ zIndex: 3 }).find('li').stop().animate({ width: (25*0)+'%'},0).animate({ width: (25*1)+'%'},1000);
        }

        //prev메인슬라이드 함수
        function prevMainSlideFn(){
            console.log(cnt);            
            $('.slide')                    .css({ zIndex: 1 }).find('li').stop().animate({ width: (25*1)+'%'},0);
            $('.slide').eq(cnt)            .css({ zIndex: 2 }).find('li').stop().animate({ width: (25*1)+'%'},0);
            $('.slide').eq(cnt==3?0:cnt+1) .css({ zIndex: 3 }).find('li').stop().animate({ width: (25*1)+'%'},0).animate({ width: (25*0)+'%'},1000);
        }


        //다음 슬라이드 카운트 함수
        function nextSlideCountFn(){
            cnt++;
            if(cnt>3){cnt=0}
            nextMainSlideFn();
        }

        //이전 슬라이드 카운트 함수
        function prevSlideCountFn(){
            cnt--;
            if(cnt<0){cnt=3}
            prevMainSlideFn();
        }


        //자동 타이머 함수
        //3초간격을 구현
        function autoTimerFn(){
            setIdMain = setInterval(prevSlideCountFn, 3000); 
        }
        //autoTimerFn();

        //다음 슬라이드  버튼 클릭 이벤트
        $('.nextBtn').on({
            click:  function(){
                nextSlideCountFn();
            }
        });

        //이전 슬라이드  버튼 클릭 이벤트
        $('.prevBtn').on({
            click:  function(){
                prevSlideCountFn();
            }
        });




    

})(jQuery, window, document);
//maskSlide.js