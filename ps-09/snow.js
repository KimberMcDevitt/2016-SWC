var ctx = document.getElementById("snow").getContext("2d");

var points = [];
var numPoints = 100;
var colorSnow = ["#383F51","#DDDBF1","#3C4F76","#6290C3"];
var height = 500;
var width = 500;
var numSnow = 500;
var startOver = 0;
var counterSnow = 0;

var clearScreen = function(height) {
  ctx.fillStyle = "hsla(0,10%,0%,0.04)";
  ctx.fillRect(0, 0, 500, 500);
};

var wrap = function(point) {
  //hitSomething(point);
  if (point.x > width-10) {
    point.x = 10;
    point.y = point.y + 10;
  }
  if (point.x < 10){
    point.x = 10;
  }
  if (point.y > height-10) {
    point.y = point.y + 10;
  }
  if (point.y < 10) {
    point.y = 10;
  }

};

var hitSomething = function(point) {
  if (point.y < height){
    console.log(point.x, point.y, point.ground, "falling");
    point.ground = 0;
  } else {
    console.log(point.x, point.y, point.ground, "hit ground");
    point.ground = 1;
    window.stop();
  }

};

var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.33) {
    p.x = p.x - speed;
  } else if (direction < 0.80) {
    p.y = p.y + speed;
  } else {
    p.x = p.x + speed;
  }
  if (p.y >= height - 10) {
    p.y = p.y + 160;
  }
};

var makeColor = function(colors) {
  min = Math.ceil(0);
  max = Math.floor(3);
  colorSelect = Math.floor(Math.random() * (max-min)) + min;
  console.log (colors);
        return colorSnow[colorSelect];
};




var drawPoints = function() {
  clearScreen();

  ctx.strokeStyle = '';

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    //var hue = point.y / 5 + 100;
    move(point);
    wrap(point);

   
    var rad = 25;
    var startAngle = 0;
    var endAngle= Math.PI*2;
    ctx.beginPath();
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
    var size = 10;
    var speed = 3;
    points.push({
      x: 10*i,
      y: 10,
      size: size,
      speed: speed,
      ground: 0
    });
  }
};

makePoints();
requestAnimationFrame(drawPoints);
