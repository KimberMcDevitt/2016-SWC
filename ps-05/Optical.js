var myCanvas = document.getElementById('canvasOI');

var ctx = myCanvas.getContext("2d");
var rotation = 0;

ctx.lineWidth=10;
ctx.beginPath();

var drawItem = function(drop, rotation) {
  //ctx.rotate(rotation * degToRad);
  ctx.beginPath();
  ctx.moveTo(drop,20);
  ctx.bezierCurveTo(drop,100,200,100,200,drop);
  ctx.stroke();}

for (x=0; x<10; x++){
  drawItem(x*50)
}

