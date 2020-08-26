(function($){

    var setId = 0;       //갤러리 둥근원의 반지름
    var r = 0;       //갤러리 둥근원의 반지름
    var x = [];     //x좌표 12개 배열 0 ~ 11
    var y = [];     //y좌표 12개 배열 0 ~ 11
    var n = 0;      //갤러리 이미지 개수
    var angle = []; //이미지 1개당 각각의 각도 30도씩  배치

        r = $('#triangleGallery').innerWidth()/2; //반지름 = 지름/2
        n = $('.img').length;  //총 이미지 개수

         for(i=0; i<n; i++){             
            angle[i] = 30*i; //0 30 60 90 .... 330 360 390 420 450 ..... 30도씩 증가 카운트
            x[i] = 0;    
            y[i] = 0;    
         }

        // console.log('반지름 '+ r);
        // console.log('갤리리이미지개수 '+ n);
        // console.log('각 갤러리 이미지의 포지션 각도 '+ angle );
        // console.log('각 갤러리 이미지의 카운트 각도 '+ cnt );
        // console.log('각 객러리의 이미지의 left(x) 값 '+ x );
        // console.log('각 객러리의 이미지의 top(y) 값 '+ y );
        
        // 삼각함수 계산 포지션 반지름, 반지름, 코싸이, 싸인, 파이 
        // left : x 
        // top : y
        function galleryFn(){                       
           for(i=0; i<n; i++){   //0 ~ 11 (12반복처리)
                x[i] = r + (r * Math.cos( angle[i]*(Math.PI/180) ));
                y[i] = r + (r * Math.sin( angle[i]*(Math.PI/180) ));
                $('.img').eq(i).stop().animate({ left: x[i] , top: y[i]  }, 600 );
                console.log('x좌표 : ' + x[i], 'y좌표 : '+ y[i] );
           }           
        }

        //다음 갤러리 회전 우측으로 30도씩 증가하면서 회전 
        function nextCountAngleFn(){
            for(i=0; i<n; i++){  //12개 각각 증가 30도씩
                angle[i] += 30;  // 30(첫번째)=0+30, 60(두번째)=30+30 ...360(마지막) = 330+30  12개
            }
            galleryFn();
        }
        //다음 갤러리 회전 우측으로 30도씩 증가하면서 회전 
        function prevCountAngleFn(){
            for(i=0; i<n; i++){  //12개 각각 증가 30도씩
                angle[i] -= 30;  // 30(첫번째)=0+30, 60(두번째)=30+30 ...360(마지막) = 330+30  12개
            }
            galleryFn();
        }

        //버튼 클릭 한번 클릭시 마다 30도 씩 회전하도록 
        //nextCountAngleF() 함수 호출
        $('.nextBtn').on({
            click:  function(){
                nextCountAngleFn();
            }
        });
        //nextCountAngleF() 함수 호출
        $('.prevBtn').on({
            click:  function(){
                prevCountAngleFn();
            }
        });


        function autoTimerFn(){
            setId = setInterval(nextCountAngleFn, 3000);
        }

        autoTimerFn();



})(jQuery);
//triangleGallery.js