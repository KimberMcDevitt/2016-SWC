var ctx = document.getElementById('canvasOI').getContext('2d');

var alien = function (){
 
  for (var R = 0; R<5; R++){
     var x = 25 + (R*175);
     var y = 45 + (R*175);
     var z = 50 + (R* 175);
     ctx.fillRect(x,25,100,100);  
     ctx.clearRect(y,45,60,60);
     ctx.strokeRect(z,50,50,50);
  }
} 
  
var ship = function (x,y){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x-50,y+100);
  ctx.lineTo(x+50,y+100);
  ctx.lineTo(x,y);
  ctx.closePath();
  ctx.lineWidth = 30;
  ctx.strokeStyle = "#666666";
  ctx.stroke();
  ctx.fillStyle = "#000000";
  ctx.fill();  
  }

var clearShip = function (x,y){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x-50,y+100);
  ctx.lineTo(x+50,y+100);
  ctx.lineTo(x,y);
  ctx.closePath();
  ctx.lineWidth = 30;
  ctx.strokeStyle = '#5A5FF2';
  ctx.stroke(); 
  ctx.fillStyle = '#5A5FF2';
  ctx.fill();  
}

var shoot = function (x){
  var elem = document.getElementById("bullet");
  var posUp = 450;
  //var posRight = 700;
  var posRight = x+300;
  var id = setInterval(frame, 25);
  function frame() {
    if (posUp == -50) {
      clearInterval(id);
    } else {
      posUp=posUp-25;
      elem.style.top = posUp + 'px';
      elem.style.left=posRight + 'px';
    }
  }
}

var moveRight= function(x,y){
  clearShip(x-50,y);
  x=x+50;
  ship(x,y);
 return x;
}

var moveLeft= function(x,y){
  clearShip(x+50,y);
  x=x-50;
  ship(x,y);
 return x;
}

alien();

var shipRight = 100;
var shipTop = 400;
var i = 0;
//ship(shipRight,shipTop);
while (i < 600){
  //console.log("the number is " + shipRight);
  i=i+100;
  document.getElementById("shooter").addEventListener("click", function(){shoot(shipRight)},false);
  document.getElementById("left").addEventListener("click", function(){moveLeft(shipRight+i,shipTop)},false);
  document.getElementById("right").addEventListener("click", function(){moveRight(shipRight+i,shipTop)},false);
}

