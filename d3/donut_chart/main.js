const dummyData = {
    USA: 10,
    Canada: 13,
    Mexico: 4,
    Japan: 6,
    Germany: 12
}

const width = 600;
const height = 400;
const radius = 150;

const svg = d3.select('svg')
    .classed('container', true)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

// set the color scale
const color = d3.scaleOrdinal().domain(Object.keys(dummyData)).range(d3.schemeDark2);

const pie = d3.pie();
const pieData = pie(Object.values(dummyData));

const handleMouseOver = (d, i) => {
    d3.select(d.target)
        .transition()
        .duration(150)
        .attr('opacity', 0.8);
}

const handleMouseOut = (d, i) => {
    d3.select(d.target)
        .transition()
        .duration(150)
        .attr('opacity', 1);
}

// arcs for the chart - setting an inner radius makes this a donut chart
const arc = d3.arc()
    .innerRadius(75)
    .outerRadius(radius);

// arcs for drawing the text labels
const outerArc = d3.arc()
    .innerRadius(radius * 1.2)
    .outerRadius(radius * 1.2);

svg
  .selectAll('path')
  .data(pieData)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', (data, indx) => color(Object.entries(dummyData)[indx][0])) // lookup color based on label
  .attr('stroke', 'white')
  .on('mouseover', handleMouseOver)
  .on('mouseout', handleMouseOut);

const getTextPos = (d) => {
    var pos = outerArc.centroid(d);
    // var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
    // pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
    return pos;
}

const getMidangle = (d) => {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
}

// add text labels to each slice of the chart
svg
  .selectAll('allLabels')
  .data(pieData)
  .enter()
  .append('text')
    .text((data, indx) => Object.entries(dummyData)[indx][0])
    .attr('transform', d => 'translate(' + getTextPos(d) + ')')
    .style('text-anchor', d => {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
    });

// add lines pointing labels to section of chart
svg
  .selectAll('allPolylines')
  .data(pieData)
  .enter()
  .append('polyline')
    .attr("stroke", "black")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr('points', function(d) {
      var posA = arc.centroid(d);
      var posB = outerArc.centroid(d);
      var posC = outerArc.centroid(d);
      return [posA, posB, posC]
    });

// add lines so the text points to a section of the chart
// svg
//     .selectAll('allLines')
//     .data(pieData)
//     .enter()
//     .append('line')
//     .attr('stroke', 'black')
//     .attr('stroke-width', '1px')
//     .attr('x1', d => getTextPos(d)[0])
//     .attr('x2', d => arc.centroid(d)[0])
//     .attr('y1', d => getTextPos(d)[1])
//     .attr('y2', d => arc.centroid(d)[1]);


//////////////////////////////////////////////////////////////

// old code for manually creating pie chart with paths

// svg
//     .append('path')
//     .attr('d', `M${width / 2},${height / 2} h-${width / 4} a150,150 0 1,0 150,-150 z`)
//     .attr('fill', 'DodgerBlue')
//     .attr('stroke', 'white')
//     .on('mouseover', handleMouseOver)
//     .on('mouseout', handleMouseOut);

// svg
//     .append('path')
//     .attr('d', `M${width / 2},${height / 2} v-${width / 4} a150,150 0 0,0 -150,150 z`)
//     .attr('fill', 'Tomato')
//     .attr('stroke', 'white')
//     .on('mouseover', handleMouseOver)
//     .on('mouseout', handleMouseOut);
