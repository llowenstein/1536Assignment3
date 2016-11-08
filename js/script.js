function ground() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    var x = 500;
    var y = 100;
    ctx.fillStyle = "#27AE60";
    ctx.fillRect(0, 350, x, y);
    ctx.stroke();
}

function background() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    var x = 500;
    var y = 350;
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, x, y);
    ctx.stroke();
}

function drawRoof() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    /*Thin part of roof*/
    ctx.fillStyle = '#C0392B';
    ctx.beginPath();
    ctx.moveTo(12, 289);
    ctx.lineTo(230, 300);
    ctx.lineTo(225, 308);
    ctx.lineTo(2, 295);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*Main part of roof*/
    ctx.fillStyle = '#A93226';
    ctx.beginPath();
    ctx.moveTo(2, 295);
    ctx.lineTo(225, 308);
    ctx.lineTo(258, 423);
    ctx.lineTo(30, 388);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*Thin right part of roof*/
    ctx.fillStyle = '#C0392B';
    ctx.beginPath();
    ctx.moveTo(225, 308);
    ctx.lineTo(230, 300);
    ctx.lineTo(265, 410);
    ctx.lineTo(258, 423);
    ctx.closePath;
    ctx.fill();
    ctx.stroke()
}

function mainWall() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#212F3C";
    ctx.beginPath();
    ctx.moveTo(25, 210);
    ctx.lineTo(230, 170);
    ctx.lineTo(230, 300);
    ctx.lineTo(25, 289);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function twoWindowsForLeftWall() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#85C1E9";
    /*first window*/
    ctx.beginPath();
    ctx.moveTo(45, 234);
    ctx.lineTo(95, 227);
    ctx.lineTo(95, 277);
    ctx.lineTo(45, 275);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*vertical lines for first window*/
    ctx.beginPath();
    ctx.moveTo(65, 231);
    ctx.lineTo(65, 275);
    ctx.closePath();
    ctx.stroke();
    /*horizontal lines for first window*/
    ctx.beginPath();
    ctx.moveTo(95, 253);
    ctx.lineTo(45, 255);
    ctx.closePath();
    ctx.stroke();
    /*second window*/
    ctx.fillStyle = "#85C1E9";
    ctx.beginPath();
    ctx.moveTo(125, 225);
    ctx.lineTo(200, 215);
    ctx.lineTo(200, 280);
    ctx.lineTo(125, 277);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*vertical lines for first window*/
    ctx.beginPath();
    ctx.moveTo(155, 221);
    ctx.lineTo(155, 279);
    ctx.closePath();
    ctx.stroke();
    /*horizontal lines for first window*/
    ctx.beginPath();
    ctx.moveTo(125, 253);
    ctx.lineTo(200, 250);
    ctx.closePath();
    ctx.stroke();
}

function drawDoorArea() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#283747";
    ctx.beginPath();
    ctx.moveTo(230, 300);
    ctx.lineTo(400, 320);
    ctx.lineTo(350, 420);
    ctx.lineTo(265, 420);
    ctx.closePath();
    ctx.fill();
}

function drawDoor() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1B4F72";
    ctx.beginPath();
    ctx.moveTo(295, 330);
    ctx.lineTo(338, 337);
    ctx.lineTo(334, 392);
    ctx.lineTo(290, 390);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*Door knob*/
    ctx.beginPath();
    ctx.arc(300, 365, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#138D75";
    ctx.fill();
    ctx.stroke();
}

function drawFrontOfHouse() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#283747";
    ctx.beginPath();
    ctx.moveTo(230, 170);
    ctx.lineTo(400, 230);
    ctx.lineTo(400, 321);
    ctx.lineTo(230, 301);
    ctx.closePath();
    ctx.fill();
}

