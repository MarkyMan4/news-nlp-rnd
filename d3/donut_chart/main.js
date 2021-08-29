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


// generate some random colors so every category can have its own color
let colorOptions = [];
Object.keys(dummyData)
    .forEach(d => colorOptions.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`));

// set the color scale
const color = d3.scaleOrdinal(colorOptions);

const pie = d3.pie();
const pieData = pie(Object.values(dummyData));
console.log(color('Mexico'));

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
  .selectAll('path')
  .data(pieData)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', (data, indx) => color(indx))
  .attr('stroke', 'white')
  .on('mouseover', handleMouseOver)
  .on('mouseout', handleMouseOut);


// no need to center this because it's in a group which is already centered
svg
    .append('circle')
    .attr('r', 75)
    .attr('fill', 'white');


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
