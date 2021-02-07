import React from 'react';

import DonutCard from './DonutCard';
import Card from './Card';

import { section1Data } from '../staticData/Section1Data'

const renderCards = (inputData) => {
    return inputData.map((obj, index) => {
        if (obj.displayType !== 'per') {
            return <DonutCard key={index} name={obj.name} data={obj.data} obj={obj} />
        }
        return <Card key={index} header={obj.header} data={obj.data} dataType={obj.dataType} isCritical={obj.isCritical} isSection1={true} />
    });
};

const Section1 = () => {
    return (
        <div>
            <div className="ui two cards">
                {renderCards(section1Data)}
            </div>
        </div>
    );
};

export default Section1;
