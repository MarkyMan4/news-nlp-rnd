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

const handleMouseOver = (d, i) => {
    const rectX = parseFloat(d3.select(d.target).attr('x'));
    const rectCenter = (parseFloat(d3.select(d.target).attr('width')) / 2);

    const textX = rectX + rectCenter;
    const textY = d3.select(d.target).attr('y') - 10;
    const data = d.target.__data__.value;

    // add a text label showing the data
    d3.select(d.fromElement)
        .append('text')
        .style('text-anchor', 'middle') // allows text to be centered over rect
        .attr('x', textX)
        .attr('y', textY)
        .attr('font-size', '18pt')
        .attr('font-family', 'monospace')
        .text(data);
    
    // make bar lighter on mouse hover
    d3.select(d.target)
        .transition()
        .duration(150)
        .attr('opacity', 0.5);
}

const handleMouseOut = (d, i) => {
    // remove text
    d3.selectAll('text').remove();

    // go back to normal opacity when mouse exits bar
    d3.select(d.target)
        .transition()
        .duration(150)
        .attr('opacity', 1);
}

// make a bar a random color when clicked
const handleMouseClick = (d, i) => {
    const randVals = [];

    for(let i = 0; i < 3; i++)
        randVals.push(Math.floor(Math.random() * 255));
    
    d3.select(d.target)
        .attr('fill', `rgb(${randVals[0]}, ${randVals[1]}, ${randVals[2]})`);
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
    .on('mouseout', handleMouseOut)
    .on('click', handleMouseClick);

