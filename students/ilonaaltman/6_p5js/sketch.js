

let memory; // of my grandma and my family making dumplings

function preload() {
    let memoryPlace = "https://i.imgur.com/3SFfZCZ.jpg";
    memory = loadImage(memoryPlace);
}

function setup() {
    createCanvas(memory.width, memory.height);
    memory.loadPixels();
    noStroke();
}

function draw() {
    background(255,255,255);
    remembering();
    forgetting(mouseX,mouseY);
    
}

function imagineMemory (x,y) {
    ellipse(x + random(-1, 3), y + random(-1, 3), random(0,1), 1);
}

function forgetting (x, y) {
    push();
    translate(x, y);
    ellipseMode(CENTER);
    fill(255,255,255);
    ellipse(0,0,80,80);
    pop();
}


function remembering () {
    var s = map(second(), 0, 60, 0, 50); // the way a memory is colored depends on the time 
    var h = map(hour(), 0, 12, 0, 50);
    var d = map(day(), 0, 31, 0, 50);

    for (var x = 0; x < width + 10; x = x + 2) {
        for (var y = 0; y < height + 10; y = y + 2) {

            let pixelColorXY = memory.get(x, y);
            let threshold = 17;

            if (brightness(pixelColorXY) >= 0 & brightness(pixelColorXY) <= threshold) {
                fill(s,s-100,s+100); //reddish
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold  & brightness(pixelColorXY) <= threshold * 1.6) {
                fill(245,147,s); //orangish
                imagineMemory(x,y);
            }  else if (brightness(pixelColorXY) >= threshold * 2 & brightness(pixelColorXY) <= threshold * 3) {
                fill(100+d,100+h,s);
                imagineMemory(x,y);
            }  else if (brightness(pixelColorXY) >= threshold * 3 & brightness(pixelColorXY) <= threshold * 4) {
                fill(180,d,d/2);//darkish red
                imagineMemory(x,y);
            }  else if (brightness(pixelColorXY) >= threshold * 4 & brightness(pixelColorXY) <= threshold * 4.5) {
                fill(0,0,0); // yellow
                imagineMemory(x,y);
            }  else if (brightness(pixelColorXY) >= threshold * 5 & brightness(pixelColorXY) <= threshold * 6) {
                fill(180,30,s);// dark pinkish
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold * 6 & brightness(pixelColorXY) <= threshold * 7) {
                fill(120,h,30); //brownish
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold * 7 & brightness(pixelColorXY) <= threshold * 7.75){
                fillrgb(62,120,118); // blueish greenish
                imagineMemory(x,y);
            } else if(brightness(pixelColorXY) >= threshold * 8 & brightness(pixelColorXY) <= threshold * 9){
                fill(20,38,38);//dark green
                imagineMemory(x,y);
            } else if(brightness(pixelColorXY) >= threshold * 9 & brightness(pixelColorXY) <= threshold * 10){
                fill(10,116,255); //blue
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold * 10 & brightness(pixelColorXY) <= threshold * 11){
                fill(255,163,206); //pink
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold * 11 & brightness(pixelColorXY) <= threshold * 12){
                fill(255 - d, 255, 255);
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold * 12 & brightness(pixelColorXY) <= threshold * 13){
                fill(255 - d, 255, 255);
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold * 13 & brightness(pixelColorXY) <= threshold * 14){
                fill(255 - d, 255 - s, 255 - h);
                imagineMemory(x,y);
            } else if (brightness(pixelColorXY) >= threshold * 14 & brightness(pixelColorXY) <= threshold * 15){
                fill(255 - s, 255 - d, 255 - h);
                imagineMemory(x,y);
            }
        }
    }
}

    