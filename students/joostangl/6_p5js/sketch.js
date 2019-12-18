let x = 1
let y = 1
let easing = 0.2
let a;
let b;
let c;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  frameRate();
  a = width
  b = width
  c = width
} 

function draw() { 
  var color1 = color(350-mouseY, 350-mouseY,120);
  var color2 = color(204, 101, 30);
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
  
  fill(255,255,255);
  noStroke();
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 66, 66);
  
  fill(255,255,255)
  ellipse(300,450-mouseY,100,100)
  
  
  var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
  }
  ellipse(100 ,100, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
  
  fill(32-mouseY*0.053,93-mouseY*0.156,40-mouseY*0.0666)
  triangle(c-200,120,c-500,300,c,300);
  
  c = c - 0.5
  if (c < 0) {
    c = width+1400
  }
  
  push();
  strokeWeight(0.5);
  stroke(8);
  noFill();
  line(1100,170,0,170)
  line(1100,200,0,200)
  line(1100,230,0,230)
  
  fill(0,0,0)
  rect(0,300,windowWidth,150)
  
  
  
  fill(0,0,0);
  rect(b-200,150,100,160);
  rect(b-500,130,60,180);
  rect(b-215,170,10,50);
  
  b = b - 2;
  if (b < 0) {
    b = width+500
  }
  rect(a,150,5,200)
  rect(a-5,140,15,10)
  a = a - 5;
  if (a < 0) {
    a = width
    }  
  
  rect(300,250,45,40)
  rect(250,270,50,20)
  circle(330,292,18)
  circle(270,292,18)
  fill(204-mouseY, 181-mouseY, 30)
  rect(320,255,20,15)
  
  
  }


   


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == "Y") {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == "X") {  // Left to right gradient
    for (var j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}

