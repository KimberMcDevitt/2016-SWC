var c = document.getElementById("canvasElm");
var ctx = c.getContext("2d");
ctx.beginPath();
var y = 20;
//ctx.moveTo(10,10);
for (var x = 10; x<300; x+=10){
   ctx.moveTo(10,x);
   ctx.lineTo(30,x+10); 
   ctx.moveTo(30,x+10);
   ctx.lineTo(60,x);
   ctx.moveTo(60,x);
   ctx.lineTo(90,x+10);
   ctx.moveTo(90,x+10);
   ctx.lineTo(120,x);
   ctx.moveTo(120,x);
   ctx.lineTo(150,x+10);
   ctx.moveTo(150,x+10);
   ctx.lineTo(180,x);
   ctx.moveTo(180,x);
   ctx.lineTo(210,x+10);
   ctx.moveTo(210,x+10);
   ctx.lineTo(240,x);
   ctx.moveTo(240,x);
   ctx.lineTo(270,x+10);
   ctx.moveTo(270,x+10);
   ctx.lineTo(300,x);
   if (x % 2 == 0)
     //ctx.moveTo(10,10);
     ctx.lineTo(300,300);
   else;
   ctx.lineWidth=5;
}
ctx.stroke();
