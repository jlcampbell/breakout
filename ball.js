

function dropBall() {

    var bounceArea = document.getElementById("bounceArea");
    var ball = document.getElementById("ball");
    var ballRadius = 10;
    var score = 0;

    let x = 60;
    let y = 0;



    drawBricks();


    var dx = 1;
    var dy = -2;

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
            console.log("detecting")

            console.log(x);

            console.log(y);
            for(c=0; c<brickColumnCount; c++) {
                for(r=0; r<brickRowCount; r++) {
                    var b = bricks[c][r];
                    if(b.status == 1) {
                      if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        console.log("collision");
                        //on collision, make brick disappear
                        document.getElementById(b.id).style.display = "none";
                        score++;
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
          //ctx.fillText("Score: "+score, 8, 20);
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
    //        dx = Math.abs(dx) < 8 ? -dx * 1.2 : -dx;
              dx = -dx;
        }
        if( y + dy < 0 ) {
            dy = Math.abs(dy) < 16 ? dy = -dy * 1.2 : -dy;

        }
        requestAnimationFrame(bounce);
    }

}
