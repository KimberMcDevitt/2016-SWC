var c = document.getElementById("canvasElm");
var ctx = c.getContext("2d");
ctx.beginPath();
var y = 20;
//ctx.moveTo(10,10);
for (var x = 10; x<=301; x+=10){
   ctx.moveTo(10,x);
   ctx.lineTo(90,x); 
   ctx.moveTo(100,x);
   ctx.lineTo(190,x);
   ctx.moveTo(200,x);
   ctx.lineTo(290,x);
   ctx.lineWidth=5;
}
ctx.stroke();
