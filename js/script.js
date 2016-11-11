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
    /*Right smoke line*/
    /*Start x coordinates for first quadratic curve*/
    var smokexR = Math.floor((Math.random() * (380 - 360)) + 360);
    /*Start y coordinates for first quadratic curve*/
    var smokeyR = Math.floor((Math.random() * (90 - 70)) + 70);
    /*End x coordinates for first quadratic curve*/
    var smokex2R = 400;
    /*End y coordinates for first quadratic curve*/
    var smokey2R = 150;
    /*control x coordinates for first quadratic curve*/
    var ctrlxquad1R = Math.floor((Math.random() * (450 - 430)) + 430);
    /*control y coordinates for first quadratic curve*/
    var ctrlyquad1R = Math.floor((Math.random() * (140 - 120)) + 120);
    /*Start x coordinates for second quadratic curve*/
    var smokexRSecond = Math.floor((Math.random() * (340 - 320)) + 320);
    /*Start y coordinates for second quadratic curve*/
    var smokeyRSecond = Math.floor((Math.random() * (70 - 50)) + 50);
    /*End x coordinates for second quadratic curve*/
    var smokex2RSecond = smokexR;
    /*End y coordinates for second quadratic curve*/
    var smokey2RSecond = smokeyR;
    /*control x coordinates for second quadratic curve*/
    var ctrlxquad1RSecond = Math.floor((Math.random() * (400 - 380)) + 380);
    /*control y coordinates for second quadratic curve*/
    var ctrlyquad1RSecond = Math.floor((Math.random() * (70 - 50)) + 50);
    /*Start x coordinates for third quadratic curve*/
    var smokexRThird = Math.floor((Math.random() * (320 - 300)) + 300);
    /*Start y coordinates for third quadratic curve*/
    var smokeyRThird = Math.floor((Math.random() * (50 - 30)) + 30);
    /*End x coordinates for third quadratic curve*/
    var smokex2RThird = smokexRSecond;
    /*End y coordinates for third quadratic curve*/
    var smokey2RThird = smokeyRSecond;
    /*control x coordinates for third quadratic curve*/
    var ctrlxquad1RThird = Math.floor((Math.random() * (350 - 320)) + 320);
    /*control y coordinates for third quadratic curve*/
    var ctrlyquad1RThird = Math.floor((Math.random() * (50 - 30)) + 30);
    /*Start x coordinates for fourth quadratic curve*/
    var smokexRFourth = Math.floor((Math.random() * (300 - 280)) + 280);
    /*Start y coordinates for fourth quadratic curve*/
    var smokeyRFourth = Math.floor(0);
    /*End x coordinates for fourth quadratic curve*/
    var smokex2RFourth = smokexRThird;
    /*End y coordinates for fourth quadratic curve*/
    var smokey2RFourth = smokeyRThird;
    /*control x coordinates for fourth quadratic curve*/
    var ctrlxquad1RFourth = Math.floor((Math.random() * (350 - 320)) + 320);
    /*control y coordinates for fourth quadratic curve*/
    var ctrlyquad1RFourth = Math.floor((Math.random() * (30 - 10)) + 10);
    ctx.beginPath();
    ctx.moveTo(smokexR, smokeyR);
    ctx.quadraticCurveTo(ctrlxquad1R, ctrlyquad1R, smokex2R, smokey2R);
    ctx.moveTo(smokexRSecond, smokeyRSecond);
    ctx.quadraticCurveTo(ctrlxquad1RSecond, ctrlyquad1RSecond, smokex2RSecond, smokey2RSecond);
    ctx.moveTo(smokexRThird, smokeyRThird);
    ctx.quadraticCurveTo(ctrlxquad1RThird, ctrlyquad1RThird, smokex2RThird, smokey2RThird);
    ctx.moveTo(smokexRFourth, smokeyRFourth);
    ctx.quadraticCurveTo(ctrlxquad1RFourth, ctrlyquad1RFourth, smokex2RFourth, smokey2RFourth);
    ctx.closePath();
    ctx.fillStyle = "#566573";
    ctx.fill();
    /*Left smoke line*/
    /*Start x coordinates for first quadratic curve*/
    var smokex = Math.floor((Math.random() * (300 - 290)) + 270);
    /*Start y coordinates for first quadratic curve*/
    var smokey = Math.floor((Math.random() * (100 - 90)) + 90);
    /*End x coordinates for first quadratic curve*/
    var smokex2 = 326;
    /*End y coordinates for first quadratic curve*/
    var smokey2 = 135;
    /*control x coordinates for first quadratic curve*/
    var ctrlxquad1 = Math.floor((Math.random() * (270 - 250)) + 250);
    /*control y coordinates for first quadratic curve*/
    var ctrlyquad1 = Math.floor((Math.random() * (140 - 120)) + 120);
    /*Start x coordinates for second quadratic curve*/
    var smokexSecond = Math.floor((Math.random() * (260 - 240)) + 240);
    /*Start y coordinates for second quadratic curve*/
    var smokeySecond = Math.floor((Math.random() * (80 - 60)) + 60);
    /*End x coordinates for second quadratic curve*/
    var smokex2Second = smokex;
    /*End y coordinates for second quadratic curve*/
    var smokey2Second = smokey;
    /*control x coordinates for second quadratic curve*/
    var ctrlxquad1Second = Math.floor((Math.random() * (250 - 240)) + 240);
    /*control y coordinates for second quadratic curve*/
    var ctrlyquad1Second = Math.floor((Math.random() * (120 - 100)) + 100);
    /*Start x coordinates for third quadratic curve*/
    var smokexThird = Math.floor((Math.random() * (220 - 200)) + 200);
    /*Start y coordinates for third quadratic curve*/
    var smokeyThird = Math.floor((Math.random() * (60 - 40)) + 40);
    /*End x coordinates for third quadratic curve*/
    var smokex2Third = smokexSecond;
    /*End y coordinates for third quadratic curve*/
    var smokey2Third = smokeySecond;
    /*control x coordinates for third quadratic curve*/
    var ctrlxquad1Third = Math.floor((Math.random() * (230 - 210)) + 210);
    /*control y coordinates for third quadratic curve*/
    var ctrlyquad1Third = Math.floor((Math.random() * (90 - 70)) + 70);
    /*Start x coordinates for fourth quadratic curve*/
    var smokexFourth = Math.floor((Math.random() * (170 - 150)) + 150);
    /*Start y coordinates for fourth quadratic curve*/
    var smokeyFourth = Math.floor((Math.random() * (50 - 30)) + 30);
    /*End x coordinates for fourth quadratic curve*/
    var smokex2Fourth = smokexThird;
    /*End y coordinates for fourth quadratic curve*/
    var smokey2Fourth = smokeyThird;
    /*control x coordinates for fourth quadratic curve*/
    var ctrlxquad1Fourth = Math.floor((Math.random() * (180 - 160)) + 160);
    /*control y coordinates for fourth quadratic curve*/
    var ctrlyquad1Fourth = Math.floor((Math.random() * (70 - 60)) + 60);
    /*Start x coordinates for fifth quadratic curve*/
    var smokexFifth = Math.floor((Math.random() * (80 - 60)) + 60);
    /*Start y coordinates for fifth quadratic curve*/
    var smokeyFifth = Math.floor(0);
    /*End x coordinates for fifth quadratic curve*/
    var smokex2Fifth = smokexFourth;
    /*End y coordinates for fifth quadratic curve*/
    var smokey2Fifth = smokeyFourth;
    /*control x coordinates for fifth quadratic curve*/
    var ctrlxquad1Fifth = Math.floor((Math.random() * (90 - 70)) + 70);
    /*control y coordinates for fifth quadratic curve*/
    var ctrlyquad1Fifth = Math.floor((Math.random() * (50 - 30)) + 30);
    ctx.beginPath();
    ctx.moveTo(smokex, smokey);
    ctx.quadraticCurveTo(ctrlxquad1, ctrlyquad1, smokex2, smokey2);
    ctx.lineTo(350, 130);
    ctx.lineTo(400, 150);
    ctx.lineTo(smokexR, smokeyR);
    ctx.moveTo(smokexSecond, smokeySecond);
    ctx.quadraticCurveTo(ctrlxquad1Second, ctrlyquad1Second, smokex2Second, smokey2Second);
    ctx.lineTo(smokex2RSecond, smokey2RSecond);
    ctx.lineTo(smokexRSecond, smokeyRSecond);
    ctx.moveTo(smokexThird, smokeyThird);
    ctx.quadraticCurveTo(ctrlxquad1Third, ctrlyquad1Third, smokex2Third, smokey2Third);
    ctx.lineTo(smokex2RThird, smokey2RThird);
    ctx.lineTo(smokexRThird, smokeyRThird);
    ctx.moveTo(smokexFourth, smokeyFourth);
    ctx.quadraticCurveTo(ctrlxquad1Fourth, ctrlyquad1Fourth, smokex2Fourth, smokey2Fourth);
    ctx.lineTo(smokex2RFourth, smokey2RFourth);
    ctx.lineTo(smokexRFourth, smokeyRFourth);
    ctx.moveTo(smokexFifth, smokeyFifth);
    ctx.quadraticCurveTo(ctrlxquad1Fifth, ctrlyquad1Fifth, smokex2Fifth, smokey2Fifth);
    ctx.lineTo(smokexRFourth, smokeyRFourth);
    ctx.closePath();
    ctx.fillStyle = "#566573";
    ctx.fill();
    /*End of first quadratic curve*/
    }
   
    function sliderControl(){
        document.querySelector('input[type="range"]').addEventListener('change', function (e) {
            timing = parseInt(this.value, 10);
        });
        setTimeout(drawSmoke, timing);
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