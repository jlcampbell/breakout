function dropBall() {

    var bounceArea = document.getElementById("bounceArea");
    var ball = document.getElementById("ball");

    var x = 60;
    var y = 0;

    var dx = 1;
    var dy = -2;

    setInterval(bounce, 10);

    function bounce() {

        x += dx;
        y += dy;

        ball.style.left = x + "px";
        ball.style.top = y + "px";

        var paddleHeight = parseInt( $('.paddle').css("height") );
        var paddlePosition = parseInt( $(".paddle").css("left") );
        var paddleWidth = parseInt( $('.paddle').css("width") );

        if( y + dy > bounceArea.scrollHeight - paddleHeight ) {

            if( x > paddlePosition &&
                x < paddlePosition + paddleWidth
            ) {
                dy = -dy;

            } else if( y + dy > bounceArea.scrollHeight ) {
                alert("GAME OVER");
                document.location.reload();
            }
        }
        if( x + dx > bounceArea.scrollWidth || x + dx < 0 ) {
            dx = Math.abs(dx) < 8 ? -dx * 1.2 : -dx;
        }
        if( y + dy < 0 ) {
            dy = Math.abs(dy) < 16 ? dy = -dy * 1.2 : -dy;
        }
    }

}
