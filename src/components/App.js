import React from 'react';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const App = () => {
    return (
        <div className="container">
            <div className="ui stackable grid">
                <div className="two column row">
                    <div className="eight wide column">
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
