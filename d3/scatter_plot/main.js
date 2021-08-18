const width = 600;
const height = 400;

// generate 50 points of dummy data
let dummyData = [];
for(let i = 0; i < 50; i++) {
    dummyData.push([Math.random(), Math.random()]);
}

// should find the domain programatically by finding the min and
// max x and y values in the dataset
const xScale = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width]);

const yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([height, 0]);


const container = d3.select('svg').classed('container', true);

// plot data points
// TODO: use scales to properly place the data points
container
    .selectAll('circle')
    .data(dummyData)
    .enter()
    .append('circle')
    .attr('cx', data => xScale(data[0])) // this only works at the moment because the values are between 0 and 1
    .attr('cy', data => yScale(data[1]))
    .attr('r', 5)
    .attr('fill', 'red');
