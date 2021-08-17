const dummyData = [
    {id: 1, value: 5, region: 'USA'},
    {id: 2, value: 11, region: 'India'},
    {id: 3, value: 8, region: 'Japan'},
    {id: 4, value: 13, region: 'Canada'},
];

const xScale = d3
    .scaleBand()
    .domain(dummyData.map(dataPoint => dataPoint.region))
    .rangeRound([0, 600])  // 0 to width of container
    .padding(0.1);

const yScale = d3
    .scaleLinear()
    .domain([0, 15]) // min and max on y axis
    .range([400, 0]); 

const container = d3.select('svg')
    .classed('container', true);


// make bar lighter on mouse hover
const handleMouseOver = (d, i) => {
    d3.select(d.target)
        .transition()
        .duration(250)
        .attr('opacity', 0.5);
}

// go back to normal opacity when mouse exits bar
const handleMouseOut = (d, i) => {
    d3.select(d.target)
        .transition()
        .duration(250)
        .attr('opacity', 1);
}

// basic bar chart
const bars = container
    .selectAll('rect')
    .data(dummyData)
    .enter()
    .append('rect')
    .attr('fill', 'red')
    .attr('width', xScale.bandwidth())
    .attr('height', data => 400 -  yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value))
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);

