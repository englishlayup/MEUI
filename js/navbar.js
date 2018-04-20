$(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
        $('.navbar-container').addClass('shrink');
    }
    else{
        $('.navbar-container').removeClass('shrink');
    }
})