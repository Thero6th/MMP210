/*logo*/

function preload() {
    closed = loadImage("cllogo.jpg");
}

function setup() {
createCanvas(640, 360);
}

function draw() {
    background("white");
    fill('white');
    image(sloth, 0, 0, width, height);
    textAlign(LEFT, BOTTOM);
    textSize(50);
    textFont("Comic Sans MS");
    text ("Being Actively Lazy 24/7", 20, 320);
}
