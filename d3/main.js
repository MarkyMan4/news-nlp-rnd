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

// basic bar chart
const bars = container
    .selectAll('.bar')
    .data(dummyData)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', data => 400 -  yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

// create three p tags and display the region for objecdt
// d3.select('div')
//     .selectAll('p')
//     .data(dummyData)
//     .enter()
//     .append('p')
//     .text(data => data.region);
