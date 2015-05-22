// start slingin' some d3 here.
var container         = d3.select("body").append("svg")
                                    .attr("width", 900)
                                    .attr("height", 600)
                                    .style("border", "1px solid black");

var asteroid = d3.selectAll("svg").append("image").attr('xlink:href','asteroid.png')
              .attr('x="0"')
              .attr('y="0"')
              .attr('height="200px"')
              .attr('width="200px"');
