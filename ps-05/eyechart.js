var myCanvas = document.getElementById('canvasEye');
var drawingPad = myCanvas.getContext('2d');

var cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
var rotation = 0;

var drawE1 = function (Col, Row, lineLength) {

  cx.strokeStyle="#FF0000";
  cx.lineWidth=15;
  cx.moveTo (Col,Row);
  cx.lineTo(Col+lineLength, Row);
  cx.moveTo(Col,Row);
  cx.lineTo (Col,Row+lineLength);
  cx.lineTo(Col+lineLength, Row+lineLength);
  cx.moveTo(Col,Row+lineLength/2)
  cx.lineTo(Col+lineLength,Row+lineLength/2);
  cx.stroke ();

}

var drawE2 = function (Col, Row, lineLength) {

  cx.strokeStyle="#017464";
  cx.lineWidth=15;
  cx.moveTo (Col,Row);
  cx.lineTo(Col+lineLength, Row);
  cx.lineTo(Col+lineLength, Row+lineLength);
  cx.moveTo(Col,Row+lineLength/2)
  cx.lineTo(Col+lineLength,Row+lineLength/2);
  cx.moveTo(Col+lineLength,Row+lineLength);
  cx.lineTo (Col,Row+lineLength);
  cx.stroke ();

}

var drawE3 = function (Col, Row, lineLength) {

  cx.strokeStyle="#F7820C";
  cx.lineWidth=15;
  cx.moveTo (Col,Row);
  cx.lineTo(Col, Row+lineLength);
  cx.lineTo(Col+lineLength, Row+lineLength);
  cx.lineTo(Col+lineLength,Row);
  cx.moveTo(Col+lineLength/2,Row+lineLength);
  cx.lineTo (Col+lineLength/2,Row);
  cx.stroke ();

}

cx.beginPath();   
for (var C = 1; C<6; C+=1){
      for(var R = 1; R<5; R++){
        var size = 100-(20*R);
        var colAdj = C*2*size;
        var rowAdj = R*150;
        var padding = size;
        var testCol = C % 2 ;
        var int = parseInt((Math.random() * (7 - 1 + 1)), 10) + 1;
        if (int == 1 || int==3 ){
          drawE1(colAdj, rowAdj+size, size);
        } else {
          if(int == 2 || int == 4){
             drawE2(colAdj,rowAdj+size,size);
        } else {
             drawE3(colAdj,rowAdj+size,size);
        }}
        
      }
}
