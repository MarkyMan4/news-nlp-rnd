import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';

// generate some random data points
let dummyData = [];
for(let i = 0; i < 50; i++) {
    dummyData.push({x: Math.random(), y: Math.random()});
}

// keep track of the last point that was clicked
let lastPoint = {};

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
                .transition()
                .duration(300)
                .attr('fill', 'red')
                .attr('r', 10);
        }

        const handleMouseOut = (d, i) => {
            d3.select(d.target)
                .transition()
                .duration(300)
                .attr('fill', 'black')
                .attr('r', 5);
        }

        const handleMouseClick = (d, i) => {
            console.log(lastPoint);
            if(lastPoint.x && lastPoint.y) {
                d3.select(reference.current)
                    .append('line')
                    .attr('x1', lastPoint.x)
                    .attr('y1', lastPoint.y)
                    .attr('x2', d3.select(d.target).attr('cx'))
                    .attr('y2', d3.select(d.target).attr('cy'))
                    .attr('stroke', 'black');
            }

            const lastPointClicked = {
                x: d3.select(d.target).attr('cx'),
                y: d3.select(d.target).attr('cy')
            };

            lastPoint = lastPointClicked;
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
            .on('mouseout', handleMouseOut)
            .on('click', handleMouseClick);
    }, [reference]);

    return null;
}

export default Visualizer;
