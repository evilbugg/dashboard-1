import React from 'react';

import DonutChart from './DonutChart';

const DonutCard = ({ name, data }) => {
    const usageValue = (data.find((obj) => obj.label === 'usage')).value;
    // const isCritical = (usageValue > 60) ? true : false;
    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <DonutChart data={data} isCritical={usageValue > 60} />
            </div>
            <div className="extra content">
                    <div className="center aligned description">
                        {`${usageValue} %` }
                    </div>
                </div>
            </div>
    );
};

export default DonutCard;
