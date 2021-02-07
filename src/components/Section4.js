import React from 'react';

import { Section4Data, tableLabel, Section4Recommandations } from '../staticData/Section4Data';
import ProgressBar from './ProgressBar';
import TableCard from './TableCard';
import SubHeader from './SubHeader';

import styles from '../css/Section4.module.css';

const tranformObject = inpuData => {

    return inpuData.map((obj) => {
        let object = {};
        for (const [key, value] of Object.entries(obj)) {
            object[key] = value !== undefined ? value : '-';
        }
        return object;
    });
};

const workloadSubSection = "WorkLoads";
const reCommandationsSubSection = "Recommandations";

const Section4 = () => {

    const headerValue = `${workloadSubSection} (${Section4Data.length})`;

    return (
        <div>
            <div className={styles.shadowBoxStyle}>
                <SubHeader value={reCommandationsSubSection} />
                <ProgressBar progressName={Section4Recommandations[0]} failureName={Section4Recommandations[1]} />
            </div>
            <div className={styles.shadowBoxStyle}>
                <SubHeader value={headerValue} />
                <TableCard data={tranformObject(Section4Data)} label={tableLabel} />
            </div>
        </div>
    )
};

export default Section4;

