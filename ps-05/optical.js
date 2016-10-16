var canvas = document.getElementById('canvasOI');
var context = canvas.getContext('2d');
var centerX = canvas.width / 4;
var centerY = canvas.height / 4;
var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#3F0367';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#3F0367';
      context.stroke();

      context.beginPath();
      context.arc(centerX*2, centerY*3, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#3F0367';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#3F0367';
      context.stroke();

      context.beginPath();
      context.arc(centerX*3, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#3F0367';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#3F0367';
      context.stroke();

// the triangle
context.beginPath();
context.moveTo(centerX, centerY);
context.lineTo(centerX*3, centerY);
context.lineTo(centerX*2, centerY*3);
context.closePath();
 
// the outline
context.lineWidth = 10;
context.strokeStyle = '#DECDFD';
context.stroke();
 
// the fill color
context.fillStyle = "#DECDFD";
context.fill();
