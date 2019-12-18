function setup() {
  createCanvas(400, 400);
  
  //circle
    r = random(255);
  g = random(255);
  b = random(255);
  
  i = width / 2;
  r = height;
  
}

//ditto
var ditto;
function preload() {
ditto= loadImage("https://img.pngio.com/ditto-mugen-database-fandom-powered-by-wikia-ditto-png-240_240.png");
}


var k = 160;
var j = 155;

var dittoX=150;
var dittoY=150;

var dittoSquare = 120;

let cOffset = 0;
function draw() {
   
  const inc = height/100;
    colorMode(HSB);

    for(let y = 0; y < height; y += inc) {
        let h = y / height * 360;
        fill(abs(h-cOffset)%360, 100, 100);
        noStroke();
        rect(0, y-inc, width, y);
    }

    cOffset += 5;
  
  stroke ("white");
  strokeWeight (1);
  makeLines(50, 50);
  
  
  fill("blue");
  stroke ("purple");
  strokeWeight (20);
  rect (60,60,60,60);
  
   fill("purple");
  stroke ("cyan");
  strokeWeight (20);
  rect (100,100,60,60);
  
  fill("blue");
  stroke ("purple");
  strokeWeight (20);
  rect (140,140,60,60);
  
  fill("purple");
  stroke ("cyan");
  strokeWeight (20);
  rect (180,180,60,60);
  
  fill("blue");
  stroke ("purple");
  strokeWeight (20);
  rect (220,220,60,60);

  
  fill("purple");
  stroke ("cyan");
  strokeWeight (20);
  rect (260,260,60,60);

    for (x=0; x<10; x++){
    for (y=0; y<10; y++){
	square(mouseX+x, mouseY+y,10);
    }
    }
  
//ditto
  image(ditto, 10, 10, ditto.width/2, ditto.width/2);
  image(ditto, 10, 270, ditto.width/2, ditto.width/2);
  image(ditto, 270, 10, ditto.width/2, ditto.width/2);
  image(ditto, 270, 270, ditto.width/2, ditto.width/2);
  image(ditto, dittoX, dittoY, ditto.width/2, ditto.width/2);


//circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(270, 10, 50, 50);
  ellipse(10, 10, 50, 50);
  ellipse(10, 270, 50, 50);
  ellipse(270, 270, 50, 50);
  
  stroke(50);
  fill("#00fff2");
  ellipse(i, r, 24, 24);
  
   i = i + random(-1, 1);
  r = r - 1;
  
  if (r < 0) {
    r = height;
  }
  
  fill("magenta");
  ellipse(k,j,50,50);
  if (k >= 400){
   k = 0; 
  }
}

//lines
function makeLines(lineWidthx, lineWidthy){
for (x=0; x<400; x = lineWidthx+x){
  line(x,0,x,400)
  
for (y=0; y<400; y = lineWidthy+y){
  line(0,y,400,y)
}
}

}


  //circle
function mousePressed() {
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
  
function keyPressed() {
  if (keyCode === UP_ARROW) {
    j = j - 10;
  } 
  else if (keyCode === DOWN_ARROW) {
   j = j + 10;
  }
  if (keyCode === LEFT_ARROW) {
    k = k - 5;
  }
  else if (keyCode === RIGHT_ARROW) {
    k = k + 5;
  }
}

function mouseDragged(){
if (mouseX > dittoX && mouseX < dittoX + dittoSquare && mouseY > dittoY && mouseY < dittoY + dittoSquare) {    
  dittoX=mouseX-dittoSquare/2;
  dittoY=mouseY-dittoSquare/2;
  }
}