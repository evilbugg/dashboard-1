import React from 'react';

import styles from '../css/Card.module.css';


const Card = (props) => {
    const styleName = props.isCritical ? styles.critical : undefined;
    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {props.header}
                </div>
                <div className={`center aligned description ${styleName}`}>
                    {props.data}
                </div>
            </div>
            <div className="extra content">
                <div className="center aligned description">
                    {props.dataType}
                </div>
            </div>
        </div>
    )
};

export default Card;