var myCanvas = document.getElementById('canvasEye');
var drawingPad = myCanvas.getContext('2d');

var cx = document.querySelector('canvas').getContext('2d');
cx.beginPath();
var rotation = 0;

//Draw a capital E
var drawE1 = function (Col, Row, lineLength) {
  cx.lineWidth=lineLength/10;
  cx.moveTo (Col,Row);
  cx.lineTo(Col+lineLength, Row);
  cx.moveTo(Col,Row);
  cx.lineTo (Col,Row+lineLength);
  cx.lineTo(Col+lineLength, Row+lineLength);
  cx.moveTo(Col,Row+lineLength/2)
  cx.lineTo(Col+lineLength,Row+lineLength/2);
  cx.stroke ();

}

//Draw a capital E that is rotated backwards
var drawE2 = function (Col, Row, lineLength) {
  cx.lineWidth=lineLength/10;
  cx.moveTo (Col,Row);
  cx.lineTo(Col+lineLength, Row);
  cx.lineTo(Col+lineLength, Row+lineLength);
  cx.moveTo(Col,Row+lineLength/2)
  cx.lineTo(Col+lineLength,Row+lineLength/2);
  cx.moveTo(Col+lineLength,Row+lineLength);
  cx.lineTo (Col,Row+lineLength);
  cx.stroke ();

}


//Draw a capital E that is facing open up
var drawE3 = function (Col, Row, lineLength) {
  cx.lineWidth=lineLength/10;
  cx.moveTo (Col,Row);
  cx.lineTo(Col, Row+lineLength);
  cx.lineTo(Col+lineLength, Row+lineLength);
  cx.lineTo(Col+lineLength,Row);
  cx.moveTo(Col+lineLength/2,Row+lineLength);
  cx.lineTo (Col+lineLength/2,Row);
  cx.stroke ();

}

//Draw a capital E that is facing open down
var drawE4 = function (Col, Row, lineLength) {
  //cx.strokeStyle="#990CF7";
  cx.lineWidth=lineLength/10;
  cx.moveTo (Col,Row);
  cx.lineTo(Col+lineLength, Row);
  cx.lineTo(Col+lineLength, Row+lineLength);
  cx.lineTo(Col+lineLength,Row);
  cx.moveTo(Col+lineLength/2,Row+lineLength);
  cx.lineTo (Col+lineLength/2,Row);
  cx.moveTo(Col,Row);
  cx.lineTo(Col, Row+lineLength);
  cx.stroke ();

}

cx.beginPath();   
for (var C = 1; C<6; C+=1){
      for(var R = 1; R<6; R++){
        var size = 50-(5*R);
        var colAdj = C*2*size;
        var rowAdj = R*100;
        var padding = size;
        var testCol = C % 2 ;
        //randomly select a number from 1 to 10 so that the E's can be drawn randomly
        var int = parseInt((Math.random() * (7 - 1 + 1)), 10) + 1;
        if (int == 1 || int==3 ){
          drawE1(colAdj, rowAdj+size, size);
        } else {
          if(int == 2 || int == 4){
             drawE2(colAdj,rowAdj+size,size);
          } else {
            if(int  == 5 || int == 6){
               drawE3(colAdj,rowAdj+size,size);
            } else {
               drawE4(colAdj, rowAdj+size,size);
               }}
        
        }
        
      }
}
