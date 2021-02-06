import React from 'react';

import DonutCard from './DonutCard';

import { Section1Data } from '../staticData/Section1Data'

/**
 https://semantic-ui.com/views/card.html
 */

const renderCards = () => {
    return Section1Data.map((obj, index) => {
        return (
            <DonutCard key={index} name={obj.name} data={obj.data} obj={obj} />
        );
    })
}

const Section1 = () => {
    return (
        <div>
            <div className="ui two cards">
                {renderCards()}
            </div>
        </div>
    )
};

export default Section1;

