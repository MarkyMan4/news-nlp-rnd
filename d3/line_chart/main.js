const dummyData = [
    {x: 1, y: 5},
    {x: 2, y: 5},
    {x: 3, y: 7},
    {x: 4, y: 14},
    {x: 5, y: 12},
    {x: 6, y: 21},
    {x: 7, y: 30},
    {x: 8, y: 25},
    {x: 9, y: 23},
    {x: 10, y: 45},
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
    .domain([0, d3.max(dummyData, d => d.x)])
    .range([0, width]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dummyData, d => d.y)])
    .range([height, 0]);

const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

svg
    .append('path')
    .datum(dummyData)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
    .attr('d', line);