function setup() {
  // set canvas to window size
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('beige');

  fill('blue');
  if (touches.length<3){
  for (var i = 0; i < touches.length; i++) {
    noStroke();
    ellipse(touches[i].x, touches[i].y, 50, 50);
  }
  }
  else{
    for (var i = 0; i < 2; i++) {
    noStroke();
    ellipse(touches[i].x, touches[i].y, 50, 50);
  }
  }
}

// do this prevent default touch interaction
function mousePressed() {
  return false;
}

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});