var ctx = document.getElementById("walk").getContext("2d");

var colorBright = ["#530A6D", "#EE4266", "#FFD23F", "#3BCEAC", "#0EAD69"];
var colorMedium = ["#A179AF", "#F4869D", "#FFE284", "#82DFCA", "#65CA9F"];
var colorLight = ["#DFD2E4", "#FBDCE3", "#FFF6DC", "#DBF6EF", "#D3FOE3"];     

      

/*var beginX = 0;
var beginY = 0;*/
var beginX = ctx.canvas.width/2;
var beginY = ctx.canvas.height/2;
var drawDot = function(){
  var size = 25;
  min = Math.ceil(0);
  max = Math.floor(5);
  colorSelect = Math.floor(Math.random() * (max-min)) + min;
   
  ctx.strokeStyle='';
  
  dMin = Math.ceil(0);
  dMax = Math.floor(4);
  directionPick = Math.floor(Math.random() * (dMax-dMin)) + dMin;
  console.log(directionPick);
  if (directionPick == 0){
      beginX=beginX+10;
      } else if (directionPick ==1){
      beginX=beginX-10;
      } else if (directionPick == 2){
      beginY=beginY+10;
       } else {
       beginY=beginY-10;
  }
  
  if (beginX > 500){
    beginX = 500;
  }
  
  if (beginY > 500){
    beginY = 500;
  }
  
  if (beginX < 0){
    beginX = 0;
  }
  
  if (beginY < 0){
    beginY=0;
  }
  
  
  if (beginX >= 500){
    beginX=0;
    beginY = beginY+10;
  }
  if (beginY >=500){
    beginY =0;
  }
  if (beginY <=250 && beginX <=250) {
    ctx.fillStyle = colorLight[colorSelect];
  } else if (beginX > 250 && beginY >250) {
  ctx.fillStyle = colorLight[colorSelect];
  } else {
    ctx.fillStyle = colorBright[colorSelect];
  }
  ctx.fillRect(beginX,beginY,size,size);
}

setInterval(drawDot,100);

