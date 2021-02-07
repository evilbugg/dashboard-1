import React from 'react';

import styles from '../css/StatusCard.module.css';

const getStatusClass = (status) => {
    switch (status) {
        case 'success': return 'check green circle outline icon';
        case 'failure': return 'remove red circle icon';
        case 'idle': return 'minus yellow circle icon';
        default: return undefined;
    }
}

const StatusCard = ({ name, status, statusData }) => {

    const displayNo = statusData !== undefined ? true : false;
    return (
        <div className={`card ${styles.statusCardStyle}`} >
            <div className="content">
                <i className={getStatusClass(status)}></i>
                {name}
                {displayNo &&
                    <div className={styles.statusNumber}>
                        {statusData}
                    </div>
                }
            </div>
        </div>
    )
};

export default StatusCard;
