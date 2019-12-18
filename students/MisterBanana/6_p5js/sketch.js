function setup() {
  createCanvas(800, 800);
  background(103, 128, 130);
}

function draw() {
  //room
  noFill()
  
  background(76, 97, 97)
   stroke("white")
  strokeWeight(6)
  for(var i = 0; i < 20; i++){
    star2(randX,randY);
    var randX = floor(random(50,350));
    var randY = floor(random(100,350));
    frameRate(6)
  }
  
 
  stroke(230, 244, 245)
  strokeWeight(8)
  line(0,0,200,200)
  line(800,0,600,200)
  line(0,800,200,600)
  line(600,600,800,800)
  square(200,200,400)
  
  //bed1
  strokeWeight(9)
  rect(100,650,100,50)
  line(100,650,200,550)
  line(200,650,290,550)
  line(200,700,290,600)
  line(200,550,290,550)
  line(290,550,290,600)

  //pillow
  fill(193, 212, 212);
  stroke(230, 244, 245)
  beginShape();
  vertex(200,550);
  vertex(170,580);
  vertex(260,580);
  vertex(285,550)
  endShape();
  
  
  //bed2
  strokeWeight(9)
  noFill()
  rect(600,650,100,50)
  line(700,650,600,550)
  line(600,700,510,600)
  line(510,600,510,550)
  line(510,550,600,550)
  line(600,650,510,550)
  
  //Pillow2
  beginShape()
  fill(193, 212, 212);
  stroke(230, 244, 245)
  strokeWeight(9)
  vertex(600,550);
  vertex(630,580);
  vertex(540,580);
  vertex(510,550);
  endShape()
  
  shelf();
  
  windowman();
  push();
  translate(250,0);
  windowman();
  pop();
  
  overWindow();
  
  
}

function shelf(){
  fill(193, 212, 212)
  strokeWeight(9)
  line(350,450,450,450)
  line(350,500,450,500)
  line(350,550,450,550)
  strokeWeight(5)
  square(370,480,20)
  rect(400,530,30,15)
  
  //flashlight
  push()
   fill(245, 236, 66, 100)
  noStroke()
  circle(mouseX, mouseY, 300);
  pop()
}

function overWindow(x,y){
if (mouseX > 225 && mouseX < 325 && mouseY > 415 && mouseY < 515) 
  windowText()

if(mouseX > 170 && mouseX < 285 && mouseY > 550 && mouseY < 580)
  bedText()
  
if(mouseX > 510 && mouseX < 630 && mouseY > 550 && mouseY < 580)
  bedText2()

if(mouseX > 150 && mouseX < 250  && mouseY > 150 && mouseY < 250)
  enzymes()
}



windowText = function(){
  let s = 'window'
  fill(50);
  textFont('monospace')
  textSize(25)
  text(s, 230, 380, 100, 100)
}

bedText = function(){
  let s = 'There is somewhat of a person here'
  fill(50);
  textFont('monospace')
  textSize(15)
  text(s, 300, 550, 100, 100)
}

bedText2 = function(){
  let s = 'blood in the room'
  fill(50);
  textFont('monospace')
  textSize(15)
  text(s, 425, 550, 100, 100)
}

enzymes = function(){
  let s = 'Bad Enzymes'
  fill(50);
  textFont('monospace')
  textSize(20)
  text(s, 200, 200, 100, 100)
}




function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function star2(x, y){
  push();
  scale(0.20);
  translate(x*6, y*5);
 rotate(PI / 3.0);
  star(0, 0, 70, random(100,200), 15);
  pop();
}

function windowman(){
  
  if(hour() <= 7){
    fill(39, 54, 61);
  }
  else if(hour() >= 8 && hour() <= 17){
    fill(131, 145, 150);
  }
  else if(hour() >= 18 && hour() <= 20){
    fill(78, 83, 105);
  }
  else if(hour() >= 19 && hour() <= 24){
    fill(39, 54, 61);
  }
  
  strokeWeight(6)
  square(225,415,100)
  line(275,515,275,415)
  line(325,470,225,470)
}