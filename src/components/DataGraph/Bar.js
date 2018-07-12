import React, { Component } from 'react';
import * as Charts from 'react-chartjs-2';

export default class Bar extends Component {
    getOptions() {
        return {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 0
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h2 className="title has-text-centered">{this.props.title}</h2>
                <Charts.Bar data={this.props.data} options={this.props.options || this.getOptions() }/>
            </div>
        );
    }
};