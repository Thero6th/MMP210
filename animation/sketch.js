/*animation*/

function preload() {
    closedImg = loadImage('assets/cllogo.jpg');
    openImg = loadImage('assets/cllogo_2.jpg')
}

var drawImg, closedImg, openImg;

var x = 350;
var speed = 0;
var r = 0;

function setup() {
    createCanvas(500, 360);
    drawImg = closedImg;
}

function draw() {
    image(drawImg, 0, 0, 600, 370);
    r += random(-speed, speed);

    if (speed != 0) {
        fill("white");
        ellipse(x, 150 + r, 120, 100);
        fill("black");
        textAlign(CENTER);
        text("catch if you can", x, 155 + r);
    }
    x += speed;
}

function mousePressed() {
    if (speed == 0) {
        speed = 5;
        drawImg = openImg;
    } else {
        drawImg = closedImg;
        speed = 0;
        x = 350;
        r = 0;
    }
}
