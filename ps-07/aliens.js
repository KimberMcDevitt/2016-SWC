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

  


//var bullet = function (x){
   // ctx.fillRect(90,275,25,75);  
//     ctx.fillRect(x, 275,25,75);
//     ctx.strokeRect(50,50,50,50);
//}

var shoot = function (){
  var elem = document.getElementById("bullet");
  var posUp = 450;
  var posRight = 400;
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


var draw = function (x,y){
  ctx.fillRect(x,y,2,2);
}

//var mouseMoveHandler = function (event){
  //draw(event.pageX, event.pageY);
  //$('#mouseInfo').text(event.pageX);
//}

//document.addEventListener('mousemove',mouseMoveHandler);
alien();
ship(100,400);
//clearShip(100,400);
//alien();
document.getElementById("shooter").addEventListener("click", shoot);
                                                  

var shipRight = 100;
var shipTop = 400;
var i = 0;
while (i < 500){
  console.log("the number is " + shipRight);
  ship(shipRight+i,shipTop);
  i=i+50;
}

