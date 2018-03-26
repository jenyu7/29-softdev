// Team heySui
// Jen Yu, Shannon Lau and Shaina Peters
// SoftDev2 pd7
// K14 - Bars
// 2018-03-24

var data2017 = [["Revenue", 3.21], ["Spending", 3.65], ["Surplus/Deficit", -0.443], ["GDP", 17]];
var data2015 = [["Revenue", 2.96], ["Spending", 3.36], ["Surplus/Deficit", -0.399], ["GDP", 16.2]];
var chart = d3.selectAll(".chart");
var title = document.getElementById("title");
var toggle = document.getElementById("toggle");
var y2015 = false;
var bar = chart.selectAll("div");
var barUpdate = bar.data(data2015);
var barEnter = barUpdate.enter().append("div");
barEnter.text(function(d) {return d[0] + " - $" + d[1] + " trillion USD"; });
barEnter.transition().duration(3000).style("width", function(d) {
    if (d[1] > 10) return d[1] * 50 + "px";
    if (d[1] < 1) return Math.abs(d[1]) * 200 + "px";
    return d[1] * 100 + "px"; });

var drawBars = function(e){
    var data;
    if (y2015){
	data = data2015;
	y2015 = false;
	title.innerHTML = "Details on 2015 Federal Budget";
    }
    else{
	data = data2017;
	y2015 = true;
	title.innerHTML = "Details on 2017 Federal Budget";
    }
    var bar = chart.selectAll("div");
    var barUpdate = bar.data(data);
    barUpdate.text(function(d) {return d[0] + " - $" + d[1] + " trillion USD"; });
    barUpdate.transition().duration(3000).style("width", function(d) {
	if (d[1] > 10) return d[1] * 50 + "px";
	if (d[1] < 1) return Math.abs(d[1]) * 200 + "px";
	return d[1] * 100 + "px"; });
}

drawBars();

toggle.addEventListener("click", drawBars);
