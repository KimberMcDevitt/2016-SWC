var myCanvas = document.getElementById('canvasElm');
var drawingPad = myCanvas.getContext('2d');

var numLines = 330;
var cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
for (var y = 10; y<=numLines*5; y+=5){
  cx.moveTo(10+y,y);
  cx.lineTo(200,y);
}
cx.stroke();
