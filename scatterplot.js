// Team heySui
// Shannon Lau and Jen Yu
// SoftDev2 pd7
// K13 - Scattered
// 2018-03-21

var data = [[1, 120], [2, 78], [3, 72], [4, 75], [5, 81.6], [6, 90], [7, 99.43], [8, 109.50], [9, 120], [10, 130.80]];

var svg = document.getElementById("svg");

var label = function(){
  var labels = d3.select("svg").selectAll("text").data(data).enter();
    // x-axis
    labels.append("text")
      .attr("x", function(d) { return 50 * d[0] - 5})
      .attr("y", 400)
      .text(function(d) { return d[0]; });
    // y-axis
    labels.append("text")
      .attr("x", 5)
      .attr("y", function(d){ return 450 - d[1] * 3; })
      .text(function(d) { return d[1]; });
    labels.append("text")
      .attr("x", 190)
      .attr("y", 440)
      .text("Quantity of Salsa");
    labels.append("text")
      .attr("x", 10)
      .attr("y", 30)
      .text("Average Total Cost ($)");
};

var plot = function(){
  var circles = d3.select("svg").selectAll("circle").data(data).enter();
  circles.append("circle")
    .attr("cx", function(d){ return 50 * d[0]; })
    .attr("cy", function(d){ return 450 - d[1] * 3; })
    .attr("r", 10)
    .attr("fill", "red")
  svg.append(circles);
};

label();
plot();