function drawHiddenPartOfRoof() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#C0392B";
    ctx.beginPath();
    ctx.moveTo(400, 320);
    ctx.lineTo(410, 320);
    ctx.lineTo(360, 420);
    ctx.lineTo(350, 420);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawFrontStairs() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#138D75";
    ctx.beginPath();
    ctx.moveTo(290, 394);
    ctx.lineTo(360, 396);
    ctx.lineTo(360, 420);
    ctx.lineTo(290, 420);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#138D75";
    ctx.beginPath();
    ctx.moveTo(310, 410);
    ctx.lineTo(370, 410);
    ctx.lineTo(370, 432);
    ctx.lineTo(310, 432);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawSideOfStairs() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#117A65";
    ctx.beginPath();
    ctx.moveTo(258, 394);
    ctx.lineTo(290, 394);
    ctx.lineTo(290, 420);
    ctx.lineTo(264, 420);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#117A65";
    ctx.beginPath();
    ctx.moveTo(262, 410);
    ctx.lineTo(310, 410);
    ctx.lineTo(310, 432);
    ctx.lineTo(264, 424);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function twoWindowsForFrontOfHouse() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#AED6F1";
    /*first window*/
    ctx.beginPath();
    ctx.moveTo(250, 215);
    ctx.lineTo(315, 234);
    ctx.lineTo(315, 294);
    ctx.lineTo(250, 282);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*vertical lines for first window*/
    ctx.beginPath();
    ctx.moveTo(285, 225);
    ctx.lineTo(285, 289);
    ctx.closePath();
    ctx.stroke();
    /*horizontal lines for first window*/
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(314, 265);
    ctx.closePath();
    ctx.stroke();
    /*Second window*/
    ctx.fillStyle = "#AED6F1";
    ctx.beginPath();
    ctx.moveTo(335, 240);
    ctx.lineTo(380, 255);
    ctx.lineTo(380, 306);
    ctx.lineTo(335, 297);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*vertical lines for second window*/
    ctx.beginPath();
    ctx.moveTo(360, 248);
    ctx.lineTo(360, 303);
    ctx.closePath();
    ctx.stroke();
    /*horizontal lines for second window*/
    ctx.beginPath();
    ctx.moveTo(335, 270);
    ctx.lineTo(380, 280);
    ctx.closePath();
    ctx.stroke();
}

function baseOfHouse() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    /*Left part*/
    ctx.fillStyle = "#A93226";
    ctx.beginPath();
    ctx.moveTo(0, 180);
    ctx.lineTo(230, 130);
    ctx.lineTo(230, 150);
    ctx.lineTo(0, 200);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    /*Right part*/
    ctx.fillStyle = "#C0392B";
    ctx.beginPath();
    ctx.moveTo(230, 130);
    ctx.lineTo(450, 210);
    ctx.lineTo(450, 230);
    ctx.lineTo(230, 150);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    partUnderBaseOfHouse();
}

function partUnderBaseOfHouse() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    /*Left part*/
    ctx.fillStyle = "#515A5A";
    ctx.beginPath();
    ctx.moveTo(1, 200);
    ctx.lineTo(230, 150);
    ctx.lineTo(230, 170);
    ctx.lineTo(24, 211);
    ctx.lineTo(24, 220);
    ctx.fill();
    ctx.stroke();
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    /*Right part*/
    ctx.fillStyle = "#515A5A";
    ctx.beginPath();
    ctx.moveTo(230, 150);
    ctx.lineTo(450, 230);
    ctx.lineTo(400, 245);
    ctx.lineTo(400, 230);
    ctx.lineTo(230, 171);
    ctx.fill();
    ctx.stroke();
}

function drawChimney() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1B4F72";
    ctx.beginPath();
    ctx.moveTo(350, 130);
    ctx.lineTo(400, 150);
    ctx.lineTo(400, 192);
    ctx.lineTo(350, 174);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    /*Left side of Chimney*/
    ctx.fillStyle = "#154360";
    ctx.beginPath();
    ctx.moveTo(325, 135);
    ctx.lineTo(350, 130);
    ctx.lineTo(350, 174);
    ctx.lineTo(325, 164);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawSmoke() {
    var canvas = document.getElementById("myHouse");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(350, 80);
    ctx.quadraticCurveTo(320, 90, 360, 110);
    ctx.quadraticCurveTo(380, 140, 390, 110);
    ctx.quadraticCurveTo(420, 100, 380, 75);
    ctx.quadraticCurveTo(360, 45, 350, 80);
    // complete custom shape
    ctx.closePath();
    ctx.fillStyle = "#7F8C8D";
    ctx.fill();
    ctx.stroke();
}

function sliderControl() {
    var x = document.createElement("INPUT");
}

function drawHouse() {
    ground();
    background();
    drawRoof();
    mainWall();
    drawFrontOfHouse();
    drawDoorArea();
    drawDoorArea();
    drawHiddenPartOfRoof();
    drawFrontStairs();
    drawSideOfStairs();
    twoWindowsForLeftWall();
    twoWindowsForFrontOfHouse();
    baseOfHouse();
    drawChimney();
    drawDoor();
    drawSmoke();
}