d3.csv("examples/node-cpu-bound-server/server-fast.csv", function(csv) {

  var data = new Array();

  csv.forEach(function(d) {
    d.iter = +d.iter;
    d.time = +d.time;
    data.push(d.time);
  });

  var chart = d3.select("#node-cpu-bound").append("svg")
    .attr("class", "chart")
    .attr("width", 440)
    .attr("height", 140)
    .append("g")
    .attr("transform", "translate(10,15)");

  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

  chart.selectAll("line")
      .data(x.ticks(10))
    .enter().append("line")
      .attr("x1", x)
      .attr("x2", x)
      .attr("y1", 0)
      .attr("y2", 120)
      .style("stroke", "#ccc");

  chart.append("line")
    .attr("y1", 0)
    .attr("y2", 120)
    .style("stroke", "#000");

  chart.selectAll("rect")
      .data(data)
    .enter().append("rect")
      .attr("y", function(d, i) { return i * 20; })
      .attr("width", x)
      .attr("height", 20)
      .style("stroke", "white")
      .style("fill", "steelblue");

  var y = d3.scale.ordinal()
    .domain(data)
    .rangeBands([0, 120]);

  chart.selectAll("rect")
      .data(data)
    .enter().append("rect")
      .attr("y", y)
      .attr("width", x)
      .attr("height", y.rangeBand());

  chart.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr("x", x)
      .attr("y", function(d) { return y(d) + y.rangeBand() / 2; })
      .attr("dx", -3) // padding-right
      .attr("dy", ".35em") // vertical-align: middle
      .attr("text-anchor", "end") // text-align: right
      .style("fill", "white")
      .text(String);

  chart.append("line")
    .attr("y1", 0)
    .attr("y2", 120)
    .style("stroke", "#000");

  chart.selectAll(".rule")
      .data(x.ticks(10))
    .enter().append("text")
      .attr("class", "rule")
      .attr("x", x)
      .attr("y", 0)
      .attr("dy", -3)
      .attr("text-anchor", "middle")
      .text(String);
});

