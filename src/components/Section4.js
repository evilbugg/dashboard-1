import React from 'react';

import { Section4Data, tableLabel } from '../staticData/Section4Data'

const renderTableData = () => {
    return Section4Data.map((obj) => {
        return (
            <tr>
                <td>{obj.appType === undefined ? '-' : obj.appType}</td>
                <td>{obj.total === undefined ? '-' : obj.total}</td>
                <td>{obj.finsihed === undefined ? '-' : obj.finsihed}</td>
                <td>{obj.failed === undefined ? '-' : obj.failed}</td>
            </tr>
        );
    })
};


const renderTableDef = () => tableLabel.map((value) => <th>{value}</th>);

const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
}

const fillerStyles = {
    height: '100%',
    width: `70%`,
    backgroundColor: '#6a1b9a',
    borderRadius: 'inherit',
    textAlign: 'right'
}

const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
}

const Section4 = () => {
    return (
        <div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>70%</span>
                </div>
            </div>


            <progress value="90" max="100" />
            <table className="ui striped table">
                <thead>
                    <tr>
                        {renderTableDef()}
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    )
};

export default Section4;

