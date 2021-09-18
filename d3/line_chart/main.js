const dummyData = [
    {x: '2021-01-01', y: 5},
    {x: '2021-01-02', y: 5},
    {x: '2021-01-03', y: 7},
    {x: '2021-01-04', y: 14},
    {x: '2021-01-05', y: 12},
    {x: '2021-01-06', y: 21},
    {x: '2021-01-07', y: 30},
    {x: '2021-01-08', y: 25},
    {x: '2021-01-09', y: 23},
    {x: '2021-01-10', y: 45},
];

const margin = {
    top: 10,
    left: 30,
    bottom: 30,
    right: 10
};

const width = 600;
const height = 400;

const svg = d3.select('svg').classed('container', true);

const xScale = d3.scaleTime()
    .domain(d3.extent(dummyData, d => d.x))
    .range([0, width]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dummyData, d => d.y)])
    .range([height, 0]);

svg
    .selectAll('chartLines')
    .data(dummyData)
    .enter()
    .append('path')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
        .attr('d', d3.line().x(d => xScale(1)).y(d => yScale(1)));