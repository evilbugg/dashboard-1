import React from 'react';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

/*
https://stackoverflow.com/questions/29581359/semantic-ui-ui-grid-best-approach-for-layout-rows-columns-vs-segments
*/

const segmentStyle = {
    //height: "250px",
    // backgroundColor: "grey",
};

const App = () => {
    return (
        <div className="container">
            <div className="ui stackable grid">
                <div className="two column row">
                    <div className="eight wide column" style={segmentStyle}>
                    <Section1 />
            </div>
                    <div className="eight wide column">
                        <Section2 />
                    </div>
                </div>
                <div className="two column row">
                    <div className="eight wide column">
                    <Section3 />
            </div>
                    <div className="eight wide column">
                    <Section4 />
            </div>
                </div>
            </div>
        </div>
    )
};

export default App;

