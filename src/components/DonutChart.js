import React, { Component } from 'react';

import Chart from 'chart.js';

/*
https://www.createwithdata.com/react-chartjs-dashboard/
*/

const donutsOptions = {
    aspectRatio: 3.5,
    legend: {
        display: false
    },
    circumference: 1 * Math.PI,
    rotation: 1 * Math.PI
};



class DonutChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        const backgroundColor = [
            this.props.isCritical ? 'red' :  '#FF6384',
            '#36A2EB', // Blue
        ];

        let config1 = {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: this.props.data.map(d => d.value),
                        backgroundColor: backgroundColor
                    }
                ],
                labels: this.props.data.map(d => d.label)
            },
            options: donutsOptions
        }

        new Chart(myChartRef, config1);
    }
    render() {
        return (
            <div>
                <canvas
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default DonutChart;