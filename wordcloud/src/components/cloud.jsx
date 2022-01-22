import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import words from './word_counts';


const callbacks = {
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [12, 60],
};

const size = [600, 400];

function Cloud() {
    console.log(words);

    return (
        <ReactWordcloud 
            callbacks={callbacks}
            options={options}
            size={size}
            words={words} 
        />
    );
}

export default Cloud;
