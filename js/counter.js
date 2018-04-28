function countto2000() {
    var counter = document.getElementById("counter2000");
    var times = 2;
    var id = setInterval(frame, 150);

    function frame() {
        if (times >= 2000) {
            clearInterval(id);
        } else {
            times += 222;
            counter.innerHTML = times;
        }
    }
}

function countto750() {
    var counter = document.getElementById("counter750");
    var times = 3;
    var id = setInterval(frame, 150);

    function frame() {
        if (times >= 750) {
            clearInterval(id);
        } else {
            times += 83;
            counter.innerHTML = times;
        }
    }
}

function countto12900() {
    var counter = document.getElementById("counter12900");
    var times = 3;
    var id = setInterval(frame, 150);

    function frame() {
        if (times >= 12900) {
            clearInterval(id);
        } else {
            times += 1433;
            counter.innerHTML = times;
        }
    }
}

function countto986() {
    var counter = document.getElementById("counter986");
    var times = 5;
    var id = setInterval(frame, 150);

    function frame() {
        if (times >= 986) {
            clearInterval(id);
        } else {
            times += 109;
            counter.innerHTML = times;
        }
    }
}

document.getElementById("mouseover").onmouseover = function()
{
    countto2000();
    countto750();
    countto12900();
    countto986();
    this.onmouseover = null;
}


