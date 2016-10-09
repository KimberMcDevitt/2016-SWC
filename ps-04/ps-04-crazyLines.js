var c = document.getElementById("canvasElm");
var ctx = c.getContext("2d");
ctx.beginPath();
for (var x = 0; x<=333*10; x+=10){
ctx.moveTo(0+x, 0-x);
ctx.lineTo(500-x, 550+x);
ctx.lineWidth=5;
}
ctx.stroke();
