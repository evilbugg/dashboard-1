import React from 'react';

const renderTableDef = (label) => label.map((value) => <th key={value}>{value}</th>);

const renderTableData = (inputData) => {

    return inputData.map((obj) => {

        const tableRow = Object.keys(obj).map(key => {
            return <td>{obj[key]}</td>
        });
        return (
            <tr key={obj.appType}>
                {tableRow}
            </tr>
        );
    })
};

const tableDivStyle = {
    padding: "1em"
}

const TableCard = ({ data, label }) => {
    return (
        <div style={tableDivStyle}>
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
