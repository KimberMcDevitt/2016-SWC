var c = document.getElementById("canvasElm");
var ctx = c.getContext("2d");
ctx.beginPath();
for (var x = 0; x<=330; x+=10){
ctx.moveTo(20+x,20);
ctx.lineTo(20+x,100+x);
ctx.lineTo(100+x,100+x);
ctx.lineWidth=5;
}
ctx.stroke();
