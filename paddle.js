
$(function() {
    $('.start').on('click', function (event) {

        if( !$(this).hasClass('stop') ) {
            var x = event.clientX;
            var x2 = x;
            startGame(x, x2);
            $(this).addClass('stop');
        };

    });
});

function startGame(x, x2) {
    $(document).on('mousemove', function (event) {
        x = event.clientX;
        moveAmount = x - x2;
        x2 = x;
        movePaddle(moveAmount);
    });
}

function movePaddle(moveAmount) {

    var position = parseInt( $(".paddle").css("left") );
    var newPosition = position + moveAmount;

    var paddleWidth = parseInt( $('.paddle').css("width") );
    var gameWidth = parseInt( $('.game').css("width") );

    var leftBoundary = 0;
    var rightBoundary = gameWidth - paddleWidth;

    if ( newPosition > leftBoundary &&
         newPosition < rightBoundary
    ) {
        $(".paddle").css( "left", newPosition);
        position = $(".paddle").css("left");
    }
}
