const dummyData = [
    {country: 'USA', count: 10},
    {country: 'Canada', count: 13},
    {country: 'Mexico', count: 4}
]

const width = 600;
const height = 400;

const svg = d3.select('svg').classed('container', true);

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

svg
    .append('path')
    .attr('d', `M${width / 2},${height / 2} h-${width / 4} a150,150 0 1,0 150,-150 z`)
    .attr('fill', 'DodgerBlue')
    .attr('stroke', 'white')
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);

svg
    .append('path')
    .attr('d', `M${width / 2},${height / 2} v-${width / 4} a150,150 0 0,0 -150,150 z`)
    .attr('fill', 'Tomato')
    .attr('stroke', 'white')
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);

svg
    .append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', 75)
    .attr('fill', 'white');
