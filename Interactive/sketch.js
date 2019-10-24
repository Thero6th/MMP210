/*skateguy interactive
*/

var diam1 = 50;
var x = 250;
var y = 250;
var eyeSize = 50;

function setup() {
    createCanvas(800, 800);
}
function draw() {
//    var kick = mouseX
    var kick = map(mouseY, 0, width, 250, 450);
    var flip = map(mouseY, 0, width, 200, 450);
//eyes
    background("#e2d116");
    fill("#c41da2");
    stroke("#3acde8");
    strokeWeight(10);
    ellipse(x,225,eyeSize,eyeSize);
    ellipse(350,225,eyeSize,eyeSize);
//mouth
    fill("#FF0000");
    noStroke();
    ellipse(x+50,350, diam1, diam1);
//face
    noFill();
    stroke("#FF0000");
    strokeWeight(20);
    ellipse(x+100,y,300,300);
//torso
    noFill();
    stroke("#FF0000");
    strokeWeight(10);
    rect(x+80, y+150, 100, 180, 50);
//arm
    noFill();
    stroke("#FF0000");
    strokeWeight(10);
    rect(390, kick, 30, 100, 50);
//hand
    fill("#BEBEBE");
    stroke("#808080");
    strokeWeight("#080808");
    ellipse(405, flip, 50, 50);
}
function mousePressed() {
    if (diam1 > 50) {
        diam1 = 0;
    } else {
        diam1 = diam1 + 5;
    }
}