/*
p5+arduino sketch
11.12.2019
*/
function preload() {
    drawImg = loadImage("cllogo_2.jpg");
    closedImg = loadImage("cllogo.jpg");
    openImg = loadImage('cllogo_2.jpg');
}

var drawImg, closedImg, openImg;

var x = 350;
var speed = 0;
var r = 0;

var serial;
var portName = "/dev/tty.usbmodem14101";
var sensorValue;

function setup() {
    createCanvas(640, 360);

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}

function serverConnected() {
    console.log('connected to server');
}

function portOpen() {
    console.log('the serial port opened');
}

function portClose() {
    console.log('the serial port closed');
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {
    var c = map(sensorValue, 0, 1023)
    image(drawImg, 0, 0, 600, 370);

    if (sensorValue > 110) {
        changeSpeed();
    }

    if (speed != 0) {
        fill("white");
        ellipse(x, 150 + r, 120, 100);
        fill("black");
        textAlign(CENTER);
        text("catch if you can", x, 155 + r);
    }
    x += speed;
}

function changeSpeed() {
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
