$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar-container').addClass('shrink');
    } else {
        $('.navbar-container').removeClass('shrink');
    }
})

$(document).ready(function (){
            $("#backHome").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div1").offset().top
                }, 2000);
            });
        });

$(document).ready(function (){
            $("#backFeatures").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div2").offset().top
                }, 2000);
            });
        });

$(document).ready(function (){
            $("#backDesign").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div3").offset().top
                }, 2000);
            });
        });

$(document).ready(function (){
            $("#backReviews").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div4").offset().top
                }, 2000);
            });
        });

$(document).ready(function (){
            $("#backDownload").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div5").offset().top
                }, 2000);
            });
        });