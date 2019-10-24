/* self portrait
*/

function setup() {
    createCanvas(500, 500);
}

function draw() {
//eyes
    background("#e2d116");
    fill("#c41da2");
    stroke("#3acde8");
    strokeWeight(10);
    ellipse(200,125,50,50);
    ellipse(300,125,50,50);
//mouth
    fill("#FF0000");
    noStroke();
    ellipse(250, 200, 50, 50);
//head
    noFill();
    stroke("#FF0000");
    strokeWeight(20);
    ellipse(250,150, 200, 200);
//body
    noFill();
    stroke("#FF0000");
    strokeWeight(10);
    rect(200, 250, 100, 200);
//arms
    
}