import React from 'react';

import { section4Data, tableLabel, recommandations } from '../staticData/Section4Data';
import ProgressBar from './ProgressBar';
import TableCard from './TableCard';
import SubHeader from './SubHeader';

import styles from '../css/Section4.module.css';

const tranformObject = inpuData => {
  return inpuData.map((obj) => {
    const object = {};
    for (const [key, value] of Object.entries(obj)) {
      object[key] = value !== undefined ? value : '-'
    }
    return object;
  });
};

const workloadSubSection = 'WorkLoads';
const reCommandationsSubSection = 'Recommandations';

const Section4 = () => {
  const headerValue = `${workloadSubSection} (${section4Data.length})`;

  return (
        <div>
            <div className={`${styles.shadowBoxStyle} ${styles.recommandations}`}>
                <SubHeader value={reCommandationsSubSection} />
                <ProgressBar progress={recommandations[0]} failure={recommandations[1]} />
            </div>
            <div className={styles.shadowBoxStyle}>
                <SubHeader value={headerValue} />
                <TableCard data={tranformObject(section4Data)} label={tableLabel} />
            </div>
        </div>
  );
};

export default Section4;
