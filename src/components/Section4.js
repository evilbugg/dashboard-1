import React from 'react';

import { Section4Data, tableLabel, Section4Recommandations } from '../staticData/Section4Data';
import ProgressBar from './ProgressBar';
import TableCard from './TableCard';
import SubHeader from './SubHeader';

const tranformObject = inpuData => {

    return inpuData.map((obj) => {
        let object = {};
        for (const [key, value] of Object.entries(obj)) {
            object[key] = value !== undefined ? value : '-';
        }
        return object;
    });
};

const shadowBoxStyle = {
    boxShadow: "0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5",
    paddingBottom: "1em"
};


const workloadSubSection = "WorkLoads";
const reCommandationsSubSection = "Recommandations";

const Section4 = () => {

    const headerValue = `${workloadSubSection} (${Section4Data.length})`;

    return (
        <div>
            <div style={shadowBoxStyle}>
                <SubHeader value={reCommandationsSubSection} />
                <ProgressBar progressName={Section4Recommandations[0]} failureName={Section4Recommandations[1]} />
            </div>
            <div style={shadowBoxStyle}>
                <SubHeader value={headerValue} />
                <TableCard data={tranformObject(Section4Data)} label={tableLabel} />
            </div>
        </div>
    )
};

export default Section4;

