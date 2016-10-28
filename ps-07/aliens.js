var ctx = document.getElementById('canvasOI').getContext('2d');

var ship = function (){
  ctx.beginPath();
  ctx.moveTo (100,400);
  ctx.lineTo(50,500);
  ctx.lineTo(150,500);
  ctx.lineTo(100,400);
  ctx.closePath();
  ctx.lineWidth = 30;
  ctx.strokeStyle = "#666666";
  ctx.stroke();
  ctx.fillStyle - "#666666";
  ctx.fill();
  
  
}

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

var bullet = function (){
  // clear the rectangle
  // in a while loop and while Y > 1 
  // move the rectangle up by a specified amount
  
     ctx.fillRect(90,275,25,75);  
     ctx.strokeRect(50,50,50,50);
}

var draw = function (x,y){
  ctx.fillRect(x,y,2,2);
}

var mouseMoveHandler = function (event){
  //draw(event.pageX, event.pageY);
  //$('#mouseInfo').text(event.pageX);
  
  // draw the ship
  ship();
  
  // draw the aliens in two rows of 5
  alien();
  
  // draw the bullet
  bullet();
}

document.addEventListener('mousemove',mouseMoveHandler);


