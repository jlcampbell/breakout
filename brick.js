$(document).ready(function() { /* code here */
var brickRowCount = 3;
var brickColumnCount = 5;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var brickWidth = document.querySelector(".bricks").scrollWidth;
var brickHeight = document.querySelector(".bricks").scrollHeight;

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];

    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { "x": 0, "y": 0 };
    }
}

function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;

            var brick = document.createElement("div");
            brick.className +="bricks";
            brick.style.left = brickX+"px";
            console.log(brick.style.left);
            brick.style.top = brickY+"px";
            console.log(brick.style.top);
            document.getElementById("bounceArea").appendChild(brick);
        }
    }
}
drawBricks();
});
