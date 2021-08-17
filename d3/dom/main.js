const dummyData = [
    {id: 1, value: 5, region: 'USA'},
    {id: 2, value: 11, region: 'India'},
    {id: 3, value: 8, region: 'Japan'},
    {id: 4, value: 13, region: 'Canada'},
];

// select div by ID
d3.select('#test')
    .selectAll('p')
    .data(dummyData)
    .enter()
    .append('p')
    .text(data => data.region);

d3.select('#test2')
    .selectAll('p')
    .data(dummyData)
    .enter()
    .append('p')
    .text(data => data.value);

// create three p tags and display the region for objecdt
// d3.select('div')
//     .selectAll('p')
//     .data(dummyData)
//     .enter()
//     .append('p')
//     .text(data => data.region);
