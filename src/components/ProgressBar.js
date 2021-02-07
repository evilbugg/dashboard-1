import React from 'react';

import styles from '../css/ProgressBar.module.css';

const ProgressBar = ({progressName, failureName}) => {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.success}>{progressName}</div>
            <div className={styles.failure}>{failureName}</div>
        </div>
    )
};

export default ProgressBar;
