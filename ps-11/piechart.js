// base text inspired by https://gist.github.com/enjalot/1203641

var w = 250;                            //width
var h = 250;                            //height
var r = 100;                             //radius

color = d3.scale.category20c();     //builtin range of colors


statedata = [{"state": "CA", "child":3, "teenager":0, "adult":0,"family":0, "total":3},
             {"state": "DE", "child":0, "teenager":0, "adult":3,"family":0, "total":3},
             {"state": "GA", "child":3, "teenager":0, "adult":0,"family":0, "total":3},
             {"state": "MA", "child":0, "teenager":0, "adult":0,"family":5.25, "total":5.25},
             {"state": "MD", "child":0, "teenager":0, "adult":0.5,"family":4, "total":4.5},
             {"state": "NJ", "child":2.5, "teenager":3, "adult":3.5,"family":0, "total":9},
             {"state": "OH", "child":0, "teenager":0, "adult":0,"family":4.25, "total":4.75},
             {"state": "PA", "child":1.5, "teenager":0, "adult":0,"family":0, "total":1.5},
             {"state": "TX", "child":0.25, "teenager":0, "adult":0,"family":0, "total":0.25},
             {"state": "VA", "child":1.5, "teenager":4, "adult":0,"family":11.5, "total":17}]


function buildPie (data,state){
   //console.log(data,state);
    var vis = d3.select("body")
        .append("svg:svg")          //create the SVG element inside the <body>
        .data([data])               //associate our data with the document
        .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
        .attr("height", h)
        .append("svg:g")            //make a group to hold our pie chart
        .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius
    
    vis.append("text")
        .attr("x",100)
        .attr("y",100)
        .attr("text-anchor", "middle")  
        .text(state)

      
    var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
        .outerRadius(r);
    
    var pie = d3.layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array
    
    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
        .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
        .attr("class", "slice");    //allow us to style things in the slices (like text)
    
        arcs.append("svg:path")
        .attr("fill",function(d, i) { return data[i].color; } )  //set the color for each slice to be chosen from the color function defined above
        .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function
        arcs.append("svg:text")                                     //add a label to each slice
            .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return data[i].label; });        //get the label from our original data array
  
  
        
}

for (i=0; i<statedata.length;i++){
  data = [];
//  console.log(statedata[i].state);
  childpct= (statedata[i].child/statedata[i].total)*100;
  if (childpct !== 0){
    data = data.concat([{"label":"child", "value":childpct, "color":"#6A4C93"}])};
  
  teenpct = (statedata[i].teenager/statedata[i].total)*100;
  if (teenpct !== 0){
    data = data.concat([{"label":"teenager", "value":teenpct, "color":"#8AC926"}])};
  
  adultpct= (statedata[i].adult/statedata[i].total)*100;
  if (adultpct !== 0){
    data = data.concat([{"label":"adult", "value":adultpct, "color":"#FFCA3A"}])};
  familypct = (statedata[i].family/statedata[i].total)*100;
  if (familypct !== 0){
    data = data.concat([{"label":"family", "value":familypct,"color":"#FF5953"}])};
//  console.log(data,statedata[i].state);
  buildPie(data,statedata[i].state);

  
}
