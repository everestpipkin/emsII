var XValue = 200

var img

var colorChangeR = 153
var colorChangeG = 76
var colorChangeB = 0
var colorCap = 1
var colorSpeedR = 12
var colorSpeedG = 6

var ranR1
var ranB1
var ranG1
var ra9nR2
var ranB2
var ranG2

var randomWalkState = true;
var bouncingState = false;
var stopState = false;

var movementPolarity = 1;
var speed = 2;

var xPosFly = 200;
var yPosFly = 200;

function preload () {
  img = loadImage('https://i.imgur.com/M8sZbCo.gif');
  img2 = loadImage('https://i.imgur.com/runDof2.png');
  img3 = loadImage('https://i.imgur.com/IrqA3Ik.png');
  img4 = loadImage('https://i.imgur.com/8uXV3Uh.png');
  //img = createImg("https://i.imgur.com/M8sZbCo.gif");
}


function setup() {
  createCanvas(600,500);
  ranR1 = random(255,152);
  ranG1 = random(255,0);
  ranB1 = random(152,76);
  ranR2 = random(152,0);
  ranG2 = random(255,0);
  ranB2 = random(255,76);
  
  var button = createButton('Change Color');
  button.mousePressed(reset)
  
  function mouseClicked (){

  if (randomWalkState == true){
    hide();
  }
  else if (bouncingState == true){
    hide();
  }
  else if (stopState == true){
    hide();
  }
  
}
}

function draw(){
  background(220);
  
  var hr = hour();
  var mn = minute();
  var sc = second();
  
  
  
  if (colorChangeR == 255) {
  colorCap = -1
  } 
  else if (colorChangeR == -255) { 
  colorCap = 1
  }
  else {
  }
  
  if (colorChangeG == 76) {
  colorCap = -1
  } 
  else if (colorChangeG == -76) { 
  colorCap = 1
  }
  else {
  }
  
  
  colorChangeR = colorChangeR + colorSpeedR * colorCap;
  colorChangeG = colorChangeG + colorSpeedG * colorCap;
  
  
  noStroke();
  drawQuad(0,0,0,65,50,525,50,525,380,65,380); //backWallFlat
  
  noStroke();
  drawQuad(hr,mn,sc,0,0,600,0,525,50,65,50); //roomTop
  noStroke();
  drawQuad(hr,mn,sc,0,0,0,450,65,380,65,50); //roomLeft
  noStroke();
  drawQuad(hr,mn,sc,525,50,600,0,600,450,525,380); //roomRight
  noStroke();
  drawCave(colorChangeR+102,colorChangeG+52,0,0,0,0,0);
  drawCave(colorChangeR+51,colorChangeG+26,0,0,0,60,80);
  drawCave(colorChangeR,colorChangeG,0,0,0,110,110);
  drawCave(colorChangeR-51,colorChangeG-25,0,0,0,170,140);
  drawCave(colorChangeR-66,colorChangeG-43,0,0,0,230,170);
  drawCave(colorChangeR-102,colorChangeG-51,0,0,0,300,200);
  drawCave(colorChangeR-153,colorChangeG-76,0,0,0,340,230);
  
  noStroke();
  drawQuad(ranR1,ranG1,ranB1,65,380,525,380,600,450,0,450); //roomBottom
  noStroke();
  drawQuad(ranR2,ranG2,ranB2,600,500,0,500,0,450,600,450); //roomFlat
  
  if (randomWalkState == true){
    randomWalk();
  }
  else if (bouncingState == true){
    bouncing();
  }
  else if (stopState == true){
    stop();
  }



  
  choice();
  //noStroke();
  //fill(ranR,ranG,ranB);
  //square(110,110,110,110);
  //print(colorChangeR)
  //print(colorChangeG)
}

function reset () {
  ranR1 = random(255,152);
  ranG1 = random(255,0);
  ranB1 = random(152,76);
  ranR2 = random(152,0);
  ranG2 = random(255,0);
  ranB2 = random(255,76);
}

function drawQuad(r,g,b,x1,y1,x2,y2,x3,y3,x4,y4) {
  
  stroke(colorChangeR+ranR1,colorChangeG+ranG1,ranB1);
  strokeWeight(5);
  fill(r,g,b);
  quad(x1,y1,x2,y2,x3,y3,x4,y4);
}

function drawCave(r=colorChangeR*1,g=colorChangeG*1,b=colorChangeB*1,x,y,X,Y) {
  
 fill(r,g,b);
 ellipse(300+x,210+y,550-X,400-Y);
 noStroke();
}  


function randomWalk(){
  
  xPosFly = xPosFly + random(-1,1)*speed;
  yPosFly = yPosFly + random(-1,1)*speed;
  
  image(img, xPosFly-275, yPosFly-240)
}

function stop(){
  
  xPosFly = xPosFly;
  yPosFly = yPosFly;
  
  image(img2, xPosFly-275, yPosFly-240)
}

function hide(){
  
  xPosFly = xPosFly;
  yPosFly = yPosFly;
  
  circle(xPosFly, yPosFly,50)
}

function bouncing(){
  
  if (xPosFly > width){
    movementPolarity = -1;
  }
  else if (xPosFly < 0) {
    movementPolarity = 1;
  }
  
  xPosFly = xPosFly + speed * movementPolarity;
  
  circle(xPosFly, yPosFly,50)

}


function choice(){

if (random()>0.95){
  
  bouncingState = !bouncingState
}

  if (random()>0.95){
  randomWalkState = !randomWalkState
}
  
  if (random()>0.95){
  stopState = !stopState
}
  
  
  //line(93,109,118,98)
  //line(118,98,92,53)
  //line(92,53,132,72)
  //line(132,72,159,42)
  //line(159,42,184,79)
  //line(184,79,202,57)
  
}