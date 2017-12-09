

var brickRowCount = 3;
var brickColumnCount = 5;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
var brickWidth = 75;
var brickHeight = 20;

for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { "x": 0, "y": 0, status: 1, id : "" };
    }
}


function drawBricks() {

    var idCount = 0;
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
          if(bricks[c][r].status == 1) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            idCount++;
            bricks[c][r].id = idCount;

            var brick = document.createElement("div");
            brick.className +="bricks";
            brick.style.left = brickX+"px";
            brick.style.top = brickY+"px";
            brick.id = idCount.toString();

            document.getElementById("bounceArea").appendChild(brick);
          }
        }
    }
}
