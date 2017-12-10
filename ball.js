

function dropBall() {

    var bounceArea = document.getElementById("bounceArea");
    var ball = document.getElementById("ball");
    var ballRadius = 10;
    var score = 0;

    let x = bounceArea.scrollWidth/2;
    let y = bounceArea.scrollHeight/2;



    drawBricks();

    var dx = 1;
    var dy = 2;

    //setInterval(bounce, 10);
    bounce();

    function bounce() {

        x += dx;
        y += dy;

        ball.style.left = x + "px";
        ball.style.top = y + "px";

        var paddleHeight = parseInt( $('.paddle').css("height") );
        var paddlePosition = parseInt( $(".paddle").css("left") );
        var paddleWidth = parseInt( $('.paddle').css("width") );


        function collisionDetection() {

            for(c=0; c<brickColumnCount; c++) {
                for(r=0; r<brickRowCount; r++) {
                    var b = bricks[c][r];
                    if(b.status == 1) {
                      //position of ball is inside brick
                      if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        //reverse y direction
                        dy = -dy;
                        //record that the brick is hit
                        b.status = 0;
                        //hide brick
                        document.getElementById(b.id).style.display = "none";
                        //increase score
                        score++;
                        //if all bricks are hit, game is over
                        if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                    }
                    }
                }
            }
        }

        function drawScore() {
          document.getElementById("score").innerHTML = score;

}
        drawScore();
        collisionDetection();


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
        if( x + dx > bounceArea.scrollWidth-ballRadius || x + dx < 0 ) {
            dx = Math.abs(dx) < 8 ? -dx * 1.2 : -dx;
    //          dx = -dx;
        }
        if( y + dy < 0 ) {
            dy = Math.abs(dy) < 16 ? dy = -dy * 1.2 : -dy;

        }
        requestAnimationFrame(bounce);
    }

}
