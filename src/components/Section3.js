import React from 'react';

import StatusCard from './StatusCard';

import { Section3Data } from '../staticData/Section3Data'

const renderCards = () => {
    return Section3Data.map((obj, index) => {
        return (
            <StatusCard key={index} name={obj.name} status={obj.status} statusData={obj.statusData} />
        );
    })
}

const divStyle = { boxShadow: "0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5"}

const headerStyle ={
    paddingLeft: "1em",
    paddingTop: "1em"
}


const Section3 = () => {
    return (
        <div style={divStyle}>
            <h4 className="ui header" style={headerStyle}>  Service Status</h4>
            <div className="ui three cards">
                {renderCards()}
            </div>
        </div>

    )
};

export default Section3;

