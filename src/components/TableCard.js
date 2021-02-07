import React from 'react';

import styles from '../css/TableCard.module.css';

const renderTableDef = (label) => label.map((value) => <th key={value}>{value}</th>);

const renderTableData = (inputData) => {

    return inputData.map((obj) => {

        const tableRow = Object.keys(obj).map(key => {
            return <td key={[key]}>{obj[key]}</td>
        });
        return (
            <tr key={obj.appType}>
                {tableRow}
            </tr>
        );
    })
};

const TableCard = ({ data, label }) => {
    return (
        <div className={styles.tableDivStyle}>
            <table className="ui striped table">
                <thead>
                    <tr>
                        {renderTableDef(label)}
                    </tr>
                </thead>
                <tbody>
                    {renderTableData(data)}
                </tbody>
            </table>
        </div>
    )
};

export default TableCard;
