/* final project

11.19.2019

sensor
theme
interaction
*/

var slideNumber = 0;
var totalSlides = 2;
var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

function setup() {
    createCanvas (800, 600);
}

function draw () {
    background(51);
    
    if (sliderNumber == 0) {
        fill(255, 0, 255);
        textSize(50);
        text("slide 0", width/2, height/2);
    } else if (slideNumber == 1) {
        
        fill(255, 0, 255);
        textSize(50);
        text("slide 1", width/2, height/2);
        
        /* drawing button*/
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("next", nextBtnX, nextBtnY);
    }
    
    function mousePressed() {
        var d = dist(mouseX, mouseY, nextBtnX)
    }
    
    
    
    
    
}