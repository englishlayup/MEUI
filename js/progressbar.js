function progressI() {
    var prg = document.getElementById("progress-32");
    var percent = document.getElementById("percentCount-32");
    var counter = 1;
    var progress = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (progress == 32 && counter == 32) {
            clearInterval(id);
        } else {
            progress += 1;
            counter += 1;
            prg.style.width = progress + '%';
            percent.innerHTML = counter + '%' ;
        }
    }
}

$(window).scroll(function () {
    if ($(document).scrollTop() > 2500) {
        progressI();
         $(window).unbind('scroll');
    }
})

function progressII() {
    var prg = document.getElementById("progress-70");
    var percent = document.getElementById("percentCount-70");
    var counter = 1;
    var progress = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (progress == 70 && counter == 70) {
            clearInterval(id);
        } else {
            progress += 1;
            counter += 1;
            prg.style.width = progress + '%';
            percent.innerHTML = counter + '%' ;
        }
    }
}

$(window).scroll(function () {
    if ($(document).scrollTop() > 2500) {
        progressII();
         $(window).unbind('scroll');
    }
})

function progressIII() {
    var prg = document.getElementById("progress-55");
    var percent = document.getElementById("percentCount-55");
    var counter = 1;
    var progress = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (progress == 55 && counter == 55) {
            clearInterval(id);
        } else {
            progress += 1;
            counter += 1;
            prg.style.width = progress + '%';
            percent.innerHTML = counter + '%' ;
        }
    }
}

$(window).scroll(function () {
    if ($(document).scrollTop() > 2500) {
        progressIII();
         $(window).unbind('scroll');
    }
})

function progressIV() {
    var prg = document.getElementById("progress-88");
    var percent = document.getElementById("percentCount-88");
    var counter = 1;
    var progress = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (progress == 88 && counter == 88) {
            clearInterval(id);
        } else {
            progress += 1;
            counter += 1;
            prg.style.width = progress + '%';
            percent.innerHTML = counter + '%' ;
        }
    }
}

$(window).scroll(function () {
    if ($(document).scrollTop() > 2500) {
        progressIV();
         $(window).unbind('scroll');
    }
})