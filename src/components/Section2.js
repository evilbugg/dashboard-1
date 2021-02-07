import React from 'react';

import Card from './Card';

import { section2Data } from '../staticData/Section2Data';

const renderCards = (inputData) => {
    return inputData.map((obj, index) => {
        return (
            <Card key={index} header={obj.header} data={obj.data} dataType={obj.dataType} isCritical={obj.isCritical} />
        );
    });
};

const Section2 = () => {
    return (
        <div>
            <div className="ui two cards">
                {renderCards(section2Data)}
            </div>
        </div>
    );
};

export default Section2;
