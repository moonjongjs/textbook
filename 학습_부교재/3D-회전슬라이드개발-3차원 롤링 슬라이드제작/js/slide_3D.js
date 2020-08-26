(function($){

    var a = [0,1,2,3,4,5,6];
    var imsi=null;
        //next
        $('#gallery').on({
            click:  function(){
                imsi = a.shift(); //맨앞을 삭제하고 맨뒤에 삽입
                a.push(imsi);
                slideFn();
            }
        });

        //prev
        // $('#gallery').on({
        //     click:  function(){
        //         imsi = a.pop(); //맨뒤를 삭제하고 맨앞에 삽입
        //         a.unshift(imsi);
        //         slideFn();
        //     }
        // });


        function slideFn(){

            $('.slide').eq(a[0]).css({ left: -700}).fadeIn(1000, function(){
                $(this).css({ zIndex: 1, transform: 'scale(calc(1*0.3))  perspective(4000px) rotateY(-60deg)' });
            });
            $('.slide').eq(a[1]).css({ left: -600}).fadeIn(1000, function(){
                $(this).css({ zIndex: 2, transform: 'scale(calc(1*0.6))  perspective(3000px) rotateY(-50deg)' });
            });
            $('.slide').eq(a[2]).css({ left: -400}).fadeIn(1000, function(){
                $(this).css({ zIndex: 3, transform: 'scale(calc(1*1.2))  perspective(8000px) rotateY(-45deg)' });
            });
            $('.slide').eq(a[3]).css({ left:    0}).fadeIn(1000, function(){
                $(this).css({ zIndex: 4, transform: 'scale(calc(1*2.0))  perspective(10000px) rotateY(180deg)'});
            });
            $('.slide').eq(a[4]).css({ left:  400}).fadeIn(1000, function(){
                $(this).css({ zIndex: 3, transform: 'scale(calc(1*1.2))  perspective(8000px) rotateY(45deg)' });
            });
            $('.slide').eq(a[5]).css({ left:  600}).fadeIn(1000, function(){
                $(this).css({ zIndex: 2, transform: 'scale(calc(1*0.6))  perspective(3000px) rotateY(50deg)' });
            });
            $('.slide').eq(a[6]).css({ left:  700}).fadeIn(1000, function(){
                $(this).css({ zIndex: 1, transform: 'scale(calc(1*0.3))  perspective(4000px) rotateY(60deg)' });
            });

            // $('.slide').eq(a[0]).css({ left: -700}).fadeIn(1000, function(){
            //     $(this).css({ zIndex: 1, transform: 'scale(calc(1*0.3))  perspective(4000px) rotateY(0deg)' });
            // });
            // $('.slide').eq(a[1]).css({ left: -600}).fadeIn(1000, function(){
            //     $(this).css({ zIndex: 2, transform: 'scale(calc(1*0.6))  perspective(3000px) rotateY(0deg)' });
            // });
            // $('.slide').eq(a[2]).css({ left: -400}).fadeIn(1000, function(){
            //     $(this).css({ zIndex: 3, transform: 'scale(calc(1*1.2))  perspective(8000px) rotateY(0deg)' });
            // });
            // $('.slide').eq(a[3]).css({ left:    0}).fadeIn(1000, function(){
            //     $(this).css({ zIndex: 4, transform: 'scale(calc(1*2.0))  perspective(10000px) rotateY(0deg)'});
            // });
            // $('.slide').eq(a[4]).css({ left:  400}).fadeIn(1000, function(){
            //     $(this).css({ zIndex: 3, transform: 'scale(calc(1*1.2))  perspective(8000px) rotateY(0deg)' });
            // });
            // $('.slide').eq(a[5]).css({ left:  600}).fadeIn(1000, function(){
            //     $(this).css({ zIndex: 2, transform: 'scale(calc(1*0.6))  perspective(3000px) rotateY(0deg)' });
            // });
            // $('.slide').eq(a[6]).css({ left:  700}).fadeIn(1000, function(){
            //     $(this).css({ zIndex: 1, transform: 'scale(calc(1*0.3))  perspective(4000px) rotateY(deg)' });
            // });
        }



})(jQuery);
//slide_3D.js