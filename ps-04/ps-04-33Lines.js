var myCanvas = document.getElementById('canvasElm');
var drawingPad = myCanvas.getContext('2d');

var numLines = 33;
var cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
for (var y = 10; y<10*(numLines+1); y+=10){
  cx.moveTo(10+y,y);
  cx.lineTo(200,y);
}
cx.stroke();
