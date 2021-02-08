import React from 'react';

import styles from '../css/SubHeader.module.css';

const SubHeader = ({ value }) => <h4 className={`ui header ${styles.headerStyle}`}>{value}</h4>;

export default SubHeader;
