$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('navbar-toggle');
    });

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('navbar-toggle');

        if($(window).scrollTop()>30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){
            var id=$(this).attr('id');
            var height =$(this).height();
            var offset=$(this).offset().top-600;
            var top=$(window).scrollTop();
            if(top>=offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' +id+ '"]').addClass('active');
            }
        })

       
    })
   
});