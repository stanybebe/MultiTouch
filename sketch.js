var x1 =0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var noneFlag = 0;
function setup() {
  // set canvas to window size

var width = myCanvas.offsetWidth;
 var sketchCanvas = createCanvas(width,700, WEBGL);
 sketchCanvas.parent("myCanvas");
}

function draw() {
  background('beige');

  fill('blue');
  if (touches.length<3){
   
  for (var i = 0; i < touches.length; i++) {
    noStroke();
    ellipse(touches[i].x-width/2, touches[i].y-height/2, 50, 50);
  }
  }
  else{
    for (var i = 0; i < 2; i++) {
    noStroke();
    ellipse(touches[i].x-width/2, touches[i].y-height/2, 50, 50);
  }
  }

  if (touches.length>0){
      x1 = touches[0].x;
      noneFlag = 0;
  }
  else{
    noneFlag = 1;
  }
  textSize(50);
  text(x1, 10, 10, 70, 80);
}

// do this prevent default touch interaction
function mousePressed() {
  return false;
}

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});