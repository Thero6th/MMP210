/*skateguy variable
*/

var x = 250;
var y = 250;
var eyeSize = 50;

function setup() {
    createCanvas(500, 500);
}

function draw() {
//eyes
    background("#e2d116");
    fill("#c41da2");
    stroke("#3acde8");
    strokeWeight(10);
    ellipse(150,225,eyeSize,eyeSize);
    ellipse(350,225,eyeSize,eyeSize);
//mouth
    fill("#FF0000");
    noStroke();
    ellipse(x,350,100,100);
//throat
    fill("#808080");
    noStroke();
    ellipse(x - 20,370,50,50);
//face
    noFill();
    stroke("#FF0000");
    strokeWeight(20);
    ellipse(x-100,y,500,500);
//variables
    fill("#3acde8")
    textSize(30);
    textFont("Verdana");
    textStyle(ITALIC);
    text("Variables help bring unity!", x-200, 100);
}