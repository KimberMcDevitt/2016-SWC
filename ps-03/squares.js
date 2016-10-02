<script type="text/javascript">
    var canvas = document.getElementById('canvas');
    var drawingPad = canvas.getContext('2d');
    drawingPad.fillStyle = "hsla(0,10%,10%,1)";
    drawingPad.fillRect(0, 0, 50, 50);
    drawingPad.fillRect(50,50,50,50);
    drawingPad.fillRect(100,100,50,50);
    spot = 100;
    for (var i=0; i<=3; i+=1){
      spot = spot + 50;
      drawingPad.fillStyle = "teal";
      drawingPad.fillRect(spot,spot,50,50);
    }
    for (var i=0; i<=2; i+=1){
      spot = spot + 50;
      drawingPad.fillStyle = "silver";
      drawingPad.fillRect(spot,spot,50,50);
    }
    spotStart = 450;
    spotFinish = 0;
    drawingPad.fillStyle = "black";
    drawingPad.fillRect(450,0,50,50);
    drawingPad.fillRect(400,50,50,50);
    drawingPad.fillRect(350,100,50,50);
    spotStart=350;
    spotFinish=100;
    for (var i=0; i<=3; i+=1){
      spotStart = spotStart - 50;
      spotFinish = spotFinish + 50;
      drawingPad.fillStyle = "teal";
      drawingPad.fillRect(spotStart,spotFinish,50,50);
    }
    for (var i=0; i<=2; i+=1){
      spotStart = spotStart - 50;
      spotFinish = spotFinish + 50;
      drawingPad.fillStyle = "silver";
      drawingPad.fillRect(spotStart,spotFinish,50,50);
    }
      
  </script>
