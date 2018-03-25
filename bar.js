// Team heySui
// Shannon Lau and Jen Yu
// SoftDev2 pd7
// K13 - Scattered
// 2018-03-21

/**
   D3 demo: transition basics
   Clyde "Thluffy" Sinclair
   SoftDev2 pd0
   2099-12-31
 **/

//build horiz bar chart...
var data = [[2017, 3.21, 3.65, -443, -2.6, 17],[2015, 2.96, 3.36, -399, -2.5, 16.2]];
var chart = d3.selectAll(".chart");
var bar = chart.selectAll("div");
console.log(chart["_groups"][0]);
var test = chart["_groups"][0].selectAll("div").data(data);
console.log(test);

var display = function(){
    var barUpdate = bar.data(data);
    var barEnter = barUpdate.enter().append("div");
    //5s transition:
    barEnter.transition().duration(5000).style("width", function(d) {
	return d[1] * 100 + "px"; });
    barEnter.text(function(d) { return d[0]; });
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

