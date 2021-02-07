import React from 'react';

import Card from './Card';

import { Section2Data } from '../staticData/Section2Data'

const renderCards = () => {
    return Section2Data.map((obj, index) => {
        return (
            <Card key={index} header={obj.header} data={obj.data} dataType={obj.dataType} isCritical={obj.isCritical} />
        );
    })
}

const Section2 = () => {
    return (
        <div>
            <div className="ui two cards">
                {renderCards()}
            </div>
        </div>
    )
};

export default Section2;

