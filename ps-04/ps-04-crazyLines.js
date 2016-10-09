var c = document.getElementById("canvasElm");
var ctx = c.getContext("2d");
ctx.beginPath();
for (var x = 0; x<100; x+=10){
   ctx.moveTo(20+x,20);
   ctx.lineTo(20+x,200+x);
   ctx.lineTo(200+x,200+x);
   ctx.lineTo(200+x,400+x);
   ctx.lineTo(400+x,400+x);
   ctx.lineTo(400+x,500);
   ctx.lineTo(500+x,500);
   ctx.lineWidth=5;
}
ctx.stroke();
