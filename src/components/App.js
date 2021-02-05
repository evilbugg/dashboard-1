import React from 'react';

import DonutChart from './DonutChart'
import Section2 from './Section2';

/*
https://stackoverflow.com/questions/29581359/semantic-ui-ui-grid-best-approach-for-layout-rows-columns-vs-segments
*/

const segmentStyle = {
    height: "250px",
    // backgroundColor: "grey",
};

const App = () => {
    return (
        <div className="container">
            <div class="ui stackable grid">
                <div class="two column row">
                    <div class="eight wide column" style={segmentStyle}>
                    <DonutChart/>
            </div>
                    <div class="eight wide column">
                        <Section2 />
                    </div>
                </div>
                <div class="two column row">
                    <div class="eight wide column">
                        3
            </div>
                    <div class="eight wide column">
                        4
            </div>
                </div>
            </div>
        </div>
    )
};

export default App;

