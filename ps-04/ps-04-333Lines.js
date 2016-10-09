var c = document.getElementById("canvasElm");
var ctx = c.getContext("2d");
ctx.beginPath();

for (var x = 0; x<=333; x+=1){
   y=x*10;
   ctx.moveTo(100-y,100+y);
   ctx.lineTo(400+y,400-y);
ctx.lineWidth=5;
}
ctx.stroke();
