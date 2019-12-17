/*
p5+arduino sketch
11.12.2019
*/
function preload() {
    /*these are used to load the image*/
    box = loadImage("rb.png");
    split = loadImage("rb2.png");
    crack = loadImage("rb3.png");
    broken = loadImage("rb4.png");
}

/*these variables are used in the draw function and derive from preload*/
var box, split, crack, broken;

/*these variables are used to decalre the state of a condition*/
var state = 'box'; // 'split' 'crack' 'broken'

/*these variables coorlate with the arduino, the sensor and the p5 sktech*/
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
    
    background(255);
    
    if (sensorValue > 113 && state != 'broken') {
        state = 'box';
    } else if (sensorValue > 110 && state != 'broken') {
        state = 'split';
    } else if (sensorValue > 105 && state != 'broken') {
        state = 'crack';
    } else if (sensorValue > 98) {
        state = 'broken';
    }

    if (state == 'box') {
        image(box, 200, 100, 200, 200);
    } else if (state == 'split') {
        image(split, 200, 100, 200, 200);
    } else if (state == 'crack') {
        image(crack, 200, 100, 200, 200);
    } else if (state == 'broken') {
        image(broken, 150, 70, 350, 350);
    }
}
