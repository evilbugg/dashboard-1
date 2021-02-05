import React from 'react';

const criticalStyle = {
    color: "red"
};

const Card = (props) => {
    const styleName = props.isCritical ? criticalStyle : undefined;
    console.log(styleName);
    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {props.header}
                </div>
                <div className="center aligned description" style={styleName}>
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