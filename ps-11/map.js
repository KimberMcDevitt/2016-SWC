//Map dimensions (in pixels)
var width = 1000,
    height = 600;

//Map projection
var projection = d3.geo.albersUsa()
    .scale(1217.0349143484525)
    .translate([width/2,height/2]) //translate to center the map in view

//Generate paths based on projection
var path = d3.geo.path()
    .projection(projection);

//Create an SVG
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

//Group for the map features
var features = svg.append("g")
    .attr("class","features");

//Create a tooltip, hidden at the start
var tooltip = d3.select("body").append("div").attr("class","tooltip");

//Keeps track of currently zoomed feature
var centered;

d3.json("https://kimbermcdevitt.github.io/2016-SWC/ps-11/us-states.geojson",function(error,geodata) {
  if (error) return console.log(error); //unknown error, check the console

  //Create a path for each map feature in the data
  features.selectAll("path")
    .data(geodata.features)
    .enter()
    .append("path")
    .attr("d",path)
    .on("mouseover",showTooltip)
    .on("mousemove",moveTooltip)
    .on("mouseout",hideTooltip)
    .on("click",clicked)
       loadAndDrawPointLayer("https://kimbermcdevitt.github.io/2016-SWC/ps-11/MyCities.geojson");

});

// Zoom to feature on click
function clicked(d,i) {

  //Add any other onClick events here

  var x, y, k;

  if (d && centered !== d) {
    // Compute the new map center and scale to zoom to
    var centroid = path.centroid(d);
    var b = path.bounds(d);
    x = centroid[0];
    y = centroid[1];
    k = .8 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
    centered = d; 
  
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  // Highlight the new feature
  features.selectAll("path")
      .classed("highlighted",function(d) {
          return d === centered;
      })
      .style("stroke-width", 1 / k + "px"); // Keep the border width constant

  //Zoom and re-center the map
  //Uncomment .transition() and .duration() to make zoom gradual
  features
      //.transition()
      //.duration(500)
      .attr("transform","translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")");
}


//Position of the tooltip relative to the cursor
var tooltipOffset = {x: 5, y: -25};

//Create a tooltip, hidden at the start
function showTooltip(d) {
  moveTooltip();

  tooltip.style("display","block")
      .text(d.properties.NAME);
}

//Move the tooltip to track the mouse
function moveTooltip() {
  tooltip.style("top",(d3.event.pageY+tooltipOffset.y)+"px")
      .style("left",(d3.event.pageX+tooltipOffset.x)+"px");
}

//Create a tooltip, hidden at the start
function hideTooltip() {
  tooltip.style("display","none");
}

// Load a custom point data layer created with http://geojson.io/
function loadAndDrawPointLayer(geoJasonFile) {
  d3.json(geoJasonFile, function(data) {
    console.log(data.features);
    svg.selectAll(".places")
      .data(data.features)
      .enter().append('circle')
      .attr('class', 'cities')
      .style("fill", function(d) {return d.properties['marker-color'];})
      .attr("r", 8)
      .attr("cx", function(data) {
        return projection(data.geometry.coordinates)[0];
      })
      .attr("cy", function(data) {
        return projection(data.geometry.coordinates)[1];
      });

  });
}
