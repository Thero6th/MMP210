/*animation*/

let img;
var wake;
var x = 40
var speed = 1

function setup() {
    createCanvas(500, 360);
    img = loadImage('assets/cllogo.jpg');
}

function draw() {
    fill("white");
    ellipse(x, 100, 100);
    fill("black");
    text("Hover over to open", x, 100);
    textAlign(CENTER);
    x += speed;
}