const dummyData = [
    {country: 'USA', count: 10},
    {country: 'Canada', count: 13},
    {country: 'Mexico', count: 4}
]

const svg = d3.select('svg').classed('container', true);

svg
    .append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 50)
    .attr('fill', 'black');
