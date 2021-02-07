import React from 'react';

import styles from '../css/ProgressBar.module.css';

const ProgressBar = ({ progress, failure }) => {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.success} style={{ width: `${progress.value}%` }}>{progress.name} </div>
            <div className={styles.failure} style={{ width: `${failure.value}%` }}>{failure.name}</div>
        </div>
    );
};

export default ProgressBar;
