
var myCanvas = document.getElementById('canvasElm');
var drawingPad = myCanvas.getContext('2d');

var numLines = 33;
var cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
for (var y = 1; y<330; y+=1){
  cx.moveTo(10+y*10,y*10);
  cx.lineTo(200,y*10);
}

cx.stroke();
