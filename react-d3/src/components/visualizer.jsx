import React, { useEffect } from 'react';
import * as d3 from 'd3';

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

        // need to see if I can use d3 scalers with react
        container
            .selectAll('circle')
            .data(dummyData)
            .enter()
            .append('circle')
            .attr('cx', data => data.x * 600)
            .attr('cy', data => data.y * 400)
            .attr('r', 5);
    }, [reference]);

    return (
        <div></div>
    )
}

export default Visualizer;
