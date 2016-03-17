var graph = {
  init: function (prijzenArray, iDarray) {
    console.log('graph');
    d3.select("svg").remove();
        var data = prijzenArray;
        var idArray = iDarray;


  var bar_w = 30,
      bar_h = 250,
      label_padding = 20,
      bar_padding = 20;
    
  var x = d3.scale.linear()
        .domain([0, 1])
        .range([0, bar_w + bar_padding]);
    
  var y = d3.scale.linear()
         .domain([0, d3.max(data)])
         .rangeRound([0, bar_h - label_padding]); 

  var chart = d3.select("#chart").append("svg")
       .attr("class", "chart")
        .attr("width", ((bar_w + bar_padding )* data.length))
       .attr("height", bar_h);

   
  chart.selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("x", function(d, i) { return x(i) - .5; })
   .attr("y", function(d) { return bar_h - .5; })
   
   .attr("width", bar_w)
   .attr("class", function(d,i) {return i==0?'first':'second'})
  .attr("data-url", function(d,i) {return idArray[i]})
   .attr("height", function(d) { return y(d); })
   .attr("y", function(d) { return bar_h - y(d) - .5; })
  

  // for(i=0;i<idArray.length;i++) {
  //   chart.select("rect")
  //   .attr("data-url", idArray[i])
  // }

  chart.selectAll("text")
   .data(data)
   .enter().append("text")
   .attr("width", bar_w)
   .attr("x", function(d, i) { return x(i) + bar_w/2; })
   .attr("y", function(d) { return bar_h - y(d) - 15; })
   .attr("text-anchor", "middle")
  
   .text(function(d) { return '€' + d; });

       chart.append("line")
       .style("stroke", "black")
       .style("stroke-width", 4)
       .attr("x1", 0)     // x position of the first end of the line
    .attr("y1", "50%")      // y position of the first end of the line
    .attr("x2", "100%")     // x position of the second end of the line
    .attr("y2", "50%");    // y position of the second end of the line
   var links = document.querySelectorAll('rect');

        [].forEach.call(links, function(link) {
            link.addEventListener('click', function(event) {
                

                var url = event.currentTarget.getAttribute('data-url');
                var href = event.currentTarget.href;
                window.location.hash = "#detail-" + url;
                d3.select("svg").remove();
            });
        });

  }
}