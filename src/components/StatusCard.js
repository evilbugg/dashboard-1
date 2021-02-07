import React from 'react';

const contentStyle = {
    marginLeft: "0em"
};

const statusCardStyle = {
    boxShadow: "none",
    marginBottom: "0em",
    marginTop: "0em"
}

const statusStyle = {
    borderRadius: "70%",
    display: "inline-block",
    backgroundColor: "red",
    marginLeft: "0.2em",
    paddingLeft: "0.2em",
    paddingRight: "0.3em",
    fontSize: "x-small",
    color : "white"
}

const getStatusClass = (status) => {
    switch (status) {
        case 'success': return 'check green circle outline icon';
        case 'failure': return 'remove red circle icon';
        case 'idle': return 'minus yellow circle icon';
        default: return undefined;
    }
}

const StatusCard = ({ name, status, statusData }) => {

    let displayNo = statusData !== undefined ? true : false;
    return (
        <div className="card" style={statusCardStyle}>
            <div className="content" style={contentStyle}>
                <i className={getStatusClass(status)}></i>
                {name}
                {/* {displayNo && <i class="check circle outline icon">1</i>} */}
                {
                    displayNo
                    &&
                    <div style={statusStyle}>
                        {statusData}
                    </div>
                }
            </div>

        </div>
    )
};

export default StatusCard;

/*
 https://semantic-ui.com/views/card.html
*/
