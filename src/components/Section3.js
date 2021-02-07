import React from 'react';

import StatusCard from './StatusCard';
import SubHeader from './SubHeader';
import { Section3Data } from '../staticData/Section3Data';

import styles from '../css/Section3.module.css';

const renderCards = () => {
    return Section3Data.map((obj, index) => {
        return (
            <StatusCard key={index} name={obj.name} status={obj.status} statusData={obj.statusData} />
        );
    })
}

const SectionName = "Service Status";

const Section3 = () => {
    return (
        <div className={styles.shadowBoxStyle}>
            <SubHeader value ={SectionName}/>
            <div className="ui three cards">
                {renderCards()}
            </div>
        </div>

    )
};

export default Section3;
