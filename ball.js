$(function () {

    var bounceArea = document.getElementById("bounceArea");
    var ball = document.getElementById("ball");

    var x = 60;
    var y = 0;

    var dx = 1;
    var dy = -2;

    function draw() {

        x += dx;
        y += dy;

        ball.style.left = x + "px";
        ball.style.top = y + "px";

        if(x + dx > bounceArea.scrollWidth || x + dx < 0) {
            dx = -dx;
        }
        if(y + dy > bounceArea.scrollHeight || y + dy < 0) {
            dy = -dy;
        }
    }
    setInterval(draw, 10);

});
