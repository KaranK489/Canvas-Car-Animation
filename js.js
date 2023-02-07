var a;

var blueCar = new Image();
blueCar.src = "resources/bluecar.png";

var blueSedan = new Image();
blueSedan.src = "resources/bluesedan.png";

var purpleSuv = new Image();
purpleSuv.src = "resources/purplesuv.png";

var redCar = new Image();
redCar.src = "resources/redcar.png";

var policeCar = new Image();
policeCar.src = "resources/policecar.png";

var greenRaceCar = new Image();
greenRaceCar.src = "resources/greenracecar.png";

var oldBlueCar = new Image();
oldBlueCar.src = "resources/oldbluecar.png";

var garbageTruck = new Image();
garbageTruck.src = "resources/garbagetruck.png";

var background = new Image();
background.src = "resources/city.png";

var background2 = new Image();
background2.src = "resources/city.png";

var rover = new Image();
rover.src = "resources/rover.png";

var plane = new Image();
plane.src = "resources/plane.png";

var blueCarX = 1000;

var blueSedanX = 800;

var purpleSuvX = -900;

var redCarX = -200;

var policeCarX = 2000;

var garbageTruckX = 3600;

var roverX = -600;

var planeX = -500;

var planeY = 100;

var greenRaceCarX = 1200;

var backgroundchecker = 0;

function startAnimation() {

    a = requestAnimationFrame(startAnimation);
    var ctx = document.getElementById("myCanvas").getContext("2d");


    ctx.drawImage(background, 0, 0, 533, 250);
    ctx.drawImage(background2, 530, 0, 533, 250);


    ctx.fillStyle = "#393b40";
    ctx.fillRect(0, 250, 1000, 300);

    ctx.fillStyle = "#d6b944";
    ctx.fillRect(0, 365, 1000, 8);

    ctx.fillStyle = "#d6b944";
    ctx.fillRect(0, 377, 1000, 8);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 305, 1000, 5);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 435, 1000, 5);

    blueCarX = blueCarX - 2;
    ctx.drawImage(blueCar, blueCarX, 235, 132, 70);

    blueSedanX = blueSedanX - 15;
    ctx.drawImage(blueSedan, blueSedanX, 285, 230, 85);

    greenRaceCarX = greenRaceCarX - 15;
    ctx.drawImage(greenRaceCar, greenRaceCarX, 295, 225, 65);

    policeCarX = policeCarX - 15;
    ctx.drawImage(policeCar, policeCarX, 285, 155, 90);

    roverX = roverX + Math.random()*5;
    ctx.drawImage(rover, roverX, 310, 230, 120);

    purpleSuvX = purpleSuvX + 6;
    ctx.drawImage(purpleSuv, purpleSuvX, 410, 182, 90);

    redCarX = redCarX + 6;
    ctx.drawImage(redCar, redCarX, 430, 183, 70);

    garbageTruckX = garbageTruckX - 3;
    ctx.drawImage(garbageTruck, garbageTruckX, 185, 481, 120);


    planeX = planeX + 2;
    planeY = planeY - 0.25;
    ctx.drawImage(plane, planeX, planeY, 240, 180);

    if (blueCarX < -200) {
        blueCarX = 1200;
        background.src = "resources/citynight.png";
        background2.src = "resources/citynight2.png";
    }

    if (blueSedanX < -1300) {
        blueSedanX = 1200;
    }

    if (purpleSuvX > 1200) {
        purpleSuvX = -200;
    }

    if (redCarX > 1200) {
        redCarX = -200;

    }

    if (roverX > 1200) {
        roverX = -200;
    }

    if (greenRaceCarX < -1300) {
        greenRaceCarX = 1200;
    }

    if (policeCarX < -1300) {
        policeCarX = 1200;
    }

    if (garbageTruckX === blueCarX + 130) {
        alert("Oh no! The truck has rear ended the slow car :(");

        if (blueCarX = 50){
            blueCarX=99999999999999999999999999;
        }
    }

}
function stopAnimation(){
    cancelAnimationFrame(a);


}

