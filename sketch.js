var x1 =0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var noneFlag = 0;
var noneFlag2 = 0;
function setup() {
  // set canvas to window size

var width = myCanvas.offsetWidth;
 var sketchCanvas = createCanvas(width,700);
 sketchCanvas.parent("myCanvas");
}
var mapRange = function(from, to, s) {
  return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
};
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
      y1 = touches[0].y;
      noneFlag = 0;
  }
  else{
    noneFlag = 1;
  }

  if (touches.length>1){
      x2 = touches[1].x;
      y2 = touches[1].y;
      noneFlag2 = 0;
  }

  if (touches.length!=2){
     noneFlag2 = 1;
}


  
  var x1m = mapRange ([0,width],[0,9000],x1);
  var x2m = mapRange ([0,width],[0,9000],x2);

  Pd.send('freq',[parseFloat(y1)]);
  Pd.send('freq2',[parseFloat(y2)]);
  Pd.send('filter',[parseFloat(x1m)]);
  Pd.send('filter2',[parseFloat(x2m)]);

  //if no notes are on 
  if(noneFlag == true){
   Pd.send('off',[parseFloat(1)]);
  }
  else{
    Pd.send('on',[parseFloat(1)]);
  }

  if(noneFlag2 == true){
    Pd.send('off2',[parseFloat(1)]);
   }
   else{
     Pd.send('on2',[parseFloat(1)]);
   }
  textSize(32);
  text(x1m,50,50);
  
  
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
      $.get('pd/Untitled.pd', function(mainStr) {
        // Loading the patch
        patch = Pd.loadPatch(mainStr)

        webPdExamples.patchLoaded(mainStr)
      })