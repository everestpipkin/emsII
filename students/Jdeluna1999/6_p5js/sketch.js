/*Pet Rock. 
The background color changes everytime the mouse is pressed. 
The eyebrows move based on the move the mouse movement.
A sound is made when the rock is clicked on.
The text color changes depending on the hour,
The rock moves across the page depending on the minute value of the time. */


function preload() {
img = loadImage('https://images.vexels.com/media/users/3/145831/isolated/preview/53a0234955caf282d12d7de3ca8fd084-rubble-rock-illustration-by-vexels.png')
  
}
  let osc;
let playing = false;
function setup() {
  createCanvas(800,600);
  smooth();
  r = random(255);
  g = random(255);
  b = random(255);
  t=random(100)
  h=hour()
  m=minute()
  s=random(20)
  x=5
  y=3

  
  
  osc = new p5.Oscillator();
  osc.setType('cos');
  osc.freq();
  osc.amp(0);
  osc.start();
  
  osc1 = new p5.Oscillator();
  osc1.setType('cos');
  osc1.freq(300);
  osc1.amp(0);
  osc1.start();
  
}

function draw() {
  background(r,g,b);
 
  
  var eyebrow = constrain(mouseY, 320, 335)
  
  
  fill(r+20, g, b+20)
  rect(0,300,800,600)
  
  
  
  
image(img,50+m*5,100)
  noStroke()
  fill(255)
  circle(150+m*5,350,20)
  circle(250 +m*5,350,23)
  fill(0)
  circle(150+m*5,350,10)
  circle(250+m*5,350,13)
  
  strokeWeight(5)
  stroke(1)
  line(140+m*5,330, 155+m*5, eyebrow)
  line(240+m*5,eyebrow, 255+m*5, 330)
  

  noStroke()
  fill(230+h*7,20,50,)
  textSize(32);
text('how sweet it is to be loved by you', 10, 30);
  

  

}

  function mousePressed() {

    r = random(255);
    g = random(255);
    b = random(255);
     if (mouseX > 120-50+m*5 && mouseX < 445+50+m*5 && mouseY < 450 && mouseY > 250) {
    if (!playing) {
      osc.amp(0.5, 0.05);
      playing = true;
    } else {
      osc.amp(0, 0.5);
      playing = false;
    }
     }
  }