import React from 'react';
import { useRef } from 'react';
import Visualizer from './visualizer';

/*
 * This component just creates a reference for an SVG.
 * It uses a subcomponent that actually selects that svg using d3.
 * 
 * This is how d3 needs to be used with React. The svg cannot be created
 * and selected in the same component because of the way React renders
 * things. It can't be gauranteed that the svg will be in the DOM by the
 * time I try to select it.
 */
function Dataviz() {
    const svgRef = useRef(null);

    return (
        <div>
            <svg ref={svgRef}></svg>
            <Visualizer reference={svgRef}/>
        </div>
    )
}

export default Dataviz;
