var x1 =0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var noneFlag = 0;
function setup() {
  // set canvas to window size

var width = myCanvas.offsetWidth;
 var sketchCanvas = createCanvas(width,700);
 sketchCanvas.parent("myCanvas");
}

function draw() {
  // background('beige');
  fill(245,245,220,50)
  rect(0,0,width,height);

 
  if (touches.length<3){
   
  for (var i = 0; i < touches.length; i++) {
    fill('blue');
    noStroke();
    ellipse(touches[i].x, touches[i].y, 50, 50);
  }
  }
  else{
    for (var i = 0; i < 2; i++) {
      fill('blue');
      noStroke();
    ellipse(touches[i].x, touches[i].y, 50, 50);
  }
  }

  if (touches.length>0){
      x1 = touches[0].x;
      noneFlag = 0;
  }
  else{
    noneFlag = 1;
  }
  Pd.send('freq',[parseFloat(x1)])


}

// do this prevent default touch interaction
function mousePressed() {
  return false;
}

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});

     webPdExamples.init()


      var patch
      $.get('pd/main.pd', function(mainStr) {
        // Loading the patch
        patch = Pd.loadPatch(mainStr)

        webPdExamples.patchLoaded(mainStr)
      })