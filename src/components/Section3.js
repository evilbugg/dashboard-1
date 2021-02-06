import React from 'react';

import StatusCard from './StatusCard';

import { Section3Data } from '../staticData/Section3Data'

const renderCards = () => {
    return Section3Data.map((obj, index) => {
        return (
            <StatusCard key={index} name={obj.name} status={obj.status} statusData={obj.statusData}/>
        );
    })
}


const Section3 = () => {
    return (
        <div className="ui three cards">
            {renderCards()}
        </div>

    )
};

export default Section3;

