$(function() {
    $( ".paddle" ).keypress(function() {
        console.log( "Handler for .keypress() called." );
    });

    var start = false;

    // x coordinate of mouse
    $(document).on('click', function (event) {
        var x = event.clientX;
        var x2 = x;

        startGame(x, x2);
    });
});

function startGame(x, x2) {
    $(document).on('mousemove', function (event) {

        x = event.clientX;

        if (x - x2 > 0) {
            movePaddle("right");
        } else if (x - x2 < 0) {
            movePaddle("left");
        }
        x2 = x;
    });
}

function movePaddle(direction) {

    var position = parseInt( $(".paddle").css("left") );
    var newPosition;

    if( direction == "right" ) {

        newPosition = position + 10;
        $(".paddle").css( "left", newPosition);
        position = $(".paddle").css("left");

    } else if ( direction == "left" ) {

        newPosition = position - 10;
        $(".paddle").css( "left", newPosition);
        position = $(".paddle").css("left");

    }
}
