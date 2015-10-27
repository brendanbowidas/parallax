$(window).scroll(function(){
   var wScroll = $(this).scrollTop();
    console.log(wScroll);
    $('.logo').css({
       'transform' : 'translateY('+ wScroll / 2 +'%)'
    });

    $('.back-bird').css({
        'transform': 'translateY('+ wScroll / 4 +'%)'
    });

    $('.fore-bird').css({
        'transform': 'translateY(-'+ wScroll / 40 +'%)'
    });
});
