import React from 'react';

const headerStyle = {
    paddingLeft: "1em",
    paddingTop: "1em"
}

const SubHeader = ({ value }) => {

    return (
        <h4 className="ui header" style={headerStyle}>{value}</h4>
    );
};

export default SubHeader;
