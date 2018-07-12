import React, { Component } from 'react';
import * as Charts from 'react-chartjs-2';

export default class Pie extends Component {
    render() {
        return (
            <div>
                <h2 className="title has-text-centered">{this.props.title}</h2>
                <Charts.Pie data={this.props.data} />
            </div>
        );
    }
};