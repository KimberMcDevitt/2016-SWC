var ctx = document.getElementById("snakes").getContext("2d");

var points = [];
var numPoints = 4;
var colorReds = ["#F39890","#EA4335","#80251D"];
var colorOranges = ["#FBCFB5","#F6935A","#B25A28"];
var colorGreens = ["#CFECBF","#93D56F", "#5A953A"];
var colorBlues = ["#BCCDE2","#6A8EBE", "#365681"];
var height = 500;
var width = 500;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,0%,0.04)";
  ctx.fillRect(0, 0, 500, 500);
};

var wrap = function(point) {
  if (point.x > width-10) {
    point.x = 10;
    point.y = point.y+10;
  }
  if (point.x < 10){
    point.x = width;
  }
  if (point.y > height-10) {
    point.y = 10;
    point.x = point.x-10;
  }
  if (point.y < 10) {
    point.y = height;
  }

};

var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.25) { // move up 
    p.y = p.y - speed;
  } else if (direction < 0.50) {
    p.x = p.x - speed;
  } else if (direction < 0.75) {
    p.y = p.y + speed;
  } else {
    p.x = p.x + speed;
  }
};

var makeColor = function(colors) {
  min = Math.ceil(0);
  max = Math.floor(2);
  colorSelect = Math.floor(Math.random() * (max-min)) + min;
  console.log (colors);
  if (colors === 0) {
      return colorReds[colorSelect];
  } else if (colors ===1) {
      return colorBlues[colorSelect];
  } else if (colors === 2) {
      return colorOranges[colorSelect];
  } else if (colors === 3) {
      return colorGreens[colorSelect];
  }  
};




var drawPoints = function() {
  clearScreen();

  ctx.strokeStyle = '';

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    //var hue = point.y / 5 + 100;
    move(point);
    wrap(point);
    //ctx.fillStyle = makeColor(i);  
   // ctx.fillRect(point.x, point.y, point.size, point.size);
    
    var rad = 25;
    var startAngle = 0;
    var endAngle= Math.PI*2;
    ctx.beginPath();
    //ctx.arc(point.x, point.y, rad, startAngle, endAngle, true);
   // ctx.moveTo(point.x -15, point.y-15);
    ctx.arc(point.x-15, point.y-15, rad-20, startAngle, endAngle,true);
    ctx.moveTo(point.x + 15,point.y-15);
    ctx.strokeStyle = makeColor(i); 
    ctx.stroke();
    ctx.fillStyle = makeColor(i);
    ctx.fill();
    ctx.closePath();
  }
  requestAnimationFrame(drawPoints);
};

var makePoints = function() {
  for (var i = 0; i < numPoints; i++) {
    //var size = Math.random() * 15;
    //var x = Math.random() * width;
    //var speed = 10 - size;
    var size = 10;
    var speed = 10;
    points.push({
      x: 250,
      y: 250,
      size: size,
      speed: speed      
    });
  }
};

makePoints();
requestAnimationFrame(drawPoints);
