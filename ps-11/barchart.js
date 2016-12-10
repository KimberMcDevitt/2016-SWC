var dataArray = [5,11,18];
//var dataAddresses = [1,0.25,0.5,2,3,1,1,0.5,2.5,4,3,3,2,1,0.5,0.5,3,1,4.75,11.25,1,4.25];
//var dataAddressesText = ["GA","TX","PA","GA","CA","PA","VA","VA","NJ","VA","NJ","DE","NJ","NJ","NJ","MD","MD","MD","OH","VA""MA","MA"];
var dataStates = [17,9,5.25,4.75,4.5,3,3,3,1.5,0.25];
var dataStatesText = ["VA","NJ","MA","OH","MD","CA","DE","GA","PA","TX"];
//var dataTitleText = ["Where in the World is Kim McDevitt?","How Many Years Did She Stay?"]
var dataTitleText = "";
var dataAxisText = [5,10,15,20];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

var moveOver = 80

svg.selectAll("rect")
   .data(dataStates)
   .enter().append("rect")
   .attr("fill","#4F6D7A")
   .attr("height",function (d,i){return d*15;})
   .attr("width","50")
   .attr("x", function (d,i){ return moveOver+60*i;})
   .attr("y",function (d,i){ return 500-(d*15)});

newX=95;
svg.append("text").selectAll("tspan")
  .data(dataStatesText).enter().append("tspan")
  .attr("x", function(d,i){return newX+60*i;})
  .attr("y",function(d,i){return 525})
  .attr("fill","#1D282D")
  .attr("text-anchor","start")
  .attr("dominant-baseline","middle")
  .text(function(d){return d;})

titleY=150;
svg.append("text").selectAll("tspan")
  .data(dataTitleText).enter().append("tspan")
  .attr("x", newX+100)
  .attr("y", function(d,i){return titleY+(i*30);})
  .attr("text-anchor","start")
  .attr("dominant-baseline","middle")
  .attr("font-size","25")
  .text(function(d){return d;})

var lineTop = 200
svg.append("line")
  .attr("x1",moveOver-20)
  .attr("y1",500)
  .attr("x2",moveOver-20)
  .attr("y2",lineTop)

svg.append("line")
  .attr("x1",50)
  .attr("y1",425)
  .attr("x2",70)
  .attr("y2",425)

svg.append("line")
  .attr("x1",50)
  .attr("y1",350)
  .attr("x2",70)
  .attr("y2",350)

svg.append("line")
  .attr("x1",50)
  .attr("y1",275)
  .attr("x2",70)
  .attr("y2",275)

svg.append("line")
  .attr("x1",50)
  .attr("y1",200)
  .attr("x2",70)
  .attr("y2",200)

newY=500;
svg.append("text").selectAll("tspan")
  .data(dataAxisText).enter().append("tspan")
  .attr("x", 45)
  .attr("y", function(d,i){return newY-75-(75*i);})
  .attr("fill","#1D282D")
  .attr("text-anchor","end")
  .attr("dominant-baseline","middle")
  .text(function(d){return d;})
