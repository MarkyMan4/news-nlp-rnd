import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';

// generate some random data points
let dummyData = [];
for(let i = 0; i < 50; i++) {
    dummyData.push({x: Math.random(), y: Math.random()});
}


// ref should be a reference to an svg
function Visualizer({reference}) {
    // select the ref and do whatever needs to be done to manipulate the DOM
    useEffect(() => {
        const container = d3.select(reference.current).classed('container', true);

        const xScale = scaleLinear()
            .domain([0, 1])
            .range([0, 600]);

        const yScale = scaleLinear()
            .domain([0, 1])
            .range([400, 0]);

        const handleMouseOver = (d, i) => {
            d3.select(d.target)
                .attr('fill', 'red')
                .attr('r', 10);
        }

        const handleMouseOut = (d, i) => {
            d3.select(d.target)
                .attr('fill', 'black')
                .attr('r', 5);
        }

        // need to see if I can use d3 scalers with react
        container
            .selectAll('circle')
            .data(dummyData)
            .enter()
            .append('circle')
            .attr('cx', data => xScale(data.x))
            .attr('cy', data => yScale(data.y))
            .attr('r', 5)
            .on('mouseover', handleMouseOver)
            .on('mouseout', handleMouseOut);
    }, [reference]);

    return (
        <div></div>
    )
}

export default Visualizer;
