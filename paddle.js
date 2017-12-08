
function attachMouseToPaddle(mousePosition) {
    $(document).on('mousemove', function (event) {
        newMousePosition = event.clientX;
        moveAmount = newMousePosition - mousePosition;
        movePaddle(moveAmount);
        mousePosition = newMousePosition;
    });
}

function movePaddle(moveAmount) {

    var position = parseInt( $(".paddle").css("left") );
    var newPosition = position + moveAmount;
    var paddleWidth = parseInt( $('.paddle').css("width") );
    var gameWidth = parseInt( $('.game').css("width") );
    var leftBoundary = 0;
    var rightBoundary = gameWidth - paddleWidth;

    if ( newPosition > leftBoundary && newPosition < rightBoundary ) {
        $(".paddle").css( "left", newPosition);
        position = $(".paddle").css("left");
    }
}
