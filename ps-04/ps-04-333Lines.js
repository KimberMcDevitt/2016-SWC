var c = document.getElementById("canvasElm");
var ctx = c.getContext("2d");
ctx.beginPath();
var y = 20;
//ctx.moveTo(10,10);
for (var x = 10; x<=330; x+=10){
   ctx.moveTo(10,x);
   ctx.lineTo(30,x+10); 
   ctx.moveTo(40,x+10);
   ctx.lineTo(60,x);
   ctx.moveTo(70,x);
   ctx.lineTo(90,x+10);
   ctx.moveTo(100,x+10);
   ctx.lineTo(120,x);
   ctx.moveTo(130,x);
   ctx.lineTo(150,x+10);
   ctx.moveTo(160,x+10);
   ctx.lineTo(180,x);
   ctx.moveTo(190,x);
   ctx.lineTo(210,x+10);
   ctx.moveTo(220,x+10);
   ctx.lineTo(240,x);
   ctx.moveTo(250,x);
   ctx.lineTo(270,x+10);
   ctx.moveTo(280,x+10);
   ctx.lineTo(300,x);
   ctx.lineWidth=5;
}
ctx.stroke();
