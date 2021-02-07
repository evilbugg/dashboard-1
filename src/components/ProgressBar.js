import React from 'react';

const flexContainer = {
    display: "flex",
}

const progressBarSuccess = {
    backgroundColor: "#f1f1f1",
    margin: "10px",
    marginRight: "2px",
    padding: "0.7em",
    fontSize: "large",
    width: "90%",
    textAlign: "right",
    lineHeight: "2em" 
};

const progressBarFailure = {
    backgroundColor: "#f1f1f1",
    margin: "10px",
    padding: "0.7em",
    fontSize: "large",
    width: "10%",
    lineHeight: "2em" 
};

const ProgressBar = ({progressName, failureName}) => {
    return (

        <div style={flexContainer}>
            <div style={progressBarSuccess}>{progressName}</div>
            <div style={progressBarFailure}>{failureName}</div>
        </div>
    )
};

export default ProgressBar;
