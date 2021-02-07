import React from 'react';

import StatusCard from './StatusCard';
import SubHeader from './SubHeader';
import { Section3Data } from '../staticData/Section3Data'

const renderCards = () => {
    return Section3Data.map((obj, index) => {
        return (
            <StatusCard key={index} name={obj.name} status={obj.status} statusData={obj.statusData} />
        );
    })
}

const divStyle = { boxShadow: "0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5"}

const SectionName = "Service Status";


const Section3 = () => {
    return (
        <div style={divStyle}>
            <SubHeader value ={SectionName}/>
            <div className="ui three cards">
                {renderCards()}
            </div>
        </div>

    )
};

export default Section3;

