(function($){

    var x = 0;   //left position
    var y = 0;   //top position
    var r = 250; //반지름=500/2
    var cnt = 0; //카운트


        //삼각함수를 이용한 원을 따라 회전하는 사각도형
        function tryFn(){
            //원을 회전할 때 원주율을 구하고 작업 pi()
            //너비를 이용한 수평좌표 cos() = x
            //높이를 이용한 수직좌표 sin() = y
            //1도(Radian) = 원주율 PI*2 / 360
            //1도(Radian) = 원주율 PI / 180
            //1도에 해당하는 각도(포지션) = 1각도 * 원주율/180


            x = r * ( Math.cos( cnt*(Math.PI/180) ) );
            y = r * ( Math.sin( cnt*(Math.PI/180) ) );

            // x = r * ( Math.cos( 4*(Math.PI/180) ) );
            // y = r * ( Math.sin( 4*(Math.PI/180) ) );

            $('.obj').css({ left:x+r, top:y+r }); 
            //좌표값에 반지름을 더한다 그래야 원을 따라 회전한다.

        }

        function countFn(){
            cnt+=1; //1
            console.log(cnt);
            tryFn();
        }

        setInterval(countFn, 10);






})(jQuery);
//try.js