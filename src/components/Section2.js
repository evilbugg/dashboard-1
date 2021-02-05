import React from 'react';

import Card from './Card';

import { Section2Data } from '../staticData/Section2Data'

/**
 https://semantic-ui.com/views/card.html
 */

const renderCards = () => {
    return Section2Data.map((obj, index) => {
        return (
            <Card key={index} header={obj.header} data={obj.data} dataType={obj.dataType} isCritical={obj.isCritical} />
        );
    })
}

const Section2 = () => {
    console.log(Section2Data);
    return (
        <div>
            <div class="ui two cards">
                {renderCards()}
            </div>
            {/* <div class="ui two cards">
                <Card header={`Storage I/O Bytes`} data={`50 MB/25 MB`} dataType={`Read/Write`} isCritical={true} />

                <Card header={`Storage I/O Time`} data={`4.19 ms/383.66ms`} dataType={`Read Time/Write Time`} />
            </div> */}
        </div>
    )
};

export default Section2;

