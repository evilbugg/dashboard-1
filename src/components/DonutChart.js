import React, { Component } from 'react'
import Chart from 'chart.js';

const config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                1,
                1,
                1,
                1,
                1
            ],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue"
        ]
    },
    options: {
        legend: {
            display: false
        },
        circumference: 1 * Math.PI,
        rotation: 1 * Math.PI
    }
};

class DonutChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, config);
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default DonutChart;